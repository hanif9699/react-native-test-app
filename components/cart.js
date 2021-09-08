import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { addToCart, removeFromCart, removeProductFromCart } from '../reducers/cartSlice'
import CartItem from './cartItem'

function Cart(props) {
  const renderItem = ({ item }) => (
    <CartItem cartitem={item} addToCart={props.handleAddToCart} addToCart={props.handleAddToCart} removeFromCart={props.handleRemoveFromCart} removeProduct={props.handleRemoveProductFromCart} />
  )
  return (
    <PageView style={styles.AddFlex}>
      <PageHeader>Your Shopping Cart</PageHeader>
      {props.cartItems.length === 0 ? <MessageHeader>You have no products in cart</MessageHeader>:<Text></Text>}
      <FlatView style={styles.AddFlex}>
        <FlatList
          data={props.cartItems}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </FlatView>
    </PageView>
  );
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (product) => {
      dispatch(addToCart({ product, quantity: 1 }))
    },
    handleRemoveFromCart: (product) => {
      dispatch(removeFromCart({ product }))
    },
    handleRemoveProductFromCart: (product) => {
      dispatch(removeProductFromCart({ product }))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
//make flatlist scrollable
const styles = StyleSheet.create({
  AddFlex: {
    flex: 1
  }
})
const PageHeader = styled.Text`
text-align:center;
font-weight:bold;
font-size:22px;
`
const MessageHeader = styled.Text`
text-align:center;
font-weight:bold;
font-size:22px;
justify-content:center;
padding:50px
`
const PageView = styled.View`
padding-top:10px;
`
const FlatView = styled.View`
display:flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`