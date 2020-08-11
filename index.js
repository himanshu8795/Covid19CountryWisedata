const express = require('express')
const api = require('novelcovid');
const exhbs = require('express-handlebars')

// you can choose which URL to use, this will not change the behaviour of the API
api.settings({
    baseUrl: 'https://disease.sh' 
})



const app = express()
app.engine('hbs',exhbs({
    extname: 'hbs',
    defaultview: 'home',
    layoutsDir: __dirname + '/views/layouts/'
}));

app.get('/countries',(req,res) => {

    api.countries()
    .then((response) => {
    
res.render('home.hbs', {info:response})
    })

})

app.listen(4200,()=> {
    console.log('app listening on port 4000')
}) 