'use server'

import { cookies } from "next/headers"
import { API_URL } from "../configs/api-url"
import apiError from "../functions/api-error";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function photoPost(state: {}, formData: FormData) {
  const token = cookies().get("token")?.value;
  const name = formData.get("nome") as string | null
  const weight = formData.get("peso") as string | null
  const age = formData.get("idade") as string | null
  const file = formData.get("img") as File
  console.log("file", file)
  try {
    if (!token) throw new Error("Invalid token");
    if (!name) throw new Error("Insira um nome");
    if (!weight) throw new Error("Insira um peso");
    if (!age) throw new Error("Insira uma idade");
    if (file.size <= 0) throw new Error("Insira uma foto");

    const response = await fetch(`${API_URL}` + "api/photo", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
    const data = await response.json();
    if (!response.ok) {
      if (data.message) {
        throw new Error(data.message)
      } else throw new Error("INTERNAL ERROR SERVER")
    }
  } catch (error) {
    return apiError(error)
  }
  revalidateTag("photo");
  redirect("/account");
}