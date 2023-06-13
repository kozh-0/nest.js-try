import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();

  const kozh = await prisma.donation.create({
    data: {
      count: 10,
      email: 'lol@mail.ru',
      displayName: 'joker',
    },
  });

  console.log({ kozh });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
