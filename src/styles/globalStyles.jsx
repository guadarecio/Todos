import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleAdd: {
    textAlign: 'center',
    padding: 15,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgba(77, 82, 244, 0.8)',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(57, 148, 228, 0.8)',
  },
  flatListView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(57, 148, 228, 0.8)',
    padding: 15,
    marginBottom: 20,
    borderRadius: 30,
  },
  textInputView: {
    width: '90%',
    marginTop: 30,
    marginBottom: 30,
  },
  textInput: {
    backgroundColor: 'rgba(57, 148, 228, 0.8)',
    color: 'white',
    fontSize: 20,
    padding: 60,
    borderRadius: 30,
  },
  addTaskButton: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(221, 92, 178, 0.8)',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTaskText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  image: {
    width: 200,
    height: 200,
  },
  deleteButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  verificationText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 50,
  },
});
