import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    //for adding notes to array
    const [notes, setNotes] = useState([])


    function addNote(newNote){

        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        })
    }

    function deleteNote(id) {
        //access to all previous notes array to loop by filter to return just what we need
        //return all where index and id different
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
                return index !==id
            });
        });
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return (
            <Note 
            key={index}
            id={index}
            title={noteItem.title} 
            content={noteItem.content} 
            onDelete={deleteNote}

            />
        )

       
      })}
      <Footer />
    </div>
  );
}

export default App;
