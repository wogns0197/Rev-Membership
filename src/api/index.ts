import { ClientData } from '../type';
import axios from "axios";

export const registerClientData = async (inData: ClientData) => {
  await axios.post('http://localhost:5000/api/registerData', { ...inData })
    .then(res => {
      console.log(res);
  })
    .catch(err => {
      console.log(err);
  })
}

export const updateClientData = async (inData: ClientData) => {
  // inData = { phonenumber, point }
  await axios.post('http://localhost:5000/api/updateData', { ...inData })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
}

export const getClientData = async (phonenumber: string) => {
  const res = await axios.post('http://localhost:5000/api/getData', { phonenumber });
  return res.data;  
}