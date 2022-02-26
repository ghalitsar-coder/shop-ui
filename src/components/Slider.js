import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderImages, sliderItems } from "../data";
import { mobile } from "../responsive";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex < 1 ? 2 : slideIndex - 1);
    } else {
      setSlideIndex(slideIndex >= 2 ? 0 : slideIndex + 1);
    }
  };

  return (
    <Container>
      <Arrow onClick={() => handleClick("left")} direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, i) => (
          <Slide bg={item.bg} key={i}>
            <ImgContainer>
              <Image src={sliderImages[i].img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow onClick={() => handleClick("right")} direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  ${mobile({
    display: "none",
  })}
  position: relative;
  height: 100vh;
  display: flex;
  width: 100%;
  overflow: hidden;
  margin: 20px 0;
  /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); */
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: 1s;
  color: #000;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;
const Image = styled.img`
  height: 100%;
  display: block;
  width: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-top: -140px;
`;
const Description = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  height: 50px;
  border: 2px solid teal;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  transition: 250ms;
  cursor: pointer;
  &:hover {
    background-color: teal;
    color: #fff;
  }
  color: teal;
  letter-spacing: 2px;
`;
const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #aaa;
  cursor: pointer;
  right: ${(props) => props.direction === "right" && "50px"};
  left: ${(props) => props.direction === "left" && "50px"};
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: #ccc;
  justify-content: center;
  z-index: 2;
`;
