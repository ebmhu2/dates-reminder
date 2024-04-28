
import { Row, Col } from "react-bootstrap";

const DatesList = ({persons})=>{
    return (
        <Row className="justify-content-center my-2 my-2">
          <Col sm="8" className="">
            <div className="rectangle p-2">
              { persons.length ? 
                persons.map((person) => {
                  return (<div key={person.id} className="d-flex border-bottom mx-3">
                    <img src={person.img} className="img-avatar" alt="userphoto" />
                    <div className="px-3">
                      <p className="d-inline fs-5">{person.name1}</p>
                      <p className="fs-6">{person.date}</p>
                    </div>
                  </div>)

                }): <h2 className="text-center my-2">لا يوجد مواعيد اليوم</h2>
              }
            </div>
          </Col>
        </Row>
    )
}

export default DatesList;