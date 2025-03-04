import React from "react";
import { View, Text } from "react-native";
import tw from "../styles/tailwind";

interface ProductItemProps {
  name: string;
  price: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ name, price }) => {
  return (
    <View style={tw`p-4 bg-white mb-2 rounded-lg shadow-lg`}>
      <Text style={tw`text-lg font-bold`}>{name}</Text>
      <Text style={tw`text-gray-500`}>{price}</Text>
    </View>
  );
};

export default ProductItem;
