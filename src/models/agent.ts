import { Ability } from './ability';
import { Role } from './role';

export interface Agent {
    name: string;
    role: Role;
    abilities: Ability[];
    characterIcon: string;
}