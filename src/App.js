
import React, { useEffect, useState } from "react";
import "./style.css";
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import CreatArea from './components/CreatArea';
import Note from './components/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, updateNote, deleteNote, setNotes } from './redux/notesSlice';

function App() {
    const notes = useSelector((state) => state.notes);
    const [selectedNote, setSelectedNote] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        dispatch(setNotes(savedNotes));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function addOrUpdateNote(newNote) {
        if (selectedNote) {
            dispatch(updateNote({ id: selectedNote.id, newNote }));
            setSelectedNote(null);
        } else {
            dispatch(addNote(newNote));
        }
    }

    function handleDelete(id) {
        dispatch(deleteNote(id));
    }

    return (
        <div className="App">
            <Sidebar />
            <Header />
            <div className="main-content">
            <CreatArea onAdd={addOrUpdateNote} selectedNote={selectedNote} />
            {notes.map((note) => (
                <Note
                    setSelectedNote={() => setSelectedNote(note)}
                    key={note.id}  // استخدام id كـ key
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    onDelete={handleDelete}
                />
            ))}
        </div>
        </div>
    );
}

export default App;
