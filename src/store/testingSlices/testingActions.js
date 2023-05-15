import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// First argument in call needs to be the same as slice name.

export const getUsers = createAsyncThunk('TESTING/getUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    return response.data;
});
