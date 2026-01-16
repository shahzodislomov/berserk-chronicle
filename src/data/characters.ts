import gutsImage from "@/assets/characters/guts.png";
import griffithImage from "@/assets/characters/griffith.png";
import cascaImage from "@/assets/characters/casca.png";
import skullKnightImage from "@/assets/characters/skull-knight.png";
import farneseImage from "@/assets/characters/farnese.png";
import serpicoImage from "@/assets/characters/serpico.png";

export interface CharacterStats {
  strength: number;
  speed: number;
  endurance: number;
  skill: number;
  intelligence: number;
}

export interface Character {
  id: string;
  name: string;
  title: string;
  alias: string[];
  description: string;
  fullBio: string;
  image: string;
  color: string;
  affiliation: string;
  status: string;
  weapon: string;
  abilities: string[];
  stats: CharacterStats;
  quotes: string[];
  relationships: { name: string; relation: string }[];
  firstAppearance: string;
  voiceActor: { japanese: string; english: string };
}

export const characters: Character[] = [
  {
    id: "guts",
    name: "GUTS",
    title: "The Black Swordsman",
    alias: ["Hundred Man Slayer", "The Branded Swordsman", "The Struggler"],
    description:
      "A former mercenary and branded wanderer, Guts wields the massive Dragon Slayer sword. Driven by vengeance and haunted by demons, he walks the path of blood and steel alone.",
    fullBio:
      "Born from the corpse of his hanged mother beneath a gallows tree, Guts' life has been defined by struggle and survival. Raised as a child soldier by the mercenary Gambino, he learned the ways of combat before he could walk properly. After killing Gambino in self-defense, Guts wandered as a lone mercenary until his fateful encounter with Griffith and the Band of the Hawk. The Eclipse—a demonic ceremony where Griffith sacrificed the Band to become Femto—left Guts branded, marking him as prey for demons. Now he hunts apostles with the Dragon Slayer, a sword so massive and heavy that it has been bathed in so much demonic blood it can harm astral beings.",
    image: gutsImage,
    color: "hsl(0, 0%, 20%)",
    affiliation: "Band of the Hawk (Former), Guts' Traveling Party",
    status: "Alive",
    weapon: "Dragon Slayer, Cannon Arm, Repeater Crossbow",
    abilities: [
      "Superhuman Strength",
      "Master Swordsmanship",
      "Berserker Armor",
      "Indomitable Will",
      "Combat Genius",
    ],
    stats: { strength: 98, speed: 75, endurance: 95, skill: 92, intelligence: 70 },
    quotes: [
      "If you're always worried about crushing the ants beneath you, you won't be able to walk.",
      "My sword has gotten very dull. However, it's three times as thick and does three times the damage of a normal sword.",
      "I'll not... abandon what I've chosen to protect.",
    ],
    relationships: [
      { name: "Casca", relation: "Lover" },
      { name: "Griffith", relation: "Former Comrade / Nemesis" },
      { name: "Puck", relation: "Companion" },
      { name: "Skull Knight", relation: "Ally" },
    ],
    firstAppearance: "Volume 1, Chapter 1",
    voiceActor: { japanese: "Hiroaki Iwanaga", english: "Marc Diraison" },
  },
  {
    id: "griffith",
    name: "GRIFFITH",
    title: "The White Hawk",
    alias: ["Femto", "The Falcon of Light", "The Absolute"],
    description:
      "Once the charismatic leader of the Band of the Hawk, Griffith's ambition knew no bounds. His dream of ruling his own kingdom led him to make the ultimate sacrifice.",
    fullBio:
      "Griffith was born a commoner but possessed an otherworldly beauty and charisma that drew others to him. He founded the Band of the Hawk and led them to countless victories, earning the admiration of nobles and the love of his soldiers. His ultimate goal was to obtain his own kingdom, a dream he held since childhood. When that dream was shattered after a year of imprisonment and torture, Griffith activated the Crimson Behelit during the Eclipse, sacrificing the entire Band of the Hawk to be reborn as Femto, the fifth member of the God Hand. Now in human form once again, he has established the utopian city of Falconia as the savior of mankind.",
    image: griffithImage,
    color: "hsl(220, 30%, 90%)",
    affiliation: "Band of the Hawk, God Hand",
    status: "Alive (as Femto/Reincarnated)",
    weapon: "Saber, God Hand Powers",
    abilities: [
      "Reality Manipulation",
      "Telekinesis",
      "Flight",
      "Master Strategist",
      "Absolute Charisma",
    ],
    stats: { strength: 65, speed: 85, endurance: 60, skill: 95, intelligence: 100 },
    quotes: [
      "A dream... It's something you do for yourself, not for others.",
      "In this world, is the destiny of mankind controlled by some transcendental entity or law? Is it like the hand of God hovering above?",
      "I will get my own kingdom.",
    ],
    relationships: [
      { name: "Guts", relation: "Former Comrade / Obsession" },
      { name: "Casca", relation: "Former Subordinate" },
      { name: "Charlotte", relation: "Queen Consort" },
      { name: "God Hand", relation: "Fellow Member" },
    ],
    firstAppearance: "Volume 3, Chapter 1",
    voiceActor: { japanese: "Takahiro Sakurai", english: "Kevin T. Collins" },
  },
  {
    id: "casca",
    name: "CASCA",
    title: "Commander of the Hawks",
    alias: ["The Female Falcon", "Elaine"],
    description:
      "A skilled warrior and the only female member of the Band of the Hawk's raiders. Her devotion to Griffith was absolute, until fate tore everything apart.",
    fullBio:
      "Casca was born a peasant and was nearly sold into slavery as a child before being saved by Griffith. This moment of salvation bound her heart to him forever. She rose through the ranks to become the Band of the Hawk's most capable commander after Griffith himself. Her relationship with Guts began as rivalry but evolved into deep love. During the Eclipse, she witnessed horrors beyond comprehension and was violated by Femto, causing her mind to shatter. For years she existed in a childlike state, until the power of the Flower Storm Monarch restored her memories—and with them, the unbearable trauma of what she endured.",
    image: cascaImage,
    color: "hsl(30, 50%, 40%)",
    affiliation: "Band of the Hawk (Former), Guts' Traveling Party",
    status: "Alive",
    weapon: "Sword, Combat Training",
    abilities: [
      "Expert Swordsmanship",
      "Military Leadership",
      "Tactical Acumen",
      "Horseback Combat",
    ],
    stats: { strength: 70, speed: 80, endurance: 75, skill: 88, intelligence: 82 },
    quotes: [
      "If you meet God, tell him to leave me alone.",
      "I am a warrior! I refuse to be treated as anything less!",
      "Even if we painstakingly piece together something lost, it doesn't mean things will go back to the way they were.",
    ],
    relationships: [
      { name: "Guts", relation: "Lover" },
      { name: "Griffith", relation: "Former Commander / Trauma" },
      { name: "Farnese", relation: "Caretaker / Friend" },
    ],
    firstAppearance: "Volume 4, Chapter 1",
    voiceActor: { japanese: "Toa Yukinari", english: "Carrie Keranen" },
  },
  {
    id: "skull-knight",
    name: "SKULL KNIGHT",
    title: "The Undying",
    alias: ["King of the Gallows", "He Who Opposes the Flow of Causality"],
    description:
      "An enigmatic warrior who has fought against the God Hand for over a thousand years. His origins remain shrouded in mystery, but his power is undeniable.",
    fullBio:
      "The Skull Knight is an ancient being who has existed for at least a millennium, predating even the current cycle of God Hand members. It is strongly implied that he was once King Gaiseric, the legendary conqueror who united the continent a thousand years ago before his empire fell in a single night. He wields the Sword of Beherits, a blade forged from the skulls of Beherits, capable of cutting through dimensions. The Skull Knight opposes the God Hand and the Idea of Evil, often appearing to save Guts at crucial moments. His ultimate goal and the full extent of his powers remain mysterious.",
    image: skullKnightImage,
    color: "hsl(220, 50%, 50%)",
    affiliation: "None (Opposes God Hand)",
    status: "Undead",
    weapon: "Sword of Beherits, Sword of Thorns",
    abilities: [
      "Dimensional Cutting",
      "Immortality",
      "Prophetic Knowledge",
      "Superhuman Abilities",
      "Astral Travel",
    ],
    stats: { strength: 95, speed: 90, endurance: 100, skill: 98, intelligence: 95 },
    quotes: [
      "Struggle, endure, contend. For that alone is the sword of one who defies death.",
      "You may be able to keep death at bay, but know this: that girl can never be yours again.",
      "What you wish for may not be what she wishes for.",
    ],
    relationships: [
      { name: "Guts", relation: "Ally / Warns" },
      { name: "Flora", relation: "Old Friend" },
      { name: "Void", relation: "Nemesis" },
    ],
    firstAppearance: "Volume 9, Chapter 1",
    voiceActor: { japanese: "Tsutomu Isobe", english: "Jamieson Price" },
  },
  {
    id: "farnese",
    name: "FARNESE",
    title: "Noble of the Holy See",
    alias: ["Lady Farnese", "Commander of the Holy Iron Chain Knights"],
    description:
      "Once a commander of the Holy Iron Chain Knights, Farnese abandoned her fanatical faith to follow Guts, seeking true meaning in a world of darkness.",
    fullBio:
      "Born as the daughter of the wealthy Vandimion family, Farnese was neglected by her parents and developed a twisted fascination with fire and pain. She found purpose in the Holy See as commander of the Holy Iron Chain Knights, using religious fervor to mask her inner emptiness. After encountering Guts and witnessing true supernatural horrors, her faith shattered. She chose to follow Guts' party, becoming Casca's primary caretaker. Under the tutelage of the witch Schierke, Farnese has begun learning magic, using her silver dagger as a focus for protective spells. She has grown from a sheltered zealot into a brave and compassionate woman.",
    image: farneseImage,
    color: "hsl(45, 70%, 60%)",
    affiliation: "Holy Iron Chain Knights (Former), Guts' Traveling Party",
    status: "Alive",
    weapon: "Silver Dagger (Magical Focus)",
    abilities: [
      "Protective Magic",
      "Spirit Channeling",
      "Noble Education",
      "Horseback Riding",
    ],
    stats: { strength: 40, speed: 55, endurance: 50, skill: 45, intelligence: 78 },
    quotes: [
      "I have nothing. I am hollow... So I want to be filled with something. Anything.",
      "I'm tired of just watching. I want to help!",
      "Even if I cannot fight like you, I can still protect what matters.",
    ],
    relationships: [
      { name: "Serpico", relation: "Half-Brother / Protector" },
      { name: "Casca", relation: "Caretaker / Friend" },
      { name: "Schierke", relation: "Magic Teacher" },
      { name: "Guts", relation: "Ally / Admiration" },
    ],
    firstAppearance: "Volume 16, Chapter 1",
    voiceActor: { japanese: "Yuko Miyamura", english: "Rachael Lillis" },
  },
  {
    id: "serpico",
    name: "SERPICO",
    title: "The Wind Knight",
    alias: ["Sylph Swordsman", "Farnese's Shadow"],
    description:
      "A calm and calculating swordsman devoted to protecting Farnese. His exceptional speed and cunning make him one of the most dangerous fighters alive.",
    fullBio:
      "Serpico is the illegitimate son of the Vandimion patriarch, making him Farnese's half-brother. Raised as a servant, he dedicated his life to protecting Farnese after she saved him from being burned as a witch's child. His composed demeanor masks a razor-sharp mind and lethal combat skills. Though initially hostile toward Guts—viewing him as a threat to Farnese—Serpico eventually became a trusted ally. He wields the Sylph Sword and Sylph Cloak, artifacts imbued with wind spirits that grant him supernatural speed and the ability to create cutting gusts. His fighting style emphasizes precision, evasion, and exploiting opponent weaknesses.",
    image: serpicoImage,
    color: "hsl(120, 40%, 35%)",
    affiliation: "Vandimion Family (Former), Guts' Traveling Party",
    status: "Alive",
    weapon: "Sylph Sword, Sylph Cloak",
    abilities: [
      "Wind Spirit Manipulation",
      "Superhuman Speed",
      "Master Fencer",
      "Tactical Analysis",
      "Stealth",
    ],
    stats: { strength: 60, speed: 95, endurance: 65, skill: 90, intelligence: 88 },
    quotes: [
      "I've always preferred brains over brawn.",
      "I will protect Lady Farnese. That is my purpose.",
      "You're strong. Too strong. That makes you dangerous.",
    ],
    relationships: [
      { name: "Farnese", relation: "Half-Sister / Protected" },
      { name: "Guts", relation: "Rival → Ally" },
      { name: "Schierke", relation: "Comrade" },
    ],
    firstAppearance: "Volume 16, Chapter 1",
    voiceActor: { japanese: "Kazuyuki Okitsu", english: "Bill Timoney" },
  },
];

