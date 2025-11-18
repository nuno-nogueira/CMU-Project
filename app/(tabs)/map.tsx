import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ThemedView } from '@/components/themed-view';
import locations from '../data/locations.json';

export default function MapScreen() {
  return (
    <ThemedView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.7169,
          longitude: -9.139,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
          />
        ))}
      </MapView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
