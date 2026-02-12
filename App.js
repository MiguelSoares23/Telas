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

function App() {
  return (
    <SafeAreaView style={styles.container}>
      

      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>

  
      <View style={styles.card}>
        

        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>


        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />


        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>


        <TouchableOpacity>
          <Text style={styles.forgotPassword}>esqueceu a senha</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

function cadastro() {
  return (
    <SafeAreaView style={styles.container}>
      
      
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>
      <View style={styles.card}>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}


export default function esqueceu_senha() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Esqueceu Senha</Text>
      </View>
      <View style={styles.card}>
        
        <Text style={styles.title}>Esqueceu a senha</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d2d2',
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
