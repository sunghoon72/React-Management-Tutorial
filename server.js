const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res) =>{
    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': 'john',
        'birthday': '940201',
        'gender':  'm',
        'job': 'lecturer' 
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': 'ray',
        'birthday': '970811',
        'gender':  'm',
        'job': 'designer' 
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': 'aiden',
        'birthday': '960514',
        'gender':  'm',
        'job': 'teacher' 
      }]);
});
app. listen(port, ()=> console.log(`Listening on port ${port}`));

