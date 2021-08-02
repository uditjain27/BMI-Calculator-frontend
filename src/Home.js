import Card from './UI/Card';
import './App.css';
import Form from './Component/Form';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_GET, URL_POST } from './helper';

function Home() {

    let ObjData = [/* {
        height: 152,
        weight: 55,
        bmi: 2
    }, {
        height: 142,
        weight: 50,
        bmi: 15
    }, {
        height: 172,
        weight: 90,
        bmi: 16
    }, {
        height: 160,
        weight: 55,
        bmi: 26
    }, {
        height: 157,
        weight: 45,
        bmi: 10
    }, */
    ];

    const [ChartData, UpdateData] = useState([[], []]);


    useEffect(() => {
        axios.get(URL_GET).then(res => {
            ObjData = JSON.parse(res.data);
            let data1 = [];
            let data2 = [];
            data1 = ObjData.map((element) => element.height);
            data2 = ObjData.map((element) => element.weight);
            UpdateData([data1, data2]);
        });
    }, []);

    const BMIHandler = (dataObject) => {
        const output = document.querySelector('.output');
        console.log(dataObject);
        if (dataObject.bmi < 18.9)
            output.innerHTML = `UnderWeight with BMI = ${dataObject.bmi}`;
        else if (dataObject.bmi >= 18.9 && dataObject.bmi < 25)
            output.innerHTML = `Normal with BMI = ${dataObject.bmi}`;
        else if (dataObject.bmi >= 25)
            output.innerHTML = `OverWeight with BMI = ${dataObject.bmi}`;

        ObjData.push(dataObject);
        axios.post(URL_POST, dataObject).then(res => { console.log(res.data) });
        console.log('data', ObjData);
        DataHandler();
    }

    function DataHandler() {
        let data1 = [];
        let data2 = [];
        data1 = ObjData.map((element) => element.height);
        data2 = ObjData.map((element) => element.weight);
        UpdateData([data1, data2]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Card>
                    <h1>BMI Calculator</h1>
                    <Form onSubmit={BMIHandler}></Form>
                    <div className='output'></div>
                </Card>
                <Link to={{
                    pathname: '/Chart',
                    ChartData: ChartData,
                }}>
                    <button className='viewChart' type='button'>View Chart</button>
                </Link>
            </header>
        </div>
    );
}

export default Home;
