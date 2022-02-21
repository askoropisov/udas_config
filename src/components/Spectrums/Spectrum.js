import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import './Spectrum.css'


function Spectrum(props) {

    return (
        <div>
            <h2>Спектрометры</h2>
            <div style={{ display: 'flex', justifyContent:"space-between", marginTop:50 }}>
                <div className="SpectrumNames">
                    <DropdownButton id="spectrumsNames" title="Выберите спектрометр">
                        <Dropdown.Item href="#/action-1">Спектрометр 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Спектрометр 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Спектрометр n</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">Опорный спектр</Dropdown.Item>
                    </DropdownButton>
                </div>

                <select className="box">
                    <option>Спектрометр 1</option>
                    <option>Спектрометр 2</option>
                    <option>Спектрометр 3</option>
                </select>

                <div className='SpectrumTypes'>
                    <DropdownButton id="spectrumsTypes" title="Выберите тип спектрометра">
                        <Dropdown.Item href="#/action-1">Основной</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Второстепернный</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Фоновый</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>

        </div>
    )
}

export default Spectrum