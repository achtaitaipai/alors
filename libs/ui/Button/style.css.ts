import { style } from "@vanilla-extract/css";
import { colors } from "../../style/colors/index.css";
import { vars } from "../../style/variables/index.css";
import { styleVariants } from "@vanilla-extract/css";

export const buttonStyle = style({
  position: "relative",
  cursor: "pointer",
  height: vars.sizes[7],
  paddingInline: 15,
  background: colors.brand4,
  color: colors.neutral12,
  borderColor: colors.brand6,
  borderWidth: 1,
  borderStyle: "solid",
  fontSize: "1.1rem",
  ":hover": {
    background: colors.brand5,
    borderColor: colors.brand7,
    color: colors.neutral11,
  },
});
