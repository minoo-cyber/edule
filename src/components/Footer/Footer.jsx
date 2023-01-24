import React from "react"
import styled from "styled-components";
import Container from "../../components/Container"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <StyledWrapper>
      <StyledTop>
      <Container>
      
<div>
  <h5>Ready to start?</h5>
  <p>
    Download our mobile app.
    <br/>
    for easy to start your course.
  </p>
</div>
<div>
          <button>
            Google Play
          </button>
          <button>
           App Store
          </button>
        </div>

</Container>
      </StyledTop>
        <StyledBottom>
        <Container>

<StyledPart>
<StyledLogo>
        Edu<span>Le</span>
        </StyledLogo>
        <ul>
          <li><span className="fa fa-map"></span>Address : Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</li>
          <li><span className="fa fa-phone"></span>Tel: 999 112 111 - 123 141 101 100</li>
          <li><span className="fa fa-fax"></span>Fax:123 141 101 100</li>
          <li><span className="fa fa-envelope-o"></span>Email : edule@gmail.com</li>
        </ul>
</StyledPart>
<StyledPart>
  <h4>Category</h4>
        <ul>
     <li> 
        <StyledLink to="/">
        VideoCat
        </StyledLink>
        </li>
        <li> 
        <StyledLink to="/">
        PodcastCat
        </StyledLink>
        </li>
        <li> 
        <StyledLink to="/">
        SoundCat
        </StyledLink>
        </li>
        <li> 
        <StyledLink to="/">
        ImageCat
        </StyledLink>
        </li>
        <li> 
        <StyledLink to="/">
       GalleryCat
        </StyledLink>
        </li>
        </ul>
</StyledPart>
<StyledPart>
  <h4>QuiCK Link</h4>
        <ul>
     <li> 
        <StyledLink to="/">
        Home   
        </StyledLink>
        </li>
        <li> 
        <StyledLink to="/">
        All Cource   
        </StyledLink>
        </li>
        <li> 
        <StyledLink to="/">
        Pages 
        </StyledLink>
        </li>
        <li> 
        <StyledLink to="/">
        Blog
        </StyledLink>
        </li>
        <li> 
        <StyledLink to="/">
        Contact
        </StyledLink>
        </li>
        </ul>
</StyledPart>
<StyledPart>
  <h4>Subscribe</h4>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </p>
    <form>
      <input type="text" name="subscribe" placeholder="Email here"/>
      <button type="submit">Subscribe Now</button>
    </form>
</StyledPart>
</Container>

        </StyledBottom>
        </StyledWrapper>

    )
}

const StyledWrapper = styled.footer``
const StyledTop = styled.div`
background:${(props) => props.theme.color.ColorThree};
padding:20px 0;
display:flex;
justify-content:space-between;
>div{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  color:${(props) => props.theme.color.ColorTwo};
  width: 100%;
  button{
    background:${(props) => props.theme.color.ColorTwo};
    border-radius:${(props) => props.theme.radius.RadiusOne};
    margin: 20px;
    padding: 10px;
    position:relative;
    top: 13px;
  }
 p{
    font-size: 2rem;
}
}
`
const StyledBottom = styled.div`
background:${(props) => props.theme.color.ColorFour};
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:40px 0;
>div{
  display:flex;
  flex-wrap:wrap;
}

`
const StyledPart = styled.div`
width:25%;
font-size:1.1rem;
padding:0 15px;
ul{
  margin-top: 20px;
  li{
    padding: 5px 0;
    line-height: 23px;
    span{
      color:${(props) => props.theme.color.ColorThree};
      margin-right:5px;
    }
  }
}
h4{
  font-family:"PlayfairBold";
  margin-top:12px;
}
p{
  margin-top: 20px;
}
input{
  width: 100%;
  background:${(props) => props.theme.color.ColorTwo};
  border-radius:${(props) => props.theme.radius.RadiusOne};
  margin: 20px auto;
  padding: 10px;
}
button{
  background:${(props) => props.theme.color.ColorThree};
  border-radius:${(props) => props.theme.radius.RadiusOne};
  color:${(props) => props.theme.color.ColorTwo};
  padding: 10px;
  font-size:1.1rem;
}
@media(max-width:992px){
  width:50%;
}
@media(max-width:576px){
  width:100%;
}
`
const StyledLogo= styled.div`
font-family: "PlayfairBold";
    font-size: 1.8rem;
span{
  color:${(props) => props.theme.color.ColorThree};
}
`
const StyledLink = styled(NavLink)`
color:${(props) => props.theme.color.ColorOne};
`
export default Footer;