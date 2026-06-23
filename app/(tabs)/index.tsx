import { testLogin } from "@/components/authService";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const styles = StyleSheet.create({
    default: {
      flex: 1,
      justifyContent: 'center',
      padding: 30, 
      backgroundColor: '#7b97b1'
    },
  });

export default function GisaLogin() {
  const [login, setLogin] = useState<string>();
  const [senha, setSenha] = useState<string>();
  const [msnResp, setMsnResp] = useState<string>();

  const validacao = () => {
    const saida = testLogin(login || '', senha || '');
    switch(saida){
      case 10: setMsnResp("Login administrativo correto"); break;
      case 20: setMsnResp("Login medico correto"); break;
      case 30: setMsnResp("Login paciente correto"); break;
      default: setMsnResp("Login incorreto"); break;
    }
  }
  return(
    <View style = {styles.default}>
      <Text>Bem vindo ao GISA</Text>
      <Text>Digite o login e senha</Text>
      <TextInput
        placeholder="login"
        onChangeText={setLogin}
        value={login}
      />
      <TextInput
        placeholder="senha"
        onChangeText={setSenha}
        value={senha}
      />
      <TouchableOpacity onPress={validacao}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>{msnResp}</Text>
    </View>
  );
}