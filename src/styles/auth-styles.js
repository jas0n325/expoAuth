import {StyleSheet} from 'react-native';

export const LoginStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    flex: 1,
    paddingTop: 64,
  },
  login_img: {
    marginVertical: 24,
    alignSelf: 'center',
  },
  keyboard_view: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scroll_container: {
    paddingBottom: 32,
  },
  remember_container: {
    backgroundColor: 'transparent',
    padding: 0,
    marginBottom: 32,
    alignSelf: 'flex-start',
    borderWidth: 0,
  },
  forgot_container: {
    marginTop: 32,
    alignSelf: 'center',
  },
  btnContainer: {
    backgroundColor: "#23CBD8",
    height: 48,
  },
  inputStyle: {
    fontSize: 15,
    color: '##333333',
  },
  labelStyle: {
    fontSize: 14,
    color: '#9D9D9D',
    fontWeight: '500',
  },
  headerStyle: {
    textAlign: 'center',
    marginBottom: 16,
  }
});
export const ForgotPasswordStyles = StyleSheet.create({
  forgot_img: {
    marginBottom: 24,
    alignSelf: 'center',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 16,
  },
});
