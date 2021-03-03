//Imports
const express = require('express');
const app = express();
const port = 3000;

//starting files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/cjs'))
app.use('/img', express.static(__dirname + 'public/img'))

// app.get('', (req, res) => {
//     //res.send('Hello World')
//     res.sendFile(__dirname + '/views/index.html')
// })

//Set views
app.set('views','./views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', {text: 'Conditores profissionais em primeiro luga'})
})

app.get('/about', (req, res) => {
    res.render('about', {text: 'Fumaça Instrumentos de Precisão'})
})







//listen on localhost:port
app.listen(port, () => console.info(`Servidor na porta ${port}`));
