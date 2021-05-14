import styled from "styled-components/macro";
import Arrow from "../assets/arrow-right.svg";
import Logo from "../assets/LOGO-DUGAY.svg"

const Header = styled.header`
 width: 100%;
 background-color: var(--primary-color);
 display: grid;
 grid-template-rows: 1fr, 1fr;
 justify-content: center;
 padding: 0 0.2rem;
`;


const Link = styled.div`
 display: flex;
 justify-content: flex-end;

    a {
        text-decoration: none;
        color: var(--secondary-color);
        font-size: 1rem;
    }

    img {
        margin: 0 0.2rem;

    }
 
`
const Head = () => {

    return(
        <Header>
            <h1>IDAHOBIT DUISBURG 2021</h1>
            <Link>
                <a href="http://dugay.de/">
                    Visit
                    <img src={Arrow} alt="#" width="20" height="22"/>
                    <img src={Logo} alt="#" width="117" height="26"/>
                </a>
            </Link>
        
        </Header>
    )
}

export default Head;