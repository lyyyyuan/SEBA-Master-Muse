import React, {Component} from 'react'
import {HorizontalBar} from 'react-chartjs-2';
const data = {
    labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
    datasets: [
        {
            label: 'total number',
            backgroundColor: 'rgba(192,192,192,0.5)',
            borderColor: 'rgba(192,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(192,192,192,0.8)',
            hoverBorderColor: 'rgba(192,192,192,1)',
            data: [11,22,32,43,51]
        }
    ]
};
export default class HorizontalChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data

        }
    }
    componentWillMount(){
        this.state.data['datasets'][0].data=this.props.distribution
    }
    render() {
        return (
            <div>
                <h2>Customer ratings</h2>
                <HorizontalBar
                    data={this.state.data}
                    width={50}
                    height={50}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }
}