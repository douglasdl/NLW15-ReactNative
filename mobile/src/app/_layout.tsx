import "../styles/global.css"

import { Slot } from "expo-router"

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto"
import { Loading } from "@/components/Loading"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })
  
  return (
    <>
      { fontsLoaded ? < Slot/> : <Loading />}
    </>
  )
}