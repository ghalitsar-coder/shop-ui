import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const ProductDetail = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="/images/detail.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Suit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta
            modi itaque fugit? Voluptate, omnis? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Minima unde quidem officiis molestiae
            expedita amet illum ex itaque delectus distinctio.
          </Description>
          <Price>$ 42.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color : </FilterTitle>
              <FilterColor color={"black"} />
              <FilterColor color={"navy"} />
              <FilterColor color={"pink"} />
            </Filter>
            <Filter>
              <FilterTitle>Size : </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XXL</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>
              <Link to={"/cart"} style={{ textDecoration: "none" }}>
                Add To Cart
              </Link>
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  height: 80vh;
  margin-top: 20px;
  ${mobile({
    flexDirection: "column",
    height: "100%",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  ${mobile({
    margin: "20px 0",
  })}
`;
const Image = styled.img`
  width: 55%;
  height: 100%;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  ${mobile({
    width: "100%",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
`;
const Description = styled.span`
  margin: 20px 0;
  font-weight: 400;
  line-height: 1.5em;
`;
const Price = styled.span`
  font-size: 34px;
  font-weight: 300;
  ${mobile({
    marginBottom: "13px ",
  })}
`;
const FilterContainer = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;

  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "0",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;

  ${mobile({
    margin: "13px 0",
  })}
`;
const FilterTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
  ${mobile({
    fontSize: "18px",
  })}
`;
const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 7px;
`;
const FilterSize = styled.select`
  border: none;
  border: 2px solid teal;
  padding: 7px;
  margin: 10px;
  border-radius: 4px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid teal;
  font-size: 22px;
  font-weight: 600;
  margin: 0 15px;
`;
const Button = styled.button`
  border: 2px solid teal;
  height: 40px;
  padding: 10px;
  border: none;
  background-color: transparent;
  border: 2px solid teal;
  border-radius: 5px;
  margin-left: 25px;
  cursor: pointer;
  transition: 250ms;
  font-size: 15px;
  font-weight: 600;
  color: teal;
  box-sizing: border-box;
  a {
    color: teal;
  }
  &:hover {
    a {
      color: #fff;
    }
    background-color: teal;
  }

  ${mobile({
    /* flexDirection: "column", */
    display: "block",
    margin: "25px 0",
    width: "100%",
  })}
`;
