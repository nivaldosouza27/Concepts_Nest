import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  readonly message: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  readonly sender: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(50)
  readonly recipient: string;
}
