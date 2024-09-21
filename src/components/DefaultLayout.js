import { StyleSheet, Text, View, ScrollView, RefreshControl, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

const DefaultLayout = ({ children,onclick }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => onclick;
 
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {children}
      <Text>{`${isRefreshing}`}</Text>
    </ScrollView>
  );
};

export default DefaultLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});