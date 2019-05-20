const express = require('express')
const app = express()
const port = 3000
const time = require('./middleware')


// 列出全部 Todo
app.get('/', time, (req, res, next) => {
  res.send('列出全部 Todo')

})

// 新增一筆 Todo 頁面
app.get('/new', time, (req, res, next) => {
  res.send('新增 Todo 頁面')

})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', time, (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', time, (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', time, (req, res) => {
  res.send('刪除 Todo')
})


app.listen(port, () => {
  console.log(`App running on port ${port}`)
})