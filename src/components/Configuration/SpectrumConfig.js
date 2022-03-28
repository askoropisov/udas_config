import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { getAllConfiguration } from "../../API/configuration/generalConfiguration";

function SpectrumConfig(props){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllConfiguration())
            
    }, [])

    const {
        alphaR,
        alphaL,
        betaR,
        betaL,
        alphabetaR,
        alphaBetaL,
    } = useSelector(state=>state.configuration.spectrum);

    return(
        <div>
            <h3>Пределы интегрирования</h3>
            <br></br>
            <div style={{display:'flex', justifyContent:"space-between",}}>
                <div >
                    <h3>Альфа</h3>
                    <br></br>
                    Левый предел: {alphaL}
                    <br></br>
                    Правый предел: {alphaR}
                </div>
                <div >
                    <h3>Бета</h3>
                    <br></br>
                    Левый предел: {betaL}
                    <br></br>
                    Правый предел: {betaR}
                </div>
                <div >
                    <h3>Альфа-Бета</h3>
                    <br></br>
                    Левый предел: {alphaBetaL}
                    <br></br>
                    Правый предел: {alphabetaR}
                </div>
            </div>
        </div>
    )
}

export default SpectrumConfig