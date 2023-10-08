"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const About = () => {
  const navigate = useRouter();
  return (
    <div>
      <h4>Hello from about page</h4>
      <button onClick={() => navigate.push("/")}>
        Back to the Home page
      </button>{" "}
      <br />
    </div>
  );
};

export default About;
