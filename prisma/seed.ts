import { faker, LoremModule } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
 
async function main() {
    
    for(let i=0; i<15; i++){

        await prisma.kivansagok.create({
            data:{
                kivanonev: faker.person.fullName().toString(),
                tartalom: faker.lorem.paragraph().toString(),
                kivansagido: new Date(),
            }
        }) 
    };
}
 
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)})