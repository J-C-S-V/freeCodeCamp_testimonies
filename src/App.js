import "./App.css";
import { Testimony } from "./components/testimonies";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="mid-bar">
          <h1>As seen in:</h1>
          <div className="image-of-companies"></div>
        </div>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>

        <Testimony
          name="Emma Bostian"
          country="Sweden"
          image="3"
          position="Software Engineer"
          company="Spotify"
          testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
        <Testimony
          name="Sarah Chima"
          country="Nigeria"
          image="2"
          position="Software Engineer"
          company="ChatDesk"
          testimony="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
        <Testimony
          name="Shawn Wang"
          country="Singapore"
          image="1"
          position="Software Engineer"
          company="Amazon"
          testimony="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
      </div>
    </div>
  );
}

export default App;
