'use server'

import { API_URL } from "../configs/api-url"
import apiError from "../functions/api-error"
import { login } from "./login"

export async function register(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null
  const email = formData.get("email") as string | null
  const password = formData.get("password") as string | null
  try {
    if (!username) throw new Error("Preencha o username")
    if (!email) throw new Error("Preencha o email")
    if (!password) throw new Error("Preencha a senha")
    const response = await fetch(`${API_URL}` + "api/user", {
      method: "POST",
      body: formData
    });
    const data = await response.json()
    if(!response.ok){
      if(data.message){
        throw new Error(data.message)
      } else throw new Error("Algo deu errado ao tentar criar a conta! tente novamente.")
    }
    const { ok } = await login({ ok: true, error: '' }, formData);
    if(!ok) throw new Error("Erro ao tentar logar");
    return { data: null, ok: true, error: '' };
  } catch (error) {
    return apiError(error)
  }
}
