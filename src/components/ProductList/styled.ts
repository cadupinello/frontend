"use client";
import styled from "styled-components";

export const Container = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",  
  gridGap: "22px",
  width: "940px",
  height: "600px"
}));