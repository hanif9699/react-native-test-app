import React, { useState ,useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import InputSpinner from "react-native-input-spinner";

function CartItem(props) {
    return (
        <ProductWrapper>
            <ImageView>
                <StyledImage source={{ uri: props.cartitem.image }} resizeMode={'cover'} />
            </ImageView>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{props.cartitem.title}</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Unit Price :{props.cartitem.price.toFixed(2)}</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Quantity :</Text>
            <InputSpinner style={{ width: 100, alignSelf: 'center' }} buttonStyle={{ width: 30, backgroundColor: '#665EAD' }} editable={false} max={100} min={1} step={1} rounded={false} showBorder={true} colorMax={"#f04048"} colorMin={"#40c5f4"} value={props.cartitem.quantity}
                onIncrease={() => { props.addToCart(props.cartitem) }} onDecrease={() => { props.removeFromCart(props.cartitem)}}
            />
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Amount :{props.cartitem.amount.toFixed(2)}</Text>
            <View style={{ padding: 10 }}>
                <TouchableOpacity style={{ backgroundColor: 'red', width: 100, height: 30, alignSelf: 'center', borderRadius: 5 }} onPress={() => { props.removeProduct(props.cartitem) }}>
                    <Text style={{ color: '#000', textAlign: 'center', fontSize: 17, fontWeight: 'bold' }}>Remove</Text>
                </TouchableOpacity>
            </View>
        </ProductWrapper>
    )
}
export default CartItem
const ProductWrapper = styled.View`
text-align: center;
padding:10px
`
const StyledImage = styled.Image`
height: 140px;
width: 109px;
`
const ImageView = styled.View`

align-self:center
`