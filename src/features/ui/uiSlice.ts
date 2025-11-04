import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortKey = 'name' | 'company';

interface UIState {
    search: string;
    sortBy: SortKey;
    selectedUserId: number | null;
}

const initialState: UIState = {
    search: "",
    sortBy: 'name',
    selectedUserId: null,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setSearch: (state,action: PayloadAction<string>) => { state.search = action.payload; },
        setSortBy: (state,action: PayloadAction<SortKey>) => { state.sortBy = action.payload; },
        openModal: (state,action: PayloadAction<number>) => { state.selectedUserId = action.payload; },
        closeModal: (state) => { state.selectedUserId = null; },
    }
})

export const { setSearch, setSortBy, openModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;