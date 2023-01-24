import React,{useContext,useState} from "react";
import Page from "../../components/Page"
import styled from "styled-components"
import RegisterPic from "../../assets/images/Register/register.webp"
import Container from "../../components/Container"
import HeaderPic from "../../assets/images/Register/header.webp"
import { NavLink,useNavigate } from 'react-router-dom'
import AuthContext from "../../contexts/Auth"

const Register = () => {
const checkAuthRegister = useContext(AuthContext);
const[fileName,setFileName]=useState("No File Choosen")
const navigate = useNavigate();

  const handleFileName=(event)=>{
    setFileName(event.target.value)
  } 
  
const handleSubmit=(event)=>{
    checkAuthRegister.setAccessToken(Math.random().toString(30).slice(2))
    if(checkAuthRegister.accessToken){
       navigate('/courses');
    }
   
}

    return (
        <Page>
            <StyledHeader>
            <Container>
                <StyledBreadcrumb>
                    <h6>
                       Home //    
                       <StyledLink to="/">
                       Register
                        </StyledLink>
                    </h6>
                <h1>Registration<span>Form</span></h1> 
                </StyledBreadcrumb>
                <StyledPic>
                   <img src={HeaderPic} alt="edu"/>
                    </StyledPic>
                    </Container>
            </StyledHeader>
            <Container>
<StyledWrapper>
    <StyledLeft>
    <img src={RegisterPic} alt="edu"/>
    </StyledLeft>
    <StyledRight>
    <h1>Registration<span>Now</span></h1>
   <form onSubmit={handleSubmit}>
    <StyledInput>
    <input type="text" placeholder="fullName" name="fullName"/>
    </StyledInput>
    <StyledInput>
    <input type="text" placeholder="email" name="email"/>
    </StyledInput>
    <StyledInput>
    <input type="password" placeholder="password" name="password" required/>
    </StyledInput>
    <StyledInput>
    <textarea placeholder="address" name="address"/>
    </StyledInput>
    <StyledItems>
        <div>
    <label for="file" id="fileLabel">Choose File</label>
    <input id="file" type="file" name="file"  onChange={handleFileName}/>
    <span>{fileName}</span>
    </div>
</StyledItems>
<StyledItems>
<input type="radio" id="mail" name="gender" value="mail"/>
  <label for="mail">Mail</label>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Female</label>
  </StyledItems>
<StyledItems>
    <input type="checkbox" name="rules"/>
<label>I agree to the Terms of user</label>
    </StyledItems>
       <button type="submit">Create an Account</button>
</form>
    </StyledRight>

</StyledWrapper>
</Container>
        </Page>
    )
}

const StyledHeader=styled.div`
background:${(props) => props.theme.color.ColorFour};
min-height:300px;
padding:95px 0 20px 0;
>div{
    display:flex;
    justify-content:space-between;
    flex-wrap: wrap;
    h6{
        font-family:"PlayfairBold";
        margin:140px auto 8px auto;
    }
    @media(max-width:768px){
        h6{
            margin:0;
        }   
    }
    h1{
        font-family:"PlayfairBold";
        font-size:3rem;
        span{
            color:${(props) => props.theme.color.ColorThree};
            margin-left:5px;
        }
    }
}
`
const StyledBreadcrumb=styled.div`
width:50%;
@media(max-width:768px){
    width:100% !important;
}
h1 {
    font-size: 2.6rem !important;
}
`
const StyledPic=styled.div`
width:50%;
img{
    max-width:100%;
}
@media(max-width:768px){
    width:100% !important;
}
`
const StyledLink = styled(NavLink)`
color:${(props) => props.theme.color.ColorThree};
`
const StyledWrapper=styled.div`
display:flex;
justify-content:space-between;
border:3px solid ${(props) => props.theme.color.ColorFour};
border-radius:${(props) => props.theme.radius.RadiusOne};
width: 1000px;
max-width: 100%;
margin:40px auto;
padding: 50px;
flex-wrap: wrap;
>div{
    width:40%;
}
@media(max-width:768px){
    >div{
        width:100%;
    }   
}
button{
    background:${(props) => props.theme.color.ColorThree};
    color:${(props) => props.theme.color.ColorTwo};
    border-radius:${(props) => props.theme.radius.RadiusOne};
    width:100%;
    text-align:center; 
    padding: 10px;
    font-size:1.2rem;
    font-family:"PlayfairBold";
}
`
const StyledLeft=styled.div`
background:${(props) => props.theme.color.ColorFour};
border-radius:${(props) => props.theme.radius.RadiusOne};
text-align: center;
padding: 10px;
img{
    max-width:100%;
}
`
const StyledRight=styled.div`
h1{
    font-family:"PlayfairBold";
    span{
        color:${(props) => props.theme.color.ColorThree};
        margin-left:5px;
    }
}
`
const StyledInput=styled.div`
border:2px solid ${(props) => props.theme.color.ColorFour};
border-radius:${(props) => props.theme.radius.RadiusOne};
margin:10px auto;
img{
    280px;
}
input,textarea{
    width: 100%;
    border: none;
    padding: 10px;
}

`
const StyledItems=styled.div`
margin:15px auto;
div{
    margin-top:17px;
}
label{
    margin-left:5px;
}
#file{
    display:none;
}
#fileLabel{
    cursor:pointer;
    border:2px solid ${(props) => props.theme.color.ColorFour};
    border-radius:${(props) => props.theme.radius.RadiusOne};
    padding: 5px 10px;
    margin:0;
}
#female{
    margin-left:10px;
}
span{
    margin-left:5px;
}
`
export default Register;