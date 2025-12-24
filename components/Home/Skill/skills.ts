export type Skill = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
};

export const skills: Skill[] = [
  {
    id: "01",
    title: "Creativity",
    description:
      "Stunning, one-of-a-kind digital design that captures attention without compromising technical load times or security",
    imgUrl: "/home/skill/bento3.webp",
  },
  {
    id: "02",
    title: "Verification",
    description:
      "Every solution is built on verifiable code and logic-driven standards. We deliver transparent, intuitive experiences that build irrefutable user confidence",
    imgUrl: "/home/skill/creative-web-design.webp",
  },
  {
    id: "03",
    title: "Growth",
    description:
      "Solutions built to drive specific metrics and conversions, giving you a measurable, logic-driven advantage over the competition.",
    imgUrl: "/home/skill/back-end.webp",
  },
];
