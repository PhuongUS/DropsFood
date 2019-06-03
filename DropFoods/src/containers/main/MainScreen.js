
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,Dimensions,ImageBackground,FlatList} from 'react-native';
//import DemoChart from '../addFriend/demoChart';


const {height,width} = Dimensions.get('window');
const Araay=[{
    "name":"Top up mobile",
    "image":require('../../assets/images/smartphone-call.png')
},{
    "name":"Purchase mobile card",
    "image":require('../../assets/images/id-card.png')
},{
    "name":"Send credit to frends",
    "image":require('../../assets/images/payment-method.png')
},{
    "name":"Request credit",
    "image":require('../../assets/images/id-card.png')
},{
    "name":"Transaction history",
    "image":require('../../assets/images/payment-method.png')
},{
    "name":"Support",
    "image":require('../../assets/images/smartphone-call.png')
}]

export default class Home extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         tabBarLabel: <View></View>,
    //         tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //             return <Image source={require('../../assets/images/home.png')}  
    //             style={[{width:30,height:30,tintColor:tintColor}]}
    //             />;
    //         },
    //     };
    // }
    onPress=(index)=>{
        let nameScreen;
        switch(index){
            case 1: nameScreen='TopUp'; break; // fix with user click item;
            case 2 :nameScreen='TopUp'; break;
            default: nameScreen='TopUp';break;
        }
        this.props.navigation.navigate(nameScreen)
    }
    renderItem=(item,index)=>{
        return(
            <TouchableOpacity style={{width:'33%',backgroundColor:'white',margin:0.5,height:100,justifyContent:'center',alignItems:'center',padding:10}}
            onPress={()=>this.onPress(index)}
            >
                <Image
                    source={item.image}
                    style={{width:30,height:30}}
                />
                <Text style={{textAlign:'center'}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    render() {
    return (
        <View style={styles.container}>

            <View style={{flexDirection:'row',height:50,marginTop:30}}> 
                <View   style={{width:'32%',justifyContent:'center'}} >
                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('DemoChart')}}>
                        <Image
                            source={require('../../assets/images/dropfoods.png')}
                            style={[styles.iconHeaderLeft]}
                        />  
                    </TouchableOpacity>
                </View>
                <View   style={{width:'32%',justifyContent:'center',alignItems:'center'}} >
                    <Text style={{color:'black',fontSize:20}}>Dropfoods</Text>
                </View>
                <View   style={{ width:'32%',justifyContent:'flex-end',alignItems: 'center',flexDirection:'row'}} >
                    <TouchableOpacity  >
                            <Image
                                source={require('../../assets/images/alarm-bell.png')}
                                style={[styles.iconHeaderRight, {tintColor: 'black'}]}
                            />  
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <Image
                            source={require('../../assets/images/power.png')}
                            style={[styles.iconPower, {tintColor: 'black'}]}
                        />  
                    </TouchableOpacity>
                    
                </View>
            </View>
            <ScrollView>
                <ImageBackground
                    source={require('../../assets/images/background.jpeg')}
                    style={[styles.imgBackgourd]}
                >
                    <Text style={{position:'absolute',color:'white',fontWeight:'bold',}}>ACCOUNT BALANCE</Text>
                    <Text style={{marginTop:40,color:'white'}}>0đ</Text>
                </ImageBackground>
                <View style={{backgroundColor:'#D3D3D3',height:500}}>
                    <View style={{height:60,margin:20,flexDirection:'row',justifyContent:'center'}}>
                        <View style={styles.viewInviteFriend}>
                            <Image
                                source={require('../../assets/images/follow.png')}
                                style={[styles.iconAddFriend, {tintColor: 'blue'}]}
                            />
                            <Text>Invite Friends</Text>
                        </View>
                        <View style={styles.viewEnterPromo}>
                            <Image
                                source={require('../../assets/images/gift-card.png')}
                                style={[styles.iconAddFriend, {tintColor: 'yellow'}]}
                            />
                            <Text>Enter promo</Text>
                        </View>
                       
                    </View>
                    {/* <View  style={{height:160,backgroundColor:'yellow',marginLeft:20,marginRight:20,borderRadius:6,flexDirection:'row',flexWrap:'wrap'}}> */}
                    <FlatList
                            style={{marginLeft:20,marginRight:20,borderRadius:8,marginBottom:1,marginBottom:200}}
                            numColumns={3}
                            data={Araay}
                            keyExtractor={({id}, index) => id}
                            renderItem={({item,index})=>this.renderItem(item,index)}
                            
                        /> 
                </View>

            </ScrollView>

        {/* <Text style={styles.welcome}>This is Home</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    iconHeaderLeft:{
        width:60,
        height:60,
        marginLeft:10
    },
    iconHeaderRight:{
        width:22,
        height:22,   
    },
    iconPower:{
        height:22,
        width:22,
        marginLeft:20
    },
    imgBackgourd:{
        width:width,
        height:150,
        justifyContent:'center',
        alignItems:'center',
    },
    iconAddFriend:{
        height:22,
        width:22,
        marginRight:10
    },
    viewInviteFriend:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'47%',
        marginRight:'3%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    viewEnterPromo:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'47%',
        marginLeft:'3%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    }
});