// Story arcs data
export interface StoryArc {
  id: string;
  name: string;
  japaneseTitle: string;
  volumes: string;
  chapters: string;
  description: string;
  keyEvents: string[];
  status: "completed" | "ongoing";
}

export const storyArcs: StoryArc[] = [
  {
    id: "black-swordsman",
    name: "Black Swordsman Arc",
    japaneseTitle: "黒い剣士編",
    volumes: "1-3",
    chapters: "1-16",
    description: "The story begins in medias res, introducing Guts as the mysterious Black Swordsman hunting demons called Apostles.",
    keyEvents: [
      "Guts defeats the apostle known as the Baron of Koka Castle",
      "Introduction of Puck the elf",
      "First glimpse of the Brand of Sacrifice",
      "Guts' confrontation with the Count",
    ],
    status: "completed",
  },
  {
    id: "golden-age",
    name: "Golden Age Arc",
    japaneseTitle: "黄金時代編",
    volumes: "3-14",
    chapters: "17-94",
    description: "A flashback arc revealing Guts' past with the Band of the Hawk and the events leading to the Eclipse.",
    keyEvents: [
      "Guts joins the Band of the Hawk",
      "The Hundred-Year War battles",
      "Guts and Casca's relationship develops",
      "Griffith's imprisonment and rescue",
      "The Eclipse - the Band is sacrificed",
    ],
    status: "completed",
  },
  {
    id: "conviction",
    name: "Conviction Arc",
    japaneseTitle: "断罪編",
    volumes: "14-21",
    chapters: "95-176",
    description: "Guts protects Casca while the Holy See conducts an Inquisition, leading to the manifestation of a false Hawk.",
    keyEvents: [
      "Introduction of Farnese and the Holy Iron Chain Knights",
      "The Tower of Conviction events",
      "Birth of the Demon Child",
      "Mozgus and the Inquisition",
      "Griffith's physical reincarnation",
    ],
    status: "completed",
  },
  {
    id: "falcon-of-millennium",
    name: "Falcon of the Millennium Empire Arc",
    japaneseTitle: "千年帝国の鷹編",
    volumes: "22-35",
    chapters: "177-307",
    description: "Guts gathers new companions and seeks the elf island of Skellig while Griffith builds his new Band of the Hawk.",
    keyEvents: [
      "Formation of Guts' new party",
      "Introduction of Schierke and Flora",
      "Guts obtains the Berserker Armor",
      "The World Transformation",
      "Establishment of Falconia",
    ],
    status: "completed",
  },
  {
    id: "fantasia",
    name: "Fantasia Arc",
    japaneseTitle: "幻造世界編",
    volumes: "35-41",
    chapters: "308-364",
    description: "The party finally reaches Skellig and attempts to restore Casca's mind in the newly merged physical and astral worlds.",
    keyEvents: [
      "Arrival at Skellig Island",
      "Meeting the Flower Storm Monarch",
      "Casca's mind is restored",
      "Guts confronts Griffith at the Hill of Swords",
      "The final battle approaches",
    ],
    status: "ongoing",
  },
];

