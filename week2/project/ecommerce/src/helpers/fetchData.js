const fetchData = async (endpoint, dataType) => {
  const baseUrl = "https://fakestoreapi.com/products";
  const response = await fetch(`${baseUrl}${endpoint}`);
  if (!response.ok) {
    const message = `An error has occured while getting ${dataType}: ${response.status}`;
    throw new Error(message);
  }
  const jsonData = await response.json();
  return jsonData;
};

export default fetchData;
