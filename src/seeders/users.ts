import { PrismaClient } from '@prisma/client/edge';

const prisma = new PrismaClient();

async function seed() {
  // Inserta datos en la base de datos usando el cliente Prisma
  await prisma.user.createMany({
    data: [
      {
        accessToken: 'token1',
        firstName: 'Usuario 1',
        email: 'usuario1@example.com',
      },
      {
        accessToken: 'token2',
        firstName: 'Usuario 2',
        email: 'usuario2@example.com',
      },
      // Puedes agregar más datos según sea necesario
    ],
  });

  // Cierra la conexión al finalizar
  await prisma.$disconnect();
}

// Llama a la función seed para insertar datos en la base de datos
seed().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
