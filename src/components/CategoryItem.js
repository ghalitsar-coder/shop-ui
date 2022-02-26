import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Link
          to={"/product-list"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Title> {item.title} </Title>
          <Button> Shop now </Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;

const Container = styled.div`
  /* flex: 1; */
  position: relative;
  margin: 3px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;

  ${mobile({})}
`;
const Info = styled.div`
  position: absolute;
  /* width: 100%; */
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 250ms;
  &:hover {
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const Title = styled.h1`
  margin-bottom: 30px;
  color: #fff;
  min-width: 100px;
  font-size: 50px;
  ${mobile({
    fontSize: "40px",
  })}
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  height: 50px;
  border: 2px solid teal;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  transition: 250ms;
  color: teal;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  &:hover {
    background-color: teal;
    color: #fff;
  }
  letter-spacing: 2px;
  /* ${mobile({
    margin: "0 auto",
    display: "block",
  })} */
`;
