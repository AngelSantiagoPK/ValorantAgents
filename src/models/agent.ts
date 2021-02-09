import { Ability } from './ability';
import { Bio } from './bio';
import { Role } from './role';
import { Video } from './video';

export interface Agent {
  id: number;
  name: string;
  role: Role;
  abilities: Ability[];
  characterIcon: string;
  bio: Bio;
  videos?: Video[];
}
