const express = require('express')
const app = express()
const port = 1000
const fs = require('fs')
// const hostname = "12.0.0.1"
app.use('/static', express.static('static'))




app.get('/', (req, res) => {
    const data = fs.readFileSync('index.html')
    res.send(data.toString())
    // console.log(req)
    // app.use(express.static(__dirname + ''));
//   res.send('Hello World!')

})
app.get('/contact', (req, res) => {
    const data = fs.readFileSync('contact.html')
    res.send(data.toString())
   

})


app.get('/signup', (req, res) => {
    const data = fs.readFileSync('signup.html')
    res.send(data.toString())
   

})

app.get('/signin', (req, res) => {
    const data = fs.readFileSync('signin.html')
    res.send(data.toString())
    // console.log(req)

    // app.use(express.static(__dirname + ''));
    //   res.send('Hello World!')

})

app.get('/search', (req, res) => {
    const data = fs.readFileSync('search.html')
    res.send(data.toString())
    console.log(req)

    // app.use(express.static(__dirname + ''));
//   res.send('Hello World!')

})

app.get('/blog', (req, res) => {
    const data = fs.readFileSync('blog.html')
    res.send(data.toString())
    console.log(req)

    // app.use(express.static(__dirname + ''));
//   res.send('Hello World!')

})




app.listen(port, () => {
  console.log(`These app listening on port ${port}`)
})