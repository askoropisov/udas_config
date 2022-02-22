import './Spectrum.css'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import React, { PureComponent, useEffect, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';


function Spectrum(props) {

    const [datas, setDatas] = useState([])


    // useEffect(() => {
    //     setInterval(() => {
    //         setDatas(new Array(500).fill(1).map(data => {
    //             return ({
    //                 Activity: (Math.random() * 10).toFixed(0),
    //                 Count: (Math.random() * 1000).toFixed(0)
    //             })
    //         }))
    //     }, 10000);
    // }, [])

    useEffect(() => {
        setDatas(new Array(500).fill(1).map(data => {
            return ({
                Activity: (Math.random() * 10).toFixed(0),
                Count: (Math.random() * 1000).toFixed(0)
            })
        }))
    }, [])

    const renderLineChart = (
        <div style={{ width: '50%', height:"70vh", maxWidth:"100%" }}>
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
            <div style={{ display: 'flex', justifyContent: "space-between",  marginTop: 50 }}>

                <div style={{ alignItems: "flex-end", justifyContent: "flex-start", marginLeft: '5%' }} >
                    <h4>Спектрометр</h4>
                    <select className="box">
                        <option>Спектрометр 1</option>
                        <option>Спектрометр 2</option>
                        <option>Спектрометр 3</option>
                        <hr></hr>
                        <option>Опорный спектр</option>
                    </select>
                    <div>
                        <br></br>
                        <div>
                            <label for="pic1" style={{display: "block"}} >Пик 1</label>
                            <input className='input' type="number" id="pic1" style={{display: "block", marginLeft: '50px'}}/>
                        </div>
                        <div>
                            <label for="pic2" style={{display: "block"}}>Пик 2</label>
                            <input className='input' type="number" id="pic2" style={{display: "block" , marginLeft: '50px'}}/>
                        </div>
                        <br></br>
                        <Button>Установить</Button>
                    </div>
                    <div>
                        <label class="form-label" for="customFile"></label>
                        <input type="file" class="form-control" id="customFile" />
                        <br></br>
                        <Button>Добавить опорный спектр</Button>
                    </div>
                </div>

                {renderLineChart}

                <div style={{ alignItems: "flex-end", justifyContent: "flex-start", marginRight: '5%' }}>
                    <h4>Тип спектрометра</h4>
                    <select className="box">
                        <option>Основной</option>
                        <option>Второстепенный</option>
                        <option>Фоновый</option>
                    </select>
                </div>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: "center", marginTop: 50 }}>
                {renderLineChart}
            </div> */}
        </div>
    )
}

export default Spectrum