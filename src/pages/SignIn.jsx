import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess, logout } from "../redux/userSlice";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   untuk mengukur bahwa component di center
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.soft};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 90px;
  color: white;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft};
border-radius: 3px;
padding: 10px;
background-color: transparent
width: 100%`;

const Button = styled.button`
border-radius: 3px;
border:none;
padding: 10px 20px;
cursor:pointer
font-weight: 500;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  font-size: 12px;
  // justify-content: space-between;
  color: ${({ theme }) => theme.textSoft};
  margin-top:10px;
`;
const Links = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = async (e) => {
    // biar tidak refresh
    e.preventDefault()
    dispatch(loginStart())
    try{
      const res = await axios.post("/auth/signin", {name, password})
      console.log(res.data);
      dispatch(loginSuccess(res.data))
    }catch(err){
      dispatch(loginFailure())
    }

  }
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue AdibTube</SubTitle>
        <Input placeholder="username" onChange={e => setName(e.target.value)}/>
        <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Sign In</Button>
        <Title>Or</Title>
        <Input placeholder="username" onChange={e => setName(e.target.value)}/>
        <Input placeholder="email" onChange={e => setEmail(e.target.value)}/>
        <Input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
