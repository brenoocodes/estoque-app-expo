import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


export default function ProdutoID() {
    const {id, nome} = useLocalSearchParams();
  return (
    <View style={styles.container}>
  
      <Text>Produto com id: {id}</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
