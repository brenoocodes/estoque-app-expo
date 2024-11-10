import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

export default function Dashboard() {
  const checkNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        alert('Permissão de notificações é necessária para o funcionamento do app.');
        checkNotificationPermission();
        return;
      }
    }

    try {
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log('Token de notificação:', token);
    } catch (error) {
      console.error('Erro ao obter o token de notificação:', error);
    }
  };

  useEffect(() => {
    checkNotificationPermission(); 
  }, []);

  return (
    <View style={styles.container}>
      <Text>Página Home</Text>
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
