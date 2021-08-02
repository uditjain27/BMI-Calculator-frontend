import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './Chart.css';

const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: "top",
            labels: {
                font: {
                    family: 'Comic Sans MS',
                    size: 15,
                    weight: 'bold',
                    lineHeight: 1.2,
                },
                /* padding: { top: 0, left: 0, right: 0, bottom: 0 } */
            },
        },
        title: {
            display: true,
            text: 'Line Chart'
        }
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Weight',
                color: '#911',
                font: {
                    family: 'Comic Sans MS',
                    size: 20,
                    weight: 'bold',
                    lineHeight: 1.2,
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 }
            },
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Height',
                color: '#191',
                font: {
                    family: 'Times',
                    size: 20,
                    style: 'normal',
                    lineHeight: 1.2
                },
                padding: { top: 30, left: 0, right: 0, bottom: 0 }
            },
        }
    }
};

function Chart(props) {

    const height = props.location.ChartData[0];
    const weight = props.location.ChartData[1];
    let sortedHeight = [];
    let sortedWeight = [];

    (()=>{
        let data1 = [];
        let data2 = [];
        let length = height.length;
        weight.forEach(element => data1.push(element));
        height.forEach(element => data2.push(element));
        for(let i=0;i<length-1; i++){
            let min = data1[i];
            let pos = i;
            for(let j=i+1; j<length; j++){
                if(data1[j] < min){
                    min = data1[j];
                    pos = j;
                }
            }
            let temp = data1[i];
            data1[i] = data1[pos];
            data1[pos] = temp;

            temp = data2[i];
            data2[i] = data2[pos];
            data2[pos] = temp;
        }
        sortedHeight = data2;
        sortedWeight = data1;
    })();
    
    
    console.log(height, weight);
    console.log(sortedHeight, sortedWeight);


    const data = {
        labels: weight,
        datasets: [
            {
                label: "BMI Dataset",
                data: height,
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    const SortedData = {
        labels: sortedWeight,
        datasets: [
            {
                label: "Sorted Weights Dataset",
                data: sortedHeight,
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };

    return (
        <div className='main'>
            <div className='Line'>
                <Line data={data} options={options} />
            </div>
            <div className='Line'>
                <Line data={SortedData} options={options} />
            </div>
            <Link to='/'><button className='goBack' type='button'>Go Back</button></Link>
        </div>
    )
}

export default Chart;