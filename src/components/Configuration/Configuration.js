import Button from "react-bootstrap/esm/Button"
import ConfigurationMenu from "../Controls/ConfigurationMenu"

function Configuration(props) {


    return (
        <div>
            <h2>Конфигурация</h2>
            {/* <Button>Загрузить конфигурацию</Button> */}
            <br></br>


            <ConfigurationMenu/>
        </div>
    )
}

export default Configuration