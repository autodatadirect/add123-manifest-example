import React from 'react'
import './App.css'
import { Manifest, Filter } from 'add123-manifest'
import definition from './definition'
import service from './service'
import 'add123-manifest/dist/add123-manifest.css'
import { Container } from 'reactstrap'
import { useField } from 'amiable-forms'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'


const fetchRows = async (...args) => {
  const r = await service(...args)
  return r.rows
}

const fetchCount = async (...args) => {
  const r = await service(...args)
  return r.count
}

const Input = ({ name }) => {
  const { onChange, value } = useField({ name })
  return <input className='form-control' value={value} onChange={onChange} />
}

const CustomFilter = () =>
  <Filter>
    <Input name='search' />
  </Filter>


const history = createBrowserHistory()


const App = () => 
  <Router history={history}>
    <Container fluid>
      <Manifest definition={definition} fetchRows={fetchRows} fetchCount={fetchCount} Filter={CustomFilter} />
      <div style={{marginBottom:'100px'}} />
    </Container>
  </Router>


export default App
