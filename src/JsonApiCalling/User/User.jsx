import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../ApiContext/ApiContext'
import { Container, Table } from 'react-bootstrap'
import Loader from '../Loader/Loader'

function User () {
  let { ApiData, callData, SetApiData } = useContext(ApiContext)
  const key = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    SetApiData([])
    callData(key)
  }, [])
  return (
    <div className=' text-white bg-dark'>
      <Container fluid>
        <h1 className='text-center'>USERS</h1>
        { ApiData && ApiData.length > 0? 
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {ApiData?.map((ele, ind) => {
              return (
                <tr key={ind}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                  <td>
                    <tr>{ele.address.street}, {ele.address.suite},</tr>
                    <tr>{ele.address.city}, {ele.address.zipcode},</tr>
                    <tr>Lat : {ele.address.geo.lat}, Lng : {ele.address.geo.lng}</tr>
                  </td>
                  <td>{ele.phone}</td>
                  <td>{ele.website}</td>
                  <td>
                    <tr>{ele.company.name}</tr>
                    <tr>{ele.company.catchPhrase}</tr>
                    <tr>{ele.company.bs}</tr>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        : <Loader/>}
      </Container>
    </div>
  )
}

export default User
