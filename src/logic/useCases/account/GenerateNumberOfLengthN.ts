export class GenerateNumberOfLengthN {
  constructor() {}
  public execute(n: number): number {
    let add = 1,
      max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (n > max) {
      return this.execute(max) + this.execute(n - max);
    }

    max = Math.pow(10, n + add);
    let min = max / 10; // Math.pow(10, n) basically
    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    return parseInt(("" + number).substring(0, n));
  }
}
