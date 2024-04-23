import { styles } from './styles/Style';

import { View, Text } from 'react-native';
import Pre from './component/Pre'

export default function App() {
  return (
    <View style={styles.container}>
      
      <View>
        <Pre/>
      </View>
      
    </View>
  );
}
