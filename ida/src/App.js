import Head from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Information from "./components/Information"
import styled from "styled-components/macro";
import { DuGay, Gruene, Harlekin, Herzenslust, IhkDuisburg, Jusos, Oper, 
  Personalrat, PositivHandeln } from "./components/VideoCard";


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
        <DuGay />
        <Personalrat />
        <Harlekin />
        <IhkDuisburg />
        <Herzenslust />
        <Gruene />
        <Oper />
        <Jusos />
        <PositivHandeln />
        </Main>
      </Div>
    </>
  );
}

export default App;
