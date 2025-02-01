export interface IProject {
  projectId: number;
  name: string;
  concept: string;
  github: string;
  page: string | null;
  date: string;
  isTeamProject: boolean;
  role: string | null;
  description: string;
  tech: Array<string>;
}

export type Skill = {
  skillId: number;
  name: string;
  projects: number[];
  isCommon: boolean;
};

export type SkillCategories = {
  language: Skill[];
  devops: Skill[];
  backend: Skill[];
  frontend: Skill[];
};
