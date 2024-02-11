import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../ApiContext/ApiContext'
import { Container, Table } from 'react-bootstrap'
import Loader from '../Loader/Loader'

function Comments () {
  const { ApiData, callData,SetApiData } = useContext(ApiContext)
  const key = 'https://jsonplaceholder.typicode.com/comments'
  useEffect(() => {
    SetApiData([])
    callData(key)
  }, [])
  return (
    <div className='bg-dark text-white'>
      <Container fluid>
        <h1 className='text-center'>COMMENTS</h1>
        {ApiData && ApiData.length > 0? 
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>Post Id</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {ApiData.map((ele, ind) => {
              return (
                <tr key={ind}>
                  <td>{ele.postId}</td>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.body}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>: <Loader/>}
      </Container>
    </div>
  )
}

export default Comments
