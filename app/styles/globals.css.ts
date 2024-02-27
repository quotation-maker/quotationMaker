import { globalStyle } from "@vanilla-extract/css";

globalStyle('*, *::before, *::after', {
  boxSizing: "border-box",
  padding: "0",
  margin: "0",
});

globalStyle('html, body', {
  fontSize: "18px",
  fontWeight: "400",
});

globalStyle('a', {
  color: "inherit",
  textDecoration: "none"
});

globalStyle('li', {
  listStyle: "none"
});

globalStyle('button', {
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer"
});

