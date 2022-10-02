import React from 'react';
import styled from 'styled-components';
import { authActions } from '../store/auth-slice';
import { useDispatch } from 'react-redux';

const Button = styled.button`
    background-color: #fbbf24;
    width: 15rem;
    padding: 1.2rem;
    color: white;
    font-size: 2rem;
    border-radius: 1rem;
    display: block;
    &:hover {
        cursor: pointer;
    }
    margin: 2rem;
`;

const HeaderDiv = styled.div`
    width: 95vw;
    background-color: #4338ca;
    height: 10rem;
    padding: 2rem 9rem 2rem 9rem;
    display: flex;
    justify-content: space-between;
    & h1 {
        font-size: 5rem;
        margin: 0;
        margin-left: 2rem;
    }
`;

const HeaderDiv2 = styled.div`
    width: fit-content;
    height: 10rem;
    display: flex;
    align-items: center;
    & h2,
    & Button {
        font-size: 2.5rem;
        font-weight: 500;
        margin: 0;
        margin-left: 5rem;
    }
`;

export const Header = () => {
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <HeaderDiv>
            <h1>React Redux</h1>
            <HeaderDiv2>
                <h2>My Products</h2>
                <h2>My Sales</h2>
                <Button onClick={logOutHandler}>Log Out</Button>
            </HeaderDiv2>
        </HeaderDiv>
    );
};
