import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_38} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d6d/fd2e/ed08cdba219eacb9bed6131e962fb9f8"
        }}
        style={styles.ImageBackground_1_39}
      />
      <View style={styles.View_1_42}>
        <Text style={styles.Text_1_42}>Flight</Text>
      </View>
      <View style={styles.View_1_43}>
        <Text style={styles.Text_1_43}>Hotel</Text>
      </View>
      <View style={styles.View_28_3}>
        <Text style={styles.Text_28_3}>Zoo</Text>
      </View>
      <View style={styles.View_1_45}>
        <Text style={styles.Text_1_45}>Bus</Text>
      </View>
      <View style={styles.View_1_46} />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c80/a65b/7681e58b1994556671a7b1af99daccff"
        }}
        style={styles.TouchableOpacity_1_47}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_142"))
        }
      />
      <View style={styles.View_1_50} />
      <View style={styles.View_1_54} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7304/ca19/8eb8432314f0eb42e6c090c911dbcc1e"
        }}
        style={styles.ImageBackground_1_55}
      />
      <View style={styles.View_1_58} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d533/0526/e04bfa237c6fad36e35dd8f3e2961d7b"
        }}
        style={styles.ImageBackground_1_59}
      />
      <View style={styles.View_1_62}>
        <Text style={styles.Text_1_62}>Search cities, hotels...</Text>
      </View>
      <View style={styles.View_1_63}>
        <Text style={styles.Text_1_63}>Popular Destination</Text>
      </View>
      <View style={styles.View_1_64}>
        <Text style={styles.Text_1_64}>See all</Text>
      </View>
      <View style={styles.View_1_65}>
        <Text style={styles.Text_1_65}>See all</Text>
      </View>
      <View style={styles.View_1_66}>
        <Text style={styles.Text_1_66}>Near from you</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c50a/cb44/029d265867302f00beec9a17467f9e05"
        }}
        style={styles.ImageBackground_1_69}
      />
      <View style={styles.View_1_71}>
        <Text style={styles.Text_1_71}>Yogyakarta</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d9f/62ad/25aa94068a5232801e81c1e1cea8f422"
        }}
        style={styles.ImageBackground_28_2}
      />
      <View style={styles.View_19_95} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a89/56f9/60d41b13658bda42d8f690b2dd72b8ad"
        }}
        style={styles.ImageBackground_19_96}
      />
      <View style={styles.View_19_97}>
        <Text style={styles.Text_19_97}>Munyonyo Commonwealth Resort</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2c/45aa/fb180f0aaf7f899f4c998dfdfb4f8159"
        }}
        style={styles.ImageBackground_19_98}
      />
      <View style={styles.View_19_101}>
        <Text style={styles.Text_19_101}>4.4/5</Text>
      </View>
      <View style={styles.View_19_102}>
        <Text style={styles.Text_19_102}>(124)</Text>
      </View>
      <View style={styles.View_19_103}>
        <Text style={styles.Text_19_103}>Makindye Division</Text>
      </View>
      <View style={styles.View_19_104}>
        <Text style={styles.Text_19_104}>Average Price 600,000</Text>
      </View>
      <View style={styles.View_1_74} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c311/419f/1173d6fbc0d27fa5a87ed122ecc4c833"
        }}
        style={styles.ImageBackground_1_77}
      />
      <View style={styles.View_1_81}>
        <Text style={styles.Text_1_81}>Kampala Serena Hotel</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2c/45aa/fb180f0aaf7f899f4c998dfdfb4f8159"
        }}
        style={styles.ImageBackground_1_88}
      />
      <View style={styles.View_1_93}>
        <Text style={styles.Text_1_93}>4.4/5</Text>
      </View>
      <View style={styles.View_1_96}>
        <Text style={styles.Text_1_96}>(124)</Text>
      </View>
      <View style={styles.View_1_99}>
        <Text style={styles.Text_1_99}>Kintu Road,Kampala Uganda</Text>
      </View>
      <View style={styles.View_1_102}>
        <Text style={styles.Text_1_102}>Average Price Ugx.972,000</Text>
      </View>
      <View style={styles.View_1_73} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cb9/ed6e/47a844e772e5b1e8ed38a572e3267ae3"
        }}
        style={styles.ImageBackground_1_76}
      />
      <View style={styles.View_1_80}>
        <Text style={styles.Text_1_80}>Pearl Of Africa Hotel</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2c/45aa/fb180f0aaf7f899f4c998dfdfb4f8159"
        }}
        style={styles.ImageBackground_1_85}
      />
      <View style={styles.View_1_92}>
        <Text style={styles.Text_1_92}>4.2/5</Text>
      </View>
      <View style={styles.View_1_95}>
        <Text style={styles.Text_1_95}>(90)</Text>
      </View>
      <View style={styles.View_1_98}>
        <Text style={styles.Text_1_98}>Kampala Central,Nakasero Hill</Text>
      </View>
      <View style={styles.View_1_101}>
        <Text style={styles.Text_1_101}>Average Price Ugx.560.000</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_72}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_142"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c67f/7f11/67f9719605ecbb36806e61184f508b4c"
        }}
        style={styles.TouchableOpacity_1_75}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_142"))
        }
      />
      <View style={styles.View_1_79}>
        <Text style={styles.Text_1_79}>Protea Hotel </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2c/45aa/fb180f0aaf7f899f4c998dfdfb4f8159"
        }}
        style={styles.ImageBackground_1_82}
      />
      <View style={styles.View_1_91}>
        <Text style={styles.Text_1_91}>4.5/5</Text>
      </View>
      <View style={styles.View_1_94}>
        <Text style={styles.Text_1_94}>(109)</Text>
      </View>
      <View style={styles.View_1_97}>
        <Text style={styles.Text_1_97}>Entebbe Road Uganda </Text>
      </View>
      <View style={styles.View_1_100}>
        <Text style={styles.Text_1_100}>Average Price Ugx.300,000</Text>
      </View>
      <View style={styles.View_28_5}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41aa/47fa/4343bdad70dd21fc9932c2b0a1d12443"
          }}
          style={styles.ImageBackground_1_67}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/332f/689f/548db76fc5e3bd643732a64a683f4b62"
          }}
          style={styles.ImageBackground_14_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fe7/49b7/3c248ded0983c50eb27af3ea29084709"
          }}
          style={styles.ImageBackground_1_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d615/96d9/2d3f63ca14b8e7aba825ec6448c82718"
          }}
          style={styles.ImageBackground_14_158}
        />
        <View style={styles.View_1_70}>
          <Text style={styles.Text_1_70}>
            Queen Elizabeth National Game Park
          </Text>
        </View>
        <View style={styles.View_14_159}>
          <Text style={styles.Text_14_159}>Jinja Nile Bridge</Text>
        </View>
        <View style={styles.View_1_78}>
          <Text style={styles.Text_1_78}>Murchision Falls</Text>
        </View>
        <View style={styles.View_14_160}>
          <Text style={styles.Text_14_160}>Itanda Falls</Text>
        </View>
      </View>
      <View style={styles.View_14_47}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0246/9b41/b3ec6be9c69e9fe6bc25e54882a26b9c"
          }}
          style={styles.ImageBackground_14_31}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe1a/b2a7/9ed0758f2807facc320aaee798d17ea2"
          }}
          style={styles.TouchableOpacity_14_32}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("14_156"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/514f/f759/977e3db884ee41cccc2fe48a48974d8e"
          }}
          style={styles.ImageBackground_14_33}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e358/2062/b2a7b4b76e866c8cf530a7b10b5a7cac"
          }}
          style={styles.TouchableOpacity_14_34}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_142"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/badc/9bfe/9aa42454747db483597ed0824e67ddfc"
          }}
          style={styles.ImageBackground_14_35}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/772b/96c8/b4ceba877157054a963e3f5af5a29f32"
          }}
          style={styles.ImageBackground_14_36}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 250, 1)" },
  View_2: { height: hp("154.6448087431694%") },
  View_1_38: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("20.3551912568306%"),
    backgroundColor: "rgba(106, 57, 246, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_39: {
    width: wp("12.570787005954317%"),
    height: hp("6.182354265223435%"),
    top: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%")
  },
  View_1_42: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("29.78142076502732%"),
    justifyContent: "flex-start"
  },
  Text_1_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_43: {
    width: wp("11.38888888888889%"),
    minWidth: wp("11.38888888888889%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.77777777777778%"),
    top: hp("29.78142076502732%"),
    justifyContent: "flex-start"
  },
  Text_1_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_3: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%"),
    top: hp("29.918032786885245%"),
    justifyContent: "flex-start"
  },
  Text_28_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_45: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.5%"),
    top: hp("29.78142076502732%"),
    justifyContent: "flex-start"
  },
  Text_1_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_46: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.555555555555557%"),
    top: hp("20.3551912568306%"),
    backgroundColor: "rgba(57, 121, 246, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  TouchableOpacity_1_47: {
    width: wp("8.88888888888889%"),
    height: hp("4.371584699453552%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.166666666666664%")
  },
  View_1_50: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.44444444444444%"),
    top: hp("20.3551912568306%"),
    backgroundColor: "rgba(143, 192, 169, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_54: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.61111111111111%"),
    top: hp("20.3551912568306%"),
    backgroundColor: "rgba(163, 93, 106, 1)",
    opacity: 0.20000000298023224,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_55: {
    width: wp("8.88888888888889%"),
    height: hp("4.371584699453552%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.22222222222221%")
  },
  View_1_58: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("8.469945355191257%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_59: {
    width: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    top: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_1_62: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    top: hp("10.655737704918032%"),
    justifyContent: "flex-start"
  },
  Text_1_62: {
    color: "rgba(150, 150, 150, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_63: {
    width: wp("53.05555555555556%"),
    minWidth: wp("53.05555555555556%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("37.704918032786885%"),
    justifyContent: "flex-start"
  },
  Text_1_63: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_64: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.44444444444444%"),
    top: hp("38.52459016393443%"),
    justifyContent: "flex-start"
  },
  Text_1_64: {
    color: "rgba(248, 126, 97, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_65: {
    width: wp("12.222222222222221%"),
    minWidth: wp("12.222222222222221%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.44444444444444%"),
    top: hp("68.5792349726776%"),
    justifyContent: "flex-start"
  },
  Text_1_65: {
    color: "rgba(248, 126, 97, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_66: {
    width: wp("38.05555555555556%"),
    minWidth: wp("38.05555555555556%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("67.62295081967213%"),
    justifyContent: "flex-start"
  },
  Text_1_66: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_69: {
    width: wp("67.77777777777779%"),
    minWidth: wp("67.77777777777779%"),
    height: hp("19.398907103825135%"),
    minHeight: hp("19.398907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("148.88888888888889%"),
    top: hp("43.30601092896175%")
  },
  View_1_71: {
    width: wp("30.833333333333336%"),
    minWidth: wp("30.833333333333336%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("167.22222222222223%"),
    top: hp("51.36612021857923%"),
    justifyContent: "flex-start"
  },
  Text_1_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_2: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.00000000000001%"),
    top: hp("19.672131147540984%"),
    resizeMode: "cover"
  },
  View_19_95: {
    width: wp("88.05555555555556%"),
    minWidth: wp("88.05555555555556%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("124.86338797814207%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_19_96: {
    width: wp("32.5%"),
    minWidth: wp("32.5%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("124.86338797814207%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_19_97: {
    width: wp("44.166666666666664%"),
    minWidth: wp("44.166666666666664%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("124.86338797814207%"),
    justifyContent: "flex-start"
  },
  Text_19_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_98: {
    width: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    top: hp("129.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%")
  },
  View_19_101: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.55555555555556%"),
    top: hp("129.6448087431694%"),
    justifyContent: "flex-start"
  },
  Text_19_101: {
    color: "rgba(255, 198, 86, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_102: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.166666666666664%"),
    top: hp("129.6448087431694%"),
    justifyContent: "flex-start"
  },
  Text_19_102: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_103: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("132.5136612021858%"),
    justifyContent: "flex-start"
  },
  Text_19_103: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_104: {
    width: wp("43.611111111111114%"),
    minWidth: wp("43.611111111111114%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("135.38251366120218%"),
    justifyContent: "flex-start"
  },
  Text_19_104: {
    color: "rgba(142, 116, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_74: {
    width: wp("88.05555555555556%"),
    minWidth: wp("88.05555555555556%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("107.10382513661203%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_77: {
    width: wp("32.5%"),
    minWidth: wp("32.5%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("107.10382513661203%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_81: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("108.46994535519126%"),
    justifyContent: "flex-start"
  },
  Text_1_81: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_88: {
    width: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    top: hp("112.02185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%")
  },
  View_1_93: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.55555555555556%"),
    top: hp("111.88524590163935%"),
    justifyContent: "flex-start"
  },
  Text_1_93: {
    color: "rgba(255, 198, 86, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_96: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.166666666666664%"),
    top: hp("111.88524590163935%"),
    justifyContent: "flex-start"
  },
  Text_1_96: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_99: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("114.75409836065573%"),
    justifyContent: "flex-start"
  },
  Text_1_99: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_102: {
    width: wp("43.611111111111114%"),
    minWidth: wp("43.611111111111114%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("117.62295081967213%"),
    justifyContent: "flex-start"
  },
  Text_1_102: {
    color: "rgba(142, 116, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_73: {
    width: wp("88.05555555555556%"),
    minWidth: wp("88.05555555555556%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("89.89071038251366%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_76: {
    width: wp("32.5%"),
    minWidth: wp("32.5%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("89.89071038251366%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_80: {
    width: wp("41.66666666666667%"),
    minWidth: wp("41.66666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("91.2568306010929%"),
    justifyContent: "flex-start"
  },
  Text_1_80: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_85: {
    width: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    top: hp("94.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%")
  },
  View_1_92: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.55555555555556%"),
    top: hp("94.67213114754098%"),
    justifyContent: "flex-start"
  },
  Text_1_92: {
    color: "rgba(255, 198, 86, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_95: {
    width: wp("6.388888888888888%"),
    minWidth: wp("6.388888888888888%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.166666666666664%"),
    top: hp("94.67213114754098%"),
    justifyContent: "flex-start"
  },
  Text_1_95: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_98: {
    width: wp("52.22222222222223%"),
    minWidth: wp("52.22222222222223%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("97.54098360655738%"),
    justifyContent: "flex-start"
  },
  Text_1_98: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_101: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("100.40983606557377%"),
    justifyContent: "flex-start"
  },
  Text_1_101: {
    color: "rgba(142, 116, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_72: {
    width: wp("88.05555555555556%"),
    minWidth: wp("88.05555555555556%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("72.6775956284153%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  TouchableOpacity_1_75: {
    width: wp("32.5%"),
    minWidth: wp("32.5%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("72.6775956284153%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_79: {
    width: wp("42.77777777777778%"),
    minWidth: wp("42.77777777777778%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("74.18032786885246%"),
    justifyContent: "flex-start"
  },
  Text_1_79: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_82: {
    width: wp("3.3333333333333335%"),
    height: hp("1.639344262295082%"),
    top: hp("77.59562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%")
  },
  View_1_91: {
    width: wp("8.055555555555555%"),
    minWidth: wp("8.055555555555555%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.55555555555556%"),
    top: hp("77.45901639344262%"),
    justifyContent: "flex-start"
  },
  Text_1_91: {
    color: "rgba(255, 198, 86, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_94: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.166666666666664%"),
    top: hp("77.45901639344262%"),
    justifyContent: "flex-start"
  },
  Text_1_94: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_97: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("80.32786885245902%"),
    justifyContent: "flex-start"
  },
  Text_1_97: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_100: {
    width: wp("45.55555555555556%"),
    minWidth: wp("45.55555555555556%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.27777777777778%"),
    top: hp("83.19672131147541%"),
    justifyContent: "flex-start"
  },
  Text_1_100: {
    color: "rgba(142, 116, 249, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_5: {
    width: wp("256.6666666666667%"),
    minWidth: wp("256.6666666666667%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-16.11111111111111%"),
    top: hp("45.49180327868852%")
  },
  ImageBackground_1_67: {
    width: wp("58.05555555555556%"),
    minWidth: wp("58.05555555555556%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555554%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_14_157: {
    width: wp("58.05555555555556%"),
    minWidth: wp("58.05555555555556%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("137.2222222222222%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_1_68: {
    width: wp("57.77777777777777%"),
    minWidth: wp("57.77777777777777%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.27777777777777%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_14_158: {
    width: wp("57.77777777777777%"),
    minWidth: wp("57.77777777777777%"),
    height: hp("21.721311475409834%"),
    minHeight: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("198.88888888888889%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_1_70: {
    width: wp("58.611111111111114%"),
    minWidth: wp("58.611111111111114%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    justifyContent: "flex-start"
  },
  Text_1_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_159: {
    width: wp("48.61111111111111%"),
    minWidth: wp("48.61111111111111%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("146.66666666666669%"),
    top: hp("16.53005464480875%"),
    justifyContent: "flex-start"
  },
  Text_14_159: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_78: {
    width: wp("51.388888888888886%"),
    minWidth: wp("51.388888888888886%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%"),
    top: hp("16.53005464480875%"),
    justifyContent: "flex-start"
  },
  Text_1_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_160: {
    width: wp("51.388888888888886%"),
    minWidth: wp("51.388888888888886%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("202.5%"),
    top: hp("16.53005464480875%"),
    justifyContent: "flex-start"
  },
  Text_14_160: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_47: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("145.76502732240436%")
  },
  ImageBackground_14_31: {
    width: wp("100%"),
    height: hp("8.879781420765028%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_14_32: {
    width: wp("5.599999957614475%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.46666463216145%")
  },
  ImageBackground_14_33: {
    width: wp("5.599999957614475%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.93333350287543%")
  },
  TouchableOpacity_14_34: {
    width: wp("6.400000254313151%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666904025607%")
  },
  ImageBackground_14_35: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066663953993055%")
  },
  ImageBackground_14_36: {
    width: wp("7.187520133124457%"),
    height: hp("2.8688524590163933%"),
    top: hp("2.9371584699453592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000047471788195%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
