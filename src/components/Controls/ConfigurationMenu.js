import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import SpectrumConfig from '../Configuration/SpectrumConfig'
import SpectrometersConfig from '../Configuration/SpectrometersConfig'
import EScaleConfig from '../Configuration/EScaleConfig'
import LoadConfig from '../Configuration/LoadConfig'
import CurrentLoops from '../Configuration/CurrentLoops'

function ConfigurationMenu(props){

    return(
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="SpectrometersConfig">
                <Row>
                    <Col sm={3} md={3} xl={3}>
                        <Nav variant="pills" className="flex-column" style={{cursor: 'pointer'}}>
                            <Nav.Item>
                                <Nav.Link eventKey="SpectrometersConfig">Спектрометры</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="SpectrumConfig">Спектр</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="EScale">Энергетическая калибровка</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="CurrentLoops">Токовые петли</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="LoadConfig">Загрузка</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={6} md={6} xl={6} >
                        <Tab.Content>
                            <Tab.Pane eventKey="SpectrometersConfig">
                                <SpectrometersConfig/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="SpectrumConfig">
                                <SpectrumConfig/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="EScale">
                                <EScaleConfig/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="CurrentLoops">
                                <CurrentLoops/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="LoadConfig">
                                <LoadConfig/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default ConfigurationMenu