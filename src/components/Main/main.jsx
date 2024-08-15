import React, { useState } from "react";
import "./main.css";
import { assets } from "../../assets/assets";

const userInputHistory = []; // Create an empty array to store user inputs

function Main() {
  const [response, setResponse] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchResponse = async () => {
    userInputHistory.push(userInput); 
    console.log("User Input History:", userInputHistory);
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAivfB_5_FG87buNLP_HXL8shEB5_COEMQ";

    const requestBody = {
      contents: [
        {
          parts: [{ text: userInput }],
        },
      ],
    };
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await res.json();
      let textOutput = data.candidates[0].content.parts[0].text;
      textOutput = textOutput
        .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
        .replace(/\*(.*?)\*/g, "<br /><br />");
      console.log(textOutput);
      setResponse(textOutput);
      setUserQuestion(userInput);
      setSearchPerformed(true);
      startTypingEffect(textOutput);
      setUserInput("");
    } catch (error) {
      console.error("Error fetching the response:", error);
    } finally {
      setLoading(false);
    }
  };

  const startTypingEffect = (text) => {
    const totalDuration = 6000;
    const words = text.split(" ");
    const totalWords = words.length;
    const intervalDuration = totalDuration / totalWords;
    let index = 0;

    setTypingText("");

    const interval = setInterval(() => {
      setTypingText((prev) => {
        const newText = [...prev.split(" "), words[index]].join(" ");
        return newText;
      });
      index += 1;
      if (index >= totalWords) clearInterval(interval);
    }, intervalDuration);
  };

  return (
    <div className="main">
      {searchPerformed ? (
        <div className="main-container">
          <div className="search-result">
            <div className="question">
              <div className="user-question">
                <img
                  src={assets.chatbot_icon}
                  alt=""
                  className="profile-icon"
                />
                <p>You</p>
              </div>
              <p style={{ marginLeft: 40 }}>{userQuestion}</p>
            </div>
            <div className="answer">
              <div className="user-question">
                <img
                  src={assets.chatbot_icon}
                  alt=""
                  className="profile-icon chatbot-profile"
                />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: typingText }} />
                )}
              </div>
            </div>
          </div>
          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter your prompt here"
                className="input user-input input-alt"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <img src={assets.search_icon} alt="" onClick={fetchResponse} />
            </div>
            <p className="tandc">
              ChatBot may display inaccurate info, including about people, so
              double-check its responses.
              <span style={{ textDecoration: "underline" }}>
                Your privacy & ChatBot Apps
              </span>
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="navbar">
            <h2>ChatBot</h2>
            <img src={assets.chatbot_icon} alt="" />
          </div>
          <div className="main-container">
            <div className="greet">
              <div className="hello world">Hello, Tauseef.</div>
              <div className="hello">How can I help you?</div>
            </div>
            <div className="cards">
              <div className="card">
                <img src={assets.bag_icon} alt="" />
                <p>Pick outfit to look good on camera</p>
              </div>
              <div className="card">
                <img src={assets.bulb_icon} alt="" />
                <p>Pick outfit to look good on camera</p>
              </div>
              <div className="card">
                <img src={assets.education_icon} alt="" />
                <p>Pick outfit to look good on camera</p>
              </div>
              <div className="card">
                <img src={assets.code_icon} alt="" />
                <p>Pick outfit to look good on camera</p>
              </div>
            </div>
            <div className="main-bottom">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Enter your prompt here"
                  className="input user-input input-alt"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <img src={assets.search_icon} alt="" onClick={fetchResponse} />
              </div>
              <p className="tandc">
                ChatBot may display inaccurate info, including about people, so
                double-check its responses.
                <span style={{ textDecoration: "underline" }}>
                  Your privacy & ChatBot Apps
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
