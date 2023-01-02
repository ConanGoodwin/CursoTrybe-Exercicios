const units = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

export function convert(value: number, baseUnity: string, conversionUnity: string): number {
  const baseValue = units.indexOf(baseUnity);
  const conversionValue = units.indexOf(conversionUnity);
  const exponent = (baseValue + conversionValue);

  return value * Math.pow(100, exponent);
}
