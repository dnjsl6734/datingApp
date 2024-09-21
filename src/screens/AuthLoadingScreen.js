import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { getUserProfile } from '../api/user/UsersApi';
import { UserContext } from '../common/UserProvider';

export default function AuthLoadingScreen({ navigation }) {
  const { userProvider, setUserProvider } = useContext(UserContext);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getUserProfile();
        if (Array.isArray(userProfile)) {
          const user = userProfile.find((user) => user.id === 1);
          setUserProvider(user);
        } else {
          setUserProvider(userProfile);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setUserProvider(error);

      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userProvider != [] &&userProvider != null ) {
     const isUserLoggedIn = true; // Replace with actual check
     if (isUserLoggedIn) {
       navigation.reset({
         index: 0,
         routes: [{ name: 'Home' }],
       });
     }
     else {
       navigation.reset({
         index: 0,
         routes: [{ name: 'Login' }],
       });
     }
    }
  }, [loading, navigation]);


  return (
    <View style={styles.container}>
      <Text>Data loaded: {JSON.stringify(userProvider)}</Text>
      <Text>Data loaded: {loading}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});