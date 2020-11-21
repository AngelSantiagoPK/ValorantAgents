import { Ability } from './ability';

export const PHEONIX_ABILITIES: Ability[] = [
  {
    name: 'Hot Hands',
    description:
      'Throw a fireball that explodes after a short delay on impact with the ground. The fire zone damages enemies, but heals Pheonix.',
    keyPress: 'E',
    agentName: 'Phoenix',
  },
  {
    name: 'Blaze',
    description:
      'Cast a flame wall that blocks enemy vision and damages anyone passing through it.',
    keyPress: 'C',
    agentName: 'Phoenix',
  },
  {
    name: 'Curveball',
    description:
      'Cast a curved flare that bursts into a light after short delay, temporarily blinding anyone and can be curved left and right.',
    keyPress: 'Q',
    agentName: 'Phoenix',
  },
  {
    name: 'Run It Back',
    description:
      "Marks your current location. If you die while this ability is active, or when it expires, you'll respawn at the marked location with full health.",
    keyPress: 'X',
    agentName: 'Phoenix',
  },
];

export const RAZE_ABILITIES: Ability[] = [
  {
    name: 'Paint Shells',
    description:
      'Cluster grenade that deals initial impact damage, followed by damage from the clusters.',
    keyPress: 'E',
    agentName: 'Raze',
  },
  {
    name: 'Boom Bot',
    description:
      'Set down an explosive robot that goes in a straight line, bouncing off of walls until it detects an enemy in front of it. It will then home in and detonate on them unless shot.',
    keyPress: 'C',
    agentName: 'Raze',
  },
  {
    name: 'Blast Pack',
    description:
      'Like a C4 satchel. Throw it down and either detonate it when you want or let the time run down. Deals AoE damage and displaces Agents.',
    keyPress: 'Q',
    agentName: 'Raze',
  },
  {
    name: 'Showstopper',
    description:
      "Pull out a rocket launcher and fire down a lane. The explosion deals huge damage to anyone in its radius. We've seen aces with a single shot from this.",
    keyPress: 'X',
    agentName: 'Raze',
  },
];

export const BRIMSTONE_ABILITIES: Ability[] = [
  {
    name: 'Sky Smoke',
    description:
      'Use your map to call in smokescreens that obscure vision, click to set the locations, and confirm to launch.',
    keyPress: 'E',
    agentName: 'Brimstone',
  },
  {
    name: 'Stim Beacon',
    description:
      'Target a nearby location to call in the beacon, giving all players near the beacon rapid-fire.',
    keyPress: 'C',
    agentName: 'Brimstone',
  },
  {
    name: 'Icendiary',
    description: 'Launch a grenade that deploys a damaging field of fire.',
    keyPress: 'Q',
    agentName: 'Brimstone',
  },
  {
    name: 'Orbital Strike',
    description:
      'Target a nearby location, launch a devastating orbital strike that damages enemies for several seconds.',
    keyPress: 'X',
    agentName: 'Brimstone',
  },
];

export const JETT_ABILITIES: Ability[] = [
  {
    name: 'Tailwind',
    description:
      'Dash a short distance. Use movement keys to choose direction.',
    keyPress: 'E',
    agentName: 'Jett',
  },
  {
    name: 'Cloudburst',
    description: 'Throw a cloud of fog that obscures vision on impact.',
    keyPress: 'C',
    agentName: 'Jett',
  },
  {
    name: 'Updraft',
    description: 'Launch upwards after a brief delay.',
    keyPress: 'Q',
    agentName: 'Jett',
  },
  {
    name: 'Blade Storm',
    description:
      'Throw deadly throwing knives that deal damage and kill on headshots. A kill restores daggers, left click throws a single dagger and right click throws all remaining daggers.',
    keyPress: 'X',
    agentName: 'Jett',
  },
];

export const SAGE_ABILITIES: Ability[] = [
  {
    name: 'Healing Orb',
    description: 'Heal an ally or yourself over a few seconds.',
    keyPress: 'E',
    agentName: 'Sage',
  },
  {
    name: 'Barrier Orb',
    description: 'A wall that can be rotated.',
    keyPress: 'C',
    agentName: 'Sage',
  },
  {
    name: 'Slow Orb',
    description:
      'An orb that breaks into a slowing field on impact with the ground, all caught in the field are slowed, grounded, and make a noise when moving.',
    keyPress: 'Q',
    agentName: 'Sage',
  },
  {
    name: 'Resurrection',
    description:
      'Target a friendly corpse, after a short delay revive them with full health.',
    keyPress: 'X',
    agentName: 'Sage',
  },
];

