import { React } from 'react';
import { TextInput, StyleSheet } from 'react-native';



const InputField = (props) => {
    const { placeholder, keyboardType } = props
    return (
        <TextInput 
            style={styles.textInput}
            placeholder={placeholder}
            keyboardType={keyboardType}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 280,
        height: 40,
        paddingStart: 16,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 4,
        margin: 10
    }
})

export default InputField