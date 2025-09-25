import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NanoTrader</Text>
      <Text>Versão mínima pronta para build (APK).</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#0b1220' },
  title: { fontSize:28, color:'#58a6ff', fontWeight:'bold', marginBottom:8 }
});
