import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const test = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      login: 'test',
      name: 'test',
      password: 'test',
    },
  })
  const test2 = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      login: 'test2',
      name: 'test2',
      password: 'test2',
    },
  })
  console.log({ test, test2 })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })