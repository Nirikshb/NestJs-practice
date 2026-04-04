import { MinLength, IsNotEmpty } from "class-validator";
export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    @MinLength(5)
    description: string;

}