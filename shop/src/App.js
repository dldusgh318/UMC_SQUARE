import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar,Container,Nav,Row,Col} from 'react-bootstrap';
import data from './data.js';
import React,{ useState } from 'react';
import {Routes,Route,Link,useNavigate,Outlet} from 'react-router-dom';
import Detail from './pages/detail.js';
import EventPage from './pages/event';
import axios from 'axios';

function App() {

  let [shoes,setShoes]=useState(data);
  let [img]=useState(['https://codingapple1.github.io/shop/shoes1.jpg',
    'https://codingapple1.github.io/shop/shoes2.jpg',
    'https://codingapple1.github.io/shop/shoes3.jpg']);
    let navigate=useNavigate();

  return (
    <div className="App">

      <Button variant="primary">Primary</Button>
      <Navbar bg="dark "data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">2yeon0_yang Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/event">이벤트페이지</Link>

      <div className="main-bg"></div>
      <Routes>
      <Route path="/" element={
            <Container>
            <Row>
          {
          shoes.map(function(a,i){
            return(
              <Col sm>
              <img src={img[i]} width="80%"/>
              <h4>{shoes[i].title}</h4>
              <p>{shoes[i].price}</p>
              </Col>
            )
          })
        }
        </Row>
        <button onClick={()=>{
          //로딩중UI 띄우기~
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((결과)=>{
            let copy=[...shoes,...결과.data];
            setShoes(copy);
            //로딩중 UI 숨기기~
          })
          //.catch(()=>{
            //로딩중 숨겨
          //})

          // axios.post('/safdfas',{name:"kim"})
          // Promise.all([axios.get('/url1'),axios.get('/url1')])  //동시에 ajax 요청 여러개
          // .then(()=>{
            
          // })

        }}>더보기</button>
    </Container>
      }/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
        <Route path="/about" element={<div>어바웃페이지 ㅇㅇ</div>}/>
        <Route path="/event" element={<EventPage/>}/>
      </Routes>

    </div>
    
  );
}



export default App;
