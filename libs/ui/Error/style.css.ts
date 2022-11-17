import { style } from "@vanilla-extract/css";
import { colors } from "../../style/colors/index.css";
import { vars } from "../../style/variables/index.css";

export const errorStyle = style({
  color: colors.error9,
  fontSize: vars.typography.size0,
});
