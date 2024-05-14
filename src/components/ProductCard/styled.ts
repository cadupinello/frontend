"use client";
import styled from "styled-components";

export const Card = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "218px",
  height: "300px",
  boxShadow: "0px 2px 8px 0px #00000022",

  div: {
    display: "flex",
    height: "40px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 14px",

    p: {
      fontFamily: "inherit",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "19px",
      textAlign: "left",
      color: theme.colors.blackLight,
    },

    span: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "4px 7px",
      width: "fit-content",
      height: "19px",
      borderRadius: "5px",
      backgroundColor: theme.colors.black,
      fontFamily: "inherit",
      fontSize: "15px",
      fontWeight: 700,
      color: theme.colors.secondary,
    },
  },

  p: {
    fontWeight: 300,
    fontFamily: "inherit",
    fontSize: "12px",
    lineHeight: "12px",
    textAlign: "left",
    margin: "8px 14px",
    color: theme.colors.blackLight,
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    width: "100%",
    height: "30px",
    padding: "7px",
    borderRadius: "0px 0px 5px 5px",
    border: "none",
    fontFamily: "inherit",
    fontSize: "14px",
    fontWeight: 600,
    backgroundColor: theme.colors.primary,
    color: theme.colors.secondary,
    cursor: "pointer", 
    
    "&:hover": {
      backgroundColor: theme.colors.primaryDark,
      transition: "0.3s",
    },
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "140px",
}));
