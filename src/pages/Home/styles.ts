// Importações necessárias
import styled from "styled-components";

// Estilização do container principal da página Home
export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    // Estilização do formulário dentro do container principal
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem; // Espaçamento entre os elementos do formulário
    }
`










// Estilização do botão base para o contador regressivo
export const BaseCountdownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    

    // Estilização do botão quando desabilitado
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

`

// Estilização do botão de iniciar o contador regressivo
export const StartCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme['green-500']};

    // Estilização do botão ao passar o mouse
    &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
    }
`

// Estilização do botão de parar o contador regressivo
export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme['red-500']};
   

    // Estilização do botão ao passar o mouse
    &:not(:disabled):hover {
        background: ${(props) => props.theme['red-700']};
    }
`
