import {Routes,Route,Outlet} from 'react-router-dom';

<Routes>
<Route path="/event" element={<EventPage/>}>
  <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
  <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
</Route>
</Routes>

function EventPage(){
return (
  <div>
    <h4>오늘의 이벤트</h4>
    <Outlet></Outlet>
  </div>
)
}

export default EventPage;