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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e17/c77e/8f95d1af71699ded34de23f448c316b0"
        }}
        style={styles.ImageBackground_20_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9a/bd2b/c9f1eefb13ca25a016d0571474f65e39"
        }}
        style={styles.ImageBackground_20_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b1a/2873/bbbf10d1af86c84ba9b1d06bd20a4d52"
        }}
        style={styles.ImageBackground_20_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6f/cac7/b626901234d90b32de59f2b45503795f"
        }}
        style={styles.ImageBackground_20_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2348/12eb/249ea7661f8ac682bf0fae1b4ff1ee65"
        }}
        style={styles.ImageBackground_20_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed98/249c/6a847bc9b59ad5b30be694d06f42e874"
        }}
        style={styles.ImageBackground_20_14}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a833/66df/c3890f541b1871ec9a7e8edd455a96e2"
        }}
        style={styles.TouchableOpacity_17_256}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("27_448"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a0d/c482/c8592afec5bc4b87f558e4f268f7d624"
        }}
        style={styles.ImageBackground_17_259}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4c1/9b1c/73ea5cb50e977e80113a750ee467488b"
        }}
        style={styles.ImageBackground_17_260}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1651/d5b8/bc55aa76b0385df5c89c1c04ebaa2047"
        }}
        style={styles.ImageBackground_17_262}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d00b/7ce7/4068a72c7e769567629426ff5e7cacd9"
        }}
        style={styles.ImageBackground_17_265}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efff/09d0/d45278dcd1683e3f6fd65c725571e122"
        }}
        style={styles.ImageBackground_17_266}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1651/d5b8/bc55aa76b0385df5c89c1c04ebaa2047"
        }}
        style={styles.ImageBackground_17_274}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/886e/689a/e4ac8986af0ef5ad667d6507456deb4e"
        }}
        style={styles.ImageBackground_17_277}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9586/6212/0ba257c78bbbba9ec522e3edf1cff5c8"
        }}
        style={styles.ImageBackground_17_278}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb8/92a3/0d95f75890fdda31df1988283cbf9855"
        }}
        style={styles.ImageBackground_27_24}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 250, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_20_9: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("100.27322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_20_10: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("102.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%")
  },
  ImageBackground_20_11: {
    width: wp("5.555555555555555%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_20_12: {
    width: wp("5.833333333333333%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.83333333333333%")
  },
  ImageBackground_20_13: {
    width: wp("6.388888888888888%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%")
  },
  ImageBackground_20_14: {
    width: wp("7.187520133124457%"),
    height: hp("2.8688524590163933%"),
    top: hp("104.16666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000081380208334%")
  },
  TouchableOpacity_17_256: {
    width: wp("89.72222222222223%"),
    height: hp("8.445324923822788%"),
    top: hp("10.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  ImageBackground_17_259: {
    width: wp("17.77777777777778%"),
    height: hp("2.0491803278688523%"),
    top: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  ImageBackground_17_260: {
    width: wp("12.777777777777777%"),
    height: hp("2.0491803278688523%"),
    top: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.88888888888889%")
  },
  ImageBackground_17_262: {
    width: wp("88.61111111111111%"),
    height: hp("8.445324923822788%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  ImageBackground_17_265: {
    width: wp("16.38888888888889%"),
    height: hp("1.912568306010929%"),
    top: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  ImageBackground_17_266: {
    width: wp("17.5%"),
    height: hp("1.5027322404371584%"),
    top: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.11111111111111%")
  },
  ImageBackground_17_274: {
    width: wp("88.61111111111111%"),
    height: hp("8.445324923822788%"),
    top: hp("34.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.277777777777778%")
  },
  ImageBackground_17_277: {
    width: wp("28.888888888888886%"),
    height: hp("2.0491803278688523%"),
    top: hp("37.624296594838626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%")
  },
  ImageBackground_17_278: {
    width: wp("5%"),
    height: hp("1.639344262295082%"),
    top: hp("37.56830601092896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_27_24: {
    width: wp("100%"),
    height: hp("8.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
