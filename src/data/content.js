export const skills = [
  {
    name: 'JavaScript',
    description: {
      en: 'Proficient in modern JavaScript development with extensive experience in ES6+ features.',
      tr: 'Modern JavaScript geliştirmede uzman, ES6+ özelliklerinde kapsamlı deneyim.'
    }
  },
  {
    name: 'React.js',
    description: {
      en: 'Experienced in building scalable applications with React and its ecosystem.',
      tr: 'React ve ekosistemi ile ölçeklenebilir uygulamalar geliştirme konusunda deneyimli.'
    }
  },
  {
    name: 'Node.js',
    description: {
      en: 'Strong background in server-side development with Node.js and Express.',
      tr: 'Node.js ve Express ile sunucu tarafı geliştirmede güçlü altyapı.'
    }
  }
];

export const profile = {
  birthDate: '04.10.1990',
  birthPlace: {
    en: 'Izmir',
    tr: 'İzmir'
  },
  education: {
    en: 'Abant Izzet Baysal University | International Relationships',
    tr: 'Abanat İzzet Baysal Üniversitesi |Uluslararası İlişkiler'
  },
  workExperience: {
    en: 'Full-stack Developer (2024-Present)',
    tr: 'Full-stack Developer (2018-Günümüz)'
  },
  about: {
    en: [
      "I am a passionate developer with a love for creating efficient and scalable applications.",
      "I enjoy working with modern technologies and continuously learning new skills."
    ],
    tr: [
      "Verimli ve ölçeklenebilir uygulamalar oluşturmayı seven tutkulu bir geliştiriciyim.",
      "Modern teknolojilerle çalışmayı ve sürekli yeni beceriler öğrenmeyi seviyorum."
    ]
  }
};

export const sectionLabels = {
  en: {
    skills: 'Skills',
    profile: 'Profile',
    projects: 'Projects',
    aboutMe: 'About Me'
  },
  tr: {
    skills: 'Yetenekler',
    profile: 'Profil',
    projects: 'Projeler',
    aboutMe: 'Hakkımda'
  }
};

export const projects = [
  {
    id: 1,
    title: 'Workintech Pizza Project',
    description: {
      en: 'A food ordering website built with React and Node.js.',
      tr: 'React ve Node.js ile geliştirilmiş yemek sipariş sitesi.'
    },
    image: '../images/pizza-project-front.jpg',
    tags: ['React', 'Node', 'API'],
    demoUrl: 'https://s8-challamge-pizza-kemal.vercel.app/',
    githubUrl: 'https://github.com/KemalArasTosunlar/s8-challamge-pizza-kemal' 
  },
  {
    id: 2,
    title: 'Movie Database',
    description: {
      en: 'Allows users to add their favorite movies, delete them. Also added dark mode.',
      tr: 'Kullanıcılara favori filmlerini ekleme ve silme imkanı sunan bir proje. Dark mode özelliğide bulunmakta'
    },
    image: '../images/movie-database-2.jpg',
    tags: ['React', 'API', 'Axios'],
    demoUrl: 'https://movie-database-v3.vercel.app/movies',
    githubUrl: 'https://github.com/KemalArasTosunlar/movie-database-v3' 
  },
  {
    id: 3,
    title: 'WitFlix',
    description: {
      en: 'Netflix like movie streaming website. My very first clone website:)',
      tr: 'Netflix benzeri film izleme sitesi. İlk klon projem:)'
    },
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: '#',
    githubUrl: 'https://github.com/KemalArasTosunlar/witflix' 
  }
];
