import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Input, Text} from 'react-native-elements';
import {LoginStyles as styles} from '../styles/auth-styles';
import { getUsers, storeLoggedInUser, getLoggedInUser } from '../cmomon/utils';

// eslint-disable-next-line no-shadow
const LoginScreen = ({navigation, setProfile}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  useEffect(async () => {
    const loggedInUser = await getLoggedInUser();
    if (loggedInUser) {
      navigation.push('App');
    }
  }, []);
  
  const onClkLogin = async () => {
    let isError = false;
    const users = await getUsers();
    console.log(users);
    if (email.length < 1) {
      setEmailError('This field cannot be empty');
      isError = true;
      return;
    }
    if (password.length < 1) {
      setPasswordError('This field cannot be empty');
      isError = true;
      return;
    }
    const user = users ? users.find(user => user.email === email && user.password === password) : null;
    if (!user) {
      setEmailError('Wrong email or password ');
      setPasswordError('Wrong email or password ');
      isError = true;
      return;
    }
    if (!isError) {
      storeLoggedInUser(user);
      navigation.push('App');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboard_view}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scroll_container}
          showsVerticalScrollIndicator={false}>
          <Text
            style={styles.headerStyle}
            h1
            h1Style={{ color: '#333333' }}
          >
            Log In
          </Text>
          <Input
            value={email}
            keyboardType={'email-address'}
            label={'Email'}
            editable={true}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize="none"
            leftIcon={
              (
                <Icon
                  name={'email'}
                  size={24}
                />
              )
            }
            errorMessage={emailError}
          />
          <Input
            value={password}
            style={styles.inputStyle}
            labelStyle={styles.labelStyle}
            onChangeText={setpassword}
            secureTextEntry={!visible}
            label={"Password"}
            autoCapitalize="none"
            leftIcon={(
              <Icon name="lock" size={24} />
            )}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setVisible(!visible)
                }>
                <Icon
                  name="eye-outline"
                  size={24}
                  color={visible ? "#23CBD8" : "#333333"}
                />
              </TouchableOpacity>
            }
            errorMessage={passwordError}
          />
          <Button
            buttonStyle={styles.btnContainer}
            title={"Submit"}
            onPress={onClkLogin}
          />
          <Button
            type="clear"
            title="Sign up"
            containerStyle={styles.forgot_container}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
