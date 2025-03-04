import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "../styles/tailwind";

interface CategoryItemProps {
  name: string;
  onPress: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={tw`p-4 bg-white mb-2 rounded-lg shadow-lg`} onPress={onPress}>
      <Text style={tw`text-lg`}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
