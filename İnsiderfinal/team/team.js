
const teamMembers = [
    {
        name: "Semih Boyacıoğlu",
        title: "Frontend Geliştirici",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500",
        bio: "5 yıllık deneyimi ile modern web teknolojilerinde uzmanlaşmış frontend geliştiricisi.",
        skills: ["React", "Vue.js", "TypeScript", "CSS3"],
        social: {
            github: "https://github.com/ahmet",
            linkedin: "https://linkedin.com/in/ahmet",
            twitter: "https://twitter.com/ahmet"
        },
        funFact: "Boş zamanlarında sokak fotoğrafçılığı yapıyor."
    },
    {
        name: "Kerem Mahmut Coşkun",
        title: "UI/UX Tasarımcısı",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
        bio: "Kullanıcı deneyimini ön planda tutan, yaratıcı tasarım çözümleri üreten deneyimli tasarımcı.",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
        social: {
            dribbble: "https://dribbble.com/ayse",
            linkedin: "https://linkedin.com/in/ayse",
            behance: "https://behance.net/ayse"
        },
        funFact: "3D modelleme yapıyor."
    },
    {
        name: "Yusuf Kurt",
        title: "Backend Geliştirici",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
        bio: "Ölçeklenebilir backend sistemleri geliştiren, veritabanı optimizasyonu konusunda uzman.",
        skills: ["Node.js", "Python", "MongoDB", "AWS"],
        social: {
            github: "https://github.com/mehmet",
            linkedin: "https://linkedin.com/in/mehmet",
            stackoverflow: "https://stackoverflow.com/users/mehmet"
        },
        funFact: "Amatör astronomi gözlemcisi."
    },
    {
        name: "Ecrin Nur Tabir",
        title: "Mobil Uygulama Geliştirici",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
        bio: "iOS ve Android platformlarında 3 yıllık deneyime sahip, kullanıcı dostu mobil uygulamalar geliştiren yazılımcı.",
        skills: ["Swift", "Kotlin", "Flutter", "Firebase"],
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
