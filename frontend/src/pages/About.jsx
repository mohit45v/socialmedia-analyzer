import React from 'react';


const developers = [
    {
        name: 'Developer 1',
        photo: 'path/to/photo1.jpg',
        linkedin: 'https://www.linkedin.com/in/developer1',
        github: 'https://github.com/developer1',
        twitter: 'https://twitter.com/developer1',
    },
    {
        name: 'Developer 2',
        photo: 'path/to/photo2.jpg',
        linkedin: 'https://www.linkedin.com/in/developer2',
        github: 'https://github.com/developer2',
        twitter: 'https://twitter.com/developer2',
    },
    {
        name: 'Developer 3',
        photo: 'path/to/photo3.jpg',
        linkedin: 'https://www.linkedin.com/in/developer3',
        github: 'https://github.com/developer3',
        twitter: 'https://twitter.com/developer3',
    },
    {
        name: 'Developer 4',
        photo: 'path/to/photo4.jpg',
        linkedin: 'https://www.linkedin.com/in/developer4',
        github: 'https://github.com/developer4',
        twitter: 'https://twitter.com/developer4',
    },
];

const About = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <div className="developer-cards">
                {developers.map((dev, index) => (
                    <div key={index} className="developer-card">
                        <img src={dev.photo} alt={`${dev.name}'s photo`} className="developer-photo" />
                        <h2>{dev.name}</h2>
                        <div className="social-links">
                            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href={dev.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={dev.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;