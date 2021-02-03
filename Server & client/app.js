const express = require('express')

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


// listen for request
app.listen(3000);

app.get('/', (req, res)=>{

    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem impusm dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem impusm dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem impusm dolor sit amet consectetur'},
    ]

    // res.send('<p>Home page</p>');
    // res.sendFile('./views/index.html', { root: __dirname });
    res.render('index', { title: 'Home', blogs});

})
app.get('/about', (req, res)=>{

    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About'})

})

app.get('/blogs/create', (req, res)=>{
    res.render('create', { title: 'Create'})
})

// redirect
// app.get('/about-me', (req, res)=>{
//     res.redirect('/about')
// })

// 404  SIEMPRE AL FONDO!
app.use((req, res)=>{
    res.status(404).render('404', { title: '404'})
})

