import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;
  useEffect(() => {
    checkCamera();
  });

  const checkCamera = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
  };
  const takePicture = async () => {
    const photo = await camera.current.takePhoto({
      flash: 'on',
    });
    console.log(photo)
  };

  if (device == null) return <ActivityIndicator />;
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      
      <TouchableOpacity
        onPress={() => {
          takePicture();
        }}
        style={{
          width: 60,
          height: 160,
          borderRadius: 30,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 50,
          alignSelf: 'center',
        }}><Text>kdjf;aklj</Text></TouchableOpacity>
      
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
