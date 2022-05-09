const express = require('express');

const app = express();

app.use(express.json());

app.get('/users/rabbit',(req,res,next) => {
    res.json({
        user: '토끼',
        address: '구로',
        posx: '126',
        posy: '32'
    });
});

app.post('/store/food', (req, res, next) => {
   res.json({
       food: req.body.food,
       price: req.body.price,
       taste: req.body.taste
   });
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(err.status|| 500).send(err.message);
});

app.listen(3000,(req,res) => {
    console.log("서버 동작 중");
});