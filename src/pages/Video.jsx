import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Comments from "../components/Comments";
import AvatarImage from "../img/avatar.png";
const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  flex: 6;
  gap: 24px;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0;
  border: 0px solid ${({ theme }) => theme.textSoft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <Iframe
            src="https://www.youtube.com/embed/U8xwcvz01cQ"
            height="480"
            width="100%"
            title="Mahadewi"
            frameBorder="0"
            autoplay="1"
            allow="accelerometer;
            fullscreen; autoplay; clipboard-white; encrypted-media; gyroscope; picture-in-picture"
          />
          <Title>Padi - Mahadewi</Title>
          <Details>
            <Info>7.232.123 views || Mar 21, 2013</Info>
            <Buttons>
              <Button>
                <ThumbUpIcon /> Like
              </Button>
              <Button>
                <ThumbDownIcon /> Dislike
              </Button>
              <Button>
                <ShareIcon /> Share
              </Button>
              <Button>
                <LibraryAddIcon /> Save
              </Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <Img src={AvatarImage} />
              <ChannelDetail>
                <ChannelName>Padi Official</ChannelName>
                <ChannelCounter>1M Subscribers</ChannelCounter>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptates! Iure explicabo aliquam inventore labore velit molestiae earum optio quidem, dolore ex? Fuga, aperiam quam!</Description>
              </ChannelDetail>
            </ChannelInfo>
            <Subscribe>SUBSCRIBE</Subscribe>
          </Channel>
          <Hr />
          <Comments />
        </VideoWrapper>
      </Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
};

export default Video;
