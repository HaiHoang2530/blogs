import {StyleSheet} from 'react-native';
import Colors from '../../theme/color';

const styComment = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contens: {
    flex: 1,
  },
  comment: {
    flex: 2,
    backgroundColor: '#32e0c4',
  },
  play: {
    height: 50,
    width: '100%',
    backgroundColor: '#222831',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textput: {
    height: 40,
    width: '80%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingLeft: 10,
  },
  img: {
    marginLeft: 5,
  },
  textName: {
    color: '#000000',
    fontSize: 24,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  conten: {
    marginLeft: 10,
    fontSize: 20,
  },
  headerModal: {
    height: 50,
    flexDirection: 'row',
    margin: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  textModal: {
    marginLeft: 120,
    fontSize: 20,
    fontWeight: 'bold',
  },
  commentreply:{
    height:100,
    margin:16,
    backgroundColor:"#c8d5b9",
    borderRadius:20
  },
  play1: {
    height: 50,
    width: '100%',
    backgroundColor: '#222831',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleReply: {
    flex:1,
    borderRadius: 20,
    backgroundColor: '#c8d5b9',
    margin: 8,
    paddingLeft: 20,
    paddingTop: 5,
  },
  texrNameheader: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textCommentheader: {
    fontSize: 20,
  },
});

export {styComment};
