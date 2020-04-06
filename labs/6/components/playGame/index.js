import React from "react";
import {View, Button, Image, StyleSheet} from "react-native";

class Play extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            finsihed : false,
            score : 0
        }
    }
    _game(){
        //if play is pressed show question 1
            //if question is right
                //score++
                //continue to next question
            //else
                //continue to next question
    
            //if question is right
                //score++
                //continue to next question
            //else
                //continue to next question
    
            //if question is right
                //score++
                //continue to next question
            //else
                //continue to next question
            
            //if question is right
                //score++
                //continue to next question
            //else
                //continue to next question
            
            //if question is right
                //score++
                //end game and show results
            //else
                //end game and show results
    }
    

    render(){
        return(
            <View>
                <Text>Which of the following statements are true?</Text>
                <Button
                    title = "Play"
                    onPress = {() => navigate("Play")}
                />
                />
            </View>
        );
    }
}

function game(){
    //if play is pressed show question 1
        //if question is right
            //score++
            //continue to next question
        //else
            //continue to next question

        //if question is right
            //score++
            //continue to next question
        //else
            //continue to next question

        //if question is right
            //score++
            //continue to next question
        //else
            //continue to next question
        
        //if question is right
            //score++
            //continue to next question
        //else
            //continue to next question
        
        //if question is right
            //score++
            //end game and show results
        //else
            //end game and show results
}

export default Play;