import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./type";

interface UserState {
    data: User[];
    loading: boolean;
    error: string | null;
}

export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
    'users/fetchUsers',
    async (_,{ rejectWithValue }) => {
        try{
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
            return data;
        }catch(error){
            return rejectWithValue("Failed to fetch users");
        }
    }
)

const initialState: UserState = {
    data: [],
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "Failed to fetch users";
            });
    }
});

export default usersSlice.reducer;