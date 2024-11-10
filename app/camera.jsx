import { Camera, useCameraPermissions, CameraView } from 'expo-camera';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function CameraDetect() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState('off');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();

      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão da câmera para fazer isso funcionar!');
      }
    })();
  }, [permission]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      `Código ${type} Scaneado`,
      `Dados: ${data}`,
      [
        {
          text: 'OK',
          onPress: () => setScanned(false),
        },
      ],
      { cancelable: false }
    );
  };

  const toggleFlash = () => {
    setFlash((prevFlash) => (prevFlash === 'on' ? 'off' : 'on'));
  };


  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.permissionText}>Permissão da câmera não concedida.</Text>
        <Button title="Solicitar Permissão" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <CameraView
      style={styles.camera}
      flash={flash}
      onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
    >
      <View style={styles.layerContainer}>
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom}>
          <Button title={`Flash: ${flash === 'on' ? 'Desligar' : 'Ligar'}`} onPress={toggleFlash} />
        </View>
      </View>
    </CameraView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  permissionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  layerContainer: {
    flex: 1,
  },
  layerTop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  layerCenter: {
    flexDirection: 'row',
  },
  layerLeft: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  focused: {
    width: 200,
    height: 600,
    borderWidth: 2,
    borderColor: '#00FF00',
  },
  layerRight: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  layerBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