export const VIPER_ABILITIES: Ability[] = [
  {
    name: 'Toxic Screen',
    description:
      'Deploy a line of gas that can be reactivated to create a wall of toxic gas which costs fuel.',
    keyPress: 'E',
    agentName: 'Viper',
  },
  {
    name: 'Snakebite',
    description:
      'Fire a projectile that explodes into a pool of acid that does damage.',
    keyPress: 'C',
    agentName: 'Viper',
  },
  {
    name: 'Poison Cloud',
    description:
      'Throw a cloud of gas that can be reactivated to create a smoke cloud which costs fuel. This can be redeployed after cooldown.',
    keyPress: 'Q',
    agentName: 'Viper',
  },
  {
    name: "Viper's Pit",
    description:
      'A toxic cloud covers a large radius and highlights enemies to Viper, the duration of the cloud extends if Viper remains in the cloud.',
    keyPress: 'X',
    agentName: 'Viper',
  },
];

export const BREACH_ABILITIES: Ability[] = [
  {
    name: 'Fault Line',
    description:
      'Equip a seismic blast, hold fire to increase the distance, and release to set off a quake that dazes all players caught in it.',
    keyPress: 'E',
    agentName: 'Breach',
  },
  {
    name: 'Aftershock',
    description:
      'Equip a Fusion Charge and fire it to send a slow-firing burst through a wal, which deals high damage to anyone it connects with. More handy for clearing corners than actually getting frags.',
    keyPress: 'C',
    agentName: 'Breach',
  },
  {
    name: 'Flashpoint',
    description:
      'Equip a blinding charge that can be set on a wall. It fires a fast burst that blinds anyone on the other side.',
    keyPress: 'Q',
    agentName: 'Breach',
  },
  {
    name: 'Rolling Thunder',
    description:
      "Equip a seismic charge, fire to send a quake through all terrain in the ult's cone of effect. This dazes and knocks anyone caught in its blast into the air. It also deals some damage.",
    keyPress: 'X',
    agentName: 'Breach',
  },
];

export const CYPHER_ABILITIES: Ability[] = [
  {
    name: 'Spycam',
    description:
      'Place a remote camera, once placed reactivate to view the video feed. Left click while the camera is activated to fire a tracking dart.',
    keyPress: 'E',
    agentName: 'Cypher',
  },
  {
    name: 'Trapwire',
    description:
      "Place a tripwire between two walls, triggered enemies are restrained and revealed for a short time. If the trap hasn't been destroyed, it activates to daze the trapped victim.",
    keyPress: 'C',
    agentName: 'Cypher',
  },
  {
    name: 'Cyber Cage',
    description:
      'Place a remote activation trap, reactivate to create a cage that pings enemies who pass through it. Traps can be detonated.',
    keyPress: 'Q',
    agentName: 'Cypher',
  },
  {
    name: 'Neural Theft',
    description:
      'Once an enemy is killed, information can be extracted of the locations of their living allies.',
    keyPress: 'X',
    agentName: 'Cypher',
  },
];

export const SOVA_ABILITIES: Ability[] = [
  {
    name: 'Recon Dart',
    description:
      'Fire a bolt that deploys a sonar emitter and tags nearby eneimes, revealing them.',
    keyPress: 'E',
    agentName: 'Sova',
  },
  {
    name: 'Owl Drone',
    description:
      "Deploy and control a drone that reveals enemies around the map. Once active you can fire a tracking dart that reveals one enemy's location until they remove it.",
    keyPress: 'C',
    agentName: 'Sova',
  },
  {
    name: 'Shock Dart',
    description:
      'Fire an explosive bolt that damages enemies on impact. Use it to clear out boxes and corners.',
    keyPress: 'Q',
    agentName: 'Sova',
  },
  {
    name: "Hunter's Fury",
    description:
      'Fire up to three energy blasts that spear across the entrire map and each hit enemy takes damages and is marked.',
    keyPress: 'X',
    agentName: 'Sova',
  },
];

