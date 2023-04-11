import React, { Component } from 'react';
import { View,Text,ScrollView,StyleSheet } from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import { template } from "../styles/template/page";

class PickTrails extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
        return (
            <View style={styles.container}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                }}
                title={'Marker Title'}
                description={'Marker Description'}
              />
            </MapView>
          </View>
        );
    }
}
export default PickTrails;
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });