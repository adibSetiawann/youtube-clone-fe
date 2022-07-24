import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 180px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.div`
  width: 100%;
  height: 101px;
  background-color: #999;
`;

const Details = styled.div`
 display: flex;
 margin-top: 16px;
 gap: 12px;
`;
const ChannelImage = styled.div`
  width: 24px;
  height: 24px;
  background-color: #999;
  border-radius: 50%;
`;

const Texts = styled.div`
//  display: flex;
`;

const Title = styled.h1`
 font-size: 0.9rem;
 color: ${({theme}) => theme.text};
 font-weight: 500;
`;

const ChannelName = styled.h2`
font-size: 0.7rem;
color: ${({theme}) => theme.textSoft};
margin: 7px 0;
`;

const InfoVideo = styled.div`
font-size: 0.7rem;
color: ${({theme}) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video" style={{textDecoration:"none"}}>
    <Container>
      <Image alt='video card component' src="https://picsum.photos/seed/picsum/400"/>
      <Details>
        <ChannelImage />
        <Texts>
            <Title>Test Video</Title>
            <ChannelName>Adib Setiawan</ChannelName>
            <InfoVideo>12 views || 2 year ago</InfoVideo>
        </Texts>
      </Details>
    </Container>
    </Link>
  );
};

export default Card;
