import React, {Component} from 'react'
import {HorizontalBar} from 'react-chartjs-2';

export default class HorizontalChart extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Customer ratings</h2>
                <HorizontalBar
                    data={this.props.data}
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