import React,{useContext,useState} from "react";
import Page from "../../components/Page"
import styled from "styled-components"
import HeaderPic from "../../assets/images/Login/header.webp"
import LoginPic from "../../assets/images/Login/login.png"
import Container from "../../components/Container"
import { NavLink,useNavigate } from 'react-router-dom'
import AuthContext from "../../contexts/Auth"
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login= () => {
const checkAuthLogin= useContext(AuthContext);
const [fullName,setFullName]=useState()
const [password,setPassword]=useState()

const handleFullName=(event)=>{
    setFullName(event.target.value)
}

const handlePassword=(event)=>{
    setPassword(event.target.value)
} 

const navigate = useNavigate();
const handleSubmit=(event)=>{
    checkAuthLogin.setAccessToken(Math.random().toString(30).slice(2))
    event.preventDefault();
    if(fullName==="maryam" && password==="binesh"){
       const handleNav=()=>{
            navigate('/courses')
        }
            toast.success('Login is successful !', {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
               onClose:handleNav
              })
    }
    else{
        toast.error('Login failed ! Please try again', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });     
    }
   
}

    return (
        <Page>
             <ToastContainer />
            <StyledHeader>
            <Container>
                <StyledBreadcrumb>
                    <h6>
                       Home //    
                       <StyledLink to="/">
                       Login
                        </StyledLink>
                    </h6>
                <h1>Login<span>Form</span></h1> 
                </StyledBreadcrumb>
                <StyledPic>
                   <img src={HeaderPic} alt="edu"/>
                    </StyledPic>
                    </Container>
            </StyledHeader>
            <Container>
<StyledWrapper>
    <StyledLeft>
    <img src={LoginPic} alt="edu"/>
    </StyledLeft>
    <StyledRight>
    <h1>Login<span>Now</span></h1>
   <form onSubmit={handleSubmit}>
    <StyledInput>
    <input type="text" placeholder="fullName" name="fullName" required onChange={handleFullName}/>
    </StyledInput>
    <StyledInput>
    <input type="password" placeholder="password" name="password" required onChange={handlePassword}/>
    </StyledInput>
    <StyledInput>
    <input type="text" placeholder="email" name="email"/>
    </StyledInput>
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
    flex-wrap:wrap;
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
const StyledBreadcrumb=styled.div``
const StyledPic=styled.div`
img{
    max-width:100%;
}
`
const StyledLink = styled(NavLink)`
color:${(props) => props.theme.color.ColorThree};
`
const StyledWrapper=styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
border:3px solid ${(props) => props.theme.color.ColorFour};
border-radius:${(props) => props.theme.radius.RadiusOne};
width: 1000px;
max-width: 100%;
margin:40px auto;
padding: 50px;
flex-wrap:wrap;
>div{
    width:40%;
    img{
        max-width:100%;
    }
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

export default Login;