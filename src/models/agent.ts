import { Ability } from './ability';
import { Role } from './role';
import { Bio } from './bio'

export interface Agent {
  id: number;
  name: string;
  role: Role;
  abilities: Ability[];
  characterIcon: string;
  bio: Bio;
}
