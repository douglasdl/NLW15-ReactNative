import { View } from "react-native";
import { StatusBar } from "react-native";
import { Header } from "@/components/Header";
import { Credential } from "@/components/Credential";

export default function Ticket() {

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />
      <Header title="Minha Credencial" />
      
      <Credential 
        code="#123" 
        name="Douglas Dias Leal" 
        email="douglas_san@hotmail.com"
      />
      
    </View>
  );
}