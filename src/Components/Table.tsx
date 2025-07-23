import { type Student } from "../utils/data"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";


interface Props { students: Student[],}

  export const StudentTable = ({students}: Props) => {

    useEffect(() => {
      if(students.length === 30){
        alert("Max Limit Reached")
      }
    },[students])

    // const sScholarships = students.map((s: any) => {
    //   let result:any = false
    //   for(let i = 0; i <= 1000; i++){
    //     result = Math.random() > 0.5
    //   }

    //   return ( ...s: any, result: any)
    // })

    return (
      <TableContainer component={Paper} sx={{ width: 700, }}>
              <Table size="small" >
          <TableHead sx={{ background: "#000",}}>
            <TableRow >
              <TableCell sx={{ color: "#fff",}}>Full Name</TableCell>
              <TableCell sx={{ color: "#fff",}}>Age</TableCell>
              <TableCell sx={{ color: "#fff",}}>Mail</TableCell>
              <TableCell sx={{ color: "#fff",}}>Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((item) => {
                return (
                    <TableRow>
                        <TableCell>{item.fullName}</TableCell>
                        <TableCell>{item.age}</TableCell>
                        <TableCell>{item.mail}</TableCell>
                        <TableCell>{item.class}</TableCell>
                    </TableRow>
                )
            })}
            
          </TableBody>
      </Table>
      </TableContainer>
    )
  }