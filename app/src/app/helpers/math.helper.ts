export const calculatePercentage = (
  loanAmount: number,
  totalAmount: number
): number => Number(((loanAmount / totalAmount) * 100).toFixed(2));
