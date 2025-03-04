import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "../styles/tailwind";
import mockData from "../data/mockData";
import CategoryItem from "../components/CategoryItem";

const HomeScreen = ({ navigation }: any) => {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    setCategories(mockData.categories);
  }, []);

  return (
    <View style={tw`p-4 bg-gray-100 flex-1`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Categorias</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryItem
            name={item.name}
            onPress={() => navigation.navigate("Products", { categoryId: item.id, categoryName: item.name })}
          />
        )}
      />
      {/* Botão de Sobre */}
      <TouchableOpacity
        style={tw`mt-5 mb-8 bg-blue-500 p-3 rounded-lg items-center`}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={tw`text-white text-lg font-bold`}>Sobre o App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
