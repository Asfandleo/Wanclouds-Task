import React  from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../actions/MessageActions';
import 'bootstrap/dist/css/bootstrap.css'

class Add extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: {
                new_message: ""
            }
        };
        this.ChangeMessage = this.ChangeMessage.bind(this);
        this.SendMessage = this.SendMessage.bind(this);
    }
    ChangeMessage(event){
        const message = this.state.message;
        message.new_message = event.target.value;
        this.setState({message: message});
    }
     SendMessage(){
        this.props.newMessage(this.state.message);
     }


    render() {
        return (
            <div>
            <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Enter Text</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" type="text" onChange={this.ChangeMessage}></textarea>
            </div>
            </form>
                <button className="btn btn-outline-success" type="submit" value="Submit" onClick={this.SendMessage}> <Link to = "/message" > Send </Link> </button>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
      new_message: state.new_message
    };

}
function mapDispatchToProps(dispatch) {
    return{
        newMessage: message => dispatch(Actions.newMessage(message))
    }

}

export default connect (mapStateToProps,mapDispatchToProps) (Add);