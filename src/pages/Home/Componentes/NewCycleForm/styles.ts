import { styled } from "styled-components"

// Estilização do container do formulário
export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem; // Espaçamento entre os elementos dentro do container
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`
// Estilização do input base para os campos do formulário
const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    
    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']}; 
    }

    &::placeholder {
        color: ${(props) => props.theme['gray-100']};
    }
`
// Estilização do campo de entrada de tarefas
export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

// Estilização do campo de entrada de minutos
export const MinutesAmontInput = styled(BaseInput)`
    width: 4rem;
`
