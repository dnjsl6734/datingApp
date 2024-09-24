import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { UserContext } from '../common/UserProvider';
import { getAllUserInfo } from '../api/user/UsersApi';
import Theme from '../assets/styles/layout';
import styled from 'styled-components/native';

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
    <DefaultLayout>
      <View>
        <Text>오늘의 추천</Text>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id.toString()} // 각 항목의 고유 키 설정
          pagingEnabled // 페이지 단위 스크롤
          showsHorizontalScrollIndicator={false} // 스크롤 바 숨기기
          snapToAlignment="start" // 스크롤 정렬
          contentContainerStyle={{ alignItems: 'center' }} // 중앙 정렬
          renderItem={({ item }) => (
            <View style={{ position: 'relative', marginRight: Theme.width(10) }}>
              <Image
                source={require('../assets/images/userPhoto.jpg')}
                style={{ width: Theme.width(350), height: Theme.height(450), opacity: 0.8 }}
              />
              <Text style={{
                position: 'absolute',
                bottom: Theme.height(10), // 이미지의 하단에서 텍스트 위치 조정
                left: Theme.width(10),   // 이미지의 왼쪽에서 텍스트 위치 조정
                color: 'white', // 텍스트 색상
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // 배경색 (투명도 조절 가능)
                padding: 5,
              }}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
    </DefaultLayout>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

{/* <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
  <Text>첫 번째 요소</Text>
  <Text>두 번째 요소</Text>
  <Text>세 번째 요소</Text>
</View><View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <Text>첫 번째 요소</Text>
  <Text>두 번째 요소</Text>
  <Text>세 번째 요소</Text>
</View> */}