import React, { ReactNode } from 'react'
import './editing.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'

function createData(
  name: string,
  string: string,
  fat: string,
  carbs: string,
  protein: string,
  text: string,
  text2: string
) {
  return { name, string, fat, carbs, protein, text, text2 }
}

interface ImgTextItem {
  key: string | number
  age: ReactNode
  text: string
}

const rows = [
  createData(`1 `, '25.355.86', '-21.16%', '+14.16%', '14.0  ', '11.2k', '17.7k'),
  createData('2', '25.355.86', '-21.16%', '+14.16%', '14.0  ', '11.2k', '17.7k'),
  createData('3', '25.355.86', '-21.16%', '+14.16%', '14.0  ', '11.2k', '17.7k'),
  createData('4', '25.355.86', '-21.16%', '+14.16%', '14.0  ', '11.2k', '17.7k'),
  createData('5', '25.355.86', '-21.16%', '+14.16%', '14.0  ', '11.2k', '17.7k'),
]
const imgText = [
  {
    key: '1',
    age: <AutoStoriesIcon />,
    text: 'Home Electricity Bill ',
  },
]

export default function Editingtwo() {
  const Myrender = (imgText: ImgTextItem[]) => {
    return imgText.map((item) => {
      return (
        <p key={item.key}>
          <span>{item.age} </span>
          <span> {item.text} </span>
        </p>
      )
    })
  }
  return (
    <div className="editing">
      {' '}
      <div>
        <div>
          <h1>NTF Trendings </h1>
          <p> Monthly Activtise </p>
        </div>
        <div> View All </div>
      </div>
      {/* <hr> </hr> */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>collectron </TableCell>
              <TableCell align="right"> Volume </TableCell>
              <TableCell align="right"> 24h % </TableCell>
              <TableCell align="right"> 7d % </TableCell>
              <TableCell align="right"> Floor Price </TableCell>
              <TableCell align="right"> Owners </TableCell>
              <TableCell align="right"> Items </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} style={{ marginTop: '20px' }}>
                <TableCell component="th" scope="row" className="Arrtext">
                  {row.name}
                  {Myrender(imgText)}
                </TableCell>
                <TableCell align="right"> {row.string} </TableCell>
                <TableCell align="right" style={{ color: 'red' }}>
                  {' '}
                  {row.fat}{' '}
                </TableCell>
                <TableCell align="right" style={{ color: '#22D03E' }}>
                  {' '}
                  {row.carbs}{' '}
                </TableCell>
                <TableCell align="right"> {row.protein} </TableCell>
                <TableCell align="right"> {row.text} </TableCell>
                <TableCell align="right"> {row.text2} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
