import { FeedbackCategory } from "../../../data-layer/feedback/feedback.entity";
import { IsString, IsOptional, Length, IsEmail, IsEnum } from "class-validator";
import { CreateCustomerFeedBackDTO } from "./create-customer-feedback.dto";

export class UpdateCustomerFeedBackDTO {
  @IsString()
  id: string;

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
