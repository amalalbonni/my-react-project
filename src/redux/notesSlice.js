import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
       
        addNote: (state, action) => {
            state.push(action.payload);
        },
      
        updateNote: (state, action) => {
            const { id, newNote } = action.payload;
            const index = state.findIndex(note => note.id === id);
            if (index !== -1) {
                state[index] = { ...state[index], ...newNote }; // تحديث الملاحظة
            }
        },
        
        deleteNote: (state, action) => {
            return state.filter(note => note.id !== action.payload); // حذف الملاحظة باستخدام id
        },
      
        setNotes: (state, action) => {
            return action.payload;
        }
    }
});

export const { addNote, updateNote, deleteNote, setNotes } = notesSlice.actions;
export default notesSlice.reducer;
