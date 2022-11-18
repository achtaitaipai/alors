import { style } from "@vanilla-extract/css";
import { colors } from "../../../style/colors/index.css";
import { vars } from "../../../style/variables/index.css";

export const loginStyle = style({
  display: "grid",
  gap: vars.sizes[5],
});

export const linkStyle = style({
  position: "relative",
  justifySelf: "end",
  color: colors.neutral11,
  textDecoration: "none",
  fontSize: vars.typography.size0,
  width: "fit-content",
  ":after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: 1,
    left: 0,
    top: "100%",
    background: colors.brand10,
    transform: "scaleX(0)",
    transition: "transform .2s",
  },
  selectors: {
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  },
});
