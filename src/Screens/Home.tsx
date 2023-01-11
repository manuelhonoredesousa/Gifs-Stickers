import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Screen } from "./Routes";
import { THEME, STYLES } from "./../Styles/styles";
import { MaterialCommunityIcons } from "react-native-vector-icons";

type Choose = "gifs" | "stickers";

export default function Home({ navigation }) {
  function goToResults(choose: Choose) {
    navigation.navigate(Screen.Results, choose);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={THEME.colors.gray[600]}
        translucent
      />

      <Text
        style={{
          ...STYLES.textHeading,
          fontSize: 35,
          color: THEME.colors.primary,
        }}
      >
        Gifs & Stickers
      </Text>
      <Text
        style={{
          ...STYLES.textBody,
          paddingVertical: 15,
          width: "70%",
          textAlign: "center",
        }}
      >
        "Discover the perfect GIF or Sticker to express your feelings with our
        app!"
      </Text>
      <Text style={{ ...STYLES.textHeading, marginTop: 50 }}>
        Searching For:
      </Text>

      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => goToResults("gifs")}
        >
          <MaterialCommunityIcons
            name="file-gif-box"
            size={30}
            color={THEME.colors.white}
            style={styles.iconMarginStyle}
          />

          <Text style={styles.btnTxt}>GIFs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => goToResults("stickers")}
        >
          <MaterialCommunityIcons
            name="sticker"
            size={30}
            color={THEME.colors.white}
            style={styles.iconMarginStyle}
          />
          <Text style={styles.btnTxt}>Stikers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.colors.gray[600],
  },
  btn: {
    width: 100,
    height: 50,
    borderRadius: 8,
    flexDirection: "row",
    backgroundColor: THEME.colors.primary,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    color: THEME.colors.white,
    fontWeight: "bold",
  },
  iconMarginStyle: { margin: 1 },
});
