import styled from "styled-components/macro";

const Foot = styled.div`
display: flex;
 width: 100%;
 background-color: var(--primary-color);
 display: grid;
 justify-content: center;
 margin-top: 2rem;
 padding: 1rem;
 a {
     color: #959595;
     display: block;
    text-decoration: none;
    font-family: var(--paragraph-font);
    font-size: 0.6rem;
 } 

`
const Footer = () => {
    return(
        <Foot>
            <div>
                <a href="http://dugay.de/datenschutzerklaerung-2/">Datenschutz</a>
                <a href="http://dugay.de/impressum-2/">Impressum</a>
                <a href="http://dugay.de/">DU-Gay</a>
                <a href="mailto: info@dugay.de" >Email</a>
            </div>
        </Foot>
    )
}

export default Footer;