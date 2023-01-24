import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import styled from "styled-components";
import CoursesPic from "../../assets/images/Courses/banner.png";
import Container from "../../components/Container";

const tab = [
  { title: "All Courses" },
  { title: "Fronend" },
  { title: "Backend" },
  { title: "Android" },
  { title: "My Courses" },
  { title: "React js" },
];

const coursesList = [
  {
    id: 1,
    pic: "/static/media/banner.96627a7241a6c7c89cce.png",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    price: "$6878",
    cat: "Fronend",
  },
  {
    id: 2,
    pic: "/static/media/login.46bb6d37f6289f8078b3.png",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    price: "$82627",
    cat: "Backend",
  },
  {
    id: 3,
    pic: "/static/media/login.46bb6d37f6289f8078b3.png",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    price: "$1299",
    cat: "Android",
  },
  {
    id: 4,
    pic: "/static/media/header.08b6e0fcf4d86fd26277.webp",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    price: "$8828",
    cat: "React js",
  },
  {
    id: 5,
    pic: "/static/media/banner.96627a7241a6c7c89cce.png",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    price: "$8382",
    cat: "Fronend",
  },
  {
    id: 6,
    pic: "/static/media/login.46bb6d37f6289f8078b3.png",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    price: "$129",
    cat: "Android",
  },
  {
    id: 7,
    pic: "/static/media/login.46bb6d37f6289f8078b3.png",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    price: "$5444",
    cat: "Backend",
  },
  {
    id: 8,
    pic: "/static/media/header.08b6e0fcf4d86fd26277.webp",
    content:
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries",
    price: "$855",
    cat: "React js",
  },
];
const Courses = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [course, setCourse] = useState(coursesList);
  const handleCategory = (index, event) => {
    if (activeItem === index) {
      setActiveItem(undefined);
    } else {
      setActiveItem(index);
    }
  };
  useEffect(() => {
    if (activeItem === undefined || activeItem === 0) {
      setCourse(coursesList);
    } else {
      setCourse(
        coursesList.filter((item) => item.cat === tab[activeItem].title)
      );
    }
  }, [activeItem]);

  return (
    <Page>
      <StyledHeader>
        <Container>
          <StyledBreadcrumb>
            <h4>Start your favorite cource</h4>
            <h1>
              Now Learning from
              <br />
              anywhere,and build
              <br />
              your <span>bright career.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Start A Course</button>
          </StyledBreadcrumb>
          <StyledPic>
            <img src={CoursesPic} alt="edu" />
          </StyledPic>
        </Container>
      </StyledHeader>
      <Container>
        <StyledWrapper>
          <h2>
            All <span>Courses</span> of Edule
          </h2>
          <StyledTabs>
            {tab.map((item, index) => {
              return (
                <StyledTab
                  className={activeItem === index ? "activetab" : null}
                  key={index}
                  onClick={() => handleCategory(index)}
                >
                  {item.title}
                </StyledTab>
              );
            })}
          </StyledTabs>
          <StyledItems>
            {course.map((item) => {
              return (
                <div>
                  <div>
                    <img src={`${item.pic}`} alt="edu" />
                  </div>
                  <h6>{item.cat}</h6>
                  <p>{item.content}</p>
                  <h5>
                    <span>{item.price}</span>
                    <span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                      <span class="fa fa-star"></span>
                    </span>
                  </h5>
                </div>
              );
            })}
          </StyledItems>
        </StyledWrapper>
      </Container>
    </Page>
  );
};

const StyledHeader=styled.div`
background:${(props) => props.theme.color.ColorFour};
min-height:300px;
padding:95px 0 20px 0;
>div{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    h4{
        margin:140px auto 8px auto;
        color:${(props) => props.theme.color.ColorThree};
    }
    @media(max-width:768px){
        h4{
            margin:0;
        }
    }
    h1{
        color:${(props) => props.theme.color.ColorOne};
        font-family:"PlayfairBold";
        font-size:2.6rem;
        span{
            color:${(props) => props.theme.color.ColorThree};
            margin-left:5px;
        }
    }
}
`
const StyledBreadcrumb=styled.div`
width:50%;
button{
    background:${(props) => props.theme.color.ColorThree};
    color:${(props) => props.theme.color.ColorTwo};
    border-radius:${(props) => props.theme.radius.RadiusOne};  
    padding: 10px;
    font-size: 1.1rem;
}
p {
    margin: 20px auto;
    line-height: 30px;
    font-size: 1.2rem;
}
@media(max-width:768px){
    width:100%;
}
`
const StyledPic=styled.div`
width:50%;
img{
    max-width: 100%;
    width: 500px;
}
@media(max-width:768px){
    width:100%;
}
`

const StyledWrapper=styled.div`
margin:40px auto;
h2{
    color:${(props) => props.theme.color.ColorOne};
    font-family:"PlayfairBold";
    font-size: 2.1rem;
    span{
        color:${(props) => props.theme.color.ColorThree};
        margin-left:5px;
    }
}
`
const StyledTabs=styled.div`
background:${(props) => props.theme.color.ColorFour};
border-radius:${(props) => props.theme.radius.RadiusOne};  
padding:10px;
margin-top:30px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
.activetab {
        border:1px solid ${(props) => props.theme.color.ColorThree}; 
}
`
const StyledTab=styled.div`
text-align: center;
background:${(props) => props.theme.color.ColorTwo};
border-radius: 5px;
padding: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    min-width: 15%;
`
const StyledItems=styled.div`
display:flex;
justify-content:center;
padding:30px 0;
flex-wrap:wrap;

>div{
    width: 23%;
    border: 3px solid ${(props) => props.theme.color.ColorFour};
    border-radius:10px;
    padding:20px;
    cursor:pointer;
    margin:10px;
    div{
        height: 200px;
        border-radius: 10px;
        background:${(props) => props.theme.color.ColorFour};
        padding: 5px;
        text-align: center;
        img{
            height:100%
        }
    }
    p{
        margin:15px auto;
        font-size:1.1rem;
    }
    h6 {
        background:${(props) => props.theme.color.ColorFour};
border-radius:${(props) => props.theme.radius.RadiusOne};  
        margin: 10px 0;
        text-align: center;
        padding: 5px;
    }
    h5{
        >span{
            &:first-child{
                color:${(props) => props.theme.color.ColorThree};
                font-family:"PlayfairBold";
                font-size: 1.4rem;   
            }
            &:last-child{
               float:right; 
               color:#fbaa17
            }
        }
    }
}
@media(max-width:1200px){
    >div{
        width:33%;
    }
}
@media(max-width:768px){
    >div{
        width:48%;
    }
}
@media(max-width:576px){
    >div{
        width:100%;
    }
}
`

export default Courses;