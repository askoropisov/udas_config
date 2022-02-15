import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import D2SConfig from '../Configuration/D2SConfig'
import SpectrumConfig from '../Configuration/SpectrumConfig'
import SpectrometersConfig from '../Configuration/SpectrometersConfig'
import EScaleConfig from '../Configuration/EScaleConfig'

function ConfigurationMenu(props){

    return(
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="SpectrometersConfig">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="SpectrometersConfig">Спектрометры</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="SpectrumConfig">Спектр</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="EScale">Ескале</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="D2S">E2S</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={6}>
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
                            <Tab.Pane eventKey="S2S">
                                <D2SConfig/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default ConfigurationMenu