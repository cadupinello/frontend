"use client";
import styled from "styled-components";

export const Header = styled("header")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "28px 65px 28px 65px",
  height: "100px",
  backgroundColor: theme.colors.primary,
  color: theme.colors.secondary,
  
  "div > strong": {
    fontFamily: "inherit",
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: "19px",
    textAlign: "left",
  },
  "div > span": {
    fontFamily: "inherit",
    fontSize: "20px",
    fontWeight: 300,
  },
}));

export const Cart = styled("button")(({ theme }) => ({
  width: "90px",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: theme.colors.secondary,
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.colors.gray,
  },

  svg: {
    width: "18px",
    height: "18px",
    marginRight: "15px",
  },

  span: {
    fontFamily: "inherit",
    fontSize: "18px",
    fontWeight: 700,
  },
}));
