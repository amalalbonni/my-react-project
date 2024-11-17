import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { List, Brush, Image } from "@mui/icons-material";

function CreatArea({ onAdd, selectedNote }) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [isExpanded, setIsExpanded] = useState(false); // لتتبع ما إذا كان المستخدم قد ضغط على حقل النص

    
    function handleChange(e) {
        const { name, value } = e.target;
        setNote((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    }


    function handleSubmit(event) {
        event.preventDefault();
        if (note.title && note.content) {
            onAdd(note);
            setNote({
                title: "",
                content: "",
            });
        }
    }

    // دوال للتعامل مع الأيقونات
    function handleAddList() {
        console.log("إضافة قائمة جديدة");
    }

    function handleDraw() {
        console.log("فتح وضع الرسم");
    }

    function handleAddImage() {
        console.log("إضافة صورة");
    }

    
    function handleFocusOrChange() {
        setIsExpanded(true); 
    }


    function handleBlur() {
        if (!note.title && !note.content) {
            setIsExpanded(false); 
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter' && note.title && note.content) {
          
            event.preventDefault();
            handleSubmit(event); 
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* حقل العنوان مع الأيقونات في حالة التوسيع */}
                <div style={{
                    display: "flex",
                    flexDirection: "column", // وضع الأيقونات في عمود عند التوسيع
                    width: "100%",
                }}>

                    {/* حقل النص لتدوين الملاحظات */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <textarea
                            value={note.title}
                            placeholder="Take a note..."
                            name="title"
                            onChange={handleChange}
                            onFocus={handleFocusOrChange} 
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown} 
                            style={{
                                width: "80%",
                                minHeight: isExpanded ? "50px" : "30px", 
                                padding: "10px",
                                fontSize: "16px",
                                resize: "none", 
                                transition: "all 0.3s ease", 
                            }}
                        />

                        {!isExpanded && (
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                gap: "10px",
                                marginRight: "20px",
                                marginBottom: "40px",
                            }}>
                                
                                <IconButton onClick={handleAddList}>
                                    <List />
                                </IconButton>

                               
                                <IconButton onClick={handleDraw}>
                                    <Brush />
                                </IconButton>

                                
                                <IconButton onClick={handleAddImage}>
                                    <Image />
                                </IconButton>
                            </div>
                        )}
                    </div>

                    
                    {isExpanded && (
                        <textarea
                            value={note.content}
                            placeholder="Write your note here..."
                            name="content"
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            style={{
                                width: "100%",
                                minHeight: "80px",
                                padding: "10px",
                                fontSize: "16px",
                                resize: "none",
                                transition: "all 0.3s ease", 
                            }}
                        />
                    )}

                    
                    {isExpanded && (
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "10px",
                            marginBottom: "40px",
                        }}>
                           
                            <IconButton onClick={handleAddList}>
                                <List />
                            </IconButton>

                           
                            <IconButton onClick={handleDraw}>
                                <Brush />
                            </IconButton>

                      
                            <IconButton onClick={handleAddImage}>
                                <Image />
                            </IconButton>
                        </div>
                    )}
                </div>

                <button type="submit" style={{ marginTop: "10px" }}>
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreatArea;
