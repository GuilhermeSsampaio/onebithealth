import { StyleSheet, View } from 'react-native';
import Form  from './src/components/Form/index';
import Title from './src/components/Title/';

export default function App() {
  return (
    <View style={styles.container}>
        <Title/>
        <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
