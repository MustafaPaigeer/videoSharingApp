import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("/videos/random")
      setVideos(res.data)
      console.log(res.data)
    }
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map(video=> (
      <Card />
      ))}
    </Container>
  );
};

export default Home;
