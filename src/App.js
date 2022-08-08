import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Loader from "./components/Loader";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  overflow: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  margin-top: 56px;
  margin-left: 15%;
  padding: 22px 76px;
  padding-right: 0;
`;

function App() {
  const [darkMode, setDarkmode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkmode={setDarkmode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="random" index element={<Home type="random" />} />
                  <Route path="trends" index element={<Home type="trends" />} />
                  <Route path="sub" index element={<Home type="sub" />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                  <Route path="/loader" element={<Loader />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
