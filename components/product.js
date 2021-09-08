import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import InputSpinner from "react-native-input-spinner";

function Product(props) {
    const [quantity, setQuantity] = useState(1)
    const handleChange = (value) => {
        setQuantity(value)
    }
    return (
        <ProductWrapper>
            <ImageView>
                <StyledImage source={{ uri: props.product.image }} resizeMode={'cover'} />
            </ImageView>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{props.product.title}</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Price :{props.product.price.toFixed(2)}</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Quantity :</Text>
            <InputSpinner style={{ width: 100, alignSelf: 'center' }} buttonStyle={{ width: 30, backgroundColor: '#665EAD' }} max={10} min={1} step={1} editable={false} rounded={false} showBorder={true} colorMax={"#f04048"} colorMin={"#40c5f4"} value={quantity}
                onChange={(increased) => { setQuantity(increased) }}
            />
            <View style={{padding:10}}>
            <TouchableOpacity style={{ backgroundColor:'#90EE90',width:100,height:30,alignSelf:'center',borderRadius:5 }} onPress={()=>{props.addToCart(props.product,quantity)}}>
                <Text style={{ color:'#000',textAlign:'center',fontSize:17,fontWeight:'bold' }}>Add to Cart</Text>
            </TouchableOpacity>
            </View>
        </ProductWrapper>
    )
}
export default Product
const StyledImage = styled.Image`
height: 140px;
width: 109px;
`
const ImageView = styled.View`

align-self:center
`
const ProductWrapper = styled.View`
text-align: center;
padding:10px
`


