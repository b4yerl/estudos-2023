import { IsNotEmpty } from "class-validator";
import { Length } from "class-validator";

export class CreateNotificationBody {
  @IsNotEmpty()
  recipientId: string;
  @IsNotEmpty()
  @Length(5, 240)
  content: string;
  @IsNotEmpty()
  category: string;
}