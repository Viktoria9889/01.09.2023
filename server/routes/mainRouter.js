const express = require('express')
const router = express.Router()

let articlesData = [
    { id: 1, title: 'стаття 1', article: 'текст статті 1' },
    { id: 2, title: 'стаття 2', article: 'текст статті 2' },
    { id: 3, title: 'стаття 3', article: 'текст статті 3' },
  ]

router.get('/articles/getList', (req,res) =>{
    res.json(articlesData)
})

router.get('/articles/:id', (req,res) =>{
  let articleId = articlesData.find(i => i.id === Number(req.params.id))
  console.log(articleId)
  if (articleId) {
    res.send(articleId)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router;