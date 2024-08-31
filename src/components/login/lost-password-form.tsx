'use client'

import { Input } from "../forms/input";
import { Button as ButtonForm } from "../forms/button/button";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { passwordLost } from "@/src/actions/password-lost";
import { Error } from "../helper/error";


function Button() {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && <ButtonForm>Enviar Email</ButtonForm>}
      {pending && <ButtonForm disabled={pending}>Enviando...</ButtonForm>}
    </>
  )
}

export function LostPasswordForm() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href.replace("lost-password", "reset"))
    console.log(window.location.href.replace("lost-password", "reset-password"))
  }, []);

  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: "",
    data: null
  })
  return (
    <>
      {!state.ok &&
        <form action={action}>
          <Input label="Email / Usuário" name="login" id="login" type="text" />
          <input type="hidden" name="url" value={url} />
          {state.error && <Error errorMessage={state.error} />}
          <Button />
        </form>}

      {state.ok && <p style={{ color: '#4c1' }}>Email enviado.</p>}
    </>
  )
}