import { getAuth } from "@/lib/auth";

// Defer importing and handler creation to request time to avoid runtime-only code
export async function GET(request) {
  const { toNextJsHandler } = await import("better-auth/next-js");
  const auth = getAuth();
  const { GET } = toNextJsHandler(auth);
  return GET(request);
}

export async function POST(request) {
  const { toNextJsHandler } = await import("better-auth/next-js");
  const auth = getAuth();
  const { POST } = toNextJsHandler(auth);
  return POST(request);
}