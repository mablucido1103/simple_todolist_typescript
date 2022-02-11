import React from "react";
import Head from "next/head";
import { useState } from "react";
import Todolist from "./Todolist";

const CheckBox = () => {
  return (
    <div>
      <Head>
        <title>checkbox</title>
      </Head>

      <main>
        <div>
          <Todolist />
        </div>
      </main>
    </div>
  );
};
