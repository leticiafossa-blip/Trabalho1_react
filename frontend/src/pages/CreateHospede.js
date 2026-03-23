import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createHospede } from '../services/handleHospedes';

function CreateHospede() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    cpf: '',
    numeroQuarto: '',
    dataInicio: '',
    dataFim: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Chamada ao backend via Axios (separada no service)
    createHospede(form)
      .then(() => {
        alert("Hóspede cadastrado com sucesso!");
        navigate('/hospedes'); // Redireciona para a lista
      })
      .catch(err => console.error("Erro ao cadastrar:", err));
  };

  return (
    <div className="content">
      <h2>Novo Cadastro de Hóspede</h2>
      <form onSubmit={handleSubmit} className="form-clean">
        <label>Nome:</label>
        <input name="nome" onChange={handleChange} required />
        
        <label>Sobrenome:</label>
        <input name="sobrenome" onChange={handleChange} required />
        
        <label>CPF:</label>
        <input name="cpf" onChange={handleChange} required />

        <label>Data de Nascimento:</label>
        <input name="dataNascimento" type ="date" onChange={handleChange} required />
        
        <label>Quarto:</label>
        <input name="numeroQuarto" type="number" onChange={handleChange} required />
        
        <label>Check-in</label>
        <input name="dataInicio" type="date" onChange={handleChange} required />

        <label>Check-out</label>
        <input name="dataFim" type="date" onChange={handleChange} required />

        <button type="submit" className="btn-add">Finalizar Cadastro</button>
      </form>
    </div>
  );
}

export default CreateHospede;