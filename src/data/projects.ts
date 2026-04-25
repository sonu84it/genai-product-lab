export type Project = {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  appLink: string;
  youtubeLink: string;
  githubLink: string;
  meta: string[];
  tags: string[];
  status?: 'live' | 'in-lab';
};

export const projects: Project[] = [
  {
    id: 'aurelium',
    name: 'Aurelium',
    description:
      'Premium AI jewellery virtual try-on app for luxury diamonds, gold, rings, earrings, nose pins, and necklaces.',
    imagePath: 'projects/aurelium.jpg',
    appLink: 'https://aurelium-7a5iku44ka-uc.a.run.app/',
    youtubeLink: 'https://www.youtube.com/watch?v=9EWT1rFiLi0',
    githubLink: 'https://github.com/sonu84it/aurelium-premium-tryon',
    meta: ['STACK: REACT', 'MODEL: GEMINI', 'LAB: LUXURY TRY-ON'],
    tags: ['AI Image', 'Vertex AI', 'Luxury', 'MVP'],
  },
  {
    id: 'justtap-onetap',
    name: 'JustTap / OneTap AI',
    description:
      'One-tap AI image styling app that transforms uploaded photos into modern, futuristic, trending, or classic styles.',
    imagePath: 'projects/justtap.jpg',
    appLink: 'https://onetap-ai.uc.r.appspot.com',
    youtubeLink: 'https://www.youtube.com/watch?v=2lPiU9FFz9k',
    githubLink: 'https://github.com/sonu84it/justtap',
    meta: ['STACK: REACT', 'MODEL: IMAGE AI', 'FLOW: ONE TAP'],
    tags: ['AI Image', 'MVP', 'Prototype'],
  },
  {
    id: 'ai-matchmaking',
    name: 'AI Matchmaking',
    description:
      'No-prompt AI matchmaking concept that generates a visually compatible AI partner based on a single uploaded photo.',
    imagePath: 'projects/matchmaking.jpg',
    appLink: 'https://pairmuse-ai-87673859392.us-central1.run.app/',
    youtubeLink: 'https://youtu.be/m2xo9iH5a4M',
    githubLink: 'https://github.com/sonu84it/matchmaker',
    meta: ['STACK: REACT', 'MODEL: GEMINI', 'MODE: NO PROMPT'],
    tags: ['Gemini', 'Prototype', 'AI Image'],
  },
  {
    id: 'kids-ai-makeover',
    name: 'Kids AI Makeover App',
    description:
      'Playful AI makeover app that transforms kids photos into imaginative, age-friendly themed looks and creative portrait styles.',
    imagePath: 'projects/kids-ai-makeover.jpg',
    appLink: 'https://magictap-kids-web-ip4xa64adq-uc.a.run.app/',
    youtubeLink: 'https://www.youtube.com/watch?v=hIirE-VW2Tc&list=PLCVLnTFC7grViDDHGD7Xds41vp8uWVeK_',
    githubLink: 'https://github.com/sonu84it/kids-ai-makeover-app',
    meta: ['STACK: REACT', 'MODEL: GEMINI', 'AUDIENCE: KIDS'],
    tags: ['AI Image', 'Gemini', 'MVP', 'Prototype'],
  },
  {
    id: 'styletap-ai',
    name: 'StyleTap AI',
    description:
      'Tap-first AI styling experience for generating polished fashion, beauty, and visual identity concepts from simple inputs.',
    imagePath: 'projects/styletap-ai.jpg',
    appLink: 'https://styletap-ai-wgduqibulq-uc.a.run.app',
    youtubeLink: 'https://www.youtube.com/@AIAgentArt/videos',
    githubLink: 'https://github.com/sonu84it/StyleTap-AI',
    meta: ['STACK: REACT', 'MODEL: GEMINI', 'STATUS: LIVE'],
    tags: ['AI Image', 'Gemini', 'MVP', 'Prototype'],
  },
];
