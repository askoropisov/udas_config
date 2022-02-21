import Button from 'react-bootstrap/esm/Button';

function Flap(props) {

    var status = props.status;
    var statusWord;
    if (status === true) statusWord = "открыта"
    else statusWord = "закрыта";

    return (

        <div>
            <h3>Заслонка</h3>
            <br></br>

            <h4>Статус:</h4> Заслонка {statusWord}
            <br></br>
            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 50 }}>
                <Button>Открыть</Button>
                <Button>Закрыть</Button>
            </div>
        </div>
    )
}

export default Flap