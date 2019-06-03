import {
    StyleSheet,
    View,
    TouchableHighlight,
    Dimensions,
    Animated,
    Image,
} from 'react-native';
import React, { Component } from 'react';

import Svg,{
    Circle,
    Path,
    Ellipse
} from 'react-native-svg';

const width= Dimensions.get('window').width;
const height=Dimensions.get('window').height

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedPath = Animated.createAnimatedComponent(Path)

class TabBarItem extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        let child = this.props.children;

        if (child.length && child.length > 0) {
            throw new Error("onlyChild must be passed a children with exactly one child.");
        }

        return (
            <View style={{flex: 1}}>
                {child}
            </View>
        );
    }
}

export default class TabBar extends Component{
    constructor(props) {
        super(props);

        // if (this.props.children.length != 3) {
        //     throw new Error("Three tab should be work.");
        // }
        this.state = {
            selectedIndex: 0,
            defaultPage: 1,
            navFontSize: 12,
            navTextColor: "rgb(148, 148, 148)",
            navTextColorSelected: 'rgb(51, 163, 244)',
            pathX:"-357",//357
            pathY:'',
            pathA:'',
            pathB:'',
            showIcon: true
        }

    }

    render() {
        const {
            children,
        } = this.props;
        const {
            selectedIndex,
            navFontSize,
            navTextColor,
            navTextColorSelected,
            showIcon
        } = this.state;

        let _d;
        if(this.state.pathY == '' && this.state.pathA == '' && this.state.pathB == ''){
            _d = `1c-1.1-17.2,12.7-31.7,29.9-31.7h21.3c16.6`
        } else{
            _d = `M30,60h${this.state.pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1c-1.1-17.2,12.7-31.7,29.9-31.7h21.3c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`
        }

        return(
            <View style={[styles.container,this.props.style, children[this.state.selectedIndex].props.screenBackgroundColor ?  children[this.state.selectedIndex].props.screenBackgroundColor : '#008080']}>
        {children[selectedIndex]}
    <View style={[styles.content]}>
            <View style={styles.subContent}>
        {
            React.Children.map(children,  (child,i) => {
                const imgSrc = selectedIndex == i && showIcon
                    ?
            <View style={styles.circle}>
            <Image
                style={styles.navImage}
                resizeMode="cover"
                source={child.props.selectedIcon}
            />
            </View>
            :
            <Image
                style={styles.navImage}
                resizeMode="cover"
                source={child.props.icon}
            />;
            return (

                <TouchableHighlight
                    key={i}
                    underlayColor={"transparent"}
                    style={styles.navItem}
                    onPress={() => this.update(i)}>
                    {imgSrc}
                </TouchableHighlight>
            );
        })
        }
        </View>
            <Svg version="1.1" id="bottom-bar" x="0px" y="0px" width='100%' height="90" viewBox="0 0 1092 260" space="preserve">
                <AnimatedPath fill="#f0f0f0" d={ `M30,60h${this.state.pathX}.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${this.state.pathY}.7,74.5,${this.state.pathA}.5,60,${this.state.pathB}.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z` }/>
                <Path d="M450,40 Q550,-10 650,40 "
                    fill="none" stroke="#f0f0f0" strokeWidth="15"  />
                    <Ellipse
                    fill="#f0f0f0"
                    //stroke="black"
                    stroke-width="5"
                    cx="546"
                    cy="100"
                    rx="150"
                    ry="90"
                    />
                    <Path 
                    d="M370,70 Q415,65 450,40"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="15"
                    />
                    <Path 
                    d="M650,40 Q685,65 730,70"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="15"
                    />
                 {/* <Path
                    d="M450,50 L550, -50 L650, 50 L600, 300 L2000,50"
                    fill="none"
                    stroke="blue"
                    strokeWidth="5"
                /> */}
                {/* <Circle cx="370" cy="70" r="10" fill="#888888"/>
                <Circle cx="450" cy="40" r="10" fill="#888888"/>
                <Circle cx="425" cy="70" r="10" fill="#888888"/>
                <Circle cx="650" cy="40" r="10" fill="#888888"/>
                <Circle cx="685" cy="65" r="10" fill="#888888"/>
                <Circle cx="730" cy="70" r="10" fill="#888888"/> */}
                {/* <AnimatedCircle ref={ ref => this._myCircle = ref }  fill="#f0f0f0" cx="546" cy="100" r="100" /> */}
            </Svg>
        </View>
    </View>
    );
    }
    update(index) {

        let that = this
        that.setState({
            selectedIndex: index,
            // showIcon: true
        });
        // if(index == 0){
        //     setTimeout(function() {
        //         that.setState({
        //             showIcon: true
        //         })
        //     }, 100)
        // } else if(index == 2){

        //     setTimeout(function() {
        //         that.setState({
        //             showIcon: true
        //         })
        //     }, 100)
        // } else{

        //     setTimeout(function() {
        //         that.setState({
        //             showIcon: true
        //         })
        //     }, 100)
        // }
    }
}
TabBar.Item = TabBarItem;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
    },
    content: {
        flexDirection:"column",
        zIndex: 0,
        width: (Dimensions.get('window').width),
        //marginBottom: '4%',
        //left: '4%',
        //right: '4%',
    },
    subContent: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        zIndex: 1,
        position: 'absolute',
        bottom: 5,
    },
    navItem: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 6,
        alignItems: 'center',
        zIndex: 0,
    },
    navImage: {
        width: 35,
        height: 35,
    },
    circle: {
       // bottom: 18,
    }
});
