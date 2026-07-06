import { NextResponse } from "next/server";

interface LoginBody {
  email?: string;
  password?: string;
}

export async function POST(request: Request) {
  let body: LoginBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json(
      { ok: false, error: "Email and password are required." },
      { status: 400 },
    );
  }

  // TODO: forward the credentials to the external auth API once it exists.
  // Keep the key server-side (an env var) so it never reaches the browser:
  //
  //   const res = await fetch(process.env.AUTH_API_URL!, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.AUTH_API_KEY}`,
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   if (!res.ok) {
  //     return NextResponse.json(
  //       { ok: false, error: "Invalid credentials." },
  //       { status: res.status },
  //     );
  //   }
  //   const data = await res.json();
  //   // e.g. set a session cookie here, then return success.

  // Placeholder response until the external endpoint is wired up.
  return NextResponse.json({
    ok: true,
    message: "Login received (placeholder — no auth backend connected yet).",
    email,
  });
}
