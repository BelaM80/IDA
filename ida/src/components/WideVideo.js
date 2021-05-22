import styled from "styled-components/macro";

const Div = styled.div`
 width: 100%;
 background-color: var(--primary-color);
 margin-top: 3rem;
 box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.42);
 h3 {
     margin-left: 1rem;
 }
`

const WideVideo = item => {
    return(
        <Div>
            <h3>{item.headline}</h3>
            <video controls src={item.videoSrc} width="100%" height="auto" />
        </Div>
    )
};

export default WideVideo;