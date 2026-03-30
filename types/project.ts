// Design Ref: §4 — 프로젝트 타입 정의
export type ProjectType = "web-app" | "slide" | "open-source";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
}
