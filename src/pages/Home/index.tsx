// Importar os ícones necessários
import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useContext } from "react";

import { 
    
    HomeContainer,  
    StartCountdownButton, 
    StopCountdownButton, 
    
} from "./styles";
import { NewCycleForm } from "./Componentes/NewCycleForm";
import { Countdown } from "./Componentes/Countdown";
import { CyclesContext } from "../../contexts/CycleContext";


interface NewCycleFormData {
    task: string;
    minutesAmount: number
}



const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
});


export function Home() {
    const { activeCycle, createNewCycle, interruptCurrentCycle } = 
    useContext(CyclesContext)

    const newCycleForm= useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })
    
    const { handleSubmit, reset, watch } = newCycleForm

    function handleCreateNewCycle(data: NewCycleFormData ) {
        createNewCycle(data)
        reset()
    }

    

    const task = watch('task');
    const isSubmitDisabled = !task 


    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />
                
               { activeCycle ? (
                <StopCountdownButton onClick={interruptCurrentCycle} type="button">
                <HandPalm size={24}/>
                Interromper
                </StopCountdownButton>
               ) : (  
                <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                <Play size={24}/>
                Começar
           </StartCountdownButton>
           ) }
               
            </form>
        </HomeContainer>
    );
}