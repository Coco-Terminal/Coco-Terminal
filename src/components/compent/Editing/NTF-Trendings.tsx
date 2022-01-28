import React, { ReactNode, useEffect, useState } from 'react'
import './editing.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import { getDataForNft } from 'apis/CoinGecko'

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

interface ListDataItem {
  allTime: { marketCap: number; volume: number; sales: number; averagePrice: number }
  assets: number
  blockchain: string
  categories: string[]
  dataSource: string
  floorPrice: number
  floorPriceToken: string
  logo: string
  marketCap: number
  name: string
  netWorth: number
  oneDay: {
    marketCap: number
    volume: number
    volumeChangePercentage: number
    sales: number
    salesChangePercentage: number
  }
  ownerAssetsPercentage: number
  owners: number
  popular: boolean
  rank: number
  sales7d: number
  salesAT: number
  sevenDay: {
    marketCap: number
    volume: number
    volumeChangePercentage: number
    sales: number
    salesChangePercentage: number
  }
  slug: string
  thirtyDay: {
    marketCap: number
    volume: number
    volumeChangePercentage: number
    sales: number
    salesChangePercentage: number
  }
  tradersAT: number
  volume7d: number
  volumeAT: number
  website: string
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
  const [listData, setListData] = useState([])

  // useEffect(() => {
  //
  //
  //
  //   }, {})
  // })
  useEffect(() => {
    getDataForNft({ start: 0, limit: 5, sort: 'volume', desc: true, period: 1 }).then((res) => {
      console.log(res.data.data.collections)
      setListData(res.data.data.collections)
    })
  }, [])
  return (
    <div className="editing">
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
              <TableCell>name </TableCell>
              <TableCell align="right"> Volume </TableCell>
              <TableCell align="right"> 24h % </TableCell>
              <TableCell align="right"> 7d % </TableCell>
              <TableCell align="right"> Floor Price </TableCell>
              <TableCell align="right"> Owners </TableCell>
              <TableCell align="right"> Items </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.length > 0 &&
              listData.map((row: ListDataItem) => (
                <TableRow key={row.slug} style={{ marginTop: '20px' }}>
                  <TableCell component="th" scope="row" className="Arrtext">
                    <img className="listIteamImg" src={row.logo} alt="" srcSet="" />
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    {' '}
                    {row.oneDay.volume.toFixed(2)}
                    {row.floorPriceToken}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={
                      row.oneDay.volumeChangePercentage == 0
                        ? { color: '#000' }
                        : row.oneDay.volumeChangePercentage < 0
                        ? { color: '#22D03E' }
                        : { color: 'red' }
                    }
                  >
                    {row.oneDay.volumeChangePercentage.toFixed(2)}%
                  </TableCell>
                  <TableCell
                    align="right"
                    style={
                      row.sevenDay.volumeChangePercentage == 0
                        ? { color: '#000' }
                        : row.sevenDay.volumeChangePercentage < 0
                        ? { color: '#22D03E' }
                        : { color: 'red' }
                    }
                  >
                    {row.sevenDay.volumeChangePercentage.toFixed(2)}%
                  </TableCell>
                  <TableCell align="right">
                    {' '}
                    {row.floorPrice} {row.floorPriceToken}{' '}
                  </TableCell>
                  <TableCell align="right"> {row.owners} </TableCell>
                  <TableCell align="right"> {row.owners} </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
