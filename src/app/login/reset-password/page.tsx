import { ResetPasswordForm } from "@/src/components/login/reset-password-form";

type ResetSearchParams = {
  searchParams: {
    key: string;
    login: string
  }
};

export default function LoginResetPasswordPage({ searchParams }: ResetSearchParams) {
  return (
    <div>
      <h1 className="title">Reset password</h1>
      <ResetPasswordForm
        params={searchParams}
      />
    </div>
  )
}