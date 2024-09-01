'use server'
import { cookies } from "next/headers"
import apiError from "../functions/api-error";
import { API_URL } from "../configs/api-url";
import { User } from "../types/user";

export async function getUser() {
  const token = cookies().get("token");
  try {
    if (!token) throw new Error("Token inválido");
    const response = await fetch(`${API_URL}` + "api/user", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token.value}`
      }
    });
    const data = await response.json();
    if (!response.ok) {
      if (data.message) {
        throw new Error(data.message)
      } else throw new Error("INTERNAL ERROR SERVER");
    }
    return {
      ok: true,
      error: "",
      data : data as User
    }

  } catch (error) {
    return apiError(error)
  }
}