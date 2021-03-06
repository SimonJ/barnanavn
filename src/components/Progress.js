import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'rc-progress';

class Progress extends Component {
    progress() {
        let total = this.props.names[this.props.gender.selected + 'Count'];
        let actual = (this.props.names.accepted.length + this.props.names.rejected.length) + 1;
        return (actual * 100) / total;
    }

    render() {
        return (
            <div className="progress-box">
                <Line percent={this.progress()} strokeWidth="1.5" trailWidth="1.5" strokeColor="#118C8B" trailColor="#F1f1f1" strokeLinecap="square"/>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        names: store.names,
        gender: store.gender
    };
};

export default connect(mapStateToProps)(Progress);
