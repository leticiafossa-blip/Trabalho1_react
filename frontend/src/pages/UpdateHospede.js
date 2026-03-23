import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getHospedeById, updateHospede } from '../services/handleHospedes';

function UpdateHospede() {
  const { id } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '', sobrenome: '', cpf: '', numeroQuarto: ''
  });

  // Busca os dados atuais do hóspede ao abrir a tela
  useEffect(() => {
    getHospedeById(id)
      .then(res => setForm(res.data))
      .catch(err => console.error("Hóspede não encontrado", err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHospede(id, form).then(() => {
      alert("Hóspede atualizado!");
      navigate('/hospedes');
    });
  };

  return (
    <div className="content">
      <h2>Editar Hóspede</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input 
          value={form.nome} 
          onChange={(e) => setForm({...form, nome: e.target.value})} 
        />
        <label>Sobrenome:</label>
        <input 
          value={form.sobrenome} 
          onChange={(e) => setForm({...form, sobrenome: e.target.value})} 
        />
        <label>CPF:</label>
        <input 
          value={form.cpf} 
          onChange={(e) => setForm({...form, cpf: e.target.value})} 
        />
        
        {/* DESAFIO PARA VOCÊ: Adicione aqui os inputs de Sobrenome, CPF e Quarto seguindo o exemplo acima */}
        
        <button type="submit" className="btn-edit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default UpdateHospede;