import './Spectrum.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from "react-redux"
import { getPeaks, setPeaks } from '../../API/main/peaks';
import { setPeak356, setPeak81 } from '../../redux/main/peaksSlice';


function Spectrum(props) {

    const dispatch = useDispatch();
    const [datas, setDatas] = useState([])

    useEffect(() => {
        dispatch(getPeaks())
            
    }, [])

    const {
        peak81,
        peak356
    } = useSelector(state => state.main);

    const handleSetPeaks = () => {
        const data = {
            peak81: peak81,
            peak356: peak356,
        }
        dispatch(setPeaks(data))
    }

    var iter = -1

    useEffect(() => {
        setDatas(new Array(100).fill(0).map(data => {
            iter++
            return ({
                Activity: iter,
                Count: (Math.random() * 1000).toFixed(0)
            })
            
        }))
    }, [])

    const renderLineChart = (
        <div style={{ width: '70%', height:"77vh", maxWidth:"100%" }}>
            <ResponsiveContainer >
                <LineChart data={datas}
                    margin={{ top: 5, right: 30, bottom: 10, left: 15 }}>
                    <Line type="monotone" dataKey="Count" stroke="#12bf51" animateNewValues={false} />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="Activity" fontSize={16} />
                    <YAxis />
                    <Legend />
                    <Tooltip animationDuration={0}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <div>
            <h2>Спектрометры</h2>
            <div style={{ display: 'flex', justifyContent: "space-around",  marginTop: 40 }}>

                <div style={{ alignItems: "flex-end", justifyContent: "flex-start" }} >
                    <h4>Спектрометры</h4>

                    <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 30}}>
                        <Button onClick={() => setDatas(new Array(100).fill(0).map(data => {
                                iter++
                                return ({
                                    Activity: iter,
                                    Count: (Math.random() * 1000).toFixed(0)
                                })
                            }))}>Основной</Button>
                        <Button onClick={() => setDatas(new Array(100).fill(0).map(data => {
                                iter++
                                return ({
                                    Activity: iter,
                                    Count: (Math.random() * 1000).toFixed(0)
                                })
                            }))}>Фоновый</Button>
                        <Button onClick={() => setDatas(new Array(100).fill(0).map(data => {
                                iter++
                                return ({
                                    Activity: iter,
                                    Count: (Math.random() * 1000).toFixed(0)
                                })
                            }))}>Опорный</Button>
                    </div>
                    <div>
                        <br></br>
                        <div>
                            <label for="pic1" style={{display: "block"}} >Пик 81</label>
                            <input className='input'type={'number'} id="pic1" value = {peak81}
                                   style={{display: "block", marginLeft: '60px'}} onChange={(e) => dispatch(setPeak81(e.target.value))} />
                        </div>
                        <div>
                            <label for="pic2" style={{display: "block"}}>Пик 356</label>
                            <input className='input' type={'number'} id="pic2" value = {peak356}
                                style={{display: "block" , marginLeft: '60px'}} onChange={(e) => dispatch(setPeak356(e.target.value))}/>
                        </div>
                        <br></br>
                        <Button onClick={handleSetPeaks}>Установить</Button>
                    </div>
                    <div>
                        <label class="form-label" for="customFile"></label>
                        <input type="file" class="form-control" id="customFile"/>
                        <br></br>
                        <Button>Добавить опорный спектр</Button>
                    </div>
                </div>

                {renderLineChart}
            </div>
        </div>
    )
}

export default Spectrum