import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.item.createMany({
    data: [
      { title: 'Example Book', creators_display: 'Author One', media_type: 'book', year: 2020 },
      { title: 'Example Film', creators_display: 'Director One', media_type: 'film', year: 2018 },
      { title: 'Example Game', creators_display: 'Studio One', media_type: 'game', year: 2022 }
    ]
  });
}

main().finally(() => prisma.$disconnect());
