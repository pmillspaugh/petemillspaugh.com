export enum COLORS {
  White = "hsl(209, 33%, 96%)",
  Blue = "hsl(209, 91%, 45%)",
  Green = "hsl(172, 54%, 32%)",
  DarkGreen = "hsl(165, 41.94%, 24.31%)",
  Black = "hsl(207, 43%, 16%)",
  Gold = "hsl(43, 60%, 68%)",
  Aqua = "hsl(184, 58%, 80%)",
}

export const lightTheme = {
  primaryBg: COLORS.White,
  buttonBg: COLORS.Green,
  buttonBgHover: COLORS.Blue,
  buttonTextColor: COLORS.White,
  textColor: COLORS.Black,
  headingColor: COLORS.Black,
  linkTextColor: COLORS.Green,
  linkTextColorHover: COLORS.Blue,
};

export const darkTheme = {
  primaryBg: COLORS.Black,
  buttonBg: COLORS.Gold,
  buttonBgHover: COLORS.Aqua,
  buttonTextColor: COLORS.Black,
  textColor: COLORS.White,
  headingColor: COLORS.White,
  linkTextColor: COLORS.Gold,
  linkTextColorHover: COLORS.Aqua,
};
