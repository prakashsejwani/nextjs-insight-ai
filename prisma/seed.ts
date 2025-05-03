// // prisma/seed.ts
// import { PrismaClient } from '@prisma/client';

// const db = new PrismaClient();

// async function main() {
//   await db.pageview.createMany({
//     data: [
//       {
//         url: 'https://example.com/',
//         referrer: '',
//         userAgent: 'Mozilla/5.0',
//         timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
//       },
//       {
//         url: 'https://example.com/about',
//         referrer: 'https://google.com',
//         userAgent: 'Mozilla/5.0',
//         timestamp: new Date(),
//       },
//     ],
//   });

//   console.log('✅ Seed data created');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(() => db.$disconnect());
