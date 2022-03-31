import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";


function PointForm(props) {

    const [K, setK] = useState(0);
    const [t, setT] = useState(0);
    const [V1a, setV1a] = useState(0);
    const [V1b, setV1b] = useState(0);

    const onChangehandleK = (e) => {
        const value = Number(e.target.value)
        if (value >= 0) setK(value)

    }

    useEffect(() => {
        props.getData(K)
    }, [K])


    const getData = () => {
        return (
            {
                K: K,
                t: t,
                V1a: V1a,
                V1b: V1b
            }
        )
    }

    return (
        <div>
            <br></br>
            <h3>Введите значения точки №{props.id}</h3>
            <div >
                <div>
                    <label for="K">Показание АЦП</label> <br></br>
                    <input className='input' type="number" id="K" value={K} onChange={onChangehandleK} />
                </div>
                <div>
                    <label for="t">Время измерения</label> <br></br>
                    <input className='input' type="time" step="1" id="t" value={t} onChange={(e) => setT(e.target.value)} />
                </div>
                <div>
                    <label for="V1a">Начальное значение</label> <br></br>
                    <input className='input' type="number" id="V1a" value={V1a} onChange={(e) => setV1a(e.target.value)} />
                </div>
                <div>
                    <label for="V1b">Конечное значение</label> <br></br>
                    <input className='input' type="number" id="V1b" value={V1b} onChange={(e) => setV1b(e.target.value)} />
                </div>
                <div style={{ display: 'flex', justifyContent: "space-evenly", marginTop: 30}}>
                    <Button>Старт</Button>
                    <Button>Стоп</Button>
                </div>
            </div>
            {/* <Button onClick={() => console.log("Saved", props.id)}>Применить</Button> */}
        </div>
    )
}

export default PointForm