export const OMEN_ABILITIES: Ability[] = [
  {
    name: 'Dark Cover',
    description:
      'Cast an orb that bursts into a sphere of shadow obscuring the final location. Can be charged to increase distance.',
    keyPress: 'E',
    agentName: 'Omen',
  },
  {
    name: 'Shrouded Step',
    description: 'After a delay, teleport a short distance.',
    keyPress: 'C',
    agentName: 'Omen',
  },
  {
    name: 'Paranoia',
    description:
      'Cast a shadow in a straight line that blinds anyone it touches.',
    keyPress: 'Q',
    agentName: 'Omen',
  },
  {
    name: 'From the Shadows',
    description:
      'Select anywhere on the map to teleport and reform, will initially appear as a shadow, which can be killed by enemies and cancel the teleport. If teleport is successful, you become invisible for a short time.',
    keyPress: 'X',
    agentName: 'Omen',
  },
];

export const REYNA_ABILITIES: Ability[] = [
  {
    name: 'Dismiss',
    description:
      'Consumes a nearby soul orb, becoming intangible for a short duration. If your ultimate is active, also become invisible.',
    keyPress: 'E',
    agentName: 'Reyna',
  },
  {
    name: 'Leer',
    description:
      'Throw an eye through surfaces. The eye will blind all enemies who look at it - only affects distant vision.',
    keyPress: 'C',
    agentName: 'Reyna',
  },
  {
    name: 'Devour',
    description:
      'Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. Consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If your ultimate is active, this skill will automatically cast and not consume the orb.',
    keyPress: 'Q',
    agentName: 'Reyna',
  },
  {
    name: 'Empress',
    description:
      'Enter a frenzy, increasing firing speed, equip, and reload speed dramatically. Scoring a kill renewss the duration.',
    keyPress: 'X',
    agentName: 'Reyna',
  },
];

export const SKYE_ABILITIES: Ability[] = [
  {
    name: 'Guiding Light',
    description:
      'Equip a hawk trinket. Fire to send it forward. Hold fire to guide the hawk in the direction of your crosshair. Re-use while the hawk is in flight to transform it into a flash.',
    keyPress: 'E',
    agentName: 'Skye',
  },
  {
    name: 'Regrowth',
    description:
      'Equip a healing trinket. Hold fire to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.',
    keyPress: 'C',
    agentName: 'Skye',
  },
  {
    name: 'Trailblazer',
    description:
      'Equip a Tasmanian tiger trinket. Fire to send out and take control of the predator. While in contorl, fire to leap forward, exploding in a concussive blast and damaging directly hit enemies.',
    keyPress: 'Q',
    agentName: 'Skye',
  },
  {
    name: 'Seekers',
    description:
      'Equip a seeker trinket. Fire to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.',
    keyPress: 'X',
    agentName: 'Skye',
  },
];

export const KILLJOY_ABILITIES: Ability[] = [
  {
    name: 'Turret',
    description:
      'Fire deploys a turret that fires at enemis in a 180 degree cone. Can be recalled once deployed.',
    keyPress: 'E',
    agentName: 'Killjoy',
  },
  {
    name: 'Alarmbot',
    description:
      'Deploy a bot that hunts down enemies in range and explodes, applying vulnerable. Can be recalled once deployed.',
    keyPress: 'C',
    agentName: 'Killjoy',
  },
  {
    name: 'Nanoswarm',
    description:
      'Throw a grenade that lands and goes covert, activating the grenade deploys a swarm of damaging nanobots.',
    keyPress: 'Q',
    agentName: 'Killjoy',
  },
  {
    name: 'Lockdown',
    description:
      'Fire to deploy a device, after a long windup, the device detains all enemies caught in the radius, and can be destroyed by enemies.',
    keyPress: 'X',
    agentName: 'Killjoy',
  },
];

export const ABILITIES: Ability[] = [
  ...BREACH_ABILITIES,
  ...BRIMSTONE_ABILITIES,
  ...CYPHER_ABILITIES,
  ...JETT_ABILITIES,
  ...KILLJOY_ABILITIES,
  ...OMEN_ABILITIES,
  ...PHEONIX_ABILITIES,
  ...RAZE_ABILITIES,
  ...REYNA_ABILITIES,
  ...SAGE_ABILITIES,
  ...SKYE_ABILITIES,
  ...SOVA_ABILITIES,
  ...VIPER_ABILITIES,
];
