import './Spectrum.css'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { PureComponent } from 'react';

const data = [
    {
        
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const renderLineChart = (
    <LineChart width={1000} height={600} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
    </LineChart>
);

function Spectrum(props) {

    return (
        <div>
            <h2>Спектрометры</h2>
            <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 50 }}>

                <div style={{ alignItems: "flex-start", justifyContent: "flex-start", marginLeft: '5%' }}>
                    <h4>Спектрометр</h4>
                    <select className="box">
                        <option>Спектрометр 1</option>
                        <option>Спектрометр 2</option>
                        <option>Спектрометр 3</option>
                        <hr></hr>
                        <option>Опорный спектр</option>
                    </select>
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