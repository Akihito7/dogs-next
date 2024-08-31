'use server'
import { redirect } from "next/navigation";
import { API_URL } from "../configs/api-url";
import apiError from "../functions/api-error";


export async function PasswordReset(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null
  const key = formData.get("key") as string | null
  const password = formData.get("password") as string | null
  try {
    if (!login || !key) throw new Error("Algo deu errado! tente novamente");
    if (!password) throw new Error("Informe uma senha para redefinir");
    const response = await fetch(`${API_URL}` + "api/password/reset", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (!response.ok) {
      if (data.message) {
        throw new Error(data.message)
      } else throw new Error("INTERNAL ERROR SERVER")
    }
  } catch (error) {
    return apiError(error)
  }
  redirect("/login")
}