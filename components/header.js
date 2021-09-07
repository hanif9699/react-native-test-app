import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

export default function Header() {
    return (
        <View>
            <Link to="/">
                <Text>Home</Text>
            </Link>
            <Link to="/cart">
                <Text>Cart</Text>
            </Link>
        </View>
    );
}