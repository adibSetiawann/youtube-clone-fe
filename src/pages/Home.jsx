import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  margin: 0 3rem;
`;
const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
        {videos.map((video) => (
          <Wrapper>
          <Card key={video._id} videos={video} />
          </Wrapper>
        ))}
    </Container>
  );
};

export default Home;
