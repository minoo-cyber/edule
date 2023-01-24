import React ,{useState} from "react";
import styled from "styled-components";
import Container from "../../components/Container"
import { NavLink,useNavigate } from 'react-router-dom'


const TopBar = () => {
  const [mobilemenu, setmobilemenu] = useState(false)
  const handlesetmobilemenu = () => {
    setmobilemenu(!mobilemenu)
  }
const navigate = useNavigate();
const handleRegister=()=>{
  localStorage.removeItem('accessToken')
  navigate('/register')
}

    return (
      <>
      <StyledWrapper>
        <Container>
        <StyleMobileNav onClick={handlesetmobilemenu}>
      <StyleMobilearrow></StyleMobilearrow>
      <StyleMobilearrow></StyleMobilearrow>
      <StyleMobilearrow></StyleMobilearrow>
    </StyleMobileNav>
        <StyledBottom>
        <StyledLogo>
        Edu<span>Le</span>
        </StyledLogo>
        <StyleMenu>
    <StyledItems  style={{ display: mobilemenu ? 'block' : null }}>
      <StyledItem>
        <StyledLink to="#">
       Home   
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="#">
        All Cource    
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="#">
        Pages  
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="#">
        Blog
        </StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="#">
        Contact
        </StyledLink>
      </StyledItem>
    </StyledItems>
    </StyleMenu>
    <StyledAuth>
    <StyledItems  style={{ display: mobilemenu ? 'block' : null }}>
    <StyledItem>
    <StyledLink to="/">
       Sign In  
        </StyledLink>
        </StyledItem>
        <StyledItem onClick={handleRegister}>
       Sign Up 
        </StyledItem>
        </StyledItems>
    </StyledAuth>
        </StyledBottom>
        </Container>
        </StyledWrapper>
        </>
    )
}

const StyleMobileNav = styled.div`
display: none;
width: 30px;
height: 30px;
cursor: pointer;
position: absolute;
right: 15px;
top: 17px;
  @media (max-width: 992px) {
    display: block;
  }
`
const StyleMobilearrow = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.color.ColorThree};
  margin: 5px auto;
`
const StyledWrapper= styled.div`
position: absolute;
width: 100%;
>div{
  position:relative;
}
`
const StyledBottom= styled.header`
border-radius:${(props) => props.theme.radius.RadiusOne};
display:flex;
border: 3px solid #def3e7;
padding: 10px;
margin-top: 18px;
border-radius: 5px;
`
const StyledLogo= styled.div`
font-family: "PlayfairBold";
    font-size: 1.8rem;
span{
  color:${(props) => props.theme.color.ColorThree};
}
`
const StyleMenu= styled.div`
flex: 1 0 0;
display: flex;
justify-content: center;
`
const StyledItems = styled.ul`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
fond-size:1.1rem;
@media (max-width: 992px) {
  background:rgba(82,147,86,0.9);
  display: none;
  position: absolute;
  top: 60px;
  width: 100%;
  left: 0;
  }
`
const StyledItem = styled.li`
min-width: 85px;
text-align: center;
font-size: 1rem;
padding: 11px 20px;
cursor:pointer;
@media (max-width: 992px) {
  text-align:left;
  a{
    color:#fff;
  }
}
`
const StyledLink = styled(NavLink)`
color:${(props) => props.theme.color.ColorOne};
font-weight: bold;
`
const StyledAuth = styled.div`
ul{
  li{
    &:last-child{
      border-radius:${(props) => props.theme.radius.RadiusOne};
      background: rgba(255,255,255,0.8);
      border: 3px solid #def3e7;
    }
  }
}
@media (max-width: 992px) {
  ul{
    li{
      color:#fff;
      &:last-child{
        border-radius:none;
        background: none;
        border:none;
      }
    }
  }  
}
`
export default TopBar;