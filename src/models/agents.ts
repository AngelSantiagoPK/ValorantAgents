import { Agent } from './agent';
import { CONTROLLER, DUELIST, INITIATOR, SENTINEL } from './roles';
import { ABILITIES } from './abilities';

export const AGENTS: Agent[] = [
  {
    name: 'Sage',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Sage'),
    characterIcon: './assets/agent-photos/Sage.png',
  },
  {
    name: 'Killjoy',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Killjoy'),
    characterIcon: './assets/agent-photos/Killjoy.png',
  },
  {
    name: 'Cypher',
    role: SENTINEL,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Cypher'),
    characterIcon: './assets/agent-photos/Cypher.png',
  },
  {
    name: 'Omen',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Omen'),
    characterIcon: './assets/agent-photos/Omen.png',
  },
  {
    name: 'Viper',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Viper'),
    characterIcon: './assets/agent-photos/Viper.png',
  },
  {
    name: 'Brimstone',
    role: CONTROLLER,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Brimstone'),
    characterIcon: './assets/agent-photos/Brimstone.png',
  },
  {
    name: 'Pheonix',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Pheonix'),
    characterIcon: './assets/agent-photos/Pheonix.png',
  },
  {
    name: 'Raze',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Raze'),
    characterIcon: './assets/agent-photos/Raze.png',
  },
  {
    name: 'Jett',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Jett'),
    characterIcon: './assets/agent-photos/Jett.png',
  },
  {
    name: 'Reyna',
    role: DUELIST,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Reyna'),
    characterIcon: './assets/agent-photos/Reyna.png',
  },
  {
    name: 'Sova',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Sova'),
    characterIcon: './assets/agent-photos/Sova.png',
  },
  {
    name: 'Breach',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Breach'),
    characterIcon: './assets/agent-photos/Breach.png',
  },
  {
    name: 'Skye',
    role: INITIATOR,
    abilities: ABILITIES.filter((ability) => ability.agentName === 'Skye'),
    characterIcon: './assets/agent-photos/Skye.png',
  },
];
