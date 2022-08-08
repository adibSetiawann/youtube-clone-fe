import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 15px;
`;
const Image = styled.div`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "70px" : "160px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.div`
  width: 24px;
  height: 24px;
  background-color: #999;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  //  display: flex;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.type === "sm" ? "0.8rem" : "0.9rem")};
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

const ChannelName = styled.h2`
  font-size: ${(props) => (props.type === "sm" ? "0.6rem" : "0.7rem")};
  color: ${({ theme }) => theme.textSoft};
  margin: 7px 0;
`;

const InfoVideo = styled.div`
  font-size: ${(props) => (props.type === "sm" ? "0.6rem" : "0.7rem")};
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} alt="video card component" src="https://picsum.photos/seed/picsum/400" />
        <Details type={type}>
          <ChannelImage type={type} />
          <Texts>
            <Title type={type}>Test Video</Title>
            <ChannelName type={type}>Adib Setiawan</ChannelName>
            <InfoVideo type={type}>12 views &bull; 2 year ago</InfoVideo>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
