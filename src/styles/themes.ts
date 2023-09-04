export enum COLORS {
  Black = "hsl(0, 0%, 0%)",
  Frost = "hsl(209, 33%, 96%)",
  Charcoal = "hsl(207, 43%, 16%)",
  Blue = "hsl(209, 91%, 45%)",
  Green = "hsl(172, 54%, 32%)",
  DarkGreen = "hsl(165, 41.94%, 24.31%)",
  Gold = "hsl(43, 60%, 68%)",
  Aqua = "hsl(184, 58%, 80%)",
}

export const lightTheme = {
  primaryBg: COLORS.Frost,
  buttonBg: COLORS.Green,
  buttonBgHover: COLORS.Blue,
  buttonTextColor: COLORS.Frost,
  textColor: COLORS.Charcoal,
  headingColor: COLORS.Charcoal,
  linkTextColor: COLORS.Green,
  linkTextColorHover: COLORS.Blue,
};

export const darkTheme = {
  primaryBg: COLORS.Charcoal,
  buttonBg: COLORS.Gold,
  buttonBgHover: COLORS.Aqua,
  buttonTextColor: COLORS.Charcoal,
  textColor: COLORS.Frost,
  headingColor: COLORS.Frost,
  linkTextColor: COLORS.Gold,
  linkTextColorHover: COLORS.Aqua,
};
