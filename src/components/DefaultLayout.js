import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import Theme from '../assets/styles/layout';
import styled from 'styled-components/native';


const DefaultLayout = ({ children, onclick }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true);
    if (onclick != null)
      onclick();
    setIsRefreshing(false);
  };

  return (
    <ScrollView // style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <ViewLayout>{children}</ViewLayout>
    </ScrollView>

  );
};

export default DefaultLayout;

const ViewLayout = styled.View`
  padding: ${Theme.height(15)}px ${Theme.width(16)}px;
`;

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//  },
//});