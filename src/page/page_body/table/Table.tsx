import React, { ReactNode, useEffect, useState } from 'react'
import './css/table.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'



// function createData(
//     name: string,
//     string: string,
//     fat: string,
//     carbs: string,
//     protein: string,
//     text: string,
//     text2: string
//   ) {
//     return { name, string, fat, carbs, protein, text, text2 }
//   }

//   interface ListDataItem {
//     allTime: { marketCap: number; volume: number; sales: number; averagePrice: number }
//     assets: number
//     blockchain: string
//     categories: string[]
//     dataSource: string
//     floorPrice: number
//     floorPriceToken: string
//     logo: string
//     marketCap: number
//     name: string
//     netWorth: number
//     oneDay: {
//       marketCap: number
//       volume: number
//       volumeChangePercentage: number
//       sales: number
//       salesChangePercentage: number
//     }
//     ownerAssetsPercentage: number
//     owners: number
//     popular: boolean
//     rank: number
//     sales7d: number
//     salesAT: number
//     sevenDay: {
//       marketCap: number
//       volume: number
//       volumeChangePercentage: number
//       sales: number
//       salesChangePercentage: number
//     }
//     slug: string
//     thirtyDay: {
//       marketCap: number
//       volume: number
//       volumeChangePercentage: number
//       sales: number
//       salesChangePercentage: number
//     }
//     tradersAT: number
//     volume7d: number
//     volumeAT: number
//     website: string
//   }

//   interface NftData {
//     start: number
//     limit: number
//     sort: string
//     desc: boolean
//     period: number
//   }
//   interface TablePaginationActionsProps {
//     count: number
//     page: number
//     rowsPerPage: number
//     onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void
//   }

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}
const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}


function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];
export default function Table1() {
    // const [listData, setListData] = useState([])
    // const [page, setPage] = useState(0)
    // const [rowsPerPage, setRowsPerPage] = useState(5)
    // const [alignment, setAlignment] = useState(1)
    // const [count, setCount] = useState(5)

    // const handleAlignment = (event: any, newAlignment: number) => {
    //     setAlignment(newAlignment)
    //     getDataForNftApi({ start: 0, limit: rowsPerPage, sort: 'volume', desc: true, period: newAlignment })
    //   }

    //   const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    //     setPage(newPage)
    //     getDataForNftApi({
    //       start: newPage,
    //       limit: Number(rowsPerPage),
    //       sort: 'volume',
    //       desc: true,
    //       period: alignment,
    //     })
    //   }

    //   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setRowsPerPage(parseInt(event.target.value, 10))
    //     setPage(0)
    //     getDataForNftApi({ start: 0, limit: Number(event.target.value), sort: 'volume', desc: true, period: alignment })
    //   }
    //   const getDataForNftApi = (params: NftData) => {
    //     getDataForNft(params).then((res: { data: { data: { collections: React.SetStateAction<never[]>; count: any } } }) => {
    //       setListData(res.data.data.collections)
    //       console.log(res.data.data)

    //       setCount(Number(res.data.data.count))
    //     })
    //   }
    //   useEffect(() => {
    //     getDataForNftApi({ start: 0, limit: rowsPerPage, sort: 'volume', desc: true, period: 1 })
    //   }, [])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="table">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </Paper>
        </div>
    )
}
