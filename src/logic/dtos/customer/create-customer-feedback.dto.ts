import { FeedbackCategory } from "@data/feedback/feedback.entity";
import { IsEmail, IsEnum, IsOptional, IsString, Length } from "class-validator";

export class CreateCustomerFeedBackDTO {
  @IsString()
  reportingReference: string;

  @IsOptional()
  @IsString()
  customerId?: string;

  @IsOptional()
  @IsString()
  @Length(10, 10)
  accountNumber?: string;

  @IsOptional()
  @IsString()
  @Length(11, 11)
  bvn?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email?: string;

  @IsEnum(FeedbackCategory)
  feedbackCategory: FeedbackCategory;

  @IsString()
  feedDescription: string;
}
