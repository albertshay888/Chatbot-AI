
import React from "react";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Navbar from "./Navbar";


export default function Home() {
    const [animalInput, setAnimalInput] = useState('');



    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();

  async function onSubmit(event) {
    //preventDefault() prevents the default behavior of the form, which is to refresh the page
    event.preventDefault();
    try {
        const response = await fetch("/api/generateNames", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ animal: animalInput }),
          });

    const data = await response.json();
    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }

    setResult(data.result.replaceAll('\n', '<br />'));
    console.log("company names data.results==>", data.result)

    setAnimalInput("");
  } catch(error) {
    // Consider implementing your own error handling logic here
    console.error(error);
    alert(error.message);
  }
}


return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
     <Navbar />
        <h3>App name generator📱 💻 </h3>

          <form onSubmit={onSubmit}>
          <input
            type="text"
            name="pet-type"
            placeholder="Enter an industry"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate Names" />
        </form>


        <div className={styles.result}
          dangerouslySetInnerHTML={{ __html: result}}
        />
      </main>
    </div>
  );
}
