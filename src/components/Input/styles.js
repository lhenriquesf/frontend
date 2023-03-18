import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    margin-bottom: 8px;
    border-radius: 10px;

    padding-left: 10px;

    >input{

        height: 56px;
        width: 100%;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        margin-left: 10px;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.ORANGE};
        }
    }
`;