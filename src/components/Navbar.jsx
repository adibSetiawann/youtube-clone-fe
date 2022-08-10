import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import LogoYoutube from "../img/youtube.png";

const Container = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  display: flex;
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding: 1px;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 25px;
  margin: auto 5px;
  color: ${({ theme }) => theme.text};
`;
const Image = styled.img`
  height: 35px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="random" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo>
          <Image src={LogoYoutube} alt="youtubelogo" />
          AdibTube
        </Logo>
        </Link>

        <Search>
          <Input placeholder="Search" />
          <SearchIcon />
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleIcon /> Sign In
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
