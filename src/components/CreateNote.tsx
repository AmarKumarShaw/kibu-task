    import React,{useState} from "react"
    import { createNote } from "@/app/lib/api"
    import {Note} from "@/app/lib/types"

    interface CreateNoteProps{
        memberId:string,
        onNoteCreated:React.Dispatch<React.SetStateAction<Note[]>>
    }

    const CreateNote:React.FC<CreateNoteProps> = ({memberId,onNoteCreated}) =>{
        const [text,setText] =useState('')

        const handleSubmit = async(e:React.FormEvent) => {
            e.preventDefault()

            try{
                const newNote= await createNote({member:memberId,text})
                onNoteCreated(prevNotes => [...prevNotes,newNote])
                setText('')
            }catch (error){
                console.error("Error",error)
            }
        } 

        return(
            <form  className="mt-4" onSubmit={handleSubmit}>
                <input className="flex-1 py-2 px-4 rounded-full border-gray-600 outline-none border-rounded bg-gray-200 text-sm mr-2" type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder="Add a new note...."
                required
                />
                <button className="px-4 my-2 py-1 border rounded-full bg-[#347bff] text-white hover:text-blue-600 hover:bg-white hover:border-blue-400 transition-all" type="submit">Add Note</button>
            </form>
        )
    }


    export default CreateNote;