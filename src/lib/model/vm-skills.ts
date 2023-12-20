export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export interface VMSkills {
  categories: SkillCategory[];
  preamble: string;
}