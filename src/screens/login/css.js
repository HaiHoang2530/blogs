import {StyleSheet} from 'react-native';
import Colors from '../../theme/color';

const styleLogin = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
  viewImag: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewForm: {
    flex: 3,
    margin: 32,
  },
  image: {
    height: 200,
    width: 200,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray,
    color: Colors.white,
  },
  touchOpacity: {
    backgroundColor: Colors.green,
    height: 30,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export {styleLogin};
