//script para criar um usuário admin para o site

import Usuario from "@/models/Usuario";
import connectMongo from "@/services/mongodb"

export const criarAdmin = async () =>{
    await connectMongo();
    const adminEmail = "admin@admin.com";
    //verificar se usuário já existe
    const adminExiste = await Usuario.findOne({email:adminEmail});

    // se não for encontrado
    if(!adminExiste){
        const admin = new Usuario({
            nome: "Administrador",
            email: adminEmail,
            senha: "admin123",
            funcao: "admin"
        });
        await admin.save(); //adiciona no banco
        console.log("Usuário ADmin criado com SUcesso");
    }else{
        console.log("Usuário Admin já Existe");
    }
}

criarAdmin().catch(console.error);//trata o erro