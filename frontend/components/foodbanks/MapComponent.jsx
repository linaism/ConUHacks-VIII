import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

const INITIAL_REGION = {
    latitude: 45.508888,
    longitude: -73.561668,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}

const MapComponent = () => {
    return (
        <View style={{flex: 1}}>
            <MapView style={StyleSheet.absoluteFill}
            provider={PROVIDER_GOOGLE}
            initialRegion={INITIAL_REGION}
            showsUserLocation
            showsMyLocationButton/>
        </View>
    )
}

export default MapComponent;