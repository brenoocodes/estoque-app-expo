import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Produto() {
  return (
    <View style={styles.container}>
      <Text>Produtos</Text>
      <Link href="/produtos/2ac5">
        Ver produto com id e nome
      </Link>
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
