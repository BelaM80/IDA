import Head from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import Information from "./components/Information"
import styled from "styled-components/macro";
import Footer from "./components/Footer";
import WideVideo from "./components/WideVideo";
import Christian from "./assets/videos/Christian.mov";
import soren from "./assets/videos/SörenLink.mp4";
import heyde from "./assets/videos/DietmarHeyde.mp4";
import Perso from "./assets/videos/Personalrat-Duisburg.mp4";
import Harle from "./assets/videos/Harlekin.MP4";
import Ihk from "./assets/videos/IHKDuisburg.mp4";
import Herz from "./assets/videos/Herzenslust.MP4";
import queer from "./assets/videos/Queerflexiv.mp4";
import Green from "./assets/videos/Grüne.mp4";
import Bas from "./assets/videos/BärbelBas.mp4";
import PortraitVideo from "./components/PortraitVideo";
import sachsen from "./assets/videos/LSVDSachsen.mp4";
import Dor from "./assets/videos/DOR_2021.m4v";
import Jus from "./assets/videos/JUSOS.mp4";
import Feder from "./assets/videos/Federleicht.mp4";
import judu from "./assets/videos/JuDu.mp4";
import bb from "./assets/videos/LSVD-BB.mov";
import Positiv from "./assets/videos/PositivH.mp4";
import Tobias from "./assets/videos/PrinzTobias.mov";
import ls from "./assets/videos/LSVD-NRW.mp4";
import Sascha from "./assets/videos/IDAHOBIT_SPD.mp4";




const Div = styled.div`
display: flex;
justify-content: center;
`

const Main = styled.main`
 width: 50%;
 display: flex;
 flex-direction: column;
 align-content: center;
 align-self: center;
 margin-top: 1rem;
 @media (max-width: 1000px) {
   width: 100%;
 }

`

function App() {
  return (
    <>
    <GlobalStyle />
      <Head />
      <Div >
        <Main>
        <Information />
        <WideVideo headline="DUGay e.V."
                   videoSrc={Christian}/>
        <WideVideo headline="Sören Link (SPD) - Oberbürgermeister der Stadt Duisburg"
                   videoSrc={soren}/>
        <WideVideo headline="Dietmar Heyde (Die Grünen) - Bürgermeister der Stadt Rheinberg"
                   videoSrc={heyde}/> 
        <WideVideo headline="Personalrat der Stadt Duisburg"
                   videoSrc={Perso}/>            
        <WideVideo headline="Harlekin Duisburg"
                   videoSrc={Harle}/> 
        <WideVideo headline="IHK Duisburg"
                   videoSrc={Ihk}/> 
        <WideVideo headline="Herzenslust Duisburg"
                   videoSrc={Herz}/>
        <WideVideo headline="Queerflexiv"
                   videoSrc={queer}/> 
        <WideVideo headline="Die Grünen - Duisburg"
                   videoSrc={Green}/> 
        <WideVideo headline="Bärbel Bas (MdB) - SPD Duisburg"
                   videoSrc={Bas}/> 
        <PortraitVideo headline="LSVD Sachsen"
                        videoSrc={sachsen}/>
        <WideVideo headline="Deutsche Oper am Rhein - Düsseldorf/Duisburg"
                   videoSrc={Dor}/>
        <WideVideo headline="Mahmut Özdemir - MdB (SPD) und JUSOS - Duisburg"
                   videoSrc={Jus}/>
        <WideVideo headline="Federleicht - Duisburg"
                   videoSrc={Feder}/>
        <WideVideo headline="Junges Duisburg - Fraktion"
                   videoSrc={judu}/>
        <PortraitVideo headline="LSVD Berlin-Brandenburg"
                        videoSrc={bb}/>
        <WideVideo headline="POSITHIV HANDELN"
                   videoSrc={Positiv}/>
        <PortraitVideo headline="Prinz Tobias I. - Stadtprinz Duisburg"
                        videoSrc={Tobias}/>
        <WideVideo headline="LSVD NRW"
                   videoSrc={ls}/>
        <WideVideo headline="SPD Duisburg"
                   videoSrc={Sascha}/>
        </Main>
      </Div>
      <Footer />
    </>
  );
}

export default App;
