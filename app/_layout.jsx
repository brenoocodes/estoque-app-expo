import { Tabs } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useEffect } from 'react';
import { StatusBar as RNStatusBar } from 'react-native';

export default function Layout() {
    useEffect(() => {
        RNStatusBar.setBackgroundColor('green');
        RNStatusBar.setBarStyle('light-content'); 
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <StatusBar style="light" />
            <Tabs>
                <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false }} />
                <Tabs.Screen name="produtos" options={{ title: 'Produtos', headerShown: false}} />
                <Tabs.Screen name="camera" options={{ title: 'Camêra'}} />
            </Tabs>
        </View>
    );
}
