import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux';

class List extends Component {

  constructor(props) {
    super(props);

    // Bindings
    this.noneSelectedYetMsg = this.noneSelectedYetMsg.bind(this);

  }

  noneSelectedYetMsg() {
    if (this.props.accepted.length == 0) {
      return "Onki navn"
    } else {
      return "";
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li><b>Nøvn:</b></li>
          {this.noneSelectedYetMsg()}

          {this.props.accepted.map((data, i) => {
            return <li key={i}>
              {data.name}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    accepted: store.names.accepted
  };
};

export default connect(mapStateToProps)(List);
