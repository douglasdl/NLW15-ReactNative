import { colors } from "@/styles/colors";
import { Text, View } from "react-native";
import QrCodeSvg from "react-native-qrcode-svg";

type Props = {
  value: string
  size: number
}

export function QrCode({ value, size }: Props) {
  return (
    <QrCodeSvg 
      value={value}
      size={size}
      color={colors.white}
      backgroundColor="transparent"
    />
  )
}