// app/secretaria/page.tsx
'use client';
import { useState, useEffect } from 'react';

interface Medico {
  _id: string;
  nome: string;
  especialidade: string;
}

export default function SecretariaPage() {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const carregarMedicos = async () => {
    try {
      const response = await fetch('/api/medicos');
      const data = await response.json();
      if (data.success) setMedicos(data.data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const criarMedico = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/medicos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, especialidade })
      });
      const data = await response.json();
      if (data.success) {
        alert('Médico criado!');
        setNome('');
        setEspecialidade('');
        carregarMedicos();
      }
    } catch (error) {
      alert('Erro ao criar médico');
    }
  };

  useEffect(() => {
    carregarMedicos();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🏥 Painel da Secretaria</h1>
      
      <form onSubmit={criarMedico} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ccc' }}>
        <h3>Cadastrar Médico</h3>
        <input
          type="text"
          placeholder="Nome do médico"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
          required
        />
        <input
          type="text"
          placeholder="Especialidade"
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
          required
        />
        <button type="submit" style={{ padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none' }}>
          Cadastrar Médico
        </button>
      </form>

      <div>
        <h3>Médicos Cadastrados ({medicos.length})</h3>
        {medicos.length === 0 ? (
          <p>Nenhum médico cadastrado.</p>
        ) : (
          medicos.map((medico) => (
            <div key={medico._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px 0' }}>
              <strong>👨‍⚕️ {medico.nome}</strong> - 📚 {medico.especialidade}
            </div>
          ))
        )}
      </div>
    </div>
  );
}