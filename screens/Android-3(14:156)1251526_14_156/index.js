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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/490b/bc42/ab6356c492121ccf7296c611acfe1ae8"
        }}
        style={styles.ImageBackground_14_188}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f18/13ef/9ca28197ea0e9d027c690833912760f9"
        }}
        style={styles.ImageBackground_14_189}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9dd/4eef/fd0a1416e706e002ccfdf33eb7976898"
        }}
        style={styles.ImageBackground_14_190}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9dd/4eef/fd0a1416e706e002ccfdf33eb7976898"
        }}
        style={styles.ImageBackground_24_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0e/5878/8984418905a7e6dd4db7f9a8c81ec604"
        }}
        style={styles.ImageBackground_14_191}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a0e/5878/8984418905a7e6dd4db7f9a8c81ec604"
        }}
        style={styles.ImageBackground_24_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c0b/7015/8b8efcf9571d2021b8c543d1b5c0a2a1"
        }}
        style={styles.ImageBackground_14_192}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb3/a5fa/4d1b052ece0984906868c3057d2e4873"
        }}
        style={styles.ImageBackground_14_193}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24bd/d7b1/093fef25be250c06f03cebd2d29184a9"
        }}
        style={styles.ImageBackground_14_194}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86d1/cb96/cd7ea11e400b9dc81329e091d93ec513"
        }}
        style={styles.ImageBackground_14_195}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be0a/8547/00b6ba6f0c3393640e1776b9af49b95e"
        }}
        style={styles.ImageBackground_14_196}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c358/9d2b/3a86551f49d9d4036ed0aa2ea37f78a9"
        }}
        style={styles.ImageBackground_14_197}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e17/c77e/8f95d1af71699ded34de23f448c316b0"
        }}
        style={styles.ImageBackground_14_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed98/249c/6a847bc9b59ad5b30be694d06f42e874"
        }}
        style={styles.ImageBackground_14_44}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2348/12eb/249ea7661f8ac682bf0fae1b4ff1ee65"
        }}
        style={styles.ImageBackground_14_43}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6f/cac7/b626901234d90b32de59f2b45503795f"
        }}
        style={styles.ImageBackground_14_42}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9a/bd2b/c9f1eefb13ca25a016d0571474f65e39"
        }}
        style={styles.ImageBackground_14_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b1a/2873/bbbf10d1af86c84ba9b1d06bd20a4d52"
        }}
        style={styles.ImageBackground_14_41}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d87a/e6c8/c49e0791caaf44ca1fedc167701208a1"
        }}
        style={styles.ImageBackground_21_2}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 250, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_14_188: {
    width: wp("37.448056538899735%"),
    height: hp("1.9617484566943892%"),
    top: hp("12.811475243073344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.033331976996529%")
  },
  ImageBackground_14_189: {
    width: wp("5.003832181294759%"),
    height: hp("2.1498379160146244%"),
    top: hp("12.757948578381148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.702294243706597%")
  },
  ImageBackground_14_190: {
    width: wp("21.839444902208115%"),
    height: hp("2.4316933637108304%"),
    top: hp("20.887977308262894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.455559624565973%")
  },
  ImageBackground_24_24: {
    width: wp("21.839444902208115%"),
    height: hp("2.4316933637108304%"),
    top: hp("20.887977308262894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.455559624565973%")
  },
  ImageBackground_14_191: {
    width: wp("5.625%"),
    height: hp("2.151639344262295%"),
    top: hp("20.816256830601095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.381944444444445%")
  },
  ImageBackground_24_25: {
    width: wp("5.625%"),
    height: hp("2.151639344262295%"),
    top: hp("20.816256830601095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.381944444444445%")
  },
  ImageBackground_14_192: {
    width: wp("11.112249162462023%"),
    height: hp("2.445354357443221%"),
    top: hp("28.934426646415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.455559624565973%")
  },
  ImageBackground_14_193: {
    width: wp("4.843763775295681%"),
    height: hp("2.382239878503351%"),
    top: hp("28.761066374231557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.772569444444445%")
  },
  ImageBackground_14_194: {
    width: wp("28.231387668185764%"),
    height: hp("1.9617487172611425%"),
    top: hp("36.991803111925805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.455559624565973%")
  },
  ImageBackground_14_195: {
    width: wp("5.629406505160862%"),
    height: hp("2.459016393442623%"),
    top: hp("36.64617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.387318929036458%")
  },
  ImageBackground_14_196: {
    width: wp("20.364443461100258%"),
    height: hp("2.459014308908598%"),
    top: hp("45.04644675332992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.233340793185764%")
  },
  ImageBackground_14_197: {
    width: wp("4.643544091118707%"),
    height: hp("2.3821708283137752%"),
    top: hp("44.88131830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.872667100694445%")
  },
  ImageBackground_14_39: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("100.27322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_14_44: {
    width: wp("7.187520133124457%"),
    height: hp("2.8688524590163933%"),
    top: hp("104.16666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000081380208334%")
  },
  ImageBackground_14_43: {
    width: wp("6.388888888888888%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%")
  },
  ImageBackground_14_42: {
    width: wp("5.833333333333333%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.83333333333333%")
  },
  ImageBackground_14_40: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("102.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%")
  },
  ImageBackground_14_41: {
    width: wp("5.555555555555555%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_21_2: {
    width: wp("100%"),
    height: hp("9.153005464480875%"),
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
