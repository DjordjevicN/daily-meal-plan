export const calcWhenToBuy = (partialValue: number, totalValue: number) => {
  return (partialValue / 100) * totalValue;
};
export const calculateHowMuchToBuy = (
  baseAmount: number,
  currentAmount: number
): number => {
  return baseAmount - currentAmount;
};
