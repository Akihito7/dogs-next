'use server'
import { cookies } from "next/headers"
import apiError from "../functions/api-error";
import { API_URL } from "../configs/api-url";

export async function login(state: {}, formData: FormData) {
  const username = formData.get("username")
  const password = formData.get("password")
  try {
    if (!username) throw new Error("Preencha o campo de username");
    if (!password) throw new Error("Preencha o campo de password");
    const response = await fetch(`${API_URL}` + "jwt-auth/v1/token", {
      method: "POST",
      body: formData
    })
    if (!response.ok) throw new Error('Senha ou usuário inválidos.');
    const data = await response.json();
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24
    })
    return {
      ok: true,
      error: "",
      data: null
    }
  } catch (error) {
    return apiError(error)
  }
}