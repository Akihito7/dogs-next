'use server'
import { API_URL } from "../configs/api-url"
import apiError from "../functions/api-error"

export async function passwordLost(state: {}, formData: FormData) {
  const login = formData.get("login") as string | null
  const url = formData.get("url") as string | null
  try {
    if (!login) throw new Error("Preencha com seu login")
    if (!url) throw new Error("Algo deu errado! tente novamente.")
    const response = await fetch(`${API_URL}` + "api/password/lost", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        login,
        url
      })
    })
    const data = await response.json()
    console.log(data)
    if (!response.ok) {
      if (data.message) throw new Error(data.message)
      else throw new Error("ERROR INTERNAL SERVER")
    }
    return {
      error: "",
      data: null,
      ok: true
    }
  } catch (error) {
    return apiError(error)
  }
}