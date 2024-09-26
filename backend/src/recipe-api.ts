const API_KEY = process.env.API_KEY;

import axios from 'axios';

export const searchRecipes = async (searchTerm: string, page: number) => {
  if (!API_KEY) throw new Error("API key not found");

  const url = `https://api.spoonacular.com/recipes/complexSearch`;
  const params = {
    apiKey: API_KEY,
    query: searchTerm,
    number: 10,
    offset: (page - 1) * 10
  };

  try {
    const { data } = await axios.get(url, { params });
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
