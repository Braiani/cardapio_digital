import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import tw from "../styles/tailwind";
import mockData from "../data/mockData";
import ProductItem from "../components/ProductItem";

const ProductsScreen = ({ route }: any) => {
  const { categoryId, categoryName } = route.params;
  const [products, setProducts] = useState<{ id: string; name: string; price: string }[]>([]);

  useEffect(() => {
    setProducts(mockData.products[categoryId as keyof typeof mockData.products] || []);
  }, [categoryId]);

  return (
    <View style={tw`p-4 bg-gray-100 flex-1`}>
      <Text style={tw`text-2xl font-bold mb-4`}>{categoryName}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem name={item.name} price={item.price} />}
      />
    </View>
  );
};

export default ProductsScreen;
