import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    margin: 0;
    padding: 0 16px;
    border: 0;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    
    &:disabled {
        opacity: 0.5;
    }
`;

