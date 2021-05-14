import Head from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Information from "./components/Information"
import styled from "styled-components/macro";
import { BaerbelBas, DuGay, Federleicht, Gruene, Harlekin, Herzenslust, IhkDuisburg, JuDu, Jusos, Lsvd, Oper, 
  Personalrat, PositivHandeln, PrinzTobias, Queerflexiv } from "./components/VideoCard";


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
        <Queerflexiv />
        <Gruene />
        <BaerbelBas />
        <Oper />
        <Jusos />
        <Federleicht />
        <PositivHandeln />
        <PrinzTobias />
        <Lsvd />
        </Main>
      </Div>
    </>
  );
}

export default App;
