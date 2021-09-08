import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import styled from 'styled-components/native'
import { connect } from 'react-redux'
function Header(props) {
    return (
        <View>
            <HeaderWrapperView>
                <LinkWrapperView>
                    <Link component={TouchableOpacity} to="/">
                        <StyledText>Home</StyledText>
                    </Link>
                </LinkWrapperView>
                <LinkWrapperView>
                    <Link component={TouchableOpacity} to="/cart">
                        <StyledText>Go to Cart</StyledText>
                    </Link>
                </LinkWrapperView>
            </HeaderWrapperView>
            <View>
                <InfoText>Price: {props.totalAmount.toFixed(2)} Quantity: {props.totalQuantity}</InfoText>
            </View>
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        totalAmount: state.cart.totalAmount,
        totalQuantity: state.cart.totalQuantity
    }
}
const HeaderWrapperView = styled.View`
  display:flex;
  align-items:center;
  flex-direction: row;
  background: #665EAD;
  height:50px;
  justify-content:space-between;
`
const LinkWrapperView = styled.View`
  padding:5px 15px;
`
const StyledText = styled.Text`
font-size:20px;
font-weight:bold;
`
const InfoText = styled.Text`
font-size:15px;
font-weight:bold;
text-align:right;
`
const Wrapper =styled.View`
position: sticky;
top:0;
`
export default connect(mapStateToProps)(Header)