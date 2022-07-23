import React from "react";
import styled from "styled-components";
import LogoYoutube from "../img/youtube.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100%;
  color: white;
  font-size: 0.8rem;
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
border: 0.5px solid #373737;
`;
const Menu = () => {
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
        <Item>
            <SettingsBrightnessIcon /> Dark Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
