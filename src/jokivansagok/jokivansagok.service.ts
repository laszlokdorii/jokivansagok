import { Injectable } from '@nestjs/common';
import { CreateJokivansagokDto } from './dto/create-jokivansagok.dto';
import { UpdateJokivansagokDto } from './dto/update-jokivansagok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JokivansagokService {
  db: PrismaService
  constructor(db:PrismaService){
    this.db=db;
  }
  async create(createJokivansagokDto: CreateJokivansagokDto) {
    return await this.db.kivansagok.create({
      data: createJokivansagokDto
    });
  }

  async findAll() {
    return await this.db.kivansagok.findMany();
  }

  async findOne(id: number) {
    const kivansag = await this.db.kivansagok.findUnique({
      where: {
        id:id
      }
    });
    return kivansag;
  }

  async update(id: number, updateJokivansagokDto: UpdateJokivansagokDto) {
    return await this.db.kivansagok.update({
      where: {
        id:id
      },
      data: updateJokivansagokDto
    });
  }

  async remove(id: number) {
    return await this.db.kivansagok.delete({
      where: {
        id:id
      }
    });
  }
}
