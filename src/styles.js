import styled from 'styled-components';

export const ContentBox = styled.div`
    border: 0;
    padding: 30px;

    align-items: center;
    display: flex;
    flex-direction: column;

    overflow: hidden;
`

export const Button = styled.button`
    background-color: transparent;

    font-family: 'Poppins', sans-serif;
    font-size: 20pt;
    color: red;

    overflow: hidden;

    border-radius: 0.5rem;

    height: 10rem;
    width: 15rem;
    margin-top: 30px;
    box-shadow: 0 9px #999;

    border: 4px solid red;
    opacity: 0.5;

    cursor: pointer;

    transition: background-color 0.5s ease;

    &:hover{
        opacity: 1;
    }

    &:active{
        background-color: red;
        color: white;
        box-shadow: 0 5px #666;
        transform: translateY(5px);
    }

`
export const Option = styled.option`

`

export const SelectList = styled.select`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 15pt;

    width: 70%;
    height: 40px;

    overflow: hidden;

    border: none;
    background-color: #00b331;
    color: white;
    opacity: 0.7;

    cursor: pointer;

    transition: opacity 0.5s ease;

    &:active{
        background-color: white;
        color: #00b331;
    }

    &:hover{
        opacity: 1;
    }

`

export const Card = styled.div`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 20pt;

    background-color: #6ddfff;
    display: flex;
    flex-direction: row;
    height: 60px;
    width: 99%;
    justify-content: space-between;

    border: 2px solid red;
    margin: 0.5%;
    align-items: center;

    overflow-x: hidden;
    overflow-y: hidden;

    transition: background-color 0.5s ease;

    &:hover{
        background-color: white;
    }
`

export const BtnDelete = styled.button`
    margin: 0.5rem;

    background-color: transparent;

    border: 2px solid red;

    font-weight: bold;
    font-family: sans-serif;
    font-size: 15pt;
    color: red;

    &:hover{
        background-color: red;
        color: white;
        box-shadow: 0 7px #666;
    }

    &:active{
        box-shadow: 0 5px #666;
        transform: translateY(5px);
    }
`

export const Loading = styled.div`
    font-size: 30pt;

    font-family: sans-serif;
    font-weight: bold;
    margin: 0 auto;
`

export const LoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-items: center;
`
