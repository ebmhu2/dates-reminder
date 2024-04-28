import { Button, Container, Row, Col } from "react-bootstrap";
import './App.css';
import { persons } from "./data_db";
import DatesCount from "./components/dates_count";
import DatesList from "./components/dates_list";


function App() {

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount persons={persons} />
        <DatesList persons={persons}/>
        
        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
            <Button className="btn-style">مسح الكل</Button>
            <Button className="btn-style">عرض البيانات</Button>
          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default App;
