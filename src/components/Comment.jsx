import React from "react";
import styled from "styled-components";
import AvatarImage from '../img/avatar.png'

const Container = styled.div`
  display: flex;
  //   flex-direction: column;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const CommentText = styled.span`
  font-size: 14px;
`;
const Comment = () => {
  return (
    <Container>
      <Avatar src={AvatarImage}/>
      <Details>
        <Name>
          John Doe <Date> 1 Day ago</Date>
        </Name>
        <CommentText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, error consectetur nobis, facilis optio excepturi culpa, qui laudantium ipsa magnam soluta?</CommentText>
      </Details>
    </Container>
  );
};

export default Comment;
