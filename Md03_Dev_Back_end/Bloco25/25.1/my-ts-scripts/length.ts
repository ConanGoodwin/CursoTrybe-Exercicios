const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export function convert(value: number, baseUnity: string, conversionUnity: string): number {
  const baseValue = units.indexOf(baseUnity);
  const conversionValue = units.indexOf(conversionUnity);
  const exponent = (baseValue + conversionValue);

  return value * Math.pow(10, exponent);
}