import { Agent } from './agent';
import { CONTROLLER, DUELIST, INITIATOR, SENTINEL } from './roles';
import { BREACH_ABILITIES, BRIMSTONE_ABILITIES, CYPHER_ABILITIES, JETT_ABILITIES, KILLJOY_ABILITIES, OMEN_ABILITIES, PHEONIX_ABILITIES, RAZE_ABILITIES, REYNA_ABILITIES, SAGE_ABILITIES, SKYE_ABILITIES, SOVA_ABILITIES, VIPER_ABILITIES } from './abilities';

export const AGENTS: Agent[] = [
    {name: 'Sage', role: SENTINEL, abilities: SAGE_ABILITIES, characterIcon: './assets/agent-photos/Sage.png'},
    {name: 'Killjoy', role: SENTINEL, abilities: KILLJOY_ABILITIES, characterIcon: './assets/agent-photos/Killjoy.png'},
    {name: 'Cypher', role: SENTINEL, abilities: CYPHER_ABILITIES, characterIcon: './assets/agent-photos/Cypher.png'},
    {name: 'Omen', role: CONTROLLER, abilities: OMEN_ABILITIES, characterIcon: './assets/agent-photos/Omen.png'},
    {name: 'Viper', role: CONTROLLER, abilities: VIPER_ABILITIES, characterIcon: './assets/agent-photos/Viper.png'},
    {name: 'Brimstone', role: CONTROLLER, abilities: BRIMSTONE_ABILITIES, characterIcon: './assets/agent-photos/Brimstone.png'},
    {name: 'Pheonix', role: DUELIST, abilities: PHEONIX_ABILITIES, characterIcon: './assets/agent-photos/Pheonix.png'},
    {name: 'Raze', role: DUELIST, abilities: RAZE_ABILITIES, characterIcon: './assets/agent-photos/Raze.png'},
    {name: 'Jett', role: DUELIST, abilities: JETT_ABILITIES, characterIcon: './assets/agent-photos/Jett.png'},
    {name: 'Reyna', role: DUELIST, abilities: REYNA_ABILITIES, characterIcon: './assets/agent-photos/Reyna.png'},
    {name: 'Sova', role: INITIATOR, abilities: SOVA_ABILITIES, characterIcon: './assets/agent-photos/Sova.png'},
    {name: 'Breach', role: INITIATOR, abilities: BREACH_ABILITIES, characterIcon: './assets/agent-photos/Breach.png'},
    {name: 'Skye', role: INITIATOR, abilities: SKYE_ABILITIES, characterIcon: './assets/agent-photos/Skye.png'}
]