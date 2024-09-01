import { HeaderAccount } from "@/src/components/account/header-account";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <HeaderAccount />
      {children}
    </div>
  )
}