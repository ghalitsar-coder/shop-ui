import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products : </FilterText>
          <Select selected>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>navy</Option>
            <Option>pink</Option>
            <Option>green</Option>
            <Option>brown</Option>
            <Option>blue</Option>
            <Option>coffee</Option>
            <Option>lilac</Option>
          </Select>
          <Select selected>
            <Option disabled>Size</Option>
            <Option>XXL</Option>
            <Option>XL</Option>
            <Option>L</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>XS</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products : </FilterText>
          <Select>
            <Option>Newest</Option>
            <Option>Highest (price)</Option>
            <Option>Lowest (price) </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;

const Container = styled.div``;
const Title = styled.h1`
  font-size: 45px;
  font-weight: 600;
  margin: 20px 30px;

  ${mobile({
    fontSize: "30px",
  })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 30px;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-size: 22px;
  font-weight: 600;
  ${mobile({
    fontSize: "18px",
  })}
`;
const Select = styled.select`
  border: none;
  border: 2px solid teal;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
`;
const Option = styled.option`
  border: none;
  display: block;
  margin: 20px;
`;
