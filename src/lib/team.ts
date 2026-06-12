export type TeamMember = {
  name: string;
  role: string;
  image: string;
  portfolio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Lokesh Yadav",
    role: "Design & Engineering",
    image: "/images/loki.png",
    portfolio: "https://lok1.dev",
  },
  {
    name: "Ganesh Mangla",
    role: "Engineering",
    image: "/images/ganesh.jpg",
    portfolio: "https://ganesh-mangla-portfolio.vercel.app/",
  },
];
