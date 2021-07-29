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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da3e/e943/542f7b84a5ddaccb6bfc62ebf0bcaeeb"
        }}
        style={styles.ImageBackground_1_143}
      />
      <View style={styles.View_1_144}>
        <Text style={styles.Text_1_144}>Protea Hotel Uganda </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89c/dbb3/678ee0e28461b3bab1cbd1fd3a8bd70e"
        }}
        style={styles.ImageBackground_1_145}
      />
      <View style={styles.View_1_147}>
        <Text style={styles.Text_1_147}>Entebbe Road , Wakiso District</Text>
      </View>
      <View style={styles.View_1_148} />
      <View style={styles.View_1_149}>
        <Text style={styles.Text_1_149}>4 Star Hotel</Text>
      </View>
      <View style={styles.View_1_150}>
        <Text style={styles.Text_1_150}>Details</Text>
      </View>
      <View style={styles.View_1_151}>
        <Text style={styles.Text_1_151}>Rooms</Text>
      </View>
      <View style={styles.View_1_152}>
        <Text style={styles.Text_1_152}>Near by</Text>
      </View>
      <View style={styles.View_1_153}>
        <Text style={styles.Text_1_153}>Reviews</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ef/4ccf/d18e64745390ad62949d2d1d131b1662"
        }}
        style={styles.ImageBackground_1_154}
      />
      <View style={styles.View_1_155} />
      <View style={styles.View_1_156}>
        <Text style={styles.Text_1_156}>
          Staying at Protea Hotel Resort is a good choice when you are visiting
          Uganda . 24-hours front desk is available to serve you, from check-in
          to check-out, or any assistance you need...
        </Text>
      </View>
      <View style={styles.View_1_157}>
        <Text style={styles.Text_1_157}>more</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/967d/12b6/73edd7bb11f842981eaab5c4bde2a160"
        }}
        style={styles.ImageBackground_1_158}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1649/0141/0b0133b9e60f2f7a91188e50a528a75b"
        }}
        style={styles.ImageBackground_1_159}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1649/0141/0b0133b9e60f2f7a91188e50a528a75b"
        }}
        style={styles.ImageBackground_1_160}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1649/0141/0b0133b9e60f2f7a91188e50a528a75b"
        }}
        style={styles.ImageBackground_1_161}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1649/0141/0b0133b9e60f2f7a91188e50a528a75b"
        }}
        style={styles.ImageBackground_1_162}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38b2/0b27/8c3b6a7c57688b564db75b3718085761"
        }}
        style={styles.TouchableOpacity_1_163}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_37"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f4c/0f10/6b315908a2a5b6d82a8670055286a146"
        }}
        style={styles.ImageBackground_1_166}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ca3/6f50/1e2f0343649079f2da39dd27c624a2e9"
        }}
        style={styles.ImageBackground_1_169}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42bd/0610/8b6ff05f255236a7a8330f53dbc96a30"
        }}
        style={styles.ImageBackground_27_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf53/7b64/da4dddd899949762750cd2a58773e533"
        }}
        style={styles.ImageBackground_27_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10c4/46c9/e860b1e7df8285cd16b3b8e349115a4c"
        }}
        style={styles.ImageBackground_27_29}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/778f/3af7/c32eb9650e4e50fa9c57faeedf8c36b0"
        }}
        style={styles.ImageBackground_27_30}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aefe/c1d1/a16c876c4b830909e66aa6028b5ec2cd"
        }}
        style={styles.TouchableOpacity_27_28}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_156"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e57f/a00f/919e0b58d3f341256b733ebf13c45822"
        }}
        style={styles.TouchableOpacity_27_27}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_156"))
        }
      />
      <View style={styles.View_1_173}>
        <View style={styles.View_1_174}>
          <Text style={styles.Text_1_174}>Start at</Text>
        </View>
        <View style={styles.View_1_175}>
          <Text style={styles.Text_1_175}>/ night</Text>
        </View>
        <View style={styles.View_1_176}>
          <Text style={styles.Text_1_176}>Ugx.200000</Text>
        </View>
        <View style={styles.View_1_177} />
        <View style={styles.View_1_178}>
          <Text style={styles.Text_1_178}>Select Room</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 250, 1)" },
  View_2: { height: hp("114.20765027322403%") },
  ImageBackground_1_143: {
    width: wp("99.72222222222223%"),
    minWidth: wp("99.72222222222223%"),
    height: hp("49.45355191256831%"),
    minHeight: hp("49.45355191256831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_144: {
    width: wp("56.111111111111114%"),
    minWidth: wp("56.111111111111114%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("51.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_1_144: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_145: {
    width: wp("3.3333333333333335%"),
    height: hp("2.1857920891600227%"),
    top: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  View_1_147: {
    width: wp("56.666666666666664%"),
    minWidth: wp("56.666666666666664%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.555555555555555%"),
    top: hp("61.338797814207645%"),
    justifyContent: "flex-start"
  },
  Text_1_147: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_148: {
    width: wp("22.77777777777778%"),
    minWidth: wp("22.77777777777778%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("57.103825136612016%"),
    backgroundColor: "rgba(248, 126, 97, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_1_149: {
    width: wp("21.11111111111111%"),
    minWidth: wp("21.11111111111111%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("57.377049180327866%"),
    justifyContent: "flex-start"
  },
  Text_1_149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_150: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("69.53551912568307%"),
    justifyContent: "flex-start"
  },
  Text_1_150: {
    color: "rgba(249, 142, 116, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_151: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%"),
    top: hp("69.53551912568307%"),
    justifyContent: "flex-start"
  },
  Text_1_151: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_152: {
    width: wp("14.722222222222223%"),
    minWidth: wp("14.722222222222223%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.888888888888886%"),
    top: hp("69.53551912568307%"),
    justifyContent: "flex-start"
  },
  Text_1_152: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_153: {
    width: wp("15.555555555555555%"),
    minWidth: wp("15.555555555555555%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.55555555555556%"),
    top: hp("69.53551912568307%"),
    justifyContent: "flex-start"
  },
  Text_1_153: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_154: {
    width: wp("95.27777777777777%"),
    minWidth: wp("95.27777777777777%"),
    height: hp("0.000004096449867843222%"),
    minHeight: hp("0.000004096449867843222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("75%")
  },
  View_1_155: {
    width: wp("14.166666666666666%"),
    minWidth: wp("14.166666666666666%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%"),
    top: hp("74.4535519125683%"),
    backgroundColor: "rgba(249, 142, 116, 1)"
  },
  View_1_156: {
    width: wp("94.16666666666667%"),
    minWidth: wp("94.16666666666667%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("78.14207650273224%"),
    justifyContent: "flex-start"
  },
  Text_1_156: {
    color: "rgba(85, 92, 107, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_157: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("86.88524590163934%"),
    justifyContent: "flex-start"
  },
  Text_1_157: {
    color: "rgba(47, 128, 237, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_158: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.388888888888886%"),
    top: hp("46.44808743169399%")
  },
  ImageBackground_1_159: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.55555555555556%"),
    top: hp("46.44808743169399%")
  },
  ImageBackground_1_160: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.61111111111111%"),
    top: hp("46.44808743169399%")
  },
  ImageBackground_1_161: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777778%"),
    top: hp("46.44808743169399%")
  },
  ImageBackground_1_162: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%"),
    top: hp("46.44808743169399%")
  },
  TouchableOpacity_1_163: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_1_166: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%")
  },
  ImageBackground_1_169: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_27_26: {
    width: wp("100%"),
    height: hp("10.245901639344263%"),
    top: hp("103.9617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_27_31: {
    width: wp("7.187520133124457%"),
    height: hp("2.811686197916667%"),
    top: hp("107.17845979284068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000064425998264%")
  },
  ImageBackground_27_29: {
    width: wp("13.333333333333334%"),
    height: hp("6.694472682932036%"),
    top: hp("105.237066550333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%")
  },
  ImageBackground_27_30: {
    width: wp("6.388888888888888%"),
    height: hp("3.213342551976605%"),
    top: hp("107.11151289809597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%")
  },
  TouchableOpacity_27_28: {
    width: wp("5.833333333333333%"),
    height: hp("3.213342551976605%"),
    top: hp("107.11151289809597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.83333333333333%")
  },
  TouchableOpacity_27_27: {
    width: wp("5.555555555555555%"),
    height: hp("3.213342551976605%"),
    top: hp("107.11151289809597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  View_1_173: {
    width: wp("93.05555555555556%"),
    minWidth: wp("93.05555555555556%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.722222222222222%"),
    top: hp("91.53005464480874%")
  },
  View_1_174: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_174: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_175: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("3.8251366120218506%"),
    justifyContent: "flex-start"
  },
  Text_1_175: {
    color: "rgba(170, 170, 170, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_176: {
    width: wp("29.166666666666668%"),
    minWidth: wp("29.166666666666668%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_1_176: {
    color: "rgba(246, 94, 57, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_177: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77777777777777%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 94, 57, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_178: {
    width: wp("21.666666666666668%"),
    minWidth: wp("21.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.22222222222222%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_1_178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
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
