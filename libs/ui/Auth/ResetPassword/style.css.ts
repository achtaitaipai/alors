import { style } from "@vanilla-extract/css";
import { vars } from "../../../style/variables/index.css";

export const formStyle = style({
  display: "grid",
  gap: vars.sizes[5],
});
