import "@fontsource/roboto";
import "../styles/globalStyle.css";

import type { GlobalProvider } from "@ladle/react";
import { light } from "../libs/style/colors/index.css";
import { containerStyle } from "../styles/layouts/container.css";
import "../styles/globalStyle.css";

export const Provider: GlobalProvider = ({ children }) => (
  <div className={light + " " + containerStyle}>{children}</div>
);
