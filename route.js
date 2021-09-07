import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import ProductListing from "./components/product-listing";
import Cart from "./components/cart";
import Header from "./components/header";

export default function RouterFile() {
    return (
        <NativeRouter>
            <Header />
            <Route exact path="/" component={ProductListing} />
            <Route path="/cart" component={Cart} />
        </NativeRouter>
    );
}