import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 60vh;
  align-content: space-between;
  background-color: #fcf5f5;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const Description = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 400;
  ${mobile({
    fontSize: "22px",
    textAlign: "center",
  })}
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 40%;
  border: none;
  font-size: 21px;
  border: 2px solid #ccc;
  height: 40px;
  ${mobile({
    width: "65%",
  })}
`;
const Button = styled.button`
  font-size: 37px;
  width: 10%;
  background-color: teal;
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 4px;
  ${mobile({
    width: "13%",
  })}
`;
