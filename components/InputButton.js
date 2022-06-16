import { React } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';



const InputField = (props) => {
    // props for this component
    const { placeholder, secureTextEntry } = props
    return (
        <TextInput 
            placeholder= {placeholder}
            mode='outlined'
            style={styles.textInput}
            secureTextEntry={secureTextEntry}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 280,
        height: 40,
        margin: 10,
        fontSize: 15
    }
})

export default InputField