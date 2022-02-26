import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item, i) => (
        <Product item={item} key={i}  />
      ))}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
`;