// Lore entries
export interface LoreEntry {
  id: string;
  title: string;
  category: "world" | "beings" | "artifacts" | "events";
  description: string;
  details: string;
}

export const loreEntries: LoreEntry[] = [
  {
    id: "god-hand",
    title: "The God Hand",
    category: "beings",
    description: "The five angelic demons who serve the Idea of Evil",
    details: "The God Hand are transcendental beings of immense power who exist in the deepest layer of the Astral World. They appear during the Eclipse ceremony to grant the wish of a chosen human who has activated a Beherit. The current members are Void, Slan, Ubik, Conrad, and Femto (Griffith). They manipulate causality itself to achieve their ends.",
  },
  {
    id: "beherit",
    title: "Beherit",
    category: "artifacts",
    description: "Egg-shaped stones that summon the God Hand",
    details: "Beherits are mysterious egg-shaped objects with scrambled human facial features. When the owner reaches their lowest point of despair, the features rearrange into a face and the Beherit activates, summoning the God Hand. The crimson Beherit, or 'Egg of the King', is destined for one who will become a member of the God Hand.",
  },
  {
    id: "brand-of-sacrifice",
    title: "Brand of Sacrifice",
    category: "events",
    description: "The mark placed on those offered to the God Hand",
    details: "The Brand of Sacrifice is a mark placed on those designated as offerings during the Eclipse. It marks the branded as prey for evil spirits and demons, who are drawn to the brand especially during the night. Guts and Casca are the only known survivors to bear the Brand, making them eternal targets of the supernatural.",
  },
  {
    id: "eclipse",
    title: "The Eclipse",
    category: "events",
    description: "The demonic ceremony where apostles are born",
    details: "The Eclipse is a ceremony that occurs once every 216 years when the five members of the God Hand align. During this event, a Beherit owner can sacrifice those closest to them to become an Apostle or, with the crimson Beherit, join the God Hand. The Eclipse that birthed Femto saw the massacre of the entire Band of the Hawk.",
  },
  {
    id: "astral-world",
    title: "The Astral World",
    category: "world",
    description: "The realm of spirits, demons, and gods",
    details: "The Astral World exists alongside the physical world, separated by a thin barrier. It contains all manner of supernatural beings, from benevolent spirits to malevolent demons. The World Transformation caused by Femto merged the two worlds, allowing magical creatures to exist openly in the physical realm.",
  },
  {
    id: "berserker-armor",
    title: "Berserker Armor",
    category: "artifacts",
    description: "Cursed armor that removes all limiters on its wearer",
    details: "The Berserker Armor is an ancient, cursed suit of armor created by dwarves. It suppresses the wearer's pain and fear, allowing them to fight beyond human limits. However, it can cause the user to lose themselves to a beast of darkness, and the body accumulates severe damage without the user's knowledge. Its previous owner was the Skull Knight.",
  },
  {
    id: "falconia",
    title: "Falconia",
    category: "world",
    description: "Griffith's utopian city, the last haven for humanity",
    details: "Falconia is the magnificent capital city established by Griffith after the World Transformation. Protected by the new Band of the Hawk and the apostles, it stands as humanity's last bastion against the monsters that now roam the merged world. Its citizens worship Griffith as a messianic figure, unaware of his true nature.",
  },
  {
    id: "idea-of-evil",
    title: "The Idea of Evil",
    category: "beings",
    description: "The entity that governs the God Hand",
    details: "The Idea of Evil is a mysterious entity dwelling in the Abyss, born from humanity's collective unconscious need to explain suffering. It manipulates causality and fate, guiding chosen individuals toward their destiny. The God Hand serve as its agents, and it may have orchestrated every significant event in the world's history.",
  },
];
