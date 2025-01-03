import { Injectable } from '@nestjs/common';
import { CreateJokivansagokDto } from './dto/create-jokivansagok.dto';
import { UpdateJokivansagokDto } from './dto/update-jokivansagok.dto';

@Injectable()
export class JokivansagokService {
  create(createJokivansagokDto: CreateJokivansagokDto) {
    return 'This action adds a new jokivansagok';
  }

  findAll() {
    return `This action returns all jokivansagok`;
  }

  findOne(id: number) {
    return `This action returns a #${id} jokivansagok`;
  }

  update(id: number, updateJokivansagokDto: UpdateJokivansagokDto) {
    return `This action updates a #${id} jokivansagok`;
  }

  remove(id: number) {
    return `This action removes a #${id} jokivansagok`;
  }
}
