import React from 'react';
import { router } from 'expo-router';
import { Text } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function MenuScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Menu vazio</ThemedText>
      <Pressable onPress={()=> router.push('./sellers/1')}><Text>Go to user 1</Text></Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
