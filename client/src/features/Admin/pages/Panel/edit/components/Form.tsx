"use client";
import React, { useState } from "react";
import Buttons from "./Buttons";
import Header from "./Header";
import ImageDisplay from "./ImageDisplay";

function FormInputs() {
  const [title, setTitle] = useState("");


  return (
    <form>
      <Header>{"Update a Panel"}</Header>
      <div className="container">
        <div className="inputs-group">
          <div>
            <label>Title</label>
            <div className="relative">
              <input
                type="text"
                name="title"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(event.target.value)
                }
              />
              <span className="absolute bottom-1 right-14 text-slate-500">
                {title.length}/20
              </span>
              <p className="absolute left-2 -bottom-5 text-sm text-red-400">
                {title.length > 20 && "Your title is too long"}
              </p>
            </div>
          </div>

          <label>Description</label>
          <textarea name="description" />

          <label>Path</label>
          <input type="text" name="path" />

          <label>Type</label>
          <select>
            <option value="slide">slide</option>
            <option value="public">Public</option>
            <option value="public">Public</option>
          </select>
        </div>
        <ImageDisplay />
      </div>
      <Buttons />
    </form>
  );
}

export default FormInputs;
