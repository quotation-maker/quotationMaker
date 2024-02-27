import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/theme.css";

const main = style({
  fontSize: "18px",
  background: vars.color.primary,
})

const styles = {
  main,
}

export default styles;
