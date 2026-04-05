import { MinLength, IsNotEmpty, IsOptional } from "class-validator";

type NullableString = string | null;

export class UpdateTaskDto {
    @IsOptional()
    @IsNotEmpty()
    title: NullableString;

    @IsOptional()
    @IsNotEmpty()
    description?: NullableString;

}