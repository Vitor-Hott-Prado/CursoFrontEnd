"use client";
import { updateTarefa } from "@/controllers/tarefaController";
import { ITarefa } from "@/models/Tarefa";
import { asyncWrapProviders } from "async_hooks";
import { METHODS } from "http";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

 // indicar que é a tela usada pelo cliente-side

export default function Home(){
  //useState => armazenamento localStorage
  //armazena as tarefas em um vetor
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  //armazena o texto do input (campo de texto da pagina)
  const [newTarefa, setNewTarefa] = useState<string>("");

  //useEffect
  useEffect(()=>{
    //fazer o useEffect no carregamento da tela inicial
    fetchTarefas(); //carregar todas as Tarefas do Banco de Dados
  }, []);

  //carregar tarefas
  const fetchTarefas = async () => {
    try {
      const resposta = await fetch("/api/tarefas"); // realiza a conexão http  com o backend
      const data = await resposta.json(); // c verificar esta em Json
      if(data.success){
        setTarefas(data.data); // limpo o campo do inpu
        //se qussesse carregar as tarefas do Banco novamnete
        //fetchTarefas(); - service-side
      }
    } catch (error) {
      console.error(error);
    }
  }

  //add Tarefa
  const addTarefa = async (e: FormEvent) =>{
    e.preventDefault(); // evita o carregamento da tela
    if(!newTarefa.trim()) return;
    try {
      const resultado = await fetch("/api/tarefas",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({titulo:newTarefa})
      });
      const data = await resultado.json();
      if(data.success){ // se resultado for ok
        setTarefas([...tarefas, data.data]); // adiciona a nova tarefa no vetor
        setNewTarefa(""); // limpo o campo do input
      }
    } catch (error) {
      console.error(error);
    }
  }

//------------------------------------------------------------------------------------------
  //update Tarefa
  const atualizarTarefa = async (id: string, statusTarefa: boolean) => {
    try {
      const resposta = await fetch(`/api/tarefas/${id}`, {
        method: "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({concluida:!statusTarefa})
      });
      const data = await resposta.json();
      if(data.success){
        //server-side
        fetchTarefas();
        //setTarefas(tarefas.map((tarefa)=>
        // (tarefa._id ===id ? data.data : tarefa))) cliente-side
      }
    } catch (error) {
      
    }
  }


//------------------------------------------------------------------------------------------
  //delete Tarefa
const deletarTarefa = async (id: number) => {
  try {
    const resposta = await fetch(`/api/tarefas/${id}`, {
      method: "DELETE",
    });

    const data = await resposta.json();
    if (data.success) {
      // Remove a tarefa do estado local
      setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
    }
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
  }
};

//------------------------------------------------------------------------------------------



  return(
    <div>
      <h1>Lista de Tarefa</h1>
      <form onSubmit={addTarefa}>
        <input type="text"
        value={newTarefa}
        onChange={(e:ChangeEvent<HTMLInputElement>)=> setNewTarefa(e.target.value)} 
        placeholder="Adicione uma nova Tarefa"/>
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tarefas.map((tarefa)=> (
          <li key={tarefa._id.toString()}>
            <input type="checkbox" 
            checked={tarefa.concluida}
            onChange={()=>updateTarefa(tarefa._id.toString(), tarefa.concluida)}/>
            {tarefa.titulo}            
          </li>
        ))}
      </ul>

    </div>
  );
}