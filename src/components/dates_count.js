
import { Row, Col } from "react-bootstrap";


let DatesCount = ({persons})=>{
    return ( <Row className="justify-content-center">
    <Col sm="8" className="">لديك {persons.length} مواعيد اليوم</Col>
  </Row>)
}

export default DatesCount;