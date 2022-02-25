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
import { storeUsers, getUsers, storeLoggedInUser } from '../cmomon/utils';

// eslint-disable-next-line no-shadow
const SignupScreen = ({navigation, setProfile}) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [reVisible, setReVisible] = useState(false);
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errPasswordMismatch, setErrPasswordMismatch] = useState('');
  
  useEffect(() => {
  }, []);
  
  const onClkSignup = async () => {
    let isError = false;
    let users = await getUsers() || [];
    console.log(users);
    const lastUser = users[users.length - 1];
    if (email.length < 1) {
      setErrEmail('This field cannot be empty');
      isError = true;
      return;
    }
    if (password.length < 1) {
      setErrPassword('This field cannot be empty');
      isError = true;
      return;
    }
    if (password !== rePassword) {
      setErrPasswordMismatch('Please make sure your passwords match');
      return;
    }
    if (!isError) {
      const user = {
        id: lastUser ? lastUser.id + 1 : 1,
        email: email,
        password: password,
      };
      users.push(user);
      await storeUsers(users);
      await storeLoggedInUser(user);
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
            Sign Up
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
            errorMessage={errEmail}
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
            errorMessage={errPassword}
          />
          <Input
            value={rePassword}
            style={styles.inputStyle}
            labelStyle={styles.labelStyle}
            onChangeText={setRePassword}
            secureTextEntry={!reVisible}
            label={"Confirm Password"}
            autoCapitalize="none"
            leftIcon={(
              <Icon name="lock" size={24} />
            )}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setReVisible(!reVisible)
                }>
                <Icon
                  name="eye-outline"
                  size={24}
                  color={reVisible ? "#23CBD8" : "#333333"}
                />
              </TouchableOpacity>
            }
            errorMessage={errPasswordMismatch}
          />
          <Button
            buttonStyle={styles.btnContainer}
            title={"Submit"}
            onPress={onClkSignup}
          />
          <Button
            type="clear"
            title="Log In"
            containerStyle={styles.forgot_container}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
