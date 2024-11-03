import { ReactNode, useContext } from "react";
import { LightModeContext } from "pages/_app";
import { COLORS } from "@/styles/themes";
import styled from "./H.module.css";

interface HeadingProps {
  id: string;
  children: ReactNode;
}

// Thanks to https://sdorra.dev/posts/2022-12-07-mdx-autolink-headings#self-link
export const heading = (As: "h2" | "h3") => {
  const H = ({ id, children }: HeadingProps) => {
    const { lightMode } = useContext(LightModeContext);
    const linkTextColor = lightMode ? COLORS.Green : COLORS.Gold;

    return (
      <As
        id={id}
        className={As === "h2" ? styled.h2 : styled.h3}
        style={{ "--color-link-text": linkTextColor } as React.CSSProperties}
      >
        {children}
      </As>
    );
  };

  return H;
};
