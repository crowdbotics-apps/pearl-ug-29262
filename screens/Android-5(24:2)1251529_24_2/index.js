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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/652a/ccb8/f1c2e7ee19151c8ee2ad18606a523f44"
        }}
        style={styles.ImageBackground_18_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f973/5d32/a3d1c027829e272c963372d1c88ccdd8"
        }}
        style={styles.ImageBackground_18_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/652a/ccb8/f1c2e7ee19151c8ee2ad18606a523f44"
        }}
        style={styles.ImageBackground_18_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db2/5a8f/39e57e386b4cf9e240ed925f7d5ec180"
        }}
        style={styles.ImageBackground_18_20}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/2077/abb5fa2cf70ab7e6c285764d2e8de610"
        }}
        style={styles.ImageBackground_18_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce7/68d1/29c16bc8b2b2006dfc828631de82d56e"
        }}
        style={styles.ImageBackground_18_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37f5/45f7/0e30d2f1063ccbf4523f6e2c4c9963c0"
        }}
        style={styles.ImageBackground_18_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bea/1427/86a6d8d4024ac8613ff86bb8906bbb11"
        }}
        style={styles.ImageBackground_18_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8257/88fe/1e4f49e8ea86fcb61c07b995106deaf2"
        }}
        style={styles.ImageBackground_18_27}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e7b/990b/cdf137983eac9d7abf99b0ecb0b6d1d6"
        }}
        style={styles.ImageBackground_18_28}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f570/7033/0f53152916e57071d7a1dba475a99824"
        }}
        style={styles.TouchableOpacity_18_29}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_37"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75bc/2b55/080c9e7148253e7757e68279ded5f800"
        }}
        style={styles.ImageBackground_18_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c75/9932/6c2b3efff67d5e2c7b42ec9794453707"
        }}
        style={styles.ImageBackground_25_3}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_26_15}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("24_10"))
        }
      >
        <View style={styles.View_26_16} />
        <View style={styles.View_26_17}>
          <Text style={styles.Text_26_17}>
            I don’t have account yet? CREATE ONE
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 250, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_18_16: {
    width: wp("84.13792928059895%"),
    height: hp("0%"),
    top: hp("57.39928722381592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.538316514756945%")
  },
  ImageBackground_18_17: {
    width: wp("45.11217753092448%"),
    height: hp("1.3930797576904297%"),
    top: hp("50.015058517456055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.781338161892361%")
  },
  ImageBackground_18_19: {
    width: wp("84.13792928059895%"),
    height: hp("0%"),
    top: hp("68.41305732727051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.538316514756945%")
  },
  ImageBackground_18_20: {
    width: wp("12.231263054741753%"),
    height: hp("1.1114263534545898%"),
    top: hp("61.06295585632324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.781338161892361%")
  },
  ImageBackground_18_23: {
    width: wp("0.9195454915364584%"),
    height: hp("0.5006265640258789%"),
    top: hp("65.03383159637451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.45785352918837%")
  },
  ImageBackground_18_24: {
    width: wp("4.5977020263671875%"),
    height: hp("1.7521905899047852%"),
    top: hp("64.40804958343506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.61877102322049%")
  },
  ImageBackground_18_25: {
    width: wp("36.143226623535156%"),
    height: hp("1.4819812774658203%"),
    top: hp("72.33846187591553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.862209743923611%")
  },
  ImageBackground_18_26: {
    width: wp("4.137929280598959%"),
    height: hp("2.252812385559082%"),
    top: hp("71.91743850708008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.07855224609375%")
  },
  ImageBackground_18_27: {
    width: wp("3.2183965047200522%"),
    height: hp("1.7521858215332031%"),
    top: hp("72.16774940490723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.53831651475694%")
  },
  ImageBackground_18_28: {
    width: wp("14.784138997395832%"),
    height: hp("1.3091373443603516%"),
    top: hp("72.37788200378418%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.73922220865886%")
  },
  TouchableOpacity_18_29: {
    width: wp("84.13792928059895%"),
    height: hp("8.010010719299316%"),
    top: hp("77.54947662353516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.538316514756945%")
  },
  ImageBackground_18_30: {
    width: wp("16.397018432617188%"),
    height: hp("1.872849464416504%"),
    top: hp("80.58526992797852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.34819878472222%")
  },
  ImageBackground_25_3: {
    width: wp("100%"),
    height: hp("44.375%"),
    top: hp("0.3125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_26_15: {
    width: wp("115.55555555555554%"),
    height: hp("7.5%"),
    top: hp("92.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.555555555555555%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_16: {
    flexGrow: 1,
    width: wp("100.27777777777777%"),
    height: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%"),
    top: hp("0%"),
    backgroundColor: "rgba(1, 87, 228, 1)"
  },
  View_26_17: {
    flexGrow: 1,
    width: wp("81.78207397460938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.08185492621528%"),
    top: hp("1.875%"),
    justifyContent: "flex-start"
  },
  Text_26_17: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
