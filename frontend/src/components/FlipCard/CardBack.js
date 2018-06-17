import React, {Component} from 'react'
import {VictoryPie, VictoryLegend} from 'victory';

export default class CardBack extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <svg style={{width: '100%', height: '100%'}}>
                <VictoryLegend standalone={false}
                               colorScale={["tomato", "orange", "gold", "red", "pink"]}
                               x={0} y={180}
                               gutter={9}
                               orientation="horizontal"
                               data={this.props.legendData}
                    //labelComponent={<VictoryLabel angle={45}/>}
                               borderPadding={{left: 0, bottom: 0}}
                />
                <VictoryPie standalone={false}
                            animate={{duration: 500, onLoad: {duration: 500}}}
                            width={185} height={185}
                            padding={{
                                bottom: 20, top: 20, left: 20, right: 20
                            }}
                            colorScale={["tomato", "orange", "gold", "red", "pink"]}
                            data={this.props.data}
                            labels={() => null}
                />
            </svg>
        )
    }
}