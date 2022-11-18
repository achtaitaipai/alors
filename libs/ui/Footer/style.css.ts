import { style } from "@vanilla-extract/css";
import { url } from "inspector";
import { colors } from "../../style/colors/index.css";
import { vars } from "../../style/variables/index.css";

export const footerStyle = style({
  position: "relative",
  width: "100%",
  paddingInline: vars.sizes[4],
  gap: vars.sizes[7],
  color: colors.neutral9,
  display: "flex",
  alignItems: "center",
  marginTop: "auto",
  borderColor: colors.brand2,
  borderWidth: 0,
  borderTopWidth: 1,
  borderStyle: "solid",
  isolation: "isolate",
  overflow: "hidden",
  "::before": {
    content: "",
    position: "absolute",
    inset: 0,
    background: colors.gradientbg,
    transform: "scaleX(-1)",
  },
});

export const footerLogoStyle = style({
  zIndex: 1,
  width: 50,
  height: 50,
  padding: "5px",
  backgroundImage: "url('/alorsV1ps.png')",
  backgroundSize: "contain",
  display: "block",
  marginRight: "auto",
  ":hover": {
    filter: `drop-shadow(0 0 0.75rem ${colors.brand7})`,
  },
});
