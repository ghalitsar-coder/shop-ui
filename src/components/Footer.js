import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ELFARIS.</Logo>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ab
            eaque a voluptatibus, doloribus itaque nisi molestias non deserunt
            mollitia? Porro animi itaque libero nesciunt est, totam molestias
            sed soluta!
          </Desc>
          <IconContainer>
            <SocialIcon color="3b5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="e4405f">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55acee">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="e60023">
              <YouTube />
            </SocialIcon>
          </IconContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Jl. Budi asih
            gg.srimanganti RT/RW 03/06 kec.sumedang selatan{" "}
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            +62 881 412 551
          </ContactItem>
          <ContactItem>
            <Mail style={{ marginRight: "10px" }} /> elfaris@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  height: 30vh;
  background-color: #f5fdfa;
  ${mobile({
    height: "100%",
    padding:"20px 0"
  })}
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobile({
    marginBottom: "30px",
  })}
`;
const Logo = styled.h1`
  margin-bottom: 20px;
`;
const Desc = styled.span`
  margin-bottom: 20px;
  max-width: 700px;
`;
const IconContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  background-color: #${(props) => props.color};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
  transition: 250ms;
  &:hover {
    transform: translateY(-10px);
  }
`;
const Center = styled.div`
  flex: 1;
  ${mobile({
    marginBottom: "30px",
  })}
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 250ms;
  &:hover {
    color: teal;
    transform: scale(1.1);
  }
`;
const Right = styled.div`
  flex: 1;
`;
const ContactItem = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
