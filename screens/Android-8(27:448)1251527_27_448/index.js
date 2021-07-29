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
        style={styles.ImageBackground_27_449}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9a/bd2b/c9f1eefb13ca25a016d0571474f65e39"
        }}
        style={styles.ImageBackground_27_450}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b1a/2873/bbbf10d1af86c84ba9b1d06bd20a4d52"
        }}
        style={styles.ImageBackground_27_451}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d6f/cac7/b626901234d90b32de59f2b45503795f"
        }}
        style={styles.ImageBackground_27_452}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2348/12eb/249ea7661f8ac682bf0fae1b4ff1ee65"
        }}
        style={styles.ImageBackground_27_453}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed98/249c/6a847bc9b59ad5b30be694d06f42e874"
        }}
        style={styles.ImageBackground_27_454}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea04/052b/143af45c44f5d1d83777cdbe8088641a"
        }}
        style={styles.ImageBackground_27_398}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c47/62d5/edd831209279d65d03f9b562d8de1a9a"
        }}
        style={styles.ImageBackground_27_399}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dab/d632/1fba03defa94d0dc43611fb4e4170d50"
        }}
        style={styles.ImageBackground_27_400}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d64/ec8a/91b0c80bd72428c5321e7035467f5aca"
        }}
        style={styles.ImageBackground_27_401}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d331/2964/7edcc0dba4f34bdf10ff2c1958715522"
        }}
        style={styles.ImageBackground_27_402}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d409/524f/552e5b995f5d9f3ac67f762968575886"
        }}
        style={styles.ImageBackground_27_403}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a8d/7929/72c3d0a8a4dd4b6828b3916ca28f7af0"
        }}
        style={styles.ImageBackground_27_404}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3237/8021/073bbeb2fd2a1d398e646d1a6d4876fc"
        }}
        style={styles.ImageBackground_27_405}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb3/1507/9e96486da534c46855ff8738a0448866"
        }}
        style={styles.ImageBackground_27_406}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1de6/43b6/8e73043c183628c3bd92e132b0e3b441"
        }}
        style={styles.ImageBackground_27_407}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a750/58f0/734742752ea299a0ec2c6ce193c941b6"
        }}
        style={styles.ImageBackground_27_408}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b5/40e4/03635a8b0400a1b4b55c568524cf3ffc"
        }}
        style={styles.ImageBackground_27_409}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3237/8021/073bbeb2fd2a1d398e646d1a6d4876fc"
        }}
        style={styles.ImageBackground_27_410}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c1/180e/ad583615e57f01b4f2f37da868512b6e"
        }}
        style={styles.ImageBackground_27_411}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3493/55c1/c1af872ce2c30f77cbb2862481814fa7"
        }}
        style={styles.ImageBackground_27_412}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c2/ff91/2b8476e27efa43a8546de20500f36f4b"
        }}
        style={styles.ImageBackground_27_413}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3237/8021/073bbeb2fd2a1d398e646d1a6d4876fc"
        }}
        style={styles.ImageBackground_27_414}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/488e/d608/ddaf0463d2f1e33431928f28108dc4a5"
        }}
        style={styles.ImageBackground_27_415}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a28/bc21/c9cdcf7f3587272ff3598b913a247b72"
        }}
        style={styles.ImageBackground_27_416}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50c/7fb5/9ed39301f3a011d52fc93d912b793c06"
        }}
        style={styles.ImageBackground_27_417}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3237/8021/073bbeb2fd2a1d398e646d1a6d4876fc"
        }}
        style={styles.ImageBackground_27_418}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69eb/f172/9c6d677feaef863435ed4f87a2a70ae6"
        }}
        style={styles.ImageBackground_27_419}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca2/9fde/b97ef660398ef8a317d3b10d3eb689b9"
        }}
        style={styles.ImageBackground_27_420}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9bd/f712/5132a20a86d6154c244bf619ba512ccc"
        }}
        style={styles.ImageBackground_27_421}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3237/8021/073bbeb2fd2a1d398e646d1a6d4876fc"
        }}
        style={styles.ImageBackground_27_422}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db1b/03ee/3587381c7eeb3bc603b5d0e1c20757b9"
        }}
        style={styles.ImageBackground_27_423}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e93/b877/c10b2c24baaab8fc5d43191b278c5d7b"
        }}
        style={styles.ImageBackground_27_424}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3237/8021/073bbeb2fd2a1d398e646d1a6d4876fc"
        }}
        style={styles.ImageBackground_27_426}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f41/6b08/e0f9994ae7da543379ed09369524ce01"
        }}
        style={styles.ImageBackground_27_468}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 248, 250, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_27_449: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("100.27322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_27_450: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("102.18579234972678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.66666666666667%")
  },
  ImageBackground_27_451: {
    width: wp("5.555555555555555%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.55555555555556%")
  },
  ImageBackground_27_452: {
    width: wp("5.833333333333333%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.83333333333333%")
  },
  ImageBackground_27_453: {
    width: wp("6.388888888888888%"),
    height: hp("3.278688524590164%"),
    top: hp("104.0983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.05555555555556%")
  },
  ImageBackground_27_454: {
    width: wp("7.187520133124457%"),
    height: hp("2.8688524590163933%"),
    top: hp("104.16666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000081380208334%")
  },
  ImageBackground_27_398: {
    width: wp("55.27777777777778%"),
    height: hp("2.5956284153005464%"),
    top: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.166666666666666%")
  },
  ImageBackground_27_399: {
    width: wp("90.55555555555556%"),
    height: hp("0%"),
    top: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  ImageBackground_27_400: {
    width: wp("3.888888888888889%"),
    height: hp("2.0491803278688523%"),
    top: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_27_401: {
    width: wp("1.6666666666666667%"),
    height: hp("0.9562841530054645%"),
    top: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222223%")
  },
  ImageBackground_27_402: {
    width: wp("16.666666666666664%"),
    height: hp("2.5956284153005464%"),
    top: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_27_403: {
    width: wp("12.777777777777777%"),
    height: hp("2.0491803278688523%"),
    top: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_27_404: {
    width: wp("95.55555555555556%"),
    height: hp("0.27322407628669115%"),
    top: hp("30.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_27_405: {
    width: wp("4.444444444444445%"),
    height: hp("2.459016393442623%"),
    top: hp("23.770491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_27_406: {
    width: wp("3.3333333333333335%"),
    height: hp("1.912568306010929%"),
    top: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.66666666666666%")
  },
  ImageBackground_27_407: {
    width: wp("15.555555555555555%"),
    height: hp("2.0491803278688523%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_27_408: {
    width: wp("10.833333333333334%"),
    height: hp("1.639344262295082%"),
    top: hp("38.79781420765027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%")
  },
  ImageBackground_27_409: {
    width: wp("95.27784559461806%"),
    height: hp("0.005312507229098856%"),
    top: hp("43.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7777777777777777%")
  },
  ImageBackground_27_410: {
    width: wp("4.444444444444445%"),
    height: hp("2.459016393442623%"),
    top: hp("36.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_27_411: {
    width: wp("13.61111111111111%"),
    height: hp("1.912568306010929%"),
    top: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_27_412: {
    width: wp("20%"),
    height: hp("1.639344262295082%"),
    top: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_27_413: {
    width: wp("93.61111111111111%"),
    height: hp("0%"),
    top: hp("55.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_27_414: {
    width: wp("4.444444444444445%"),
    height: hp("2.459016393442623%"),
    top: hp("48.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_27_415: {
    width: wp("13.61111111111111%"),
    height: hp("2.0491803278688523%"),
    top: hp("59.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_27_416: {
    width: wp("10.555555555555555%"),
    height: hp("1.639344262295082%"),
    top: hp("63.934426229508205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%")
  },
  ImageBackground_27_417: {
    width: wp("93.61112806532118%"),
    height: hp("0.5491044351963398%"),
    top: hp("67.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_27_418: {
    width: wp("4.444444444444445%"),
    height: hp("2.459016393442623%"),
    top: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_27_419: {
    width: wp("18.61111111111111%"),
    height: hp("2.0491803278688523%"),
    top: hp("72.54098360655738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%")
  },
  ImageBackground_27_420: {
    width: wp("14.722222222222223%"),
    height: hp("1.639344262295082%"),
    top: hp("76.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888888%")
  },
  ImageBackground_27_421: {
    width: wp("93.61111111111111%"),
    height: hp("0.273224043715847%"),
    top: hp("80.60109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444444444444445%")
  },
  ImageBackground_27_422: {
    width: wp("4.444444444444445%"),
    height: hp("2.459016393442623%"),
    top: hp("74.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_27_423: {
    width: wp("19.444444444444446%"),
    height: hp("2.185792349726776%"),
    top: hp("84.97267759562843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%")
  },
  ImageBackground_27_424: {
    width: wp("21.666666666666668%"),
    height: hp("1.639344262295082%"),
    top: hp("89.07103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.111111111111111%")
  },
  ImageBackground_27_426: {
    width: wp("4.444444444444445%"),
    height: hp("2.459016393442623%"),
    top: hp("86.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.11111111111111%")
  },
  ImageBackground_27_468: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
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
