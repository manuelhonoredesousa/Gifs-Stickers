import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Keyboard,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome5 } from "react-native-vector-icons/";
import { useState } from "react";
import axios from "axios";
import { API_KEY } from "./../Api/giphy_api.json";
import { Screen } from "./Routes";
import { STYLES, THEME } from "./../Styles/styles";


let page = 0;

export default function Results({ navigation, route }) {

  ////// JS //////
  const { goBack } = navigation;
  const data = route.params;
  const api = `https://api.giphy.com/v1/${data}/search`;
  const [searchText, setSearchText] = useState<string>();
  const [apiData, SetApiData] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const requestAPI = async (searchText:string, type: "firstTime" | "viewMore") => {
    Keyboard.dismiss();
    try {
      const results = await axios.get(api, {
        params: {
          api_key: API_KEY,
          q: searchText,
          rating: "g",
          limit: 20,
          offset: page * 20,
          // lang:'en'
        },
      });
      page++;
      setErrorMessage(false)
      if(type == "viewMore"){
        SetApiData((prev)=> [...prev,...results.data.data]);
      }else if(type == "firstTime"){
        SetApiData(results.data.data);
      }
    } catch (err) {
      setErrorMessage(true)
    }
  };

  ////// HTML //////
  return (
    <SafeAreaView style={STYLES.mainContainerWithoutDefaultHeader}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={THEME.colors.gray[400]}
        translucent
        animated
      />
      <View style={style.header}>
        <View style={style.searchPlace}>
          <TouchableOpacity onPress={goBack}>
            <Ionicons
              name="chevron-back"
              size={30}
              color={THEME.colors.white}
            />
          </TouchableOpacity>

          <TextInput
            style={style.textInput}
            placeholder="Search"
            autoCapitalize="none"
            autoCorrect={false}
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={() => requestAPI(searchText, "firstTime")}
          />
          <Ionicons
            name="search"
            size={30}
            color={THEME.colors.white}
            onPress={()=>requestAPI(searchText, "firstTime")}
          />
        </View>
      </View>

      <FlatList
        numColumns={2}
        ListEmptyComponent={() => (
          <View
            style={{
              alignSelf: "center",
              marginTop: "50%",
              alignItems: "center",
            }}
          >
            <FontAwesome5
              name={errorMessage ? "exclamation-triangle": "box-open"}
              size={40}
              color={THEME.colors.white}
            />
            <Text style={{...STYLES.textHeading, marginTop:10}}>
              {errorMessage ? "We are having problems with the request" : "No image found"}
            </Text>
          </View>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={()=>requestAPI(searchText, "viewMore")}
        data={apiData}
        keyExtractor={(element: any) => String(element.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Screen.Details, {
                title: item.title,
                img: item.images.preview_gif.url,
              })
            }
          >
            <Image
              style={style.imageList}
              source={{ uri: item.images.preview_gif.url }}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

//STYLE
const { width } = Dimensions.get("window");
const COLUMN_WIDTH = width / 2;
const IMAGE_WITH = COLUMN_WIDTH * 0.9; //90% of COLUMN_WIDTH

const style = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    padding: 5,
    flex: 1,
    fontSize: THEME.fontSizes.lg,
    marginRight: 10,
    backgroundColor: THEME.colors.white,
  },
  searchPlace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageList: {
    width: IMAGE_WITH,
    height: IMAGE_WITH,
    margin: 10, //IMAGE_WITH*0.05
  },
  header: {
    backgroundColor: THEME.colors.gray[400],
    ...STYLES.headerPadding,
  },
});
