import Button from 'react-bootstrap/esm/Button';
import './Spectrum.css'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setPeaks } from '../../API/main/peaks';
import { setPeak356, setPeak81 } from '../../redux/main/peaksSlice';
import { getAllMain } from '../../API/main/generalMain';
import axios from "axios";


function Spectrum(props) {

    const dispatch = useDispatch();
    const [datas, setDatas] = useState([])

    useEffect(() => {
        dispatch(getAllMain())
            
    }, [])

    const {
        Peak81,
        Peak356,         
    } = useSelector(state => state.main.peaks);

    const {
        primary,
        back,
    } = useSelector(state => state.main.spectrumType);

    const handleSetPeaks = () => {
        const data = {
            peak81: Peak81,
            peak356: Peak356,
        }
        dispatch(setPeaks(data))
    }

    const [currFile, setCurrFile] = useState(null)
    const clickHaldle = async (file) => {
        const data = new FormData();

        var files = currFile.target.files
        console.log(files);

        data.append(files[0].name, files[0])

        await axios.post("/api/main/addRefSpectrum", data)
            .then(res => console.log("uploaded:", res))
            .catch(err => console.log("Not uploaded:", err))
    }

    useEffect(() => {
        setDatas(new Array(100).fill(0).map((data, index) => {
            return ({
                Activity: index + 1,
                Энергия: (Math.random() * 1000).toFixed(0)
            })
            
        }))
    }, [])

    const renderLineChart = (
        <div style={{ width: '70%', height:"74vh", maxWidth:"100%" }}>
            <ResponsiveContainer >
                <LineChart data={datas}
                    margin={{ top: 5, right: 30, bottom: 10, left: 15 }}>
                    <Line type="monotone" dataKey="Энергия" stroke="#12bf51" animateNewValues={false} />
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
                    <h4>Спектр</h4>

                    <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 30}}>
                        <Button onClick={() => setDatas(primary)}
                                
                            >Основной</Button>
                        <Button onClick={() => setDatas(new Array(100).fill(0).map((data, index) => {
                                    return ({
                                        Activity: index + 1,
                                        Энергия: (Math.random() * 1000).toFixed(0)
                                                        })
                            }))}>Фоновый</Button>
                        <Button onClick={() => setDatas(new Array(100).fill(0).map((data, index) => {
                                    return ({
                                        Activity: index + 1,
                                        Энергия: (Math.random() * 1000).toFixed(0)
                                                        })
                            }))}>Опорный</Button>
                    </div>
                    
                    <div style={{display: "block"}}>
                        <br></br>
                        <div>
                            <label for="peak81" style={{display: "block"}} >Пик 81</label>
                            <input id="peak81" value = {Peak81} className='input' type={'number'}
                                   onChange={(e) => dispatch(setPeak81(e.target.value))} />
                        </div>
                        <div>
                            <label for="peak356" style={{display: "block"}}>Пик 356</label>
                            <input id="peak356" value = {Peak356} className='input' type={'number'} 
                                   onChange={(e) => dispatch(setPeak356(e.target.value))}/>
                        </div>
                        <br></br>
                        <Button onClick={handleSetPeaks}>Установить</Button>
                    </div>
                    <div>
                        <label class="form-label" for="customFile"></label>
                        <input type="file" class="form-control" id="customFile" onChange={setCurrFile}/>
                        <br></br>
                        <Button type="submit" onClick={clickHaldle}>Добавить опорный спектр</Button>
                    </div>
                </div>

                {renderLineChart}
            </div>
        </div>
    )
}

export default Spectrum