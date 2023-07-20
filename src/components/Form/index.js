import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import ResultImc from "./ResultImc/";
import styles from "./style";
 
export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('preencha o peso e a altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([]);

    function imcCalculator() {
        heightFormat = height;
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
        setImc(totalImc);
       }

    function verificationImc(){
        if (imc == null){
            Vibration.vibrate();
            setErrorMessage("campo obrigatório")

        }
    }

    function validationImc() {
        if (weight != null && height != null) {
          imcCalculator()
          setHeight(null)
          setWeight(null)
          setMessageImc("Seu imc é igual:")
          setTextButton("Calcular Novamente")
        }
        else{
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso e altura")
        }
      }
    return (
            <View style={styles.formContext}>
                {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>    
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setHeight}
                value = {height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"
                ></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value = {weight}
                placeholder="75.43"
                keyboardType="numeric"
                ></TextInput>
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                <Text>{textButton}</Text>
            </TouchableOpacity>
            </Pressable>
            
            : 
            <View style={styles.exhibitionResultImc}>
            <ResultImc messageResultImc={messageImc} resultImc = {imc}/>
            <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                <Text>{textButton}</Text>
            </TouchableOpacity>
            </View>
            }
        <FlatList
        showsVerticalScrollIndicator={false}

        //abaixo adicionamos o style
        style={styles.listImcs}
        //em data vamos passar nosso array do state com.reverse()
        //para exibir o ultimo  //resultado calculado primeiro
        data={imcList.reverse()}
        //Aqui nosso iremos imprimir na tela do app  o componente dentro de renderItem, que será um loop em todos os item do nosso array. Por             padrão  o flatList so carrega os itens que estao na sendo exibidos             tela melhorando assim quando a questão são grabdes bu.
        renderItem={({ item }) => {
        return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>Resultado IMC =</Text>
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={(item) => {
            item.id;
        }}
        />
        </View>

    )
}