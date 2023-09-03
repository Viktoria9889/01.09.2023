import './App.css'
import CardComponent from '../Containers/CardComponent'
import CardInfo from '../Containers/CardInfo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react'


function App() {

  const [loading, setLoading] = useState(true)
  const [aricle, setArticle] = useState()

  const articleData = async () => {
    setLoading(true)
    const result = await axios.get('http://localhost:4000/articles/getList')
    setArticle(result.data)
    //console.log(result.data)
    setLoading(false)
  }

  useEffect(() => {
    articleData()
  }, [])

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element= {<CardComponent data={aricle} />} />
          <Route path="/info/:title" element= {<CardInfo data={aricle} />} />
        </Routes>
      </Router>
    </div>
  )}

export default App
