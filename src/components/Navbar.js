import { Search } from "@mui/icons-material";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search..."></Input>
            <Search style={{ fontSize: 21, color: "grey" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Logo>ELFARIS.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  ${mobile({
    padding: "10px 0px",
  })}
  display: flex;
  align-items: center;
`;
const Left = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  /* flex: 1; */
  font-size: 35px;
  text-align: center;
  ${mobile({
    fontSize: "22px",
  })}
`;
const Language = styled.div`
  font-size: 20px;
  font-weight: 600;
  ${mobile({
    display: "none",
  })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 5px;
  margin-left: 25px;
  ${mobile({
    marginLeft: "5px",
  })}
  box-sizing: border-box;
`;
const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: 2,
    alignItems: "center",
  })}
`;

const MenuItem = styled.div`
  margin-left: 20px;
  ${mobile({
    marginLeft: "10px",
    fontSize: "12px",
  })}
`;
