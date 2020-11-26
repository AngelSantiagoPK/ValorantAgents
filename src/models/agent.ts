import { Ability } from './ability';
import { Role } from './role';

export interface Agent {
  id?: number;
  name: string;
  role: Role;
  abilities: Ability[];
  characterIcon: string;
  bio?: string;
}
