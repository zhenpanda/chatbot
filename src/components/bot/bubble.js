import React, { Component } from 'react';
import Typist from 'react-typist';
// import TypistLoop from 'react-typist-loop';

export default class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: [0],
      text: ['...',"Hello Human"]
     };
  }
  componentWillMount() {
    let order = this.state.msg;

    let time = 0;
    let timeInterval = setInterval( () => {
      time++;
      if (time%5===0) {
        order.push(0);
        this.setState({ msg: order })
        console.log("count time...", this.state);
      }
    }, 5000);

  }

  // <TypistLoop interval={1000}>
  //   {[
  //     'Hello World',
  //     'Good Morning',
  //     'Bye',
  //   ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
  // </TypistLoop>
  render() {
    const blockMsg = this.state.msg;
    return (
      <div>
        {
          blockMsg.map((i) =>
            <div className="block">
              <div className="bot-bubble">
                <Typist className="Typist" startDelay={1000}>...</Typist>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
