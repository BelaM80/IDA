import Head from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Information from "./components/Information"
import styled from "styled-components/macro";

const Div = styled.div`
display: flex;
justify-content: center;
`

const Main = styled.main`
 width: 40%;
 display: flex;
 flex-direction: column;
 align-content: center;
 align-self: center;
 margin-top: 1rem;

`

function App() {
  return (
    <>
    <GlobalStyle />
      <Head />
      <Div >
        <Main>
        <Information />
        </Main>
      </Div>
    </>
  );
}

export default App;
