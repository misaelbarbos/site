const express = require('express');
const router = express.Router();

router.get('/article',(req,res)=>{
    res.send('ArticlesController')
});

module.exports = router;
