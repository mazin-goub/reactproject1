import { useState } from "react"
import { AddStudent } from "./Components/AddStudent"
import { StudentTable } from "./Components/Table"
import { Data } from "./utils/data"


function App() {


  const [students, studentList] = useState(Data)


  return (
    <center>
      <h1>Students Table</h1>
      <StudentTable students={students}/>
      <AddStudent students={students} setStudents={studentList}/>
    </center>
  )
}

export default App
