import styled from "styled-components/macro";
import Perso from "../assets/videos/Personalrat-Duisburg.mp4";
import Harle from "../assets/videos/Harlekin.MP4";
import Christian from "../assets/videos/Christian.mov";


const Div = styled.div`
 width: 100%;
 background-color: var(--primary-color);
 margin-top: 3rem;
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
            <h3>Christian Karus - DuGay e.V.</h3>
            <video controls src={Christian} width="100%" height="auto" />
        </Div>
    )
};


