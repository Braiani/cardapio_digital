import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import tw from "../styles/tailwind";

const AboutScreen = () => {
  return (
    <View style={tw`flex-1 bg-gray-100 p-6 items-center justify-center`}>
      {/* Imagem */}
      <Image source={{ uri: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6" }} style={tw`w-52 h-52 rounded-full mb-6`} />

      {/* Título */}
      <Text style={tw`text-3xl font-bold text-gray-900`}>Sobre o App</Text>
      <Text style={tw`text-lg text-gray-600 text-center mt-2`}>
        Este aplicativo foi criado para fornecer um cardápio digital simples e moderno. Feito com ❤️ em React Native.
      </Text>

      {/* Link para mais informações */}
      <TouchableOpacity onPress={() => Linking.openURL("https://github.com/seu-repo")}>
        <Text style={tw`mt-4 text-blue-500 underline text-lg`}>Visite nosso GitHub</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AboutScreen;
