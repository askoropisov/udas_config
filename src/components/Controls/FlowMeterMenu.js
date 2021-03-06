import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import FlowMeterSensor from '../FlowMeter/FlowMeterSensor'
import PreassureSensor from '../FlowMeter/PreassureSensor'
import TemperatureSensor from '../FlowMeter/TemperatureSensor'
import Flap from '../FlowMeter/Flap'
import Graduation from '../FlowMeter/Graduation'

function FlowMeterMenu(props){

    return(

        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="PreassureSensor">
                <Row>
                    <Col sm={3} md={3} xl={3}>
                        <Nav variant="pills" className="flex-column" style={{cursor:'pointer'}}>
                            <Nav.Item>
                                <Nav.Link eventKey="PreassureSensor">Датчик давления</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="FlowSensor">Датчик скорости потока</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="TempSensor">Датчик температуры</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Graduation">Градуировка</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Flap">Заслонка</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={6} md={6} xl={6}>
                        <Tab.Content >
                            <Tab.Pane eventKey="PreassureSensor">
                                <PreassureSensor/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="FlowSensor">
                                <FlowMeterSensor/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="TempSensor">
                                <TemperatureSensor/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Graduation">
                                <Graduation/>
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