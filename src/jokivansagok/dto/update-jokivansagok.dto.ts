import { PartialType } from '@nestjs/mapped-types';
import { CreateJokivansagokDto } from './create-jokivansagok.dto';

export class UpdateJokivansagokDto extends PartialType(CreateJokivansagokDto) {}
