
const teamMembers = [
    {
        name: "Semih Boyacıoğlu",
        title: "Project Leader",
        image: "semihozfoto.jpeg",
        bio: "Modern web teknolojilerinde uzmanlaşmış frontend geliştiricisi.",
        skills: ["HTML", "CSS", "JavaScript", "PHP"],
        social: {
            github: "https://github.com/StrenchSAMA",
            linkedin: "https://linkedin.com/in/ahmet",
            twitter: "https://twitter.com/ahmet"
        },
        funFact: "Boş zamanlarında sokak fotoğrafçılığı yapıyor."
    },
    {
        name: "Kerem Mahmut Coşkun",
        title: "Frontend Developer",
        image: "keremozfoto.jpeg",
        bio: "Kullanıcı deneyimini ön planda tutan, yaratıcı tasarım çözümleri üreten deneyimli tasarımcı.",
        skills: ["HTML", "CSS", "JavaScript"],
        social: {
            github: "https://github.com/krmcsk",
            linkedin: "https://linkedin.com/in/ayse",
            behance: "https://behance.net/ayse"
        },
        funFact: "Oyun oynamayı seviyor."
    },
    {
        name: "Yusuf Kurt",
        title: "Frontend Developer",
        image: "yusufozfoto.jpeg",
        bio: "Kullanıcı odaklı ve performanslı web uygulamaları geliştiren, modern frontend teknolojilerinde uzmanlaşmış bir geliştiriciyim.",
        skills: ["HTML", "CSS", "JavaScript"],
        social: {
            github: "https://github.com/Capsiz-Artist",
            linkedin: "https://linkedin.com/in/mehmet",
            stackoverflow: "https://stackoverflow.com/users/mehmet"
        },
        funFact: "3D modelleme yapıyor."
    },
    {
        name: "Ecrin Nur Tabir",
        title: "Frontend Developer",
        image: "ecrinozfoto.jpeg",
        bio: "Frontend geliştirme konusunda geniş bir deneyime sahip, modern web teknolojilerine hakim bir geliştiriciyim.",
        skills: ["HTML", "CSS", "JavaScript"],
        social: {
            github: "https://github.com/zeynep",
            linkedin: "https://linkedin.com/in/zeynep",
            medium: "https://medium.com/@zeynep"
        },
        funFact: "Yarı profesyonel satranç oyuncusu."
    }
];

function createMemberCard(member) {
    return `
        <div class="member-card" data-aos="fade-up">
            <img src="${member.image}" alt="${member.name}" class="member-image">
            <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <div class="member-title">${member.title}</div>
                <p class="member-bio">${member.bio}</p>
                <div class="skills">
                    ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
                <div class="social-links">
                    ${member.social.github ? `<a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    ${member.social.linkedin ? `<a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>` : ''}
                    ${member.social.twitter ? `<a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                    ${member.social.dribbble ? `<a href="${member.social.dribbble}" target="_blank"><i class="fab fa-dribbble"></i></a>` : ''}
                    ${member.social.behance ? `<a href="${member.social.behance}" target="_blank"><i class="fab fa-behance"></i></a>` : ''}
                    ${member.social.stackoverflow ? `<a href="${member.social.stackoverflow}" target="_blank"><i class="fab fa-stack-overflow"></i></a>` : ''}
                </div>
                <div class="fun-fact">
                    <i class="fas fa-star"></i> ${member.funFact}
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('memberContainer');
    teamMembers.forEach(member => {
        container.innerHTML += createMemberCard(member);
    });
});
