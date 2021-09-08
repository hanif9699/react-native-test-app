import React,{useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import ProductListing from "./components/product-listing";
import Cart from "./components/cart";
import Header from "./components/header";
import { getAllProducts } from './reducers/productSlice'
import { useDispatch } from 'react-redux';

export default function RouterFile() {
    const dispatch = useDispatch()
    //To fetch the products
    useEffect(() => {
        dispatch(getAllProducts())
        return () => { }
      }, [dispatch])
    return (
        <NativeRouter>
            <Header />
            <Route exact path="/" component={ProductListing} />
            <Route path="/cart" component={Cart} />
        </NativeRouter>
    );
}