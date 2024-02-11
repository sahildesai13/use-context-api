import React, { useContext, useEffect } from 'react'
import { ApiContext } from '../../ApiContext/ApiContext'
import { Col, Container, Row, Card } from 'react-bootstrap'
import Loader from '../Loader/Loader'

function Photos () {
  let { ApiData, callData, SetApiData } = useContext(ApiContext)
  const key = 'https://jsonplaceholder.typicode.com/photos'
  useEffect(() => {
    SetApiData([])
    callData(key)
  }, [])
  return (
    <div className='bg-dark text-white'>
      <Container fluid>
        <h1 className='text-center'>PHOTOS</h1>
        {ApiData && ApiData.length > 0? 
        <Row className='gap-2 justify-content-center'>
          {ApiData.map((ele, key) => {
            return (
              <Col key={key} xs={6} lg={3} xl={3}>
                <Card>
                  <Card.Img variant='top' src={ele.url} />
                  <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <div>
                      <p className='fs-4'>Album ID : {ele.albumId}</p>
                      <p className='fs-5'>ID : {ele.id}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row> : <Loader/> }
      </Container>
    </div>
  )
}

export default Photos
