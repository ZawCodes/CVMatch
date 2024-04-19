import { useState, useEffect, useRef } from "react";
import "./index.scss";

const Index = () => {
  const [resumeData, setResumeData] = useState("");
  const [jdData, setJdData] = useState("");
  const [matchPercentage, setMatchPercentage] = useState(0);
  const [highlightedResume, setHighlightedResume] = useState("");
  const [highlightedJD, setHighlightedJD] = useState("");

  const ignoredWords = [
    "a",
    "an",
    "the",
    "and",
    "or",
    "but",
    "in",
    "on",
    "at",
    "for",
    "to",
    "with",
    "by",
    "of",
    "about",
    "from",
    "as",
    "is",
    "are",
    "was",
    "were",
    "be",
    "being",
    "been",
    "this",
    "that",
    "these",
    "those",
  ];

  const matchFunction = () => {
    let cvWords = resumeData
      .toLowerCase()
      .split(/\W+/)
      .filter((word) => !ignoredWords.includes(word));
    let jdWords = jdData
      .toLowerCase()
      .split(/\W+/)
      .filter((word) => !ignoredWords.includes(word));
    let matchWords = [];
    let matchPercentage = 0;

    cvWords.forEach((word) => {
      if (jdWords.includes(word)) {
        matchWords.push(word);
      }
    });

    matchPercentage =
      (removeDuplicates(matchWords).length / jdWords.length) * 100;
    setMatchPercentage(matchPercentage);

    // Highlighting matching words in CV and JD
    const highlightedResumeText = resumeData.split(/\b/).map((word, index) => {
      return matchWords.includes(word.toLowerCase()) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {word}
        </span>
      ) : (
        <span key={index}>{word}</span>
      );
    });

    const highlightedJDText = jdData.split(/\b/).map((word, index) => {
      return matchWords.includes(word.toLowerCase()) ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {word}{" "}
        </span>
      ) : (
        <span key={index}>{word}</span>
      );
    });

    setHighlightedResume(highlightedResumeText);
    setHighlightedJD(highlightedJDText);
  };

  const removeDuplicates = (arr) => {
    return arr.filter((elem, index, self) => {
      return index === self.indexOf(elem);
    });
  };

  useEffect(() => {}, [matchPercentage]);

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="info-area">
            <h1>CV match</h1>
            <h2>Paste CV here</h2>
            <textarea
              value={resumeData}
              onChange={(e) => setResumeData(e.target.value)}
              style={{ width: "100%", height: "200px" }}
            ></textarea>
            <h2>Paste JD here</h2>
            <textarea
              value={jdData}
              onChange={(e) => setJdData(e.target.value)}
              style={{ width: "100%", height: "200px" }}
            ></textarea>
            <button onClick={matchFunction}>Match</button>
          </div>
          {matchPercentage > 0 && (
            <div className="result-area">
              <h1>CV Match Result is</h1>
              <p>
                Your CV matches the JD about{" "}
                <span className="bold">{matchPercentage} %</span>
              </p>
              <div className="comparison">
                <div className="cv">
                  <h2>Your CV</h2>
                  <p>{highlightedResume}</p>
                </div>
                <div className="jd">
                  <h2>Your JD</h2>
                  <p>{highlightedJD}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
