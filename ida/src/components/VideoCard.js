import styled from "styled-components/macro";
import Perso from "../assets/videos/Personalrat-Duisburg.mp4";
import Harle from "../assets/videos/Harlekin.MP4";
import Christian from "../assets/videos/Christian.mov";
import Ihk from "../assets/videos/IHKDuisburg.mp4";
import Herz from "../assets/videos/Herzenslust.MP4";
import Green from "../assets/videos/Grüne.mp4";
import Dor from "../assets/videos/DOR_2021.m4v";
import Jus from "../assets/videos/JUSOS.mp4";


const Div = styled.div`
 width: 100%;
 background-color: var(--primary-color);
 margin-top: 3rem;
 box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.42);
 h3 {
     margin-left: 1rem;
 }
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
            <h3>DuGay e.V.</h3>
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
            <h3>JUSOS - Duisburg</h3>
            <video controls src={Jus} width="100%" height="auto" />
        </Div>
    )
};




