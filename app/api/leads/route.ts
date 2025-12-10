import { NextResponse } from "next/server"
import { generateLeads } from "@/lib/fake-data"

export async function GET() {
  // Simulate API latency
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const leads = generateLeads(20)

  return NextResponse.json({ leads })
}

