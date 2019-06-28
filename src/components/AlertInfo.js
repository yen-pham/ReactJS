import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import {connect} from 'react-redux';


class AlertInfo extends Component {
    render() {
        if(this.props.AlertShow===false) return null;
        return (
            <AlertContainer>
                <Alert type="info">Hello, world</Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        AlertShow: state.AlertShow
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);
