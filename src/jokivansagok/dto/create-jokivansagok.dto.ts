import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateJokivansagokDto {
    @IsString()
    kivanonev: string;
    @IsString()
    @IsNotEmpty()
    tartalom: string;
    @IsNotEmpty()
    @IsDate()
    kivansagido: Date;
}
