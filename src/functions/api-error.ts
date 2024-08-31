export default async function apiError(error: unknown) {
  if (error instanceof Error) {
    return {
      ok: false,
      error: error.message,
      data: null
    }
  } else {
    return {
      ok: false,
      error: "INTERNAL ERROR SERVER",
      data: null
    }
  }
}