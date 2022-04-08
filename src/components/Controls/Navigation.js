import Configuration from "../Configuration/Configuration"
import FlowMeter from "../FlowMeter/FlowMeter"
import Spectrum from "../Spectrums/Spectrum";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function Navigation(props) {

    return (
        <div>
            {/* Навигация горизонтальная */}
            <Tabs 
                defaultActiveKey="spectrum"
                transition={false}
                id="noanim-tab-example"
                
            >
                <Tab eventKey="spectrum" title="Спектрометры">
                    <Spectrum/>
                </Tab>
                <Tab eventKey="flowMeter" title="Расходомер">
                    <FlowMeter/>
                </Tab>
                <Tab eventKey="config" title="Конфигурация">
                    <Configuration/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Navigation