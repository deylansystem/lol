const API_URL = 'https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion.json';

export async function fetchChampions() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch champions');
    const data = await response.json();
    return data.data; // Lista de campeones
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
}
