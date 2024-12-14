import { redirect } from "next/navigation"

export async function POST(request: Request) {
  const res = await request.json()

  if(res.answer === "drive") {
    console.log("right")
    return redirect("/esse-nome-precisa-ser-um-hash")
  }

  return Response.json({ res })
}