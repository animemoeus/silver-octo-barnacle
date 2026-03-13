import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    FULL_NAME: process.env.FULL_NAME ?? null,
  })
}
