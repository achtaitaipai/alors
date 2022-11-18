import { style } from "@vanilla-extract/css";
import { colors } from "../../libs/style/colors/index.css";

export const containerStyle = style({
  minHeight: "100%",
  //   backgroundImage: `linear-gradient(0deg, rgb(30, 33, 48) 6.8%, rgb(74, 98, 110) 131%)`,
  backgroundImage: colors.gradientbg,
  display: "flex",
  flexDirection: "column",
});
