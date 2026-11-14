export type ResearchProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url: string;
};

export const researchProjects: ResearchProject[] = [
  {
    id: 'culture-clash-machine-translation',
    title: 'Culture Clash in Machine Translation: Tackling Language-Specific, Sociocultural Determined Terms',
    description:
      'Master’s research project to evaluate and improve machine translation accuracy, including lexical gaps, cultural diversity, and socioculturally determined terms. It studies LLMs and semantic evaluation on a set of short sentences that present distinct translation challenges.',
    technologies: ['Machine Translation', 'NLP', 'LLMs', 'Semantic Evaluation'],
    url: 'https://www.linkedin.com/in/salamalkaissi/details/projects/edit/forms/2091051771/',
  },
  {
    id: 'cooperative-decentralized-algorithms',
    title: 'Design and Implementation of Multi-Agent System to Study Cooperative Decentralized Algorithms',
    description:
      'Bachelor’s graduation project designing three autonomous robots, each with its own controller, actuators, and sensors. The robots cooperated on a task using decentralized algorithms, including POMDP and reinforcement-learning approaches for localization, and communicated over Wi-Fi.',
    technologies: ['C++', 'Python', 'Lua', 'POMDP / Reinforcement Learning', 'Wi-Fi'],
    url: 'https://www.linkedin.com/in/salamalkaissi/details/projects/edit/forms/1042373705/',
  },
];
