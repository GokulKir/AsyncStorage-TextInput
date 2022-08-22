import React, {useState} from "react";

import {
  View,
  StyleSheet,
  Text,
  Button,
  AsyncStorage,
  TextInput

} from 'react-native';

export default function App(){

  const [textInputValue,setTextInputValue] = useState("")
  const [value,setValue] = useState("")

  const saveValue = () =>{
   if(textInputValue){
    AsyncStorage.setItem("Key",textInputValue)
    setTextInputValue('')
    alert("Data Saved")
   }else{
    alert("Please fill the data")
   }
  }
  const getValue = () =>{
    AsyncStorage.getItem("Key")
    .then((value)=>{
      setValue(value)
    })
  }


   
  
  return(
    <View style={styles.container}>
          <TextInput style={styles.TextInput} value={textInputValue} onChangeText ={(data)=>setTextInputValue(data) }/>
     <Text style={styles.TextStyle}>{value}</Text>
  
 <View style={styles.button}>
  <Button title={"Add"} onPress={saveValue}/>

 </View>
 <View style={styles.button}>
  <Button title={"get"} 
  onPress={getValue}/>

 </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center'
  },
  TextStyle:{
      fontSize:24,
      fontWaight:'bold',
      color:'#fff'
  },
  button:{
    margin:20,
    width:250
  

  },
  TextInput:{
    width:"90%",
    height:45,
    backgroundColor:'#fff',
    color:'black'
  }
})