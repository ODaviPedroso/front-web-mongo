import axios from 'axios';

export const POST = async (url, data) => {
    try {
        const resposta = await axios.post(`http://localhost:3000/${url}`, data);

        console.log(resposta.data);
        return resposta.data; 
    } catch (error) {

        console.error("Erro na requisicao: ", error);
        throw error;
    }
};

export const GET = async (url, ) => {
    try {
        const resposta = await axios.get(`http://localhost:3000/${url}`);
        console.log(resposta.data);
        return resposta.data; 
    } catch (error) {

        console.error("Erro na requisicao: ", error);
        throw error;
    }
};
