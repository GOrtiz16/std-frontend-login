export const calculatePercentage = (loanAmount: number, totalAmount: number): number =>
  Number(((loanAmount / totalAmount) * 100).toFixed(2));

export const pseudoMathRamdon = (): number => {
  const ramdon = new Uint32Array(1);
  return crypto.getRandomValues(ramdon)[0] / 4294967295;
};
