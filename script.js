// Data for the project cards
const projects = [
    {
        title: "Alarm App",
        tech: "Android (Java/Kotlin) or Web (React, Node.js)",
        description: "A functional application built to handle scheduling, demonstrating robust **state management** and persistence. The core challenge was ensuring accurate triggering and handling background tasks. This project showcases my application development and functional logic skills.",
        links: [
            { text: "GitHub Repo", url: "YOUR_ALARM_APP_GITHUB_LINK" },
            { text: "Live Demo", url: "YOUR_ALARM_APP_DEMO_LINK" }
        ]
    },
    {
        title: "Personal Portfolio Web Page",
        tech: "HTML, CSS, JavaScript (The site you are viewing)",
        description: "Designed and deployed this fully **responsive** website to showcase my skills and work. It demonstrates my ability to handle clean UI/UX execution and core front-end principles using CSS Grid and Flexbox.",
        links: [
            { text: "GitHub Repo", url: "YOUR_PORTFOLIO_GITHUB_LINK" },
            { text: "Live Link", url: "#" } // Link back to this page
        ]
    },
    {
        title: "Functional Calculator Page",
        tech: "HTML, CSS, JavaScript",
        description: "A web-based calculator focusing on complex button inputs and **JavaScript logic** for mathematical operations. It demonstrates strong logical thinking and real-time DOM manipulation.",
        links: [
            { text: "GitHub Repo", url: "YOUR_CALCULATOR_GITHUB_LINK" },
            { text: "Live Demo", url: "YOUR_CALCULATOR_DEMO_LINK" }
        ]
    }
];

const projectList = document.getElementById('project-list');

// Function to generate and insert the project cards
function renderProjects() {
    projects.forEach(project => {
        // 1. Create the main card element
        const card = document.createElement('div');
        card.className = 'project-card';

        // 2. Create the content area
        const content = document.createElement('div');
        content.className = 'project-card-content';

        // 3. Add the title and tech stack
        const title = document.createElement('h4');
        title.textContent = project.title;
        const techStack = document.createElement('p');
        techStack.className = 'tech-stack';
        techStack.textContent = `Tech: ${project.tech}`;

        // 4. Add the description
        const description = document.createElement('p');
        description.textContent = project.description;

        // 5. Add the links
        const linksDiv = document.createElement('div');
        linksDiv.style.marginTop = '15px';
        project.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.text;
            linkElement.target = "_blank"; // Opens in a new tab
            linksDiv.appendChild(linkElement);
        });

        // 6. Assemble the card
        content.appendChild(title);
        content.appendChild(techStack);
        content.appendChild(description);
        content.appendChild(linksDiv);
        card.appendChild(content);

        // 7. Add the card to the project list section
        projectList.appendChild(card);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);