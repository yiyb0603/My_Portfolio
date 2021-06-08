import { ProjectTypes } from 'lib/enum/ProjectEnum';

export interface IProject {
  id?: number;
  name?: string;
  type?: string[];
  stacks?: string[];
  period?: string;
  member?: ProjectTypes;
  introduction?: string;
  description?: string;
  thumbnail?: string;
  gallery?: string[];
  role?: string;
  feel?: string;
  link?: string;
}