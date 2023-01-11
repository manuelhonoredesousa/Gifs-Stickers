import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { STYLES, THEME } from "./../Styles/styles";
export default function Details({ navigation, route }) {
  //JS
  const { img, title } = route.params;
  const { goBack } = navigation;

  //HTM
  return (
    <SafeAreaView style={STYLES.mainContainerWithoutDefaultHeader}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={THEME.colors.gray[600]}
        translucent
        animated
      />

      <View style={style.searchPlace}>
        <TouchableOpacity
          onPress={goBack}
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="chevron-back" size={30} color={THEME.colors.white} />
          <Text style={STYLES.textHeading}>Results</Text>
        </TouchableOpacity>
      </View>

      <View style={style.imgContainer}>
        <Image style={{ flex: 1 }} source={{ uri: img }} resizeMode="contain" />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.imageTitle}>{title}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(img)}>
          <Icon name="globe" size={30} color={THEME.colors.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  searchPlace: {
    flexDirection: "row",
    alignItems: "center",
    ...STYLES.headerPadding,
  },

  imgContainer: {
    width: "100%",
    height: "50%",
    backgroundColor: THEME.colors.black,
  },
  imageTitle: {
    width: "88%",
    marginRight: 8,
    ...STYLES.textHeading,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
