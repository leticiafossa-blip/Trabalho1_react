import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHospedes, deleteHospede } from '../services/handleHospedes';

function ListHospedes() {
  const [hospedes, setHospedes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensagem, setMensagem] = useState('');

  // 1. Função para carregar os dados
  const carregarDados = () => {
    setLoading(true);
    getHospedes()
      .then(response => {
        setHospedes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar hóspedes:", error);
        setLoading(false);
      });
  };

  // 2. useEffect roda assim que a tela abre
  useEffect(() => {
    carregarDados();
  }, []);

  // 3. Função para Deletar
  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja remover este hóspede?")) {
      deleteHospede(id)
        .then(() => {
          setMensagem("Hóspede removido com sucesso!");
          carregarDados(); // Recarrega a lista após deletar
        })
        .catch(() => alert("Erro ao deletar hóspede."));
    }
  };

  return (
    <div className="content">
      <h2>Lista de Hóspedes</h2>
      
      {mensagem && <p className="alert-success">{mensagem}</p>}
      
      <Link to="/hospedes/novo">
        <button className="btn-add">Cadastrar Novo Hóspede</button>
      </Link>

      {loading ? <p>Carregando hóspedes...</p> : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data Nascimento</th>
              <th>Quarto</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {hospedes.map(h => (
              <tr key={h.id}>
                <td>{h.nome} {h.sobrenome}</td>
                <td>{h.cpf}</td>
                <td>{h.dataNascimento}</td>
                <td>{h.numeroQuarto}</td>
                <td>{h.dataInicio}</td>
                <td>{h.dataFim}</td>
                <td>
                  <Link to={`/hospedes/editar/${h.id}`}>
                    <button className="btn-edit">Editar</button>
                  </Link>
                  <button 
                    className="btn-delete" 
                    onClick={() => handleDelete(h.id)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListHospedes;