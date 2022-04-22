const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/Database');
const categoriesController = require('./controllers/CategoriesController')
const articlesController = require('./controllers/ArticlesController');
const Artical = require('./models/Article');
const Category = require('./models/Categories');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use('/',categoriesController);
app.use('/',articlesController);

app.get('/',(req,res)=>{
   res.render('index')
});


app.listen(80,erro=>{
    console.log('servidor rodando')
})