import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect,useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { UserContext } from '../common/UserProvider';
import { getAllUserInfo } from '../api/user/UsersApi';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allUserInfo = await getAllUserInfo();
          setData(allUserInfo);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchData();
  }, []);

  const { userProvider } = useContext(UserContext);
  return (
    <DefaultLayout children={
    <View  >
      <InputField>Data loaded: {JSON.stringify(data)}</InputField>
      
    </View>}>
    </DefaultLayout>
  );
};

export default HomeScreen;
