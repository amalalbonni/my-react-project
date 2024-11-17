import React from 'react';

function Note({ title, content, onDelete, id, setSelectedNote }) {
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={setSelectedNote}>Edit</button>
        </div>
    );
}

export default Note;
