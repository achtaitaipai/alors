import { style } from "@vanilla-extract/css";
import { colors } from "../../style/colors/index.css";
import { vars } from "../../style/variables/index.css";

export const formCardStyle = style({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  display: "grid",
  background: colors.gradient1,
  backgroundColor: colors.neutral1,
  color: colors.neutral12,
  justifyItems: "center",
  alignContent: "space-between",
  gap: "1rem",
  width: vars.sizes[14],
  paddingBlock: vars.sizes[7],
  paddingInline: vars.sizes[6],
  borderColor: colors.neutral6,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: vars.sizes.radius2,
  overflow: "hidden",
});
