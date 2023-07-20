import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width: '100%',
        height: '80%',
        bottom: 0,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        marginTop:30,
        borderRadius: 30
       
    },
    form:{
        width: '100%',
        height: 'auto',
        marginTop:30,
        padding: 10,

    },
    formLabel:{
        color:'black',
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width: '90%',
        borderRadius: 50,
        backgroundColor:"#f6f6f6",
        height: 40,
        margin: 12,
        padding: 10,
    },
    buttonCalculator:{
        alignItems:"center",
        justifyContent:"center",
        width: '90%',
        borderRadius: 50,
        backgroundColor:"gold",
        height: 40,
        margin: 12,
        padding: 10,
    },

    errorMessage:{
        fontSize:12,
        fontWeight:"bold",
        color: "red",
        paddingLeft:20,
    },
    exhibitionResultImc:{
        width: "100%",
        height: "50%",

    },
    listImcs:{
        marginTop: 20,
      },
      resultImcItem:{
       fontSize:28,
       color:"red",
       height:50,
       width:"100%",
       paddingRight:20
      },
      textResultItemList:{
       color:"red",
       fontSize:16,
      }
  
})

export default styles;