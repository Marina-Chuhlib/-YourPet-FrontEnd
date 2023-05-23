import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/services/App/app';
// import * as api from 'api/add-pet';
// import * as userPets from 'api/user-pets';
import instance from '../../shared/services/App/app';
export const addPet = createAsyncThunk(
  'auth/pets',
  async ( data, { rejectWithValue }) => {
    try {
      const result = await api.addMyNewPet(data);
      return result.data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const addNotice = createAsyncThunk(
  'notice/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addPetNotice(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);




export async function addMyNewPet(data) {
  const response = await instance.post('/user/pets', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  //   console.log(data);
  return response;
}

export async function addPetNotice(data) {
  const response = await instance.post('/notices', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  //   console.log(data);
  return response;
}