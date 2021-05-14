import styled from "styled-components/macro";
import Perso from "../assets/videos/Personalrat-Duisburg.mp4";
import Harle from "../assets/videos/Harlekin.MP4";

const Div = styled.div`
 width: 100%;
 background-color: var(--primary-color);
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



