// Array of 25 sample profiles
const profiles = [
    {
        nickname: "CodeMaster",
        username: "@code_master",
        techStack: "JavaScript, Node.js, React",
        projects: "GitHub Profile",
        interests: "Web Development, Open Source Contributions, AI",
        github: "https://github.com/code_master"
    },
    {
        nickname: "TechGuru",
        username: "@tech_guru",
        techStack: "Python, Django, PostgreSQL",
        projects: "GitHub Profile",
        interests: "Data Science, Machine Learning, Cloud Computing",
        github: "https://github.com/tech_guru"
    },
    {
        nickname: "DevNinja",
        username: "@dev_ninja",
        techStack: "Go, Kubernetes, Docker",
        projects: "GitHub Profile",
        interests: "Cloud Infrastructure, DevOps",
        github: "https://github.com/dev_ninja"
    },
    {
        nickname: "AIExpert",
        username: "@ai_expert",
        techStack: "Python, TensorFlow, OpenCV",
        projects: "GitHub Profile",
        interests: "Artificial Intelligence, Computer Vision",
        github: "https://github.com/ai_expert"
    },
    {
        nickname: "CyberSleuth",
        username: "@cyber_sleuth",
        techStack: "C++, Python, SQL",
        projects: "GitHub Profile",
        interests: "Cybersecurity, Ethical Hacking",
        github: "https://github.com/cyber_sleuth"
    },
    {
        nickname: "DevWizard",
        username: "@dev_wizard",
        techStack: "Java, Spring Boot, PostgreSQL",
        projects: "GitHub Profile",
        interests: "Backend Development, Microservices",
        github: "https://github.com/dev_wizard"
    },
    {
        nickname: "CodeGenius",
        username: "@code_genius",
        techStack: "Ruby, Rails, PostgreSQL",
        projects: "GitHub Profile",
        interests: "Full Stack Development, Problem Solving",
        github: "https://github.com/code_genius"
    },
    {
        nickname: "DataWhiz",
        username: "@data_whiz",
        techStack: "R, SQL, Tableau",
        projects: "GitHub Profile",
        interests: "Data Analysis, Machine Learning",
        github: "https://github.com/data_whiz"
    },
    {
        nickname: "CloudKing",
        username: "@cloud_king",
        techStack: "AWS, Azure, Terraform",
        projects: "GitHub Profile",
        interests: "Cloud Architecture, DevOps",
        github: "https://github.com/cloud_king"
    },
    {
        nickname: "FrontendMaster",
        username: "@frontend_master",
        techStack: "HTML, CSS, JavaScript",
        projects: "GitHub Profile",
        interests: "UI/UX, Web Design, React",
        github: "https://github.com/frontend_master"
    },
    // Add more profiles as needed
];

let currentProfileIndex = 0;

function showProfile(index) {
    if (index >= profiles.length) {
        alert("No more profiles to show!");
        return;
    }

    const profile = profiles[index];
    const profileCard = document.getElementById('profileCard');
    
    profileCard.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="Profile Picture">
        <div class="profileDetails">
            <h2 class="nickname">${profile.nickname}</h2>
            <p class="username">${profile.username}</p>
            <p class="techStack"><strong>Tech Stack:</strong> ${profile.techStack}</p>
            <p class="projects"><strong>Projects:</strong> <a href="${profile.github}" target="_blank">${profile.projects}</a></p>
            <p class="interests"><strong>Interests:</strong> ${profile.interests}</p>
            <div class="buttons">
                <button class="connectBtn" onclick="handleConnect(${index})">Connect</button>
                <button class="crashBtn" onclick="handleCrash(${index})">Crash</button>
            </div>
        </div>
    `;
}

function handleConnect(index) {
    const profile = profiles[index];
    alert(`${profile.nickname} has been connected!`);
    if (index + 1 < profiles.length) {
        currentProfileIndex++;
        showProfile(currentProfileIndex);
    } else {
        alert("Congratulations, you've gone through all the profiles!");
    }
}

function handleCrash(index) {
    const profile = profiles[index];
    alert(`You have passed on ${profile.nickname}.`);
    if (index + 1 < profiles.length) {
        currentProfileIndex++;
        showProfile(currentProfileIndex);
    } else {
        alert("No more profiles left!");
    }
}

// Initialize the first profile
showProfile(currentProfileIndex);
