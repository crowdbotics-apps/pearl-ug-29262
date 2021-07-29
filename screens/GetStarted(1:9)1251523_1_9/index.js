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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ac7/2a3e/0353ed3f04a80e5ff787b8f7bc05ddaf"
        }}
        style={styles.ImageBackground_1_10}
      />
      <View style={styles.View_1_11}>
        <Text style={styles.Text_1_11}>
          Get ready to explore the Uganda with us!
        </Text>
      </View>
      <View style={styles.View_1_12}>
        <Text style={styles.Text_1_12}>
          Collection of the most beautiful places in the Pearl Of Africa . Find
          hotels, game parks, plane tickets and more here!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_13}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_37"))
        }
      />
      <View style={styles.View_1_14}>
        <Text style={styles.Text_1_14}>Get Started</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109.15300546448088%") },
  ImageBackground_1_10: {
    width: wp("99.76359338061465%"),
    minWidth: wp("99.76359338061465%"),
    height: hp("109.15300546448088%"),
    minHeight: hp("109.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_11: {
    width: wp("69.73995271867612%"),
    minWidth: wp("69.73995271867612%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7825059101654848%"),
    top: hp("71.85792349726776%"),
    justifyContent: "flex-start"
  },
  Text_1_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_12: {
    width: wp("81.08747044917257%"),
    minWidth: wp("81.08747044917257%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7825059101654848%"),
    top: hp("87.1584699453552%"),
    justifyContent: "flex-start"
  },
  Text_1_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_13: {
    width: wp("65.95744680851064%"),
    minWidth: wp("65.95744680851064%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.602836879432624%"),
    top: hp("98.90710382513662%"),
    backgroundColor: "rgba(255, 177, 0, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_1_14: {
    width: wp("35.22458628841608%"),
    minWidth: wp("35.22458628841608%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.969267139479907%"),
    top: hp("101.09289617486338%"),
    justifyContent: "flex-start"
  },
  Text_1_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4,
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
