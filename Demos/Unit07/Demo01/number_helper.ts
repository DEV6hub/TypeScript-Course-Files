export class NumberHelper {
  static formatAsCurrency(val: number): string {
    return (val === null) ? '' : '$' + val.toFixed(2);
  }
}
