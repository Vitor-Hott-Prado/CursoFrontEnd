//criar o login do usuario (POST) -> envia o email e senha -> retrona o usuario

import { autenticaUsuario } from "@/controllers/UsuarioController";
import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken"

//JWT (TOKEN)

const JWT_SECRET = process.env.JWT_SECRET;
if(!JWT_SECRET){
    throw new Error("JWT_SECRET não está definidonas vriasveis locais");
}

//comçar método
export async function POST(req: NextRequest){
    try {
        const{email, senha} = await req.json();
        //validar os dados 
        if(!email || !senha){
            return NextResponse.json({success:false, error:"Usuário são Obriatorios"});
        }
        //méodo de autenticar do usuario
        const usuario = await autenticaUsuario(email, senha);
        // se não encontrou um usúario
        if(!usuario){
            return NextResponse.json(
                {success:false, error:"Usúario ou Senha invalido"}
            );
        }
        //se foi encontradp => gerar o token => acessar as proximas páginas
        const token = jwt.sign(
            {id: usuario._id, nome: usuario.nome, funcao:usuario.funcao},
            JWT_SECRET as string,
            {expiresIn: "1h"}
        );
        return NextResponse.json({
            success:true,
            token,
            usuario:{
              id: usuario.id,
              nome: usuario.nome,
              funcao: usuario.funcao
            }
        })
    } catch (error) {
        return NextResponse.json({success:false, error: error});
    }
}