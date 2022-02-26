import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link
            to={"/product-detail"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  display: flex;
  position: relative;
  margin: 3px;
  align-items: center;
  justify-content: center;
  background-color: #f5fafd;
`;
const Circle = styled.div`
  border-radius: 50%;
  background-color: #fff;
  width: 200px;
  height: 200px;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 250ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
  background-color: #f5fdfa;
  transition: 250ms;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
