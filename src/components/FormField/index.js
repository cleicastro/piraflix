import React from "react";
import styled from 'styled-components';

const Input = styled.input`
    height: 40px;
    width: 100vw;
    background-color: rgb(102, 102, 102);
    margin: 20px;
    ::placeholder {
       color:  rgb(255, 255, 255);
   }
`;

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-content: center;
`;

function FormField({ label, type, name, value, onChange }) {
    return (
        <Container>
            <Input
                placeholder={label}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
            />
        </Container>
    )
}

export default FormField;