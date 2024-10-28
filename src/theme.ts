export const colors = [
  "brand",
  "bgCard",
  "fgCard",
  "paragraph",
  "menuColor",
  "textColor",
];

export const theme: Record<ThemeColor, string> = {
  brand: "#f20719",
  brand2: "#f20707",
  dark: "#0d0d0d",
  light: "#fff",
  textPrimary: "#3a3a3a",
  textSecondary: "#cdcdcd",
  white: "#f2f2f2",
  salt: "#f26d78",
};
export type ThemeColor = (typeof colors)[number];
