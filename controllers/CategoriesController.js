const express = require('express');
const router = express.Router();
const Category = require('../models/Categories')
const slugfy = require('slugify')

router.get('/categories',(req,res)=>{
res.send('categoriescontroller')
});

router.get('/admin/categories/new',(req,res)=>{
    res.render('admin/categories/new.ejs')
});
router.post('/categories/save',(req,res)=>{
   let title = req.body.categoria;
   Category.create({
        title:title,
       slug:slugfy(title)
   }).then(()=>{
       res.redirect('/')
   });
});

router.get('/admin/categories',(req,res)=>{
    Category.findAll({}).then(categories=>{
        res.render('admin/categories/index',{categories:categories})
    });

});

router.post('/category/delete',(req,res)=>{
let id = req.body.id;

if (id !=undefined){
    if (!isNaN(id)){
        Category.destroy({
            where:{id:id}
        }).then(()=>{
            res.redirect('/admin/categories');
        });
    }else {
        res.redirect('/admin/categories');
    }
}else{
    res.redirect('/admin/categories');
}
});
module.exports = router;
