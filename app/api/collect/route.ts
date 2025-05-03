// 1. /app/api/collect/route.ts – collects tracking events
import { db } from '@/lib/prisma';

export async function POST(req: Request) {
  const data = await req.json();
  await db.pageview.create({ data });
  return new Response("OK");
}