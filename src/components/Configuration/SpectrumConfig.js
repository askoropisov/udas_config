function SpectrumConfig(props){

    var AL=0;
    var AR=6;
    var BL=2;
    var BR=12;
    var ABL=1.2;
    var ABR=3.5;

    return(
        <div>
            <h3>Пределы интегрирования</h3>
            <br></br>
            <div style={{display:'flex', justifyContent:"space-between",}}>
                <div >
                    <h3>Альфа</h3>
                    <br></br>
                    Левый предел: {AL}
                    <br></br>
                    Правый предел: {AR}
                </div>
                <div >
                    <h3>Бета</h3>
                    <br></br>
                    Левый предел: {BL}
                    <br></br>
                    Правый предел: {BR}
                </div>
                <div >
                    <h3>Альфа-Бета</h3>
                    <br></br>
                    Левый предел: {ABL}
                    <br></br>
                    Правый предел: {ABR}
                </div>
            </div>
        </div>
    )
}

export default SpectrumConfig