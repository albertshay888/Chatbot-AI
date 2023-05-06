import React from "react";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Navbar from "./Navbar";
// import Loader from "react-spinner-loader";
// import Navbar from "components/Navbar";
export default function Home() {

  const [hobbies, setHobbies] = useState('');
  // const [gender, setGender] = useState("man");
  // const [age, setAge] = useState("30");
  const [priceMin, setPriceMin] = useState("10");
  const [priceMax, setPriceMax] = useState("100");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setResult('');
    // try {
      const response = await fetch("/api/generateTopGifts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceMin, priceMax, hobbies }),
      });
      const data = await response.json();
      console.log(data.result, "<=============result")

      // const newLineData = data.result.replaceAll('\n', '<br />')

      // const newLineData  = data.result.replaceAll('\n', '<br />').find(element => element === 'http')


// const newLineDataArray2 =newLineDataArray.splice(http, '0', '<br />')

// console.log(newLineDataArray2);

      ;

    //  setResult(newLineDataArray2);
    setResult(data.result.replaceAll('\n', '<br />'));


      // if (response.status !== 200) {
      //   throw data.error || new Error(`Request failed with status ${response.status}`);
      // }

      // setResult(data.result);
      // console.log(data.result)
      // setHobbies("");
    // } catch(error) {
      // Consider implementing your own error handling logic here
      // console.error(error);
      // alert(error.message);
    }


  return (
    <div>
      <Head>
        <title>OpenAI Quickstart </title>
      </Head>

      <main className={styles.main}>
       {/* <Navbar /> */}
        <h3> Top 10 ideas🎁 💡</h3>
        <form onSubmit={onSubmit}>
        {/* <label>For who is the gift?</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          > */}
            {/* <option value="man">Man</option>
            <option value="woman">Woman</option>
          </select> */}

          {/* <label>Age</label>
          <input
            type="number"
            min={1}
            max={99}
            name="age"
            placeholder="Enter the age"
            value={age}
            onChange={(e) => setAge(Number.parseInt(e.target.value))}
          /> */}

          <label> Price from</label>
          <input
            type="number"
            min={1}
            name="priceMin"
            placeholder="Enter the minimum price"
            value={priceMin}
            onChange={(e) => setPriceMin(Number.parseInt(e.target.value))}
          />


          <label>Price to</label>
          <input
            type="number"
            min={1}
            name="priceMax"
            placeholder="Enter the maximum price"
            value={priceMax}
            onChange={(e) => setPriceMax(Number.parseInt(e.target.value))}
          />

          <label>Category</label>
          <input
            type="text"
            name="hobbies"
            placeholder="Enter a category"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
          <input type="submit" value="Generate top gifts" />
        </form>
        {loading && (
          <div>
            <h1>Loading ...</h1>
          </div>
        )}
        <div
          className={styles.result}
          dangerouslySetInnerHTML={{ __html: result }}
        />

      </main>
    </div>
  );
};
