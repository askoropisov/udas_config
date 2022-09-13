import Button from 'react-bootstrap/esm/Button';
import './Spectrum.css'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setCompliance, setPeaks } from '../../API/main/peaks';
import { setPeak356, setPeak81 } from '../../redux/main/peaksSlice';
import axios from "axios";
import { getSpectrums } from '../../API/main/spectrumType';
import { ResponsiveLine } from '@nivo/line'

function Spectrum(props) {

    const dispatch = useDispatch();
    const [datas, setDatas] = useState([])
    const [currFile, setCurrFile] = useState(null)
    const [spectumPath, setPath] = useState(null)
    const [spectumType, setType] = useState(0)
    const [Reference, setRef] = useState(null)
    const[currentSpectometer, setCurrentSpectrometer] = useState(0)

    const spectumPathRef = useRef()
    const spectumTypeRef = useRef()
    const ReferenceRef = useRef()

    const {
        Peak81,
        Peak356,
    } = useSelector(state => state.main.peaks);

    const {
        primary,
        back,
        ref,
        spectrometersPath,
        reference,
    } = useSelector(state => state.main.spectrumType);

    const handleSetPeaks = () => {
        const data = {
            peak81: Peak81,
            peak356: Peak356,
        }
        dispatch(setPeaks(data))
    }

    const handleSetReference = () =>{
        const data = {
            reference: Reference,
        }
        dispatch(setRef(data))
    }

    const handleSetCompliance = () => {
        const data = {
            path: spectumPath,
            type: spectumType,
        }
        console.log("PathType: ", typeof(spectumPath))
        dispatch(setCompliance(data))
        console.log("data:", data)
    }

    //загрузка файла опорного спектра
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
        const interval = setInterval(
            () => {
                dispatch(getSpectrums())
                    .unwrap()
                    .then((res) => {
                        setDatas(new Array(res.primary.length / 2).fill(0).map((data, index) => {
                            const primary = res.primary
                            const back = res.back
                            const ref = res.ref
                            if(currentSpectometer===0)
                            return ({
                                x: index,
                                y: primary[index],
                            })
                            else if( currentSpectometer===1)
                            return ({
                                x: index,
                                y: back[index],
                            })
                            else return ({
                                x: index,
                                y: ref[index],
                            })
                        }))
                    })

            }, 1500
        )
        return () => clearInterval(interval)
    }, [datas])

    const data = [
        {
            "id": "energy",
            "color": "hsl(0, 255, 100%)",
            "data": datas
        }
    ];


    const MyResponsiveLine = (
        <div style={{ width: '70%', height: "74vh", maxWidth: "100%" }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 30, right: 140, bottom: 50, left: 70 }}
                xScale={{ type: 'linear', stacked: true }}
                yScale={{ type: 'linear' }}
                curve="monotoneX"
                axisBottom={{
                    tickValues: 15,
                    tickSize: 3,
                    tickPadding: 5,
                    legend: 'Энергия',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickValues: 5,
                    tickSize: 5,
                    tickPadding: 5,
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'dark2' }}
                pointSize={4}
                pointColor={{ from: 'color', modifiers: [] }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor', modifiers: [] }}
                pointLabelYOffset={-12}
                //enableArea={true}
                areaOpacity={0.15}
                useMesh={true}
                pixelRatio={2}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 140,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 12,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    }
                ]}
            />
        </div>
    )

    return (
        <div>
            <h2>Спектрометры</h2>
            <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 40 }}>

                <div style={{ alignItems: "flex-end", justifyContent: "flex-start" }} >
                    <h4>Выбор спектра</h4>

                    {/* Выбор спектра с каждого датчика по кнопкам */}
                    <div style={{ display: 'flex', justifyContent: "space-around", marginTop: 30 }}>
                        <Button onClick={() => setDatas(new Array(primary.length / 2).fill(0).map((data, index) => {
                            setCurrentSpectrometer(0)
                            return ({
                                x: index,
                                y: primary[index],
                            })
                        }))}>Основной</Button>

                        <Button onClick={() => setDatas(new Array(back.length / 2).fill(0).map((data, index) => {
                            setCurrentSpectrometer(1)
                            return ({
                                x: index,
                                y: back[index],
                            })
                        }))}>Фоновый</Button>
                        <Button onClick={() => setDatas(new Array(ref.length).fill(0).map((data, index) => {
                            setCurrentSpectrometer(2)
                            return ({
                                x: index,
                                y: ref[index],
                            })
                        }))}>Опорный</Button>
                    </div>

                    <select className='select' id="selectItem" ref={ReferenceRef}
                            onChange={(event) => setRef(event.target.value)}>
                            <option value='0' selected>Опорный спектр</option>
                            {reference.map((value, index) =>
                                <option key={index} value={value} >{value}</option>
                            )}
                    </select>

                    {/* Установка пиковых значений и загрузка опорного спектра */}
                    <div style={{ display: "block" }}>
                        <br></br>
                        <div>
                            <label htmlFor="peak81" style={{ display: "block" }} >Пик 81</label>
                            <input id="peak81" value={Peak81} className='input' type={'number'}
                                onChange={(e) => dispatch(setPeak81(e.target.value))} />
                        </div>
                        <div>
                            <label htmlFor="peak356" style={{ display: "block" }}>Пик 356</label>
                            <input id="peak356" value={Peak356} className='input' type={'number'}
                                onChange={(e) => dispatch(setPeak356(e.target.value))} />
                        </div>
                        <Button onClick={handleSetPeaks}>Установить</Button>
                    </div>
                    <div>
                        <br></br>
                        {/* заполнение выпадающего списка из массива с сервера */}
                        <select className='select' id="selectItem" ref={spectumPathRef} onChange={(event) => setPath(event.target.value)}>
                            <option value='0' selected>Не выбрано</option>
                            {spectrometersPath.map((value, index) =>
                                <option key={index} value={value} >{value}</option>
                            )}
                        </select>
                        <br></br>
                        <select className='select' id="selectItem" ref={spectumTypeRef} onChange={(event) => setType(event.target.value)}>
                            <option value="0" selected>Не выбран</option>
                            <option value="1">Основной</option>
                            <option value="2">Второстепенный</option>
                            <option value="3">Фоновый</option>
                        </select>
                        <br></br>
                        <Button onClick={handleSetCompliance}>Установить</Button>
                    </div>
                    <div>
                        <form action="" method="post" encType="multipart/form-data">
                            <br></br>
                            <input type="file" name="file" className="form-control" accept=".txt,.json" onChange={setCurrFile} />
                        </form>
                        <Button type="submit" onClick={clickHaldle}>Добавить опорный спектр</Button>
                    </div>
                </div>

                {MyResponsiveLine}
            </div>
        </div>
    )
}

export default Spectrum