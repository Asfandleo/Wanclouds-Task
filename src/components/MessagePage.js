import React, { Component } from 'react';
import {connect} from 'react-redux';

class Message extends Component {
    ShowMessage(message,index){
        return <div key={index}>
            Message: {message.new_message}
        </div>
    }
    render() {
        return (
            <div>
        Show message
        {this.props.new_message.map(this.ShowMessage)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
       new_message: state.new_message
    };
}

export default connect(mapStateToProps) (Message);