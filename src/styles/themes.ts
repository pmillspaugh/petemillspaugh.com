export enum COLORS {
  Black = "hsl(0, 0%, 0%)",
  Charcoal = "hsl(207, 43%, 16%)",
  Gray = "hsl(157, 6%, 90%)",
  Frost = "hsl(209, 33%, 96%)",
  Green = "hsl(172, 54%, 32%)",
  DarkGreen = "hsl(165, 41.94%, 24.31%)",
  Gold = "hsl(43, 60%, 68%)",
  Aqua = "hsl(184, 58%, 80%)",

  // Footer SVG graphic
  Lake = "hsl(191, 26%, 77%)",
  LakeDark = "hsl(191, 20%, 49%)",
  Mountains1 = "hsl(223, 17%, 50%)",
  Mountains2 = "hsl(223, 37%, 80%)",
  Mountains3 = "hsl(223, 38%, 89%)",
  MountainsDark2 = "hsl(223, 19%, 39%)",
  MountainsDark3 = "hsl(223, 24%, 32%)",
}

export const lightTheme = {
  primaryBg: COLORS.Frost,
  textColor: COLORS.Charcoal,
  linkTextColor: COLORS.Green,
  linkTextColorHover: COLORS.Gold,
  codeBg: COLORS.Gray,
  codeColor: COLORS.DarkGreen,
  blockquoteColor: COLORS.DarkGreen,
  tagBorderColor: COLORS.Gold,
  tagBorderColorHover: COLORS.Green,
  tooltipBg: COLORS.Frost,
  tooltipBorderColor: COLORS.Green,
  switchEnabledBg: COLORS.Gold,
};

export const darkTheme = {
  primaryBg: COLORS.Charcoal,
  textColor: COLORS.Frost,
  linkTextColor: COLORS.Gold,
  linkTextColorHover: COLORS.Green,
  codeBg: COLORS.MountainsDark3,
  codeColor: COLORS.Frost,
  blockquoteColor: COLORS.Mountains2,
  tagBorderColor: COLORS.Green,
  tagBorderColorHover: COLORS.Gold,
  tooltipBg: COLORS.Charcoal,
  tooltipBorderColor: COLORS.Gold,
  switchEnabledBg: COLORS.Green,
};
