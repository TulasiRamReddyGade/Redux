import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions, counterActions } from '../store';

const Formf = styled.form`
    width: 50rem;
    background-color: white;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    & input[type='text'],
    & input[type='password'] {
        width: 25rem;
        padding: 1rem;
        font-size: 1.5rem;
    }
    & input[type='submit'] {
        background-color: #fbbf24;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        &:hover {
            cursor: pointer;
        }
    }
    margin-top: 10rem;
`;

export const Form = () => {
    const inputRef = useRef();
    const passRef = useRef();

    const dispatch = useDispatch();

    const formHandler = (e) => {
        e.preventDefault();
        // if(passRef===)
        dispatch(authActions.login());
        dispatch(counterActions.resetAll());
    };
    return (
        <Formf onSubmit={formHandler}>
            <input type={'text'} placeholder="Enter your name" ref={inputRef} />
            <input
                type={'password'}
                placeholder="Enter your password"
                ref={passRef}
            />
            <input type={'submit'} value="Login" />
        </Formf>
    );
};
