import React, { Component } from 'react';
import Timer from './Timer';

class TimerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          currentTick: 10,
          tickValue: 2
        },
        {
          currentTick: 5,
          tickValue: 20
        }
      ]
    }
  }

  tick() {
    this.setState((state) => {
      // const listCopy = [...state.list]
      const listCopy = JSON.parse(JSON.stringify(state.list))
    })
  }

  render() {
    return(
      <div>
        {
          this.state.list.map((node, i) => {
            return <Timer key={i} currentTick={node.currentTick} tickValue={node.tickValue} />
          })
        }
      </div>
    )
  }
}

export default TimerContainer
