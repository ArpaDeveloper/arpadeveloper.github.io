import { useEffect, useRef, useState } from "react";
import "./timeline.scss";

//Image imports
import pic1 from "../../assets/images/UnityC.jpg"; //Unit & C#
import pic2 from "../../assets/images/hungryspace.png"; //Game Jam: Space is Hungry
import pic3 from "../../assets/images/tattis.png"; //Game Jam: Tattis
import pic4 from "../../assets/images/crow.png"; //Game Jam: Muninn
import pic5 from "../../assets/images/lukio.jpg"; //Upper School graduate
import pic6 from "../../assets/images/intti.jpg"; //Army
import pic7 from "../../assets/images/tutor.png"; //Tutor
import pic8 from "../../assets/images/lofirunner.png"; //Self-published Lofirunner
import pic9 from "../../assets/images/hack1.jpg"; //First hackathon
import pic10 from "../../assets/images/junction.jpg"; //Junction
import pic11 from "../../assets/images/s-group.png"; //S-group

const data = [
    { id: 1, year: "2018", title: "Started Programming", text: "I started programming with C# in Unity.", img: pic1 },
    { id: 2, year: "2020", title: "First Game Jam", text: "I made small highscore based game in 1 week.", img: pic2 },
    { id: 3, year: "2021", title: "Second Game Jam", text: "I participated in 72-hour-long game jam. I made a small 2D platformer (This was my first 2D platformer ever made).", img: pic3},
    { id: 4, year: "2022", title: "Game Jam with over 1500 entries", text: "I made a 2D platformer in 1 week. I was 465 out of 1537 (Better than half).", img: pic4 },
    { id: 5, year: "2023", title: "Upper School Graduate", text: "I graduated from Riihimäki Upper School.", img: pic5 },
    { id: 6, year: "2024", title: "Corporal", text: "I completed my mandatory military service (2023-2024) with the rank of Corporal.", img: pic6 },
    { id: 7, year: "2025", title: "International Student Tutor", text: "I was International Student Tutor for newcomers at LUT-University. I got a lot fun memories and improved my communication and english skills.", img: pic7 },
    { id: 8, year: "2025", title: "Lofirunner (2022-2025)", text: "I self-published game on Steam. Made as a hobby project in 3 years. Enhanced my skills in C#, Unity, Steam Developer Tools, Problem Solving, Game Development.", img: pic8 },
    { id: 9, year: "2025", title: "Aalto Defence Hackathon", text: "My first hackathon.", img: pic9 },
    { id: 10, year: "2025", title: "Junction 2025", text: "While we didn't win, we had a blast hacking the whole weekend. We ended making a End-to-end, AI-drive logistics platform. It used AI-agent powered by Gemini & Predictive analysis machine model trained on Google Cloud.", img: pic10 },
    { id: 11, year: "2025", title: "Salesperson", text: "Started working part-time as a salesperson in S-market.", img: pic11 },
];

export default function Timeline() {
  const [active, setActive] = useState(null);

  const timelineRef = useRef(null);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (timelineRef.current && !timelineRef.current.contains(e.target)) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-timeline" ref={timelineRef}>

      <div className="h-line" />

      {data.map((item, index) => {
        const isEven = index % 2 === 0;
        const isLeft = index % 2 === 0;

        return (
          <div
            key={item.id}
            className="h-item"
            onClick={() => setActive(item)}
          >
            {/* YEAR */}
            <div className={`h-year ${isEven ? "top" : "bottom"}`}>
              {item.year}
            </div>

            {/* DOT */}
            <div
                className={`h-dot ${active?.id === item.id ? "active" : ""}`}
            />

            {/* TOOLTIP */}
            {active?.id === item.id && (
              <div
                className={`h-tooltip ${
                  isEven ? "bottom" : "top"
                } ${isLeft ? "left" : "right"}`}
              >
                <img src={item.img} alt={item.title} />
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}