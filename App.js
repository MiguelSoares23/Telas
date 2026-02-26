import React, { useState }  from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  SafeAreaViewBase
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


function Login({navigation}) {
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


        <TouchableOpacity onPress={()=>navigation.navigate('Lista_contato')} style={styles.button}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate('Cadastro')} style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>


        <TouchableOpacity>
          <Text onPress={()=>navigation.navigate('Esqueceu_senha')} style={styles.forgotPassword}>esqueceu a senha</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

function Cadastro({navigation}) {
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

        <Text style={styles.label}>Cpf</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Cpf"
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


function Esqueceu_senha({navigation}) {
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

function Contato({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      
      
      <View style={styles.header}>
        <Text style={styles.title}>Contato</Text>
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

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        
      </View>

    </SafeAreaView>
  );
}


function Lista_contato({navigation, route}){

const { username, phone } = route.params || {};

  return(
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.titleContatos}>Lista de Contatos</Text>
      </View>

      <View style={styles.card}>
        
    <TouchableOpacity onPress={()=>navigation.navigate('Contato2')}>
  <View style={styles.userRow}>
  <MaterialCommunityIcons
    name="account-circle"
    size={50}
    color="#000000"
  />

  <View style={styles.textContainer}>
    <Text style={styles.label}>{username || 'Usuário'}</Text>
    <Text style={styles.label}> {phone || 'Telefone'}</Text>
  </View>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Contato2')}>
  <View style={styles.userRow}>
  <MaterialCommunityIcons
    name="account-circle"
    size={50}
    color="#000000"
  />

  <View style={styles.textContainer}>
    <Text style={styles.label}>Usuário2</Text>
    <Text style={styles.label}>Telefone2</Text>
  </View>
</View>
</TouchableOpacity>

<TouchableOpacity onPress={()=>navigation.navigate('Contato2')}>
  <View style={styles.userRow}>
  <MaterialCommunityIcons
    name="account-circle"
    size={50}
    color="#000000"
  />

  <View style={styles.textContainer}>
    <Text style={styles.label}>Usuário3</Text>
    <Text style={styles.label}>Telefone3</Text>
  </View>
</View>
</TouchableOpacity>
        

</View>
      </SafeAreaView>

      
  );
}

function Contato2({navigation, route}) {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      
      
      <View style={styles.header}>
        <Text style={styles.title}>Contato</Text>
      </View>
      <View style={styles.card}>

        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu telefone"
          value={telefone}
          onChangeText={setTelefone}
        />

        <TouchableOpacity onPress={()=>navigation.navigate('Lista_contato', { username: nome,
              phone: telefone,}) }
        style={styles.button}>
          <Text style={styles.buttonText}>Alterar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonExcluir}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}













const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="Cadastro" component={Cadastro} />
<Stack.Screen name="Esqueceu_senha" component={Esqueceu_senha} />
<Stack.Screen name="Contato" component={Contato} />
<Stack.Screen name="Contato2" component={Contato2} />
<Stack.Screen name="Lista_contato" component={Lista_contato}
options={({ navigation }) => ({
    title: "Lista de Contatos",
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Contato")}
        style={{ marginRight: 15 }}
      >
        <Ionicons name="add" size={28} color="black" />
      </TouchableOpacity>
    ),
  })} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;



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
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleContatos: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    height: 45, 
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
  buttonExcluir: {
    width: '100%',
    height: 45,
    backgroundColor: '#ff0000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
  ,
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
  containerUser: {
    flexDirection: 'row',      // ícone + textos lado a lado
    alignItems: 'center',      // centraliza verticalmente
  },
  textContainer: {
    marginLeft: 10,            // espaço entre ícone e textos
  },
  
  userRow: {
    flexDirection: 'row',   // lado a lado
    alignItems: 'center',   // centraliza verticalmente
    marginTop: 15,
  },
  textContainer: {
    marginLeft: 10,         // espaço entre ícone e texto
  },
});
