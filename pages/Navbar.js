import React from "react";
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";

// import Navbar from "../components/Navbar.js";
export default function Navbar() {



return (
    <>
      {/* <Navbar /> */}
      <nav>
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
          <Link href={"/pets"}>Find App names📱</Link>
          </button>
        </nav>
        </>
  );
}
