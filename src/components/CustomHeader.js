import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

const CustomHeader = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back pressed')}>
          <Text onPress={() => navigation.navigate("SinglePageAppication")} style={styles.backIcon}>{'<'} </Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pochavaram boating point</Text>
          <Text style={styles.subtitle}>Wed, Jun 20 - 2 passengers</Text>
        </View>
        <TouchableOpacity style={styles.modifyButton} onPress={() => console.log('Modify pressed')}>
          <Text onPress={() => navigation.navigate("SinglePageAppication")} style={styles.modifyButtonText}>Modify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#6ba7eb',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
  },
  modifyButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  modifyButtonText: {
    color: 'white',
    fontSize: 14,
  },
});


export default CustomHeader