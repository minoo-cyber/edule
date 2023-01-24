import React from "react"
import styled from "styled-components";

const Container = ( {children}) => {
    return (
        <StyledWrapper>
 {children}
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
margin:0 auto;
@media (min-width:320px) {
    max-width: 290px;
}
@media (min-width:400px) {
    max-width: 390px;
}
@media (min-width:576px) {
    max-width: 540px;
}
@media (min-width:768px) {
    max-width: 700px;
}

@media (min-width:992px) {
    max-width: 900px;
}

@media (min-width:1200px) {
    max-width: 1000px;
}
@media (min-width:1400px) {
max-width: 1200px;
}
@media (min-width:1600px) {
max-width: 1400px;
}
`
export default Container;