import {StyleSheet} from 'react-native';
import Colors from '../../theme/color';

const styComment = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contens: {
    flex: 1,
    backgroundColor: Colors.Aqua,
    margin: 16,
  },
  comment: {
    flex: 2,
    backgroundColor: Colors.green,
  },
  play: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.Lime,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textput: {
    height: 40,
    width: '80%',
    backgroundColor: Colors.Gray,
    borderRadius: 20,
    paddingLeft: 10,
  },
  img: {
    marginLeft: 5,
  },
  textName: {
    color: '#000000',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  conten: {
    marginLeft: 10,
  },
});

export {styComment};
