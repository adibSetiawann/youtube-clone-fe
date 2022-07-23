import React from "react";
import styled from "styled-components";
import LogoYoutube from "../img/youtube.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100%;
  color: ${({ theme }) => theme.text};
  font-size: 0.8rem;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Image = styled.img`
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  margin-bottom: 10px;
`;
const Button = styled.button`
  display: flex;
  align-items: centre;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkmode }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src={LogoYoutube} alt="youtubelogo" />
          AdibTube
        </Logo>
        <Item>
          <HomeIcon /> Home
        </Item>
        <Item>
          <ExploreIcon /> Explore
        </Item>
        <Item>
          <SubscriptionsIcon /> Subscriptsion
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon /> Library
        </Item>
        <Item>
          <HistoryIcon /> History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos. comment. and subscribe.
          <Button>
            <AccountCircleIcon /> Sign In
          </Button>
        </Login>
        <Hr />
        <Title> Best of Adib Tube</Title>
        <Item>
          <LibraryMusicIcon /> Music
        </Item>
        <Item>
          <SportsBasketballIcon /> Sports
        </Item>
        <Item>
          <SportsEsportsIcon /> Gaming
        </Item>
        <Item>
          <MovieIcon /> Movie
        </Item>
        <Item>
          <NewspaperIcon /> News
        </Item>
        <Item>
          <LiveTvIcon /> Live
        </Item>
        <Hr />
        <Item>
          <SettingsIcon /> Settings
        </Item>
        <Item>
          <FlagIcon /> Report
        </Item>
        <Item>
          <HelpIcon /> Help
        </Item>
        <Item onClick={() => setDarkmode(!darkMode)}>
          <SettingsBrightnessIcon /> Dark Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;