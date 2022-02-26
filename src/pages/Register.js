import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src="/images/register.jpg" />
        </Left>
        <Right>
          <Wrap>
            <Title>Register</Title>
            <SubTitle>Manage all your fashion efficiently</SubTitle>
            <Form>
              <InputWrapper>
                <InputContainer>
                  <Label>Name </Label>
                  <Input />
                </InputContainer>
                <InputContainer>
                  <Label>Last Name </Label>
                  <Input />
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <InputContainer>
                  <Label>Phone number </Label>
                  <Input />
                </InputContainer>
                <InputContainer>
                  <Label>Email </Label>
                  <Input />
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <InputContainer>
                  <Label>Password </Label>
                  <Input />
                </InputContainer>
                <InputContainer>
                  <Label>Confirm Password </Label>
                  <Input />
                </InputContainer>
              </InputWrapper>

              <CheckContainer>
                <Input type={"checkbox"} />
                <TextCheckBox>
                  i agree to all the <b> Term </b>, <b> Privacy policy </b> and{" "}
                  <b> Fees </b>
                </TextCheckBox>
              </CheckContainer>
              <Button>Create Account</Button>
              <TextToLogin>
                Already have an Account ?
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <b>Login</b>
                </Link>
              </TextToLogin>
            </Form>
          </Wrap>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 90vh;
  margin: 40px auto;
  border: 1.5px solid #ccc;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  ${mobile({
    width: "90%",
    height: "100%",
  })}
`;
const Left = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  ${mobile({
    display: "none",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    display: "none",
  })}
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
  }
`;
const Right = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    flex: "1",
  })}
`;
const Wrap = styled.div`
  width: 80%;
  height: 90%;
  padding: 20px;
  box-sizing: border-box;
  ${mobile({
    width: "100%",
    height: "100%",
  })}
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 32px;
`;
const SubTitle = styled.span`
  font-weight: 400;
  font-size: 13px;
  color: #ccc;
  margin: 20px 0;
  display: block;
`;
const Form = styled.form``;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  ${mobile({
    flexDirection: "column",
    margin: "0",
    alignItems: "flex-start",
  })}
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  ${mobile({
    width: "100%",
    margin: "13px 0",
  })}
`;
const Label = styled.span``;
const Input = styled.input`
  width: ${(props) => props.type !== "checkbox" && "120%"};
  width: ${(props) => props.type === "checkbox" && "20px"};
  border: none;
  border: 1.5px solid #ccc;
  height: 30px;
  border-radius: 4px;
  @media (max-width: 576px) {
    width: ${(props) => props.type !== "checkbox" && "90%"};
    width: ${(props) => props.type === "checkbox" && "30px"};
  }
  ${mobile({})}
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 140px;
  height: 50px;
  cursor: pointer;
  border: none;
  background-color: teal;
  color: #fff;
  border-radius: 4px;
  transition: 250ms;
  display: block;
  margin: 26px 0;
  &:hover {
    background-color: transparent;
    color: teal;
    border: 2px solid teal;
    box-sizing: border-box;
  }
  ${mobile({
    width: "100%",
  })}
`;

const CheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TextCheckBox = styled.span`
  margin: 20px 10px;
  ${mobile({
    fontSize: "16px",
  })}
`;
const TextToLogin = styled.span`
  margin: 20px 0;
  b {
    transition: 250ms;
    cursor: pointer;
    &:hover {
      color: teal;
    }
  }
  ${mobile({
    textAlign: "center",
    margin: "40px auto",
    display: "block",
  })}
`;
