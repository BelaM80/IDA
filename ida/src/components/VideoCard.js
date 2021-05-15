import styled from "styled-components/macro";
import Perso from "../assets/videos/Personalrat-Duisburg.mp4";
import Harle from "../assets/videos/Harlekin.MP4";
import Christian from "../assets/videos/Christian.mov";
import Ihk from "../assets/videos/IHKDuisburg.mp4";
import Herz from "../assets/videos/Herzenslust.MP4";
import Green from "../assets/videos/Grüne.mp4";
import Dor from "../assets/videos/DOR_2021.m4v";
import Jus from "../assets/videos/JUSOS.mp4";
import Positiv from "../assets/videos/PositivH.mp4";
import Feder from "../assets/videos/Federleicht.mp4";
import Tobias from "../assets/videos/PrinzTobias.mov";
import ls from "../assets/videos/Video-LSVD.mp4";
import queer from "../assets/videos/Video-Queerflexiv.mp4";
import Bas from "../assets/videos/BärbelBas.mp4";
import Sascha from "../assets/videos/IDAHOBIT_SPD.mp4";
import bb from "../assets/videos/LSVD-BB.mov";
import sachsen from "../assets/videos/LSVDSachsen.mp4";
import soren from "../assets/videos/SörenLink.mp4";
import heyde from "../assets/videos/DietmarHeyde.mp4";
import judu from "../assets/videos/JuDu.mp4";


const Div = styled.div`
 width: 100%;
 background-color: var(--primary-color);
 margin-top: 3rem;
 box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.42);
 h3 {
     margin-left: 1rem;
 }
`

const Rahmen = styled.div`
display: flex;
 width: 50%;
 margin: 0 auto;
`

 export function Personalrat () {
    return(
        <Div>
            <h3>Personalrat der Stadt Duisburg</h3>
            <video controls src={Perso} width="100%" height="auto" />
        </Div>
    )
};

export function Harlekin () {
    return(
        <Div>
            <h3>Harlekin Duisburg</h3>
            <video controls src={Harle} width="100%" height="auto" />
        </Div>
    )
};

export function DuGay () {
    return(
        <Div>
            <h3>DUGay e.V.</h3>
            <video controls src={Christian} width="100%" height="auto" />
        </Div>
    )
};

export function IhkDuisburg () {
    return(
        <Div>
            <h3>IHK Duisburg</h3>
            <video controls src={Ihk} width="100%" height="auto" />
        </Div>
    )
};

export function Herzenslust () {
    return(
        <Div>
            <h3>Herzenslust Duisburg</h3>
            <video controls src={Herz} width="100%" height="auto" />
        </Div>
    )
};
export function Gruene () {
    return(
        <Div>
            <h3>Die Grünen - Duisburg</h3>
            <video controls src={Green} width="100%" height="auto" />
        </Div>
    )
};

export function Oper () {
    return(
        <Div>
            <h3>Deutsche Oper am Rhein - Düsseldorf/Duisburg</h3>
            <video controls src={Dor} width="100%" height="auto" />
        </Div>
    )
};

export function Jusos () {
    return(
        <Div>
            <h3>Mahmut Özdemir - MdB (SPD) und JUSOS - Duisburg</h3>
            <video controls src={Jus} width="100%" height="auto" />
        </Div>
    )
};

export function PositivHandeln () {
    return(
        <Div>
            <h3>POSITHIV HANDELN</h3>
            <video controls src={Positiv} width="100%" height="auto" />
        </Div>
    )
};

export function Federleicht () {
    return(
        <Div>
            <h3>Federleicht - Duisburg</h3>
            <video controls src={Feder} width="100%" height="auto" />
        </Div>
    )
};

export function PrinzTobias () {
    return(
        <Div>
            <h3>Prinz Tobias I. - Stadtprinz Duisburg</h3>
            <Rahmen>
            <video controls src={Tobias} width="100%" height="auto" />
            </Rahmen>
        </Div>
    )
};

export function Lsvd () {
    return(
        <Div>
            <h3>LSVD NRW</h3>
            <video controls src={ls} width="100%" height="auto" />
        </Div>
    )
};

export function Queerflexiv () {
    return(
        <Div>
            <h3>Queerflexiv</h3>
            <video controls src={queer} width="100%" height="auto" />
        </Div>
    )
};

export function BaerbelBas () {
    return(
        <Div>
            <h3>Bärbel Bas (MdB) - SPD Duisburg</h3>
            <video controls src={Bas} width="100%" height="auto" />
        </Div>
    )
};

export function SpdQueer () {
    return(
        <Div>
            <h3>SPD Duisburg</h3>
            <video controls src={Sascha} width="100%" height="auto" />
        </Div>
    )
};

export function LsvdBb () {
    return(
        <Div>
            <h3>LSVD Berlin-Brandenburg</h3>
            <Rahmen>
            <video controls src={bb} width="100%" height="auto" />
            </Rahmen>
        </Div>
    )
};

export function LsvdSachsen () {
    return(
        <Div>
            <h3>LSVD Sachsen</h3>
            <Rahmen>
            <video controls src={sachsen} width="100%" height="auto" />
            </Rahmen>
        </Div>
    )
};

export function ObDu () {
    return(
        <Div>
            <h3>Sören Link (SPD) - Oberbürgermeister der Stadt Duisburg</h3>
            <video controls src={soren} width="100%" height="auto" />
        </Div>
    )
};

export function Heyde () {
    return(
        <Div>
            <h3>Dietmar Heyde (Die Grünen) - Bürgermeister der Stadt Rheinberg</h3>
            <video controls src={heyde} width="100%" height="auto" />
        </Div>
    )
};

export function JuDu () {
    return(
        <Div>
            <h3>Junges Duisburg - Fraktion</h3>
            <video controls src={judu} width="100%" height="auto" />
        </Div>
    )
};


