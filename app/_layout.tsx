import { Stack, useRouter, useSegments } from 'expo-router';
import { PetProvider } from '../context/PetContext';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

const InitialLayout = () => {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    const inAuthGroup = segments[0] === '(auth)';
    
    if (user && !inAuthGroup) {
      router.replace('/(tabs)');
    } else if (!user && !inAuthGroup) {
      router.replace('/login');
    }
  }, [user, loading, segments]);

  if (loading) {
    return <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size="large" color="#f4511e" /></View>;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ title: 'Criar Conta', presentation: 'modal' }} />
      <Stack.Screen name="pet/[id]" options={{ title: 'Detalhes do Pet', presentation: 'modal' }} />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <PetProvider>
        <InitialLayout />
      </PetProvider>
    </AuthProvider>
  );
}