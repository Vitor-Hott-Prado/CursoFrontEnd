import { deleteOrdemServico, getOneOrdemServico, updateOrdemServico } from "@/controllers/OrdemServicoController";
import Usuario from "@/models/Usuario";
import { NextRequest, NextResponse } from "next/server";


interface Paremetro{
    id: string;
}

//PATH 
export async function PATCH(req: NextRequest, {params}: {params:Paremetro}){
    try {
        const {id}= params;
        const data = await req.json();
        const OrdemServicoAtualizado = await updateOrdemServico(id, data);
        //quando o servico não foi encotrado
       if(!OrdemServicoAtualizado){
            return NextResponse.json({success:false, error:"Not Found"});
        }
    } catch (error) {
    //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error});
        
    }
}



// GET(One)
export async function GET({params}:{params:Paremetro}) {
    try{
        const {id} = params;
        const usuario = await getOneOrdemServico(id);
        if(!usuario){
            return NextResponse.json({success:false, error:"Not Found"});
        }
        //Servico foi encontrado e atualizado
        return NextResponse.json({success:true, data: usuario});
    } catch (error) {
        //quando não consegue conexão com o bd
        return NextResponse.json({success:false, error:error});
    }
}

//DELETE
export async function DELETE({params}:{params:Paremetro}) {
    try {
        const {id} = params;
        await deleteOrdemServico(id);
        return NextResponse.json({success:true, data:{}});
    } catch (error) {
        return NextResponse.json({success:false, error:error});    
    }
}