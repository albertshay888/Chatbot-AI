import React from "react";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link"
import Navbar from "./Navbar";
export default function Home() {
    const [queryInput, setQueryInput] = useState("");



    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState();

  async function onSubmit(event) {
    //preventDefault() prevents the default behavior of the form, which is to refresh the page
    event.preventDefault();
    try {
        const response = await fetch("/api/generateChat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: queryInput }),
          });

    const data = await response.json();

    if (response.status !== 200) {
      throw data.error || new Error(`Request failed with status ${response.status}`);
    }

    setResult(data.result);
    console.log(data.result)

    setQueryInput("");
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
      </Head>

      <main className={styles.main}>
      {/* <Navbar /> */}
      <Navbar />
      {/* <nav>
          <button styles={{marginLeft: "20px",
        marRight:"20px",
        marginBottom: "20px",
        padding: "2px" }}>
          <Link href={"/chats"}>Chat with AI💬</Link>
          </button>
          <button styles={{marginLeft: "20px",
        marRight:"20px",
        marginBottom: "20px",
        padding: "2px" }}>
          <Link href={"/gifts"}>Top 10 Products🎁</Link>
          </button>
          <button styles={{marginLeft: "20px",
        marRight:"20px",
        marginBottom: "20px",
        padding: "2px" }}>
          <Link href={"/pets"}>Pet names🐶</Link>
          </button>
        </nav> */}

        <h3>Ask me anything? 🤖 💬 </h3>

          <form onSubmit={onSubmit}>
          <input
            type="text"
            name="query"
            placeholder="Type your question"
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
          />
          <input type="submit" value="Generate Answer" />
        </form>


        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
