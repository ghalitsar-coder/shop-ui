import { mobile } from "../responsive";
import styled from "styled-components";
import { Google } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Card>
            <Title>Welcome back</Title>
            <SubTitle>Welcome back! Please enter your details.</SubTitle>
            <Form>
              <InputContainer>
                <Label>Email </Label>
                <Input />
              </InputContainer>
              <InputContainer>
                <Label>Password </Label>
                <Input />
              </InputContainer>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <Button>Sign in</Button>
              </Link>
              <GButton type="google">
                <Google style={{ marginRight: "7px" }} /> Sign in with Google
              </GButton>
            </Form>
            <InfoAccount>
              <Link
                to={"/register"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <InfoText>
                  Don`t have an account ? <b>Sign up for free</b>{" "}
                </InfoText>
              </Link>
            </InfoAccount>
          </Card>
        </Left>
        <Right>
          <ImageContainer>
            <Image src="/images/login.jpg" />
            <GlassContainer>
              <Text>
                " Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus perspiciatis, quidem ducimus vero natus architecto
                assumenda optio illo fugit explicabo. "
              </Text>
              <Person>
                <TextName>Andi Lane</TextName>
                <SubText>Founder, Catalog</SubText>
                <br />
                <SubText type={"faded"}>Fashion Model Agency</SubText>
              </Person>
            </GlassContainer>
          </ImageContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div``;
const Wrapper = styled.div`
  width: 70%;
  margin: 50px auto;
  display: flex;
  height: 90vh;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  ${mobile({
    width: "90%",
  })}
`;
const Left = styled.div`
  flex: 1;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 38px;
  font-weight: 600;
`;
const SubTitle = styled.span`
  color: #ccc;
  font-size: 12px;
  margin: 10px 0px;
`;
const Form = styled.form``;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
const Label = styled.span`
  margin-bottom: 5px;
`;
const Input = styled.input`
  border: none;
  border: 2px solid #ccc;
  border-radius: 4px;
  height: 30px;
`;
const Button = styled.button`
  display: block;
  width: 100%;
  border: none;
  background-color: ${(props) => (props.type === "google" ? "#fff" : "#000")};
  color: ${(props) => (props.type === "google" ? "#000" : "#fff")};
  height: 40px;
  margin: 20px 0;
  cursor: pointer;
  border-radius: 4px;
  transition: 250ms;
  &:hover {
    background-color: #fff;
    border: 1.5px solid #ccc;
    color: #000;
  }
`;
const GButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid #eee;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
const InfoAccount = styled.div``;

const InfoText = styled.span`
  b {
    cursor: pointer;
  }
  ${mobile({
    fontSize: "15px"
  })}
`;
const Right = styled.div`
  flex: 1;
  height: 100%;
  ${mobile({
    display: "none",
  })}
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
const GlassContainer = styled.div`
  /* width: 100%; */
  height: 22rem;
  position: absolute;
  bottom: 30%;
  left: 20px;
  right: 20px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  padding: 20px;
  box-sizing: border-box;
`;
const Text = styled.h1`
  color: #fff;
  text-align: start;
  margin: 20px 0;
  font-weight: 500;
`;
const Person = styled.div`
  color: #fff;
`;
const TextName = styled.h1`
  font-weight: 300;
`;
const SubText = styled.span`
  font-size: ${(props) => props.type === "faded" && "12px"};
  color: ${(props) => props.type === "faded" && "gray"};
`;
