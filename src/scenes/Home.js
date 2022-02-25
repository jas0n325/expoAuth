import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import {LoginStyles as styles} from '../styles/auth-styles';
import { logoutUser, getLoggedInUser } from '../cmomon/utils';

const HomeScreen = ({navigation}) => {
  const [loggedIn, setLoggedIn] = useState([]);
  const onClkLogout = async () => {
    await logoutUser();
    navigation.navigate('Login');
  }

  useEffect(async () => {
    const loggedInUser = await getLoggedInUser();
    if (!loggedInUser) {
      navigation.push('Auth');
    } else {
      setLoggedIn(loggedInUser);
    }
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.keyboard_view}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          showsVerticalScrollIndicator={false}>
          <Text
            style={styles.headerStyle}
            h1
            h1Style={{ color: '#333333' }}
          >
            Welcome {loggedIn && loggedIn.email}
          </Text>
          <Button
            buttonStyle={styles.btnContainer}
            title={"Log Out"}
            onPress={onClkLogout}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
};

export default HomeScreen;