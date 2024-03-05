import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import usersData from '../data/UsersData';
const columns = [
    {field: 'id', headerName: 'ID'},
    {field: 'name', headerName: 'Name', flex: 1},
    {field: 'email', headerName: 'Email Address', flex: 1},
    {field: 'phone', headerName: 'Phone Number', flex: 1},
    {field: 'role', headerName: 'Role', color: 'white'},
]

const Users = () => {
  return (
    <div className='text-white'>
        
        <DataGrid rows={usersData} columns={columns} sx={{color: 'white'}}/>
    </div>
  )
}

export default Users