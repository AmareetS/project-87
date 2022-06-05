import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class CreatePost extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <SafeAreaView style={StyleSheet.droidSafeArea}/>
        <View style={StyleSheet.appTitle}>
          <View style={StyleSheet.appIcon}>
            <Image
              source={require("../assets/logo.png")}
              style={StyleSheet.iconImage}
            ></Image>
          </View>
          <View style={StyleSheet.appTitleTextContainer}>
            <Text style={StyleSheet.appTitleText}>New Post</Text>
          </View>
        </View>
        <View style={StyleSheet.fieldsContainer}>
          <ScrollView>
            <Image
              source={preview_images[this.state.previewImage]}
              style={StyleSheet.previewImage}
            ></Image>
            <View style={{height:RFValue(this.state.dropdownHeight)}}>
              <DropDownPicker
                items={[
                  {label:"Image 1", value:"image_1"},
                  {label:"Image 2", value:"image_2"},
                  {label:"Image 3", value:"image_3"},
                  {label:"Image 4", value:"image_4"},
                  {label:"Image 5", value:"image_5"},
                  {label:"Image 6", value:"image_6"},
                  {label:"Image 7", value:"image_7"},
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height:40,
                  borderRadius:20,
                  marginBottom:10
                }}
                onOpen={()=>{
                  this.setState({dropDownHeight:170});
                }}
                onClose={()=>{
                  this.setState({dropdownHeight:40});
                }}
                style={{backgroundColor:"transparent"}}
                itemStyle={{
                  justifyContent:"flex-start"
                }}
                dropDownStyle={{backgroundColor:"#2a2a2a"}}
                labelStyle={{
                  color:"white"
                }}
                arrowStyle={{
                  color:"white"
                }}
                onChangeItem={item=>this.setState({previewImage:item.value})}/>
            </View>
            <TextInput
              style={style.inputFont}
              onChangeText={caption=>this.setState({caption})}
              placeholder={"Caption"}
              placeholderTextColor="white"
            />
          </ScrollView>
        </View>
        <View style={{flex:0.08}}/>
      </View>
      postCardLight: {
        margin: RFValue(20),
        backgroundColor: "#eaeaea",
        borderRadius: RFValue(20)
      },
      authorNameText: {
        color: "white",
        fontSize: RFValue(20)
      },
      authorNameTextLight: {
        color: "black",
        fontSize:RFValue(20)
      },
    );
  }
}