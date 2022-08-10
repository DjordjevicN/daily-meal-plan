import { ICaloriesCalculateState } from "./types";

export const calcWhenToBuy = (partialValue: number, totalValue: number) => {
  return (partialValue / 100) * totalValue;
};
export const calculateHowMuchToBuy = (
  baseAmount: number,
  currentAmount: number
): number => {
  return baseAmount - currentAmount;
};

export const calculateCalorie = (obj: ICaloriesCalculateState) => {
  const age = obj.age;
  const height = obj.height! * 2.54;
  const weight = obj.weight! / 2.2;
  const activityLevel = obj.activity;
  const goal = obj.goal;
  let result = 0;

  if (obj.gender === "male") {
    result = Math.round(66.5 + 13.75 * weight + 5.003 * height - 6.75 * age!);
  } else {
    result = Math.round(655.1 + 9.563 * weight + 1.85 * height - 4.676 * age!);
  }

  const goalResult = parseInt(((goal! / 100) * result).toFixed(2));

  if (goal! > 0) {
    return result + goalResult + 400 + activityLevel!;
  } else {
    return result - goalResult + 400 + activityLevel!;
  }
};
export const isLocal = () => {
  return window.location.hostname === "localhost";
};
export const baseUrl = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001";
  } else {
    return "https://jelovnik.nikola-djordjevic.com";
  }
};
export const isUserLoggedIn = () => {
  return false;
};
