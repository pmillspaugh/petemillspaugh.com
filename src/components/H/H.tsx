import { ReactNode } from "react";
import styled from "./H.module.css";

interface HeadingProps {
  id: string;
  children: ReactNode;
}

// Thanks to https://sdorra.dev/posts/2022-12-07-mdx-autolink-headings#self-link
export const heading = (As: "h2" | "h3") => {
  const H = ({ id, children }: HeadingProps) => {
    return (
      <As id={id} className={As === "h2" ? styled.h2 : styled.h3}>
        {children}
      </As>
    );
  };

  return H;
};
