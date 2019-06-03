import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import stripe from 'tipsi-stripe'
import Spoiler from './Spoiler'
import Button from './Button'
import testID from '../../utils/testID'
import {doPayment} from '../../network/axios.config'
//const hello = require("stripe")("sk_test_sCLuu0HBPNn8LJgXkP5edwKW00FsDwf4pn");
stripe.setOptions({
    publishableKey: 'pk_test_Md8EBsN5wzHo33e1OpU7uW90003Ix6SKP7',
   // merchantId: 'MERCHANT_ID', // Optional
    //androidPayMode: 'test', // Android only
  })

export default class CustomCardScreen extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            isPaymentPending:false
        }
    }
    
    requestPayment = () => {
        this.setState({ isPaymentPending: true });
        return stripe
        .paymentRequestWithCardForm()
        .then(stripeTokenInfo => {
            return doPayment(100, stripeTokenInfo.tokenId);
        })
        .then(() => {
            console.log('Payment succeeded!');
        })
        .catch(error => {
            console.log('Payment failed', { error });
        })
        .finally(() => {
            this.setState({ isPaymentPending: false });
        });
    };
    render() {
        return (
          <View style={styles.container}>
            <Button
              title="Make a payment"
              onPress={this.requestPayment}
              disabled={this.state.isPaymentPending}
            />
          </View>
        );
      }
}
const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };