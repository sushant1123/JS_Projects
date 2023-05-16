const categories = [
  "age",
  "amazing",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communications",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "design",
  "dreams",
  "education",
  "environmental",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

export const getRandomQuote = async () => {
  let idx = Math.floor(Math.random() * categories.length);
  let category = categories[idx];

  const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
    method: "GET",
    headers: { "X-Api-Key": "ezHeTed2nk8JtRXh/dA0Pw==GyNC9DevGU81OCSP" },
    contentType: "application/json",
  });

  const data = await response.json();
  const { quote, author } = data[0];

  return { newQuote: quote, newAuthor: author };
};
