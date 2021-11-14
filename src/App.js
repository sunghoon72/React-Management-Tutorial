import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';


const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '940201',
  'gender':  '남자',
  'job': '도적' 
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '이순신',
  'birthday': '970811',
  'gender':  '남자',
  'job': '전사' 
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '강감찬',
  'birthday': '960514',
  'gender':  '남자',
  'job': '지략가' 
}
]


class App extends Component {
  render(){
  return (
    <div>
      {
          customers.map(c => {
            return(
              <Customer
                  key= {c.id}
                  id={c.id}
                  image = {c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
              />
            );
          })
      }
   </div>
  );
}
}

export default App;
