import React, {useState} from 'react';

function About() {
    const [inputValue, setInputValue] = useState("Tell me more about your work experience...");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleChatClick = () => {
        console.log("User input:", inputValue);
        // Add your chat handling logic here
    };

   return (
    <section id="about">
    <a
      href="/assets/Mable_Zhang_resume.pdf"
      download="Mable_Zhang_resume.pdf"
      className="resume-link"
    >
      Download Resume
    </a>

    <h2>About</h2>
    <p>
      I recently graduated from UC Berkeley, double majoring in data science and economics.
      My experiences span machine learning, data analysis, and economic research.
      Outside of academics, I spend time volunteering in community cleanup efforts,
      because building a better world includes picking up trash, too.
    </p>

    <h3>Resume Preview</h3>
    <iframe
      src="/assets/Mable_Zhang_resume.pdf"
      width="100%"
      height="600px"
      title="Resume Preview"
      style={{ border: "1px solid #ccc", marginTop: "1rem" }}
    ></iframe>
  </section>
);
}
export default About;
