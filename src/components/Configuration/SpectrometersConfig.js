import OneSpectrometr from "../Spectrums/OneSpectrometr"

function SpectrometersConfig(props) {


    return (
        <div>
            <br></br>
            <div style={{display:'flex', justifyContent:"space-between",}}>
                <OneSpectrometr
                    type="Основной"
                    port={1}
                    Alpha={1}
                    Beta={1}
                    Rn={1} />
                <OneSpectrometr
                    type="Второстепенный"
                    port={1}
                    Alpha={1}
                    Beta={1}
                    Rn={1} />
                <OneSpectrometr
                    type="Фоновый"
                    port={1}
                    Alpha={1}
                    Beta={1}
                    Rn={1} />

            </div>
        </div>
    )
}

function ReadConfigSpectrometers(props){
    
}

export default SpectrometersConfig