import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUsers = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@users', jsonValue)
  } catch (e) {
    // saving error
    console.log(e)
  }
}

const getUsers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@users')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

const storeLoggedInUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@loggedIn', jsonValue)
  } catch (e) {
    // saving error
    console.log(e)
  }
}

const getLoggedInUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@loggedIn')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    return null;
  }
}

const logoutUser = async () => {
  try {
    await AsyncStorage.removeItem('@loggedIn')
  } catch(e) {
    // remove error
  }

  console.log('Done.')
}

export { storeUsers, getUsers, storeLoggedInUser, getLoggedInUser, logoutUser };