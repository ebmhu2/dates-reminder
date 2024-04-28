import { Button, Container, Row, Col } from "react-bootstrap";
import './App.css';
import { useState, useEffect } from "react";
import { persons } from "./data_db";
import DatesCount from "./components/dates_count";
import DatesList from "./components/dates_list";


function App() {
  const [personData, setPersonData] = useState(persons)
  const onDeleteAction = ()=>{
    setPersonData([])
  }
  const onViewAction = ()=> {
    setPersonData(persons)
  }
  useEffect(()=>{
    setPersonData([])
  },[])
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount persons={personData} />
        <DatesList persons={personData}/>
        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <Button onClick = {onDeleteAction} className="btn-style">مسح الكل</Button>
            <Button onClick = {onViewAction} className="btn-style">عرض البيانات</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
