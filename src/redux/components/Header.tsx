import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "./common/Button";

function Header() {
    return (
        <>
            <StyledBtn>
                <StyledTitle>
                    <span>To Do List</span>
                </StyledTitle>
            </StyledBtn>
        </>
    );
}

const StyledBtn = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: var(--header-color); */
    background-color: lightgray;
    /* div {
        display: flex;
        margin-right: 300px;
    } */
`;

const StyledTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-left: 300px;
    color: var(--header-font-color);
    height: 120px;
`;

export default Header;
