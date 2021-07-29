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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03fa/26b7/b46a6606c09ebf006e8ee7724d48d5bb"
        }}
        style={styles.ImageBackground_18_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02f2/aef9/f42b4a852a617ac9a328e620bef6397a"
        }}
        style={styles.ImageBackground_18_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1bf/6068/de0657229d10351fc5c8415cf34c1092"
        }}
        style={styles.ImageBackground_18_33}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03fa/26b7/b46a6606c09ebf006e8ee7724d48d5bb"
        }}
        style={styles.ImageBackground_18_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d938/6d02/65ac5b8bdb1f9765a5f33742906068c5"
        }}
        style={styles.ImageBackground_18_35}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cb0/8468/7616fb0dd2afde6135fbc5a4e907ea96"
        }}
        style={styles.ImageBackground_18_36}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9700/9d00/9aef1479fafdc0e74c5c2ff1cd4724cb"
        }}
        style={styles.ImageBackground_18_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef0/e0cd/d28447b8b7387783089257c0cf39246d"
        }}
        style={styles.ImageBackground_18_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1419/3ea1/89e8d32828427e12ba6ceecdbb9cd67c"
        }}
        style={styles.ImageBackground_18_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03fa/26b7/b46a6606c09ebf006e8ee7724d48d5bb"
        }}
        style={styles.ImageBackground_18_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4db2/5a8f/39e57e386b4cf9e240ed925f7d5ec180"
        }}
        style={styles.ImageBackground_18_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02df/ef8c/0fe61d15b758682f7bdb18b35d29ca0d"
        }}
        style={styles.ImageBackground_18_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52ae/2077/abb5fa2cf70ab7e6c285764d2e8de610"
        }}
        style={styles.ImageBackground_18_43}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce7/68d1/29c16bc8b2b2006dfc828631de82d56e"
        }}
        style={styles.ImageBackground_18_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7fa/ff1d/4172e142c2b7d093ee40d685001af05d"
        }}
        style={styles.ImageBackground_18_45}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0493/1b47/1605b56818d3d726e40b9ea5869558cc"
        }}
        style={styles.ImageBackground_18_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bea/1427/86a6d8d4024ac8613ff86bb8906bbb11"
        }}
        style={styles.ImageBackground_18_47}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f570/7033/0f53152916e57071d7a1dba475a99824"
        }}
        style={styles.ImageBackground_18_48}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30c8/0cdc/ce6e005ece30426ebf90a775c6f27cac"
        }}
        style={styles.ImageBackground_18_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c75/9932/6c2b3efff67d5e2c7b42ec9794453707"
        }}
        style={styles.ImageBackground_25_2}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_26_18}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("24_2"))
        }
      >
        <View style={styles.View_26_19}>
          <View style={styles.View_26_20} />
          <View style={styles.View_26_21}>
            <Text style={styles.Text_26_21}>
              I already have account? SIGN IN
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 250, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_18_31: {
    width: wp("84.13792928059895%"),
    height: hp("0%"),
    top: hp("49.85177040100098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.816094292534722%")
  },
  ImageBackground_18_32: {
    width: wp("6.455236540900336%"),
    height: hp("1.1455607414245605%"),
    top: hp("43.24878692626953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.05904812282986%")
  },
  ImageBackground_18_33: {
    width: wp("27.712622748480904%"),
    height: hp("1.527540683746338%"),
    top: hp("45.9719181060791%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.140038384331596%")
  },
  ImageBackground_18_34: {
    width: wp("84.13792928059895%"),
    height: hp("0%"),
    top: hp("60.865535736083984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.816094292534722%")
  },
  ImageBackground_18_35: {
    width: wp("19.13964801364475%"),
    height: hp("1.1092591285705566%"),
    top: hp("53.51546287536622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.05904812282986%")
  },
  ImageBackground_18_36: {
    width: wp("44.625040690104164%"),
    height: hp("1.4790964126586914%"),
    top: hp("57.03125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.461873372395836%")
  },
  ImageBackground_18_37: {
    width: wp("6.488392088148329%"),
    height: hp("1.496119499206543%"),
    top: hp("57.011356353759766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.602915445963541%")
  },
  ImageBackground_18_38: {
    width: wp("4.597700436909993%"),
    height: hp("2.5031328201293945%"),
    top: hp("56.48506164550782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.275858561197918%")
  },
  ImageBackground_18_39: {
    width: wp("2.101869583129883%"),
    height: hp("1.0883641242980957%"),
    top: hp("57.138004302978516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.523790147569445%")
  },
  ImageBackground_18_40: {
    width: wp("84.13792928059895%"),
    height: hp("0%"),
    top: hp("71.87930107116699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.816094292534722%")
  },
  ImageBackground_18_41: {
    width: wp("12.231328752305773%"),
    height: hp("1.1113882064819336%"),
    top: hp("64.52922821044922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.05904812282986%")
  },
  ImageBackground_18_42: {
    width: wp("35.41400485568577%"),
    height: hp("1.4819765090942383%"),
    top: hp("68.04500579833984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.140038384331596%")
  },
  ImageBackground_18_43: {
    width: wp("0.9195454915364584%"),
    height: hp("0.5006217956542969%"),
    top: hp("69.12508010864258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.73563130696614%")
  },
  ImageBackground_18_44: {
    width: wp("4.5977020263671875%"),
    height: hp("1.7521905899047852%"),
    top: hp("68.49929809570312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.89654880099826%")
  },
  ImageBackground_18_45: {
    width: wp("10.035268995496962%"),
    height: hp("1.88873291015625%"),
    top: hp("75.8047103881836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.91015625%")
  },
  ImageBackground_18_46: {
    width: wp("21.015972561306423%"),
    height: hp("1.5018796920776367%"),
    top: hp("75.78481674194336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.386121961805554%")
  },
  ImageBackground_18_47: {
    width: wp("4.137929280598959%"),
    height: hp("2.252817153930664%"),
    top: hp("75.22743225097656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2183837890625%")
  },
  ImageBackground_18_48: {
    width: wp("84.13792928059895%"),
    height: hp("8.010015487670898%"),
    top: hp("81.01572036743164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.816094292534722%")
  },
  ImageBackground_18_49: {
    width: wp("18.191952175564236%"),
    height: hp("1.87283992767334%"),
    top: hp("83.895263671875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.79538981119792%")
  },
  ImageBackground_25_2: {
    width: wp("100%"),
    height: hp("44.375%"),
    top: hp("0.46875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_26_18: {
    width: wp("100%"),
    height: hp("7.5%"),
    top: hp("92.34375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_26_19: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7.5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_26_20: {
    width: wp("100%"),
    height: hp("7.5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(1, 87, 228, 1)"
  },
  View_26_21: {
    width: wp("69.72222222222221%"),
    top: hp("1.875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.61111111111111%"),
    justifyContent: "flex-start"
  },
  Text_26_21: {
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
