import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Bubble from './bot/bubble.js';

class Chat extends Component {
  componentWillMount() {
    // this.props.fetchMessage();
  }

  render() {
    return(
      <div>
        <h1>Chat Bot</h1>
        <div className="chat-box">
          <div className="content">
            <div className="person-block">
              <div className="person-bubble">Hi there robot how are you?</div>
            </div>
            <div className="block">
              <div className="bot-bubble ">OMG who is talking to me...</div>
            </div>
            <Bubble />
          </div>
          <form>
              <input type="text" className="input" />
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Chat);
