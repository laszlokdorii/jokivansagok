import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateJokivansagokDto {
    @IsString()
    @ApiProperty({
        example: 'Gipsz Jakap'
    })
    kivanonev: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'Kellemes évet!'
    })
    tartalom: string;
    
    kivansagido?: Date;
}
