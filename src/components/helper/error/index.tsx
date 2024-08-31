type ErrorProps = {
  errorMessage: string;
}

export function Error({ errorMessage }: ErrorProps) {
  if (!errorMessage) return null
  return (
    <p style={{ color: '#f31', margin: '1rem 0' }}>{errorMessage}</p>
  )
}