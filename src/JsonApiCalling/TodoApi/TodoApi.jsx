import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../ApiContext/ApiContext'
import { Container, Table } from 'react-bootstrap'
import Loader from '../Loader/Loader'

function TodoApi () {
  let { ApiData, callData, SetApiData } = useContext(ApiContext)
  const key = 'https://jsonplaceholder.typicode.com/todos'
  useEffect(() => {
    SetApiData([])
    callData(key)
  }, [])
  return (
    <div className='bg-dark text-white'>
      <Container fluid>
        <h1 className='text-center'>TODO LIST</h1>
        {ApiData && ApiData.length > 0? 
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {ApiData?.map((ele, ind) => {
              return (
                <tr key={ind}>
                  <td>{ele.userId}</td>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>{ele.completed ? 'TRUE': 'FALSE'}</td>
                </tr>
              )
            })}
          </tbody>
        </Table> :<Loader/> }
      </Container>
    </div>
  )
}

export default TodoApi
