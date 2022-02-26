import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <Text>Shopping bag (2)</Text>
            <Text>Your Wishlist (0)</Text>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/g/x/gx5462_sl_ecom.jpg" />
                <Detail>
                  <ProductName>
                    <b> Product </b>: Flannel Manhattan
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b> ID </b> : 33123122
                  </ProductId>
                  <ProductColor color={"navy"} />
                  <ProductSize>
                    {" "}
                    <b> Size </b> : 39.2
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <ProductAmount>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </ProductAmount>
                <ProductPrice>$ 62</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr style={{ margin: "10px 0" }} />
            {/* <Product>
              <ProductDetail>
                <Image src="https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/g/x/gx4105_sl_ecom.jpg" />
                <Detail>
                  <ProductName>
                    <b> Product </b>: Flannel Manhattan
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b> ID </b> : 33123122
                  </ProductId>
                  <ProductColor color={"navy"} />
                  <ProductSize>
                    {" "}
                    <b> Size </b> : 39.2
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <ProductAmount>
                  <Add />
                  <Amount>2</Amount>
                  <Remove />
                </ProductAmount>
                <ProductPrice>$ 62</ProductPrice>
              </PriceDetail>
            </Product> */}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>$ 80</SummaryPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice>$ 5.90</SummaryPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem>
              <SummaryText>Shipping Discount</SummaryText>
              <SummaryPrice>$ -5.90</SummaryPrice>
            </SummaryItem>
            <Hr />
            <SummaryItem type={"total"}>
              <SummaryText>Total</SummaryText>
              <SummaryPrice>$ 80</SummaryPrice>
            </SummaryItem>
            <Hr />
            <Button>Buy Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
const TopButton = styled.button`
  height: 50px;
  border: none;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => (props.type === "filled" ? "#fff" : "teal")};
  border: 2px solid
    ${(props) => (props.type === "filled" ? "lightgrey" : "teal")};
  width: 140px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  transition: 250ms;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => (props.type === "filled" ? "#fff" : "teal")};
    color: ${(props) => (props.type === "filled" ? "black" : "#fff")};
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  }
`;
const TopTexts = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    display: "none",
  })}
`;
const Text = styled.span`
  margin: 0 20px;
  text-decoration: underline;
  font-size: 18px;
  cursor: pointer;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Image = styled.img`
  margin-right: 20px;
  ${mobile({
    marginRight: "0",
  })}
`;
const Info = styled.div`
  flex: 2;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    flexDirection: "column",
  })}
`;
const ProductDetail = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 4.2em;
  ${mobile({
    lineHeight: "2.2em",
  })}
`;
const ProductName = styled.span`
  font-size: 21px;
`;
const ProductId = styled.span`
  font-size: 21px;
`;
const ProductColor = styled.div``;
const ProductSize = styled.span`
  font-size: 21px;
`;
const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;
const ProductAmount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Amount = styled.span`
  font-size: 34px;
`;
const ProductPrice = styled.span`
  font-size: 34px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 6px;
  line-height: 4.2em;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: 30px 0px; */
  font-size: ${(props) => props.type === "total" && "26px"};
  font-weight: ${(props) => props.type === "total" && "500"};
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;
const Button = styled(TopButton)`
  display: block;
  width: 60%;
  text-align: center;
  margin: 30px auto;
`;
