import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Logo / Título */}
      <View style={styles.header}>
        <Text style={styles.title}>EXTENSÃO TECNOLÓGICA</Text>
      </View>

      {/* Card de Login */}
      <View style={styles.card}>
        
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>

        {/* Campo Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        {/* Campo Senha */}
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        {/* Botão Logar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

        {/* Botão Cadastro */}
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

        {/* Esqueceu senha */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>esqueceu a senha</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 50,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#3CB371',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSecondary: {
    width: '100%',
    height: 45,
    backgroundColor: '#2E8B57',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#000',
    fontSize: 12,
  },
});
