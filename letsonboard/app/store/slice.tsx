import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ui: {
        isSidebarOpen: true,
    }
}

const stateSlice = createSlice({
    name: "state",
    initialState,
    reducers: {
        toggleSidebar: (state: any) => {
            state.ui.isSidebarOpen = !state.ui.isSidebarOpen;
        }
    }
})

export const stateActions = stateSlice.actions;
export default stateSlice