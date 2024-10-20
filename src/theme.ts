export const colors = [
  "brand",
  "bgCard",
  "fgCard",
  "paragraph",
  "menuColor",
  "textColor",
];

export const theme: Record<ThemeColor, string> = {
  brand: "#95c11f",
  bgCard: "#1e2021",
  fgCard: "#27282b",
  menuColor: "#19191a",
  paragraph: "#cdcdcd",
  textColor: "#f1f1f1",
};
export type ThemeColor = (typeof colors)[number];
