import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Loading } from "./Loading";

interface IButton extends TouchableOpacityProps {
  title?: string
  isLoading?: boolean
}

export function Button({ title = "OK", isLoading = false, ...rest }: IButton) {
  return (
    <TouchableOpacity 
      className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
      disabled={isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      {
        isLoading ? 
          <ActivityIndicator className="text-green-500" /> : 
          <Text className="text-green-500 text-balance font-bold uppercase">{title}</Text>
      }
    </TouchableOpacity>
  )
}