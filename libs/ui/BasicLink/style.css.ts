import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "../../style/colors/index.css";
import { vars } from "../../style/variables/index.css";

const base = style({
  position: "relative",
  color: colors.neutral10,
  textDecoration: "none",
  width: "fit-content",
  fontWeight: vars.typography.light,
  ":after": {
    content: "",
    position: "absolute",
    width: "100%",
    height: 1,
    left: 0,
    top: "100%",
    background: colors.brand8,
    transform: "scaleX(0)",
    transition: "transform .2s",
  },
  ":hover": {
    color: colors.neutral9,
  },
  selectors: {
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  },
});

export const linkStyle = styleVariants({
  primary: [
    base,
    {
      fontSize: vars.typography.size1,
    },
  ],
  small: [
    base,
    {
      fontSize: vars.typography.size0,
    },
  ],
});
