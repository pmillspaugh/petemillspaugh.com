import "styled-components";
import { lightTheme } from "./themes";

type Theme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
