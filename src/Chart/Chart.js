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
    let weights = weight;
    console.log(height, weight);

    const sortedWeights = weights.sort();
    console.log(sortedWeights);
    let sortedHeights = [];
    /* sortedWeights.forEach((element) => {
        const ind = weight.findIndex((value, index) => value === element);
        weight[ind] = 0;
        sortedHeights.push(height[ind]);
    });
 */
    sortedHeights = sortedWeights.map((element) => {
        const ind = weights.findIndex((value, index) => {
            console.log("aa",value , element);
            return value === element;
        });
        //console.log("index", ind, weight[ind], height[ind]);
        weights[ind] = 0;
        //console.log("index", ind, weights[ind], height[ind]);
        return height[ind];
    });
    console.log(sortedHeights, sortedWeights);


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

    return (
        <div>
            <div className='Line'>
                <Line data={data} options={options} />
            </div>
            <Link to='/'><button className='goBack' type='button'>Go Back</button></Link>
        </div>
    )
}

export default Chart;