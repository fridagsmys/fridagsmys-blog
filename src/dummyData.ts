interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  createdAt: string;
  image: string;
}

const dummyBlogData: BlogPost[] = [
  {
    id: 1,
    title: "Introduktion till mitt projekt",
    summary:
      "I detta inlägg kommer jag att ge en översikt av mitt fullstack-projekt och vilka teknologier jag använder.",
    content:
      "Detta är det första inlägget i min blogg. Här kommer jag att dokumentera mina framsteg, utmaningar och lärdomar under utvecklingen av mitt fullstack-projekt. Jag använder React för frontend, Node.js för backend och PostgreSQL för datalagring.",
    author: "Frida",
    createdAt: "2025-01-15T10:00:00Z",
    image:
      "https://res.cloudinary.com/doz1igebk/image/upload/v1699979355/otpekhuwhm5f7w3szpwx.jpg",
  },
  {
    id: 2,
    title: "Arbeta med PostgreSQL och Node.js",
    summary:
      "En inblick i hur jag arbetar med PostgreSQL och integrerar det med min Node.js-backend.",
    content:
      "I detta inlägg diskuterar jag hur jag har satt upp PostgreSQL-databasen för mitt projekt och hur jag använder Sequelize för att hantera databasanslutningen i Node.js. Jag kommer också att täcka några vanliga problem jag stötte på och hur jag löste dem.",
    author: "Frida",
    createdAt: "2025-01-16T14:30:00Z",
    image:
      "https://res.cloudinary.com/doz1igebk/image/upload/v1699979355/otpekhuwhm5f7w3szpwx.jpg",
  },
  {
    id: 3,
    title: "Styling med DaisyUI och TailwindCSS",
    summary:
      "Hur jag använder DaisyUI och TailwindCSS för att skapa en responsiv och användarvänlig design.",
    content:
      "I detta inlägg beskriver jag hur jag integrerade DaisyUI och TailwindCSS i mitt projekt för att snabbt skapa vackra och användarvänliga gränssnitt. Jag delar också tips och tricks för att effektivt använda dessa verktyg.",
    author: "Frida",
    createdAt: "2025-01-17T09:00:00Z",
    image:
      "https://res.cloudinary.com/doz1igebk/image/upload/v1699979355/otpekhuwhm5f7w3szpwx.jpg",
  },
  {
    id: 4,
    title: "Utmaningar med autentisering i Node.js",
    summary:
      "En genomgång av hur jag implementerade autentisering i mitt projekt och hur jag löste säkerhetsproblem.",
    content:
      "I detta inlägg diskuterar jag hur jag implementerade användarautentisering i min backend med hjälp av JSON Web Tokens (JWT). Jag går också igenom hur jag hanterade vanliga säkerhetsproblem som CSRF och brute force-attacker.",
    author: "Frida",
    createdAt: "2025-01-18T11:45:00Z",
    image:
      "https://res.cloudinary.com/doz1igebk/image/upload/v1699979355/otpekhuwhm5f7w3szpwx.jpg",
  },
  {
    id: 5,
    title: "Deploya en fullstack-applikation",
    summary:
      "Mina erfarenheter och lärdomar från att deploya mitt fullstack-projekt till molnet.",
    content:
      "Detta inlägg handlar om hur jag deployade mitt projekt till en molntjänst. Jag valde att använda Vercel för frontend och Render för backend. Jag delar också några utmaningar jag stötte på, såsom att hantera miljövariabler och säkerställa att min databas var korrekt konfigurerad.",
    author: "Frida",
    createdAt: "2025-01-19T08:20:00Z",
    image:
      "https://res.cloudinary.com/doz1igebk/image/upload/v1699979355/otpekhuwhm5f7w3szpwx.jpg",
  },
  {
    id: 6,
    title: "Bygga en portfolio med React",
    summary:
      "Hur jag skapade en personlig portfolio med React och varför det är viktigt för utvecklare.",
    content:
      "I detta inlägg delar jag processen bakom att bygga min egen portfolio med React och TailwindCSS. Jag diskuterar också vikten av att ha en portfolio för att visa upp sina färdigheter och projekt för potentiella arbetsgivare.",
    author: "Frida",
    createdAt: "2025-01-20T13:00:00Z",
    image:
      "https://res.cloudinary.com/doz1igebk/image/upload/v1699979355/otpekhuwhm5f7w3szpwx.jpg",
  },
];

export default dummyBlogData;
