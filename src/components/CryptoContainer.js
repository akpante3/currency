import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData';

class CrytoContainer extends Component {
    componetDidMount () {
        console.log('======>>>')
        this.props.FetchCoinData()
    }
    render() {
        return (
          <View>
              <Text>Container</Text>
          </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CrytoContainer)