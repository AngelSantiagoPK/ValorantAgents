import { Agent } from './agent';
import { CONTROLLER, DUELIST, INITIATOR, SENTINEL } from './roles';
import { ABILITIES } from './abilities';
import { BIOS } from './bios';

export const AGENTS: Agent[] = [
  {
    id: 1,
    name: 'Brimstone',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Brimstone'),
    characterIcon: './assets/agent-photos/Brimstone.png',
    bio: BIOS[0]
  },
  {
    id: 2,
    name: 'Phoenix',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Phoenix'),
    characterIcon: './assets/agent-photos/Phoenix.png',
    bio: BIOS[0]
  },
  {
    id: 3,
    name: 'Sage',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Sage'),
    characterIcon: './assets/agent-photos/Sage.png',
    bio: BIOS[0]
  },
  {
    id: 4,
    name: 'Sova',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Sova'),
    characterIcon: './assets/agent-photos/Sova.png',
    bio: BIOS[0]
  },
  {
    id: 5,
    name: 'Viper',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Viper'),
    characterIcon: './assets/agent-photos/Viper.png',
    bio: BIOS[0]
  },
  {
    id: 6,
    name: 'Cypher',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Cypher'),
    characterIcon: './assets/agent-photos/Cypher.png',
    bio: BIOS[0]
  },
  {
    id: 7,
    name: 'Reyna',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Reyna'),
    characterIcon: './assets/agent-photos/Reyna.png',
    bio: BIOS[0]
  },
  {
    id: 8,
    name: 'Killjoy',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Killjoy'),
    characterIcon: './assets/agent-photos/Killjoy.png',
    bio: BIOS[0]
  },
  {
    id: 9,
    name: 'Breach',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Breach'),
    characterIcon: './assets/agent-photos/Breach.png',
    bio: BIOS[0]
  },
  {
    id: 10,
    name: 'Omen',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Omen'),
    characterIcon: './assets/agent-photos/Omen.png',
    bio: BIOS[0]
  },
  {
    id: 11,
    name: 'Jett',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Jett'),
    characterIcon: './assets/agent-photos/Jett.png',
    bio: BIOS[0]
  },
  {
    id: 12,
    name: 'Raze',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Raze'),
    characterIcon: './assets/agent-photos/Raze.png',
    bio: BIOS[0]
  },
  {
    id: 13,
    name: 'Skye',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Skye'),
    characterIcon: './assets/agent-photos/Skye.png',
    bio: BIOS[0]
  },
];
