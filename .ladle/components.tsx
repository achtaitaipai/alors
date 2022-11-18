import "@fontsource/roboto/100.css";
import "@fontsource/roboto/100-italic.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/900-italic.css";
import "../styles/globalStyle.css";

import type { GlobalProvider } from "@ladle/react";
import { light } from "../libs/style/colors/index.css";
import { containerStyle } from "../styles/layouts/container.css";
import "../styles/globalStyle.css";

export const Provider: GlobalProvider = ({ children }) => (
  <div className={light + " " + containerStyle}>{children}</div>
);
