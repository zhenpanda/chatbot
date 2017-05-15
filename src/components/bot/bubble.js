import React, { Component } from 'react';

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: [0,0,0] };
  }
  componentWillMount() {
    let order = this.state.msg;

    let time = 0;
    let timeInterval = setInterval( () => {
      time++;
      if (time%3===0) {
        order.push(0);
        this.setState({ msg: order })
        console.log("count time...", this.state);
      }
    }, 3000);
  }

  render() {
    const blockMsg = this.state.msg;
    return (
      <div>
        {
          blockMsg.map((i) =>
            <div className="block">
              <div className="bot-bubble ">...</div>
            </div>
          )
        }
      </div>
    );
  }
}
