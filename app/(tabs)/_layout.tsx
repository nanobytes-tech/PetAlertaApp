import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';

export default function TabLayout() {
  const { logout } = useAuth();
  return (
    <Tabs screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      tabBarActiveTintColor: '#f4511e',
    }}>
      <Tabs.Screen name="index" options={{ title: 'Mapa', tabBarIcon: ({ color, size }) => <FontAwesome name="map-marker" size={size} color={color} /> }} />
      <Tabs.Screen name="alerts" options={{ title: 'Alertas', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />,
        headerRight: () => (
          <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
            <MaterialIcons name="logout" size={24} color="white" />
          </TouchableOpacity>
        ),
      }} />
      <Tabs.Screen name="report" options={{ title: 'Reportar', tabBarIcon: ({ color, size }) => <MaterialIcons name="add-location-alt" size={size} color={color} /> }} />
    </Tabs>
  );
}