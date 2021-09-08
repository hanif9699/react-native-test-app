import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,FlatList,Button,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { addToCart } from '../reducers/cartSlice'
import Product from './product';

const list_limit = 6
function ProductListing(props) {
  const [showProduct, setShowProduct] = useState([])
  const [page, setPage] = useState(1)
  const [showButton, setShowButton] = useState(true);
  const [index, setIndex] = useState(list_limit)
  useEffect(() => {
    setShowProduct(props.products.slice(0, list_limit))
  }, [props.products])
  const handleLoadMore = () => {
    const newPage = page + 1,
      newShow = props.products.length > (list_limit * newPage)
    setPage(newPage)
    setShowButton(newShow)
    setShowProduct(prevState => [...prevState, ...props.products.slice(index, newPage * list_limit)])
    setIndex(newPage * list_limit)
  }
  const renderItem = ({ item }) => (
    <Product product={item} addToCart={props.handleAddToCart}/>
  )
  return (
    <PageView style={styles.AddFlex}>
      <PageHeader>Product Listing</PageHeader>
      {props.loading ? <MessageHeader>Loading the product ...</MessageHeader>:<Text></Text>}
      <FlatView style={styles.AddFlex}>
      <FlatList
        data={showProduct}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      </FlatView>
    {showProduct.length > 0 && showButton ?  <TouchableOpacity style={{backgroundColor:'#665EAD',width:100,height:30,alignSelf:'center'}} onPress={handleLoadMore}>
        <Text style={{color:'#000',textAlign:'center',fontSize:17,fontWeight:'bold'}}>Load More</Text>
    </TouchableOpacity> : <Text></Text>}
    </PageView>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.product.isFetching,
    products: state.product.products,
    error: state.product.errorMessage
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart: (product, quantity) => {
      dispatch(addToCart({ product, quantity }))
    }
  }
}
const PageHeader = styled.Text`
text-align:center;
font-weight:bold;
font-size:22px;
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
const MessageHeader = styled.Text`
text-align:center;
font-weight:bold;
font-size:22px;
justify-content:center;
padding:50px
`
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
//make flatlist scrollable
const styles=StyleSheet.create({
  AddFlex:{
    flex:1
  }
})