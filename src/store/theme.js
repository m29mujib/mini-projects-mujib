import { createSlice } from "@reduxjs/toolkit";
export const themeSlice = createSlice({
    // Buat namain slice/potongan redux
    name: "theme",

    // Data awal
    initialState: { theme: "faMoon" },

    // Function buat ganti ganti state slice ini
    reducers: {
        toLightMode(state) {
            state.theme = "faSun";
        },
        toDarkMode(state) {
            state.theme = "faMoon";
        },
    },
});

// Export function reducer diatas
export const { toLightMode, toDarkMode } = themeSlice.actions

// Export Default buat dimasukkin di store awal
export default themeSlice.reducer