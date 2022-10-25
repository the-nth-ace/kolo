import { IsString, Length } from "class-validator";

export class GenerateCheckDigitDTO {
  @IsString()
  @Length(3, 3)
  bankCode: string;

  @IsString()
  @Length(9, 9)
  nubanSerial: string;
}

export const generateNumberOfLengthN = (n: number): number => {
  let add = 1,
    max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

  if (n > max) {
    return parseInt(
      generateNumberOfLengthN(max).toString() +
        generateNumberOfLengthN(n - max).toString()
    );
  }
  max = Math.pow(10, n + add);
  let min = max / 10; // Math.pow(10, n) basically
  let number = Math.floor(Math.random() * (max - min + 1)) + min;

  return parseInt(("" + number).substring(0, n));
};
export const generateCheckDigit = (dto: GenerateCheckDigitDTO): string => {
  const digits: Array<number> = [3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3];
  let cipher = dto.bankCode + dto.nubanSerial;
  let sum = 0;

  cipher.split("").forEach((item, index) => {
    sum += parseInt(item) * digits[index];
  });
  sum %= 10;
  let checkDigit = 10 - sum;
  return (checkDigit == 10 ? 0 : checkDigit).toString();
};
