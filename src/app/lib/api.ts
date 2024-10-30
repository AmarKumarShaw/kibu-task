import axios from "axios";
const api= axios.create({
    baseURL:"http://localhost:3000"
})

export const fetchMembers = async() =>{
    const response = await api.get("/members")
    return  response.data
} 

export const fetchNotes = async() =>{
    const response = await api.get("/notes")
    return response.data
}

export const createNote = async(note:{member:string,text:string}) => {
    const response = await api.post('/notes',note)
    return response.data
}

