import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  const { priceMin, priceMax,  age, hobbies } = req.body;
  const prompt = generatePrompt(priceMin, priceMax,  age, hobbies);

  console.log(prompt)

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.6,
    max_tokens: 2048,
  });

  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(priceMin, priceMax, age, hobbies) {
  return `suggest the 10 best Amazon products between ${priceMin} and ${priceMax} for ${hobbies}`;
}
