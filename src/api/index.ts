import { ClientData } from '../type';
import axios from "axios";

export const registerClientData = async (inData: ClientData) => {
  await axios.post('http://localhost:5000/api/registerData', { ...inData })
  // await axios.post('http://34.64.229.15:5000/api/registerData', { ...inData })
    .then(res => {
      console.log(res);
  })
    .catch(err => {
      console.log(err);
  })
}

interface UpdateDataType{
  phonenumber: string,
  point: number,
  pointhistory?: {
    date: string,
    point: number,
  }
  buycount?: number,
}

export const updateClientData = async (inData: UpdateDataType) => {
  // inData = { phonenumber, point }
  await axios.post('http://localhost:5000/api/updateData', { ...inData })
  // await axios.post('http://34.64.229.15:5000/api/updateData', { ...inData })
    .then(res => {
    
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
}

export const getClientData = async (phonenumber: string) => {
  const res = await axios.post('http://localhost:5000/api/getData', { phonenumber });
  // const res = await axios.post('http://34.64.229.15:5000/api/getData', { phonenumber });
  return res.data;  
}