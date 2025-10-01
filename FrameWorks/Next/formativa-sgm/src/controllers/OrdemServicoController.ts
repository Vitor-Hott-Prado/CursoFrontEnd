// getAll

import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb";

export const getALLOrdemServico = async() =>{
    await connectMongo(); //estabelece conexão ???
    const ordemServicos = await OrdemServico.find([]);
    return ordemServicos;
};

//getOne
export const getONeOrdemServico = async(id:string) =>{
    await connectMongo(); //estabelece conexão
    const ordemServico = await OrdemServico.findById(id); //listar todos os usuários da coleção
    return ordemServico;
}


//create
export const createOrdemServico = async(data: Partial<IOrdemServico>) =>{
    await connectMongo();
    const novaOrdemServico = new OrdemServico(data);  // cria um usuario a partir do Schema
    const novaOrdemServicoId = novaOrdemServico.save();
    return novaOrdemServicoId; //retorna o novo usuário já com o ID
};

//update
export const updateOrdemServico = async(id:string, data: Partial<IOrdemServico>) =>{
    await connectMongo();
    const ordemServicoAtualizado = await OrdemServico.findById
    (id, data, {new:true});
    return ordemServicoAtualizado; //retorna o novo usuário Atualizado
};

//delete
export const deleteOrdemServico = async(id: string) =>{
    await connectMongo();
    await OrdemServico.findByIdAndDelete(id);
};