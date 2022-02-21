import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import FlowMeterSensor from '../FlowMeter/FlowMeterSensor'
import PressureSensor from '../FlowMeter/PressureSensor'
import TemperatureSensor from '../FlowMeter/TemperatureSensor'
import Flap from '../FlowMeter/Flap'

function FlowMeterMenu(props){

    return(

        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="PressureSensor">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column" style={{cursor:'pointer'}}>
                            <Nav.Item>
                                <Nav.Link eventKey="PressureSensor">Датчик давления</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="FlowSensor">Датчик скорости потока</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="TempSensor">Датчик температуры</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Flap">Заслонка</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={6}>
                        <Tab.Content >
                            <Tab.Pane eventKey="PressureSensor">
                                <PressureSensor/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="FlowSensor">
                                <FlowMeterSensor/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="TempSensor">
                                <TemperatureSensor/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Flap">
                                <Flap/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default FlowMeterMenu