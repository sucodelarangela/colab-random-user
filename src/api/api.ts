import axios, { AxiosResponse } from 'axios';
import { IUser } from 'interfaces/IUser';

export const api = axios.create({
  baseURL: 'https://randomuser.me/api/'
});

// Destruturando o axios e recebendo o objeto `data` de dentro dele
const responseBody = (response: AxiosResponse) => response.data.results;

// Objeto `request` para lidar com o cRUD e retornando o response.data acima.
// Se houvessem outras requests (post, put, delete, etc), elas também estariam dentro desse objeto.
const requests = {
  get: (url: string) => api.get(url).then(responseBody)
};

// Objeto `Users` que usa o objeto `requests`para executar as operações de CRUD.
// Se houvessem outras operações (post, put, delete, etc), elas também estariam dentro desse objeto.
export const Users = {
  getUsers: (page: number): Promise<IUser[]> => requests.get(`?page=${page}&results=9&seed=abc&exc=registered,phone,cell,nat`)
};
