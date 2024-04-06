import React from "react";
// Import any shared components used on this page
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Welcome to QuestTP</h1>
        <p>Embark on your journey of task completion and island exploration.</p>
        // Additional content and components unique to the HomePage
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
