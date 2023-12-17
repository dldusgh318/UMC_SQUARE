import {Button, Navbar,Container,Nav,Row,Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props){

  let {id}=useParams();
  let findGoods = props.shoes.find(function(x){
    return x.id == id
  });
    return(
  <Container>
  <Row>
    <Col sm>
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </Col>
    <Col sm>
      <h4 className="pt-5">{findGoods.title}</h4>
      <p>{findGoods.content}</p>
      <p>{findGoods.price}원</p>
      <button className="btn btn-danger">주문하기</button> 
    </Col>
  </Row>

  <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2">버튼1</Nav.Link>
      </Nav.Item>
    </Nav>
</Container>
    )
}

export default Detail;