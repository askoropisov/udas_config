import { useState } from 'react';

function SpectrumConfig(props){

    const[AL, SetAL]=useState(0);
    const[AR, SetAR]=useState(6);
    const[BL, SetBL]=useState(2);
    const[BR, SetBR]=useState(12);
    const[ABL, SetABL]=useState(1.2);
    const[ABR, SetABR]=useState(3.5);

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