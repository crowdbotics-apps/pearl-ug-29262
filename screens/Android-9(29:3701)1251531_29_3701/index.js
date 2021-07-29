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
      <View style={styles.View_29_3703} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d533/0526/e04bfa237c6fad36e35dd8f3e2961d7b"
        }}
        style={styles.ImageBackground_29_3704}
      />
      <View style={styles.View_29_3707}>
        <Text style={styles.Text_29_3707}>Search cities, hotels...</Text>
      </View>
      <View style={styles.View_29_3763} />
      <View style={styles.View_29_3894} />
      <View style={styles.View_29_3764}>
        <View style={styles.View_29_3765}>
          <View style={styles.View_29_3766}>
            <View style={styles.View_29_3767}>
              <View style={styles.View_29_3768} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47b0/329c/b4456fb815863e1201e7e04640bbe759"
                }}
                style={styles.ImageBackground_29_3769}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/292a/b7f2f33cafe79fcb5fabbcdafe69ba65"
              }}
              style={styles.ImageBackground_29_3770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c5e/68e9/be2ccbdd34a7ea9976e3bc3327fb8654"
              }}
              style={styles.ImageBackground_29_3771}
            />
          </View>
          <View style={styles.View_29_3774}>
            <View style={styles.View_29_3775}>
              <View style={styles.View_29_3776}>
                <Text style={styles.Text_29_3776}>Pearl Of Africa</Text>
              </View>
              <View style={styles.View_29_3777}>
                <View style={styles.View_29_3778}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25aa/6c75/d4135da36ff5b76037f5d0892c8eccde"
                    }}
                    style={styles.ImageBackground_29_3779}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25aa/6c75/d4135da36ff5b76037f5d0892c8eccde"
                    }}
                    style={styles.ImageBackground_29_3782}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25aa/6c75/d4135da36ff5b76037f5d0892c8eccde"
                    }}
                    style={styles.ImageBackground_29_3785}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25aa/6c75/d4135da36ff5b76037f5d0892c8eccde"
                    }}
                    style={styles.ImageBackground_29_3788}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e0b/6702/90681774719e1fc4f58753852fe1acfe"
                    }}
                    style={styles.ImageBackground_29_3791}
                  />
                </View>
                <View style={styles.View_29_3794}>
                  <Text style={styles.Text_29_3794}>(5,817 review)</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_29_3795}>
              <View style={styles.View_29_3796}>
                <Text style={styles.Text_29_3796}>
                  1.3 km from current location
                </Text>
              </View>
              <View style={styles.View_29_3797}>
                <View source={{ uri: "null" }} style={styles.View_29_3798} />
                <View style={styles.View_29_3799}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22cb/022d/a85107c54581c5376f13a7c92047bc72"
                    }}
                    style={styles.ImageBackground_29_3800}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_29_3803}>
          <View style={styles.View_29_3804}>
            <View style={styles.View_29_3805}>
              <Text style={styles.Text_29_3805}>80$</Text>
            </View>
            <View style={styles.View_29_3806}>
              <Text style={styles.Text_29_3806}>120$</Text>
            </View>
          </View>
          <View style={styles.View_29_3807}>
            <View style={styles.View_29_3808} />
            <View style={styles.View_29_3809}>
              <Text style={styles.Text_29_3809}>Book</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_29_3895}>
        <View style={styles.View_29_3896}>
          <View style={styles.View_29_3897}>
            <View style={styles.View_29_3898}>
              <View style={styles.View_29_3899} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c09/d834/d69685c2716598d1adfc4155a12f2008"
                }}
                style={styles.ImageBackground_29_3900}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b37/292a/b7f2f33cafe79fcb5fabbcdafe69ba65"
              }}
              style={styles.ImageBackground_29_3901}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c5e/68e9/be2ccbdd34a7ea9976e3bc3327fb8654"
              }}
              style={styles.ImageBackground_29_3902}
            />
          </View>
          <View style={styles.View_29_3905}>
            <View style={styles.View_29_3906}>
              <View style={styles.View_29_3907}>
                <Text style={styles.Text_29_3907}>Kampala Serena Hotel</Text>
              </View>
              <View style={styles.View_29_3908}>
                <View style={styles.View_29_3909}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25aa/6c75/d4135da36ff5b76037f5d0892c8eccde"
                    }}
                    style={styles.ImageBackground_29_3910}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25aa/6c75/d4135da36ff5b76037f5d0892c8eccde"
                    }}
                    style={styles.ImageBackground_29_3913}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25aa/6c75/d4135da36ff5b76037f5d0892c8eccde"
                    }}
                    style={styles.ImageBackground_29_3916}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25aa/6c75/d4135da36ff5b76037f5d0892c8eccde"
                    }}
                    style={styles.ImageBackground_29_3919}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e0b/6702/90681774719e1fc4f58753852fe1acfe"
                    }}
                    style={styles.ImageBackground_29_3922}
                  />
                </View>
                <View style={styles.View_29_3925}>
                  <Text style={styles.Text_29_3925}>(5,817 review)</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_29_3926}>
              <View style={styles.View_29_3927}>
                <Text style={styles.Text_29_3927}>
                  1.3 km from current location
                </Text>
              </View>
              <View style={styles.View_29_3928}>
                <View source={{ uri: "null" }} style={styles.View_29_3929} />
                <View style={styles.View_29_3930}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22cb/022d/a85107c54581c5376f13a7c92047bc72"
                    }}
                    style={styles.ImageBackground_29_3931}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_29_3934}>
          <View style={styles.View_29_3935}>
            <View style={styles.View_29_3936}>
              <Text style={styles.Text_29_3936}>80$</Text>
            </View>
            <View style={styles.View_29_3937}>
              <Text style={styles.Text_29_3937}>120$</Text>
            </View>
          </View>
          <View style={styles.View_29_3938}>
            <View style={styles.View_29_3939} />
            <View style={styles.View_29_3940}>
              <Text style={styles.Text_29_3940}>Book</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d1a/9061/9883bfdfa574f9fedf77042948081790"
        }}
        style={styles.ImageBackground_26_100}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f248/23b5/b595f7f430e7e3feb53f0fc08736d2c9"
        }}
        style={styles.ImageBackground_26_97}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0bd/f8e0/70cd72d8b831a0c126566dae1b4e8ef8"
        }}
        style={styles.ImageBackground_14_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9a/bd2b/c9f1eefb13ca25a016d0571474f65e39"
        }}
        style={styles.ImageBackground_14_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c7d/be08/3d48ed83c0236232b774ae1e89abd907"
        }}
        style={styles.ImageBackground_14_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6f/cac7/b626901234d90b32de59f2b45503795f"
        }}
        style={styles.ImageBackground_14_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f850/78e9/d75d428f09ca985e26d315b78d2b9bd0"
        }}
        style={styles.ImageBackground_14_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed98/249c/6a847bc9b59ad5b30be694d06f42e874"
        }}
        style={styles.ImageBackground_14_10}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 250, 1)" },
  View_2: { height: hp("141.39344262295083%") },
  View_29_3703: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_29_3704: {
    width: wp("6.111111111111111%"),
    height: hp("3.0054644808743167%"),
    top: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.72222222222221%")
  },
  View_29_3707: {
    width: wp("38.88888888888889%"),
    minWidth: wp("38.88888888888889%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    top: hp("9.426229508196721%"),
    justifyContent: "flex-start"
  },
  Text_29_3707: {
    color: "rgba(150, 150, 150, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3763: {
    width: wp("75.27777777777777%"),
    height: hp("41.67959911575734%"),
    top: hp("23.875585670679644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_29_3894: {
    width: wp("75.27777777777777%"),
    height: hp("41.67959911575734%"),
    top: hp("70.59689714608947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_29_3764: {
    width: wp("75.27777777777777%"),
    height: hp("42.89617486338798%"),
    top: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3765: {
    width: wp("75.27777777777777%"),
    height: hp("34.83606557377049%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3766: {
    width: wp("75.27777777777777%"),
    minWidth: wp("75.27777777777777%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_3767: {
    width: wp("75.27777777777777%"),
    minWidth: wp("75.27777777777777%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_3768: {
    width: wp("75.27777777777777%"),
    height: hp("19.808743169398905%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_29_3769: {
    width: wp("75.27777777777777%"),
    minWidth: wp("75.27777777777777%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_29_3770: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.05555555555556%"),
    top: hp("1.6393442622950865%")
  },
  ImageBackground_29_3771: {
    width: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.72222222222223%")
  },
  View_29_3774: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333334%"),
    top: hp("21.448087431693992%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3775: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3776: {
    width: wp("68.61111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_3776: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3777: {
    width: wp("53.888888888888886%"),
    minWidth: wp("53.888888888888886%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3778: {
    width: wp("29.444444444444446%"),
    minWidth: wp("29.444444444444446%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_29_3779: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_29_3782: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.1111111111111125%")
  },
  ImageBackground_29_3785: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.22222222222222%")
  },
  ImageBackground_29_3788: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.333333333333336%")
  },
  ImageBackground_29_3791: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444443%")
  },
  View_29_3794: {
    width: wp("22.22222222222222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.66666666666667%"),
    justifyContent: "center"
  },
  Text_29_3794: {
    color: "rgba(159, 159, 159, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3795: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633881%")
  },
  View_29_3796: {
    width: wp("61.38888888888889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.22222222222222%"),
    justifyContent: "center"
  },
  Text_29_3796: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3797: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_29_3798: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_29_3799: {
    width: wp("3.606411086188422%"),
    minWidth: wp("3.606411086188422%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0.20491803278688536%")
  },
  ImageBackground_29_3800: {
    width: wp("3.606411086188422%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_29_3803: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333334%"),
    top: hp("37.43169398907104%")
  },
  View_29_3804: {
    width: wp("27.500000000000004%"),
    minWidth: wp("27.500000000000004%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3805: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_29_3805: {
    color: "rgba(255, 79, 79, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3806: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444445%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_29_3806: {
    color: "rgba(159, 159, 159, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3807: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.38888888888889%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3808: {
    width: wp("22.22222222222222%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 177, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_29_3809: {
    width: wp("22.22222222222222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_29_3809: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_29_3895: {
    width: wp("75.27777777777777%"),
    height: hp("42.89617486338798%"),
    top: hp("68.44262295081968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.277777777777777%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3896: {
    width: wp("75.27777777777777%"),
    height: hp("34.83606557377049%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3897: {
    width: wp("75.27777777777777%"),
    minWidth: wp("75.27777777777777%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_3898: {
    width: wp("75.27777777777777%"),
    minWidth: wp("75.27777777777777%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_29_3899: {
    width: wp("75.27777777777777%"),
    height: hp("19.808743169398905%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_29_3900: {
    width: wp("75.27777777777777%"),
    minWidth: wp("75.27777777777777%"),
    height: hp("19.808743169398905%"),
    minHeight: hp("19.808743169398905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_29_3901: {
    width: wp("8.88888888888889%"),
    minWidth: wp("8.88888888888889%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.05555555555555%"),
    top: hp("1.6393442622950687%")
  },
  ImageBackground_29_3902: {
    width: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    top: hp("2.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.72222222222223%")
  },
  View_29_3905: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333334%"),
    top: hp("21.448087431693978%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3906: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3907: {
    width: wp("68.61111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_29_3907: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3908: {
    width: wp("53.888888888888886%"),
    minWidth: wp("53.888888888888886%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601091%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3909: {
    width: wp("29.444444444444446%"),
    minWidth: wp("29.444444444444446%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_29_3910: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_29_3913: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%")
  },
  ImageBackground_29_3916: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.222222222222225%")
  },
  ImageBackground_29_3919: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.333333333333332%")
  },
  ImageBackground_29_3922: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.444444444444446%")
  },
  View_29_3925: {
    width: wp("22.22222222222222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666668%"),
    justifyContent: "center"
  },
  Text_29_3925: {
    color: "rgba(159, 159, 159, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3926: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.928961748633867%")
  },
  View_29_3927: {
    width: wp("61.38888888888889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222225%"),
    justifyContent: "center"
  },
  Text_29_3927: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3928: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_29_3929: {
    width: wp("5%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_29_3930: {
    width: wp("3.606411086188422%"),
    minWidth: wp("3.606411086188422%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%"),
    top: hp("0.20491803278690668%")
  },
  ImageBackground_29_3931: {
    width: wp("3.606411086188422%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_29_3934: {
    width: wp("68.61111111111111%"),
    minWidth: wp("68.61111111111111%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333334%"),
    top: hp("37.431693989071036%")
  },
  View_29_3935: {
    width: wp("27.500000000000004%"),
    minWidth: wp("27.500000000000004%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3936: {
    width: wp("11.11111111111111%"),
    minWidth: wp("11.11111111111111%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_29_3936: {
    color: "rgba(255, 79, 79, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3937: {
    width: wp("13.055555555555557%"),
    minWidth: wp("13.055555555555557%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444446%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_29_3937: {
    color: "rgba(159, 159, 159, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_3938: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.388888888888886%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_29_3939: {
    width: wp("22.22222222222222%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 177, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_29_3940: {
    width: wp("22.22222222222222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_29_3940: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_26_100: {
    width: wp("6.388888888888888%"),
    height: hp("2.3224043715846996%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.944444444444445%")
  },
  ImageBackground_26_97: {
    width: wp("3.4722222222222223%"),
    height: hp("2.73224043715847%"),
    top: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.61111111111111%")
  },
  ImageBackground_14_5: {
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    top: hp("130.05464480874315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_14_8: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("132.24043715846994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.444444444444446%")
  },
  ImageBackground_14_6: {
    width: wp("5.555555555555555%"),
    height: hp("3.278688524590164%"),
    top: hp("134.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_14_7: {
    width: wp("5.833333333333333%"),
    height: hp("3.278688524590164%"),
    top: hp("134.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.83333333333333%")
  },
  ImageBackground_14_9: {
    width: wp("6.388888888888888%"),
    height: hp("3.278688524590164%"),
    top: hp("134.15300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%")
  },
  ImageBackground_14_10: {
    width: wp("7.187520133124457%"),
    height: hp("2.8688524590163933%"),
    top: hp("134.22131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000064425998264%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
