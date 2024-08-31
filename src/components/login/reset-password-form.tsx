'use client'

import { useFormState, useFormStatus } from "react-dom";
import { Input } from "../forms/input";
import { Button as ButtonForm } from "../forms/button/button";
import { PasswordReset } from "@/src/actions/password-reset";
import { Error } from "../helper/error";


type ParamsResetPasswordForm = {
  params: {
    login: string;
    key: string
  }
}
function Button() {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && <ButtonForm>Resetar</ButtonForm>}
      {pending && <ButtonForm disabled={pending}>Resetando...</ButtonForm>}
    </>
  )
}

export function ResetPasswordForm({ params }: ParamsResetPasswordForm) {
  const [state, action] = useFormState(PasswordReset, {
    ok: false,
    error: "",
    data: null
  })

  return (
    <form action={action}>
      <Input label="Nova senha" name="password" id="password" type="password" />
      <input type="hidden" name="login" id="name" value={params.login} />
      <input type="hidden" name="key" id="key" value={params.key} />
      {!state.ok && <Error errorMessage={state.error} />}
      <Button />
    </form>
  )
}