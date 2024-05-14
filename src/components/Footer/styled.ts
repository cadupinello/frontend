"use client";
import styled from "styled-components";

export const Footer = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddding: "8px 0",
  height: "32px",
  backgroundColor: theme.colors.gray,
  color: theme.colors.black,
}));
