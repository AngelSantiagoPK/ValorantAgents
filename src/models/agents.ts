import { Agent } from './agent';
import { CONTROLLER, DUELIST, INITIATOR, SENTINEL } from './roles';
import { ABILITIES } from './abilities';

export const AGENTS: Agent[] = [
  {
    id: 1,
    name: 'Brimstone',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Brimstone'),
    characterIcon: './assets/agent-photos/Brimstone.png',
  },
  {
    id: 2,
    name: 'Phoenix',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Phoenix'),
    characterIcon: './assets/agent-photos/Phoenix.png',
  },
  {
    id: 3,
    name: 'Sage',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Sage'),
    characterIcon: './assets/agent-photos/Sage.png',
  },
  {
    id: 4,
    name: 'Sova',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Sova'),
    characterIcon: './assets/agent-photos/Sova.png',
  },
  {
    id: 5,
    name: 'Viper',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Viper'),
    characterIcon: './assets/agent-photos/Viper.png',
  },
  {
    id: 6,
    name: 'Cypher',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Cypher'),
    characterIcon: './assets/agent-photos/Cypher.png',
  },
  {
    id: 7,
    name: 'Reyna',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Reyna'),
    characterIcon: './assets/agent-photos/Reyna.png',
  },
  {
    id: 8,
    name: 'Killjoy',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Killjoy'),
    characterIcon: './assets/agent-photos/Killjoy.png',
  },
  {
    id: 9,
    name: 'Breach',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Breach'),
    characterIcon: './assets/agent-photos/Breach.png',
  },
  {
    id: 10,
    name: 'Omen',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Omen'),
    characterIcon: './assets/agent-photos/Omen.png',
  },
  {
    id: 11,
    name: 'Jett',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Jett'),
    characterIcon: './assets/agent-photos/Jett.png',
  },
  {
    id: 12,
    name: 'Raze',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Raze'),
    characterIcon: './assets/agent-photos/Raze.png',
  },
  {
    id: 13,
    name: 'Skye',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Skye'),
    characterIcon: './assets/agent-photos/Skye.png',
  },
];
