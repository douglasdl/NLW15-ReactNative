import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

interface ICredential {
  code: string
  name: string
  email: string
}

export function Credential({ code, name, email }: ICredential) {
  return (
    <View className="w-full self-stretch items-center">
      <Image 
        source={require("@/assets/ticket/band.png")} 
        className="w-24 h-52 z-10"
      />

      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground 
          source={require("@/assets/ticket/header.png")} 
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">
              Unite summit
            </Text>
            <Text className="text-zinc-50 text-sm font-bold">
              {code}
            </Text>
          </View>

          <View className="w-40 h-40 bg-black rounded-full" />
        </ImageBackground>

        <Image 
          source={{ uri: "https://github.com/douglasdl.png" }} 
          className="w-36 h-36 rounded-full -mt-24"
        />

        <Text className="text-zinc-50 text-2xl font-bold mt-4">
          {name}
        </Text>

        <Text className="text-zinc-300 text-base font-regular mb-4">
          {email}
        </Text>

        <Image 
          source={require("@/assets/ticket/qrcode.png")} 
          className="w-32 h-32"
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="mt-6"
        >
          <Text className="font-body text-orange-500 text-sm">
            Ampliar QR Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}