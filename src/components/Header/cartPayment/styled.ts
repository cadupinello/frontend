import styled from "styled-components";
import { motion } from "framer-motion";


interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled('div')<ContainerProps>(({ theme, isOpen }) => ({
  ...(isOpen ? {
    position: "fixed",
    top: "0",
    right: 0,
    bottom: 0,
    zIndex: 1000,
  } : {
    display: "none",
  }),
}));

export const MotionContainer = styled(motion.nav)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "485px",
  height: "100vh",
  backgroundColor: theme.colors.primary,
  boxShadow: "-5px 0px 6px 0px #00000021",

  "div > h1": {
    fontFamily: "inherit",
    fontSize: "27px",
    fontWeight: 700,
    lineHeight: "32.91px",
    textAlign: "left",
    padding: "25px",
    color: theme.colors.secondary,
  },

  ".closeCart": {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },

  ".totalPrice": {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "fit-content",
    padding: "25px",
    fontFamily: "inherit",
    fontSize: "22px",
    fontWeight: 700,
    color: theme.colors.secondary,
  },
}));

export const ButtonFinalize = styled('button')(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "90px",
  padding: "40px",
  border: "none",
  fontFamily: "inherit",
  fontSize: "28px",
  lineHeight: "15px",
  fontWeight: 700,
  color: theme.colors.secondary,
  backgroundColor: "#000",
  cursor: "pointer",
  
  "&:hover": {
    backgroundColor: theme.colors.black,
    transition: "0.3s",
  },

}))