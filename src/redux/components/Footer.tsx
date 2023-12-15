import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <StWrapper>
            <StList>
                <li>by Hee Chan Kim</li>
            </StList>
        </StWrapper>
    );
}

export default Footer;

const StWrapper = styled.div`
    width: 100%;
    height: 140px;
    background-color: var(--footer-backgound);
`;

const StList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 140px;
    font-size: 1.5rem;
    color: var(--search-input-background-color);
`;
