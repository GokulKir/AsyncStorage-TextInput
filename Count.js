import React from "react";
import{View,StyleSheet,Text,Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {IncrementCount,DecrementCount} from './src/Actions/count'

 function Count () {
   
    const count = useSelector(state => state.counter.count)
   let dispatch = useDispatch()




    return(
        <View style={styles.container}>
    
      <Button title="Increment" onPress={()=> dispatch(IncrementCount())}/>
      <Text style={styles.TextStyle}>Count : {count}</Text>
   <Button title="Decrement" onPress={()=> dispatch(DecrementCount())}/>
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
    }
})


export default Count;