import React from "react";
import styled from "styled-components";

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;

const Container = styled.div`
  background-color: teal;
  color: #fff;
  text-align: center;
  padding: 10px  0;
`;
