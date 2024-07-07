import React, { useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert,Image, TextInputComponent } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default App =()=> {
    

  const [textInput, setTextInput]= useState('');
  const [textInput2, setTextInput2]= useState('');
  
    const handleTextChange1 = (email) => {
    setTextInput(email);
    
    };  
    const handleTextChange2 = (text2) => {
      setTextInput2(text2);
      
      };

      const handleSubmit = () => {
        Alert.alert ("Submitted", "We'll get back to you!", )
        console.log();
        console.log("E-mail:" ,textInput);

        console.log("Password:", textInput2);
        
      }
    
  return (

    <View style={styles.text1}>

      <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}/>

        <Text style={[{fontSize: 30}, { paddingTop : 30 }]}>LOGIN </Text>
        <Text style={{fontSize: 16}}>Please log in to continue! </Text>

        <Text style={[{fontSize: 18}, { paddingTop : 10 }, {paddingBottom:5}]}>E-mail or username: </Text>
     <TextInput
            style= {styles.input}
            placeholder= "Enter e-mail"
            onChangeText= {handleTextChange1}
            value = {textInput}
            />


        <Text style={[{fontSize: 18}, { paddingTop : 20 }, {paddingBottom:5}]}>Password:</Text>
        <TextInput
            style= {styles.input}
            placeholder= "Enter password"
            onChangeText= {handleTextChange2}
            value = {textInput2}
        />
        <Text style={[{fontSize: 18}, { paddingTop : 10 }, {paddingBottom:5}]}> </Text>


<Button title="Submit" onPress={handleSubmit} />
        <StatusBar style={styles.text1}  />
      
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    flex:1,
    backgroundColor:'lightblue',
    paddingTop: 100,
    paddingHorizontal:20,
  },
  input:{
    height:50,
    width:"90%",
    paddingHorizontal:20,
    backgroundColor:"white",
    opacity:0.9,

  },
  tinyLogo: {
    width: 100,  
    height: 100,
    bluradius: 100,
    resizeMode : 'cover',
    position: 'relative',
      left:120,
      top: 0,
      bottom: 0,
      right: 0,

    
  },
});
