import { Input } from "@/components/Input";
import { Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Button } from "@/components/Button";
import { Link } from "expo-router";
import { StatusBar } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />

      <Image 
        source={require("@/assets/logo.png")} 
        className="h-16" 
        resizeMode="contain" />
      
      <View className="w-full mt-12 gap-3">
        <Input>
          <MaterialCommunityIcons 
            name="ticket-confirmation-outline" 
            color={colors.green[200]}
            size={20} 
          />
          <Input.Field 
            placeholder="Código do ingresso" 
          />
        </Input>

        <Button title="Acessar Credencial" onPress={() => {}} />

        <Link 
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
        >
          Ainda não possui ingresso?
        </Link>
      </View>
    </View>
  );
}