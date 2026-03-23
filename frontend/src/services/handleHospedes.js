import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getHospedes = () => api.get('/listar_hospedes');
export const getHospedeById = (id) => api.get(`/listar_hospedes/${id}`);
export const createHospede = (data) => api.post('/cadastrar_hospedes', data);
export const updateHospede = (id, data) => api.put(`/atualizar_hospedes/${id}`, data);
export const deleteHospede = (id) => api.delete(`/deletar_hospedes/${id}`);

// Para o Desafio (API Externa)
export const getExchangeRates = () => 
  axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');