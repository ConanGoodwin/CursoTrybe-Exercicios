const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

export function convert(value: number, baseUnity: string, conversionUnity: string): number {
  const baseValue = units.indexOf(baseUnity);
  const conversionValue = units.indexOf(conversionUnity);
  const exponent = (baseValue + conversionValue);

  return value * Math.pow(10, exponent);
}