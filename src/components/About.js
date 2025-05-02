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
                Resume
            </a>
            <h2>About Me</h2>
            <p>Hi, I'm a professional cutie pie and I'm also super smart, so
                hire me or I WHACK you in the head with a frying pan!</p>
            <div className="chat-container">
                <label htmlFor="chat-input">Chat with Mablebot:</label>
                <div className="chat-input-wrapper">
                    <input
                        id="chat-input"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleChatClick}>Chat</button>
                </div>
            </div>
        </section>
    );
}

export default About;
