import { React } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';



const InputField = (props) => {
    // props for this component
    const { placeholder, keyboardType } = props
    return (
        <TextInput 
            placeholder= {placeholder}
            mode='outlined'
            style={styles.textInput}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 280,
        height: 40,
        paddingStart: 10,
        margin: 10,
        fontSize: 15
    }
})

export default InputField