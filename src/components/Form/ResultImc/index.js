import React from "react";
import { View, Text , TouchableOpacity, Share} from "react-native";
import styles from "./style";
export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc é: "+props.resultImc,
        })
    }

    return (
        <View>
            <Text style={styles.resultMessage}>{props.messageResultImc}</Text>
            <Text style={styles.resultMessage}>{props.resultImc}</Text>
            <View style={styles.boxShareButton}>
                <TouchableOpacity onPress={onShare} style={styles.shared} >
                    <Text style={styles.sheredText}>Share</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}