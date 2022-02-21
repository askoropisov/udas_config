function Flap(props){

    var status = props.status;
    var statusWord;
    if (status === true) statusWord ="открыта"
        else statusWord ="закрыта";

    return(

        <div>
            <h3>Заслонка</h3>
            <br></br>

            <h4>Статус:</h4> Заслонка {statusWord}
        </div>
    )
}

export default Flap