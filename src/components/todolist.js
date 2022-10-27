import { getFirestore } from "@firebase/firestore";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { ReactComponent as AddIcon } from "../add.svg";

import { app } from "../firebase_config";
import { ReactComponent as SchoolIcon } from "../school.svg";
import { ReactComponent as SportIcon } from "../sport.svg";
import { ReactComponent as WorkIcon } from "../work.svg";
import Popup from "./popup.js";


import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
  
  import "react-vertical-timeline-component/style.min.css";
function Todo_List(){
    let workIconStyle = { background: "#06D6A0"};
    let schoolIconStyle = { background: "#f9c74f" };
    let sportIconStyle = { background: "#d279a6"}
    const db = getFirestore(app);
    const [id,setNewId] = useState("");
    const [newTitle,setNewTitle] = useState("");
    const [newLocation,setNewLocation] = useState("");
    const [newStatus, setNewStatus] = useState("")
    const [newDescription,setNewDescription] = useState("");
    const [newDate,setNewDate] = useState("");
    const [newIcon,setNewIcon] = useState("");
    const [ToDo, setToDo] = useState([]);
    const todoCollection = collection(db, "todolists");
    const [btnEditPopup, setBtnEditPopup] = useState(false);
    const [bntAddPopup,setBtnAddPopup] = useState(false);
  

    const createToDo = async ()=> {
        await addDoc(todoCollection, {title: newTitle, location: newLocation, icon: newIcon, description: newDescription, date: newDate, StatusTD:"In progress"})
        setBtnAddPopup(false);
        reFresh();
    }
    const editToDo = async(id)=>{
      const toDo = doc(db,"todolists",id)
      const newT = {title: newTitle,location: newLocation,icon: newIcon,description: newDescription,date: newDate}
      await updateDoc(toDo,newT)
      reFresh();
    }
    const deleteToDo = async(id)=>{
      const toDo = doc(db,"todolists",id)
      await deleteDoc(toDo)
      reFresh();
    }
    const completeToDo = async(id)=>{
      const toDo = doc(db,"todolists",id)
      const newS = {StatusTD: "Complete"}
      await updateDoc(toDo,newS)
      reFresh();
    }

    function reFresh(){
      window.location.reload(false);
    }
    useEffect (()=>{

        const getToDo = async ()=>{
            const dataToDo = await getDocs(todoCollection);
            setToDo(dataToDo.docs.map((doc)=>({...doc.data(),id: doc.id})))
        };
       
        getToDo()
    }, [])
    
    return(

        <div className='Todo-List'>
           <button className="add-btn" onClick = {() => setBtnAddPopup(true)}><AddIcon/></button>
            <VerticalTimeline>
                {ToDo.map((ToDo)=>{
                      let isWorkIcon = ToDo.icon ==="work";
                      let isSchoolIcon = ToDo.icon ==="school";
                      let isdone = ToDo.StatusTD ==="Complete";
                    return(
                        <VerticalTimelineElement
                        key={ToDo.id}
                        date ={ToDo.date} 
                        iconStyle={isWorkIcon ? workIconStyle : isSchoolIcon ? schoolIconStyle : sportIconStyle}
                        icon={ToDo.icon ==="sport" ? <SportIcon /> :ToDo.icon ==="school" ? <SchoolIcon/> : <WorkIcon/>}>
                            <h3 className="vertical-timeline-element-title">
                            {ToDo.title}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                            {ToDo.location}
                            </h5>
                            <h6 className={`Status ${isdone ? "doneStatus":"inProgressStatus"}`}>{ToDo.StatusTD}</h6>
                            <p id="description">{ToDo.description}</p>
                          
                          <button className={`button ${
                            isWorkIcon ? "workButton" : isSchoolIcon ? "schoolButton":"sportButton"
                            }`} onClick = {() => (setBtnEditPopup(true),
                            setNewId(ToDo.id),
                            setNewTitle(ToDo.title),
                            setNewLocation(ToDo.location),
                            setNewIcon(ToDo.icon),
                            setNewStatus(ToDo.StatusTD),
                            setNewDescription(ToDo.description),
                            setNewDate(ToDo.date))}>Sửa</button>

                            <button className={`button ${
                            isWorkIcon ? "workButton" : isSchoolIcon ? "schoolButton":"sportButton"
                            }`} onClick = {()=>(deleteToDo(ToDo.id))}>Xóa</button>

                            <button className={`button ${
                            isWorkIcon ? "workButton" : isSchoolIcon ? "schoolButton":"sportButton"
                            }`} onClick = {()=>(completeToDo(ToDo.id))}>Hoàn thành</button>
                        </VerticalTimelineElement>
                    );
                })}
           </VerticalTimeline>
           <Popup trigger = {btnEditPopup} setTrigger={setBtnEditPopup}>
                            <h1><strong>SỬA</strong></h1>
                            <p><input value={newTitle} onChange={(event)=>{setNewTitle(event.target.value)}}></input></p>
                            <p><input value={newLocation} onChange={(event)=>{setNewLocation(event.target.value)}}></input></p>
                            <p><select value={newIcon} onChange={(event)=>{setNewIcon(event.target.value)}}>
                            <option>Chọn</option>
                            <option>work</option>
                            <option>school</option>
                            <option>sport</option>
                            </select></p>
                            <p><input value={newDescription} onChange={(event)=>{setNewDescription(event.target.value)}}></input></p>
                            <p><input type='datetime-local' value={newDate} onChange={(event)=>{setNewDate(event.target.value)}}></input></p>
                            <button onClick={()=>(editToDo(id))}>Sửa</button>
                            </Popup> 
          <Popup trigger = {bntAddPopup} setTrigger={setBtnAddPopup}>
            <h1><strong>Thêm</strong></h1>
            <p><input placeholder='Title' onChange={(event)=>{setNewTitle(event.target.value)}}></input></p>
          <p><input placeholder='Location' onChange={(event)=>{setNewLocation(event.target.value)}}></input></p>
          <p><select onChange={(event)=>{setNewIcon(event.target.value)}}>
            <option>Chọn</option>
            <option>work</option>
            <option>school</option>
            <option>sport</option>
            </select></p>
          <p><input placeholder='Description' onChange={(event)=>{setNewDescription(event.target.value)}}></input></p>
          <p><input type='datetime-local' onChange={(event)=>{setNewDate(event.target.value)}}></input></p>
          <button onClick={createToDo}>Thêm</button>
          </Popup>
        </div>
    );
}
export default Todo_List;