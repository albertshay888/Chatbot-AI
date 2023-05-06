import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
//   stop: ["\n"],
// });

export default async function (req, res) {
    // if (!configuration.apiKey) {
    //   res.status(500).json({
    //     error: {
    //       message: "OpenAI API key not configured, please follow instructions in README.md",
    //     }
    //   });
    //   return;
    // }
    const { query } = req.body || '';
    //  const inquiry = generatePrompt(query)
    console.log("query answer from open ai->", query)
    // const query = req.body.query || '';
    // if (animal.trim().length === 0) {
    //   res.status(400).json({
    //     error: {
    //       message: "Please input a valid query",
    //     }
    //   });
    //   return;
    // }

    // try {
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        // prompt: generatePrompt(query),
        prompt: query,
        // temperature: 0.6,
        temperature: 0.6,

        max_tokens: 2048,
        // max_tokens: 100,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
        // stop: ["\n"],
      });
      res.status(200).json({ result: completion.data.choices[0].text });
    // } catch(error) {
      // Consider adjusting the error handling logic for your use case
      // if (error.response) {
      //   console.error(error.response.status, error.response.data);
      //   res.status(error.response.status).json(error.response.data);
      // } else {
      //   console.error(`Error with OpenAI API request: ${error.message}`);
      //   res.status(500).json({
      //     error: {
      //       message: 'An error occurred during your request.',
      //     }
      //   });
      // }
    }
    function generatePrompt(query) {
      // return `suggest 3 Christmas gift ideas between ${priceMin} and ${priceMax} for a${age} years old ${gender} that is into ${hobbies}`;
     // return `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:${query},`;
    return  `${query}`
    }


//   function generatePrompt(animal) {
//     const capitalizedAnimal =
//       animal[0].toUpperCase() + animal.slice(1).toLowerCase();
//     return `Suggest three names for an animal that is a superhero.

//   Animal: Cat
//   Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
//   Animal: Dog
//   Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
//   Animal: ${capitalizedAnimal}
//   Names:`;
//   }
