import { Button, Paper, TextField } from "@mui/material"
import { useEffect, useRef, useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react"
import { type Student } from '../utils/data'


interface Props {
    students: Student[]
    setStudents: Dispatch<SetStateAction<Student[]>>,
}

const initialState = {
        id: 3,
        fullName: "",
        age: "",
        mail: "",
        class: "",
    }

export const AddStudent = ({students, setStudents}: Props) => {

    const [formData, setFormData] = useState(initialState)

    // let formData = {
    //     id: 3,
    //     name: "",
    //     age: 0,
    //     mail: "",
    //     class: "",
    // }

   
    // const nameRef = useRef<HTMLInputElement>(null)
    // const mailRef = useRef<HTMLInputElement>(null)
    // const ageRef = useRef<HTMLInputElement>(null)
    // const classRef = useRef<HTMLInputElement>(null)


    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        formData.fullName = e.target.value;
    }

    // const NameHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.name = e.target.value;
    // }
    // const AgeHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.age = parseInt(e.target.value);
    // }
    // const MailHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.mail = e.target.value;
    // }
    // const ClassHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.class = e.target.value;
    // }

    const handleSubmit = () => {
        setStudents([...students, formData])
        setFormData(initialState)
        // if(nameRef.current){
        //     nameRef.current.value = ""
        // }
        // if(ageRef.current){
        //     ageRef.current.value = ""
        // }
        // if(mailRef.current){
        //     mailRef.current.value = ""
        // }
        // if(classRef.current){
        //     classRef.current.value = ""
        // }
    }


    useEffect (() => {
        console.log("firing useEffect")
        if(formData.fullName === "Admin"){
            alert("You entered a name that will not be stored in db")
        }
    }, [formData.fullName])




    return (
        <Paper sx={{width: 300, padding: 5, marginTop: "25px", gap:1, display: "flex", flexDirection: "column",}}>
            <TextField
            //  inputRef={nameRef}
            value={formData.fullName}
              onChange={HandleChange} id="outlined-basic" label="Full name" name="fullName" variant="outlined" /> 
            <TextField
            //  inputRef={ageRef}
            value={formData.age}
              onChange={HandleChange}  id="outlined-basic" label="Age" name="age" variant="outlined" /> 
            <TextField
            //  inputRef={mailRef}
            value={formData.mail}
              onChange={HandleChange} id="outlined-basic" label="Mail" name="mail" variant="outlined" /> 
            <TextField
            //  inputRef={classRef}
            value={formData.class}
              onChange={HandleChange} id="outlined-basic" label="Class" name="class" variant="outlined" /> 
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </Paper>
    )
}