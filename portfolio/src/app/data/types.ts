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
