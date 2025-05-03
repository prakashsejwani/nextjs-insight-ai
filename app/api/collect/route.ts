// 1. /app/api/collect/route.ts – collects tracking events
// import { db } from '@/lib/prisma';

// export async function POST(req: Request) {
export async function POST() {
  // const data = await req.json();
//   await db.pageview.create({ data });
  return new Response("OK");
}