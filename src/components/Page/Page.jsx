import React from "react"
import styled from "styled-components";
import TopBar from "../../components/TopBar"
import Footer from "../../components/Footer"


const Page = ({ children }) => {
return (
<StyledWrapper>
<TopBar/>
{children}
<Footer/>
</StyledWrapper>

    )
}
const StyledWrapper = styled.main`
background:${(props) => props.theme.color.ColorTwo};
color:${(props) => props.theme.color.ColorOne};
height:100vh;
`
export default Page;