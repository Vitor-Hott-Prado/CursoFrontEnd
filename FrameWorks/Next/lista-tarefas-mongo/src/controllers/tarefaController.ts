

// Funçoes do Controller 

import Tarefa, { ITarefa } from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";

//get - Pega as tarefas do banco e retorna em um  vetor de tarefas 
export const getAllTarefas = async(): Promise<ITarefa[]> => {
    await connectMongo(); // estabelece a coneção  
    const tarefas = await Tarefa.find({}); // pega todas as tarefas da colçã tarefas 
    return tarefas; 
}

//post -> insere uma tarefa na coleção (id inserido automaticamnete)
export const createTarefa = async (data: Partial<ITarefa>): Promise<ITarefa> =>{
    await connectMongo();
    const tarefa = await Tarefa.create(data);
    return tarefa; //retorna a tarefa com ID 
}

//patch -> passa o id + o que será alterado 
export const updateTarefa = async(id: string, data: Partial<ITarefa>): Promise<ITarefa | null> =>{
    await connectMongo();
    const tarefa = await Tarefa.findByIdAndUpdate(id, data, {
        new: true, runValidators: true
    });
    return tarefa; // retyorna a tarefa já atualizada 
}

//delete
export const deleteTarefa = async(id:string):Promise<boolean> =>{
    await connectMongo();
    const resultado = await Tarefa.deleteOne({_id:id})
    return resultado.deletedCount>0;
    
}