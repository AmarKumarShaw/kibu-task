"use client"
import React,{useEffect,useState} from "react";
import { fetchMembers,fetchNotes } from "../lib/api";
import { Member,Note } from "../lib/types";
import CreateNote from "@/components/CreateNote";
import Loader from "@/components/Loader";

const MainPage:React.FC = () => {
    const [members,setMembers] = useState<Member[]>([])
    const [notes,setNotes] = useState<Note[]>([])
    const [loading, setLoading] = useState(true)
    

    useEffect(()=>{
        const loadData = async() => {
            try{
                const [membersData,notesData] = await Promise.all([fetchMembers(),fetchNotes()])
                setMembers(membersData)
                setNotes(notesData)
                setLoading(false)
            }
            catch(error){
                    console.log("Error:",error)
                    setLoading(false)
            }
        }
        loadData();
    },[])
    
    return(
        <div className="px-4">
            
            {loading ? <Loader /> :
            <>
            
            <div className="w-full lg:p-2 sm:p-4 mt-8 flex flex-wrap gap-4 items-start justify-center">
            {members.map((member)=>{
                return(
                    <div className="xl:w-1/4 lg:w-1/3 sm:w-5/6 py-2 mb-6 border-[#ccc7ff] border bg-[#f6f5ff] cursor-pointer flex-col gap-4 rounded-xl lg:p-6 md:p-4 sm:p-2 shadow-card-shadow transition-transform hover:scale-[101%]" key={member.id}>
                        <h2 className="text-center text-gray-600 font-bold text-2xl text-gray-800 pb-2">{member.firstName} {member.lastName}</h2>
                            <ul className="mr-1 flex flex-col items-center scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-200 overflow-y-auto h-80">
                                {notes.filter( note=> note.member === member.id ).map((note)=>{
                                    return(
                                        <li className="text-slate-800 flex w-11/12 items-center rounded-md p-1 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 mt-2 border rounded-full px-2 bg-blue-100 py-2 " key={note.id}>{note.text}</li>
                                    )
                                })}
                            </ul>
                            <CreateNote memberId={member.id} onNoteCreated={setNotes} />
                    </div>
                )
            })}
    
            </div>
            </>
            
            }
            
        </div>
    )
}

export default MainPage;