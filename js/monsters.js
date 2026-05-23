const monsters = [
  {
    "name": "Vampire",
    "category": "Undead",
    "origin": "European folklore",
    "description": "A blood-drinking undead predator often linked to castles, coffins, night hunting, and aristocratic horror.",
    "strengths": "Immortality, hypnosis, supernatural speed, shapeshifting, night vision",
    "weaknesses": "Sunlight, wooden stakes, fire, holy symbols, invitation rules",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/vampire-1.jpg",
    "alt": "Vampire horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/vampire-1.jpg",
        "alt": "Vampire horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/vampire-2.jpg",
        "alt": "Vampire horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/vampire-3.jpg",
        "alt": "Vampire horror image placeholder 3"
      }
    ],
    "profileUrl": "monster-profiles/vampire.html"
  },
  {
    "name": "Werewolf",
    "category": "Shapeshifter",
    "origin": "European folklore",
    "description": "A cursed human who transforms into a wolf-like beast, usually under the full moon.",
    "strengths": "Brutal strength, speed, claws, tracking, rage-fueled attacks",
    "weaknesses": "Silver, wolfsbane, lunar cycle, loss of control",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/werewolf-1.jpg",
    "alt": "Werewolf horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/werewolf-1.jpg",
        "alt": "Werewolf horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/werewolf-2.jpg",
        "alt": "Werewolf horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/werewolf-3.jpg",
        "alt": "Werewolf horror image placeholder 3"
      }
    ],
    "profileUrl": "monster-profiles/werewolf.html"
  },
  {
    "name": "Zombie",
    "category": "Undead",
    "origin": "Haitian folklore / modern horror",
    "description": "A reanimated corpse or infected human driven by hunger and decay.",
    "strengths": "Endurance, numbers, fearlessness, infection spread",
    "weaknesses": "Head trauma, fire, slow movement, poor intelligence",
    "dangerLevel": "High",
    "image": "assets/images/monsters/zombie-1.jpg",
    "alt": "Zombie horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/zombie-1.jpg",
        "alt": "Zombie horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/zombie-2.jpg",
        "alt": "Zombie horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/zombie-3.jpg",
        "alt": "Zombie horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Ghost",
    "category": "Spirit",
    "origin": "Global folklore",
    "description": "The restless spirit of a dead person tied to a place, object, or unfinished event.",
    "strengths": "Intangibility, haunting, fear manipulation, possession",
    "weaknesses": "Exorcism, spiritual cleansing, resolving unfinished business",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/ghost-1.jpg",
    "alt": "Ghost horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/ghost-1.jpg",
        "alt": "Ghost horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/ghost-2.jpg",
        "alt": "Ghost horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/ghost-3.jpg",
        "alt": "Ghost horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Demon",
    "category": "Infernal Entity",
    "origin": "Religious demonology",
    "description": "A malevolent supernatural being associated with temptation, possession, corruption, and torment.",
    "strengths": "Possession, deception, supernatural force, curses",
    "weaknesses": "Exorcism, sacred objects, true names, rituals",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/demon-1.jpg",
    "alt": "Demon horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/demon-1.jpg",
        "alt": "Demon horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/demon-2.jpg",
        "alt": "Demon horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/demon-3.jpg",
        "alt": "Demon horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Witch",
    "category": "Human Occultist",
    "origin": "European folklore",
    "description": "A practitioner of dark magic, curses, potions, and forbidden rituals.",
    "strengths": "Spellcasting, curses, familiars, potion craft, divination",
    "weaknesses": "Fire, broken rituals, protective charms, loss of focus",
    "dangerLevel": "High",
    "image": "assets/images/monsters/witch-1.jpg",
    "alt": "Witch horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/witch-1.jpg",
        "alt": "Witch horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/witch-2.jpg",
        "alt": "Witch horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/witch-3.jpg",
        "alt": "Witch horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Wendigo",
    "category": "Cannibal Spirit",
    "origin": "Algonquian folklore",
    "description": "A hunger-driven spirit or monster associated with greed, winter, isolation, and cannibalism.",
    "strengths": "Endless hunger, mimicry, speed, cold resistance",
    "weaknesses": "Fire, spiritual rituals, starvation of its influence",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/wendigo-1.jpg",
    "alt": "Wendigo horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/wendigo-1.jpg",
        "alt": "Wendigo horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/wendigo-2.jpg",
        "alt": "Wendigo horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/wendigo-3.jpg",
        "alt": "Wendigo horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Banshee",
    "category": "Death Spirit",
    "origin": "Irish folklore",
    "description": "A female spirit whose scream is believed to warn of death.",
    "strengths": "Death omen, sonic scream, fear aura, invisibility",
    "weaknesses": "Iron, spiritual barriers, distance, silence rituals",
    "dangerLevel": "High",
    "image": "assets/images/monsters/banshee-1.jpg",
    "alt": "Banshee horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/banshee-1.jpg",
        "alt": "Banshee horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/banshee-2.jpg",
        "alt": "Banshee horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/banshee-3.jpg",
        "alt": "Banshee horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Mummy",
    "category": "Undead Guardian",
    "origin": "Ancient Egyptian horror",
    "description": "A preserved corpse awakened by curses, tomb desecration, or ancient magic.",
    "strengths": "Ancient curses, durability, strangling strength, sand control",
    "weaknesses": "Fire, broken curse, destroyed relics",
    "dangerLevel": "High",
    "image": "assets/images/monsters/mummy-1.jpg",
    "alt": "Mummy horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/mummy-1.jpg",
        "alt": "Mummy horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/mummy-2.jpg",
        "alt": "Mummy horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/mummy-3.jpg",
        "alt": "Mummy horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Ghoul",
    "category": "Corpse Eater",
    "origin": "Arabian folklore",
    "description": "A graveyard creature that feeds on corpses and lurks near tombs.",
    "strengths": "Claws, corpse mimicry, stealth, graveyard hunting",
    "weaknesses": "Sunlight, fire, decapitation",
    "dangerLevel": "High",
    "image": "assets/images/monsters/ghoul-1.jpg",
    "alt": "Ghoul horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/ghoul-1.jpg",
        "alt": "Ghoul horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/ghoul-2.jpg",
        "alt": "Ghoul horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/ghoul-3.jpg",
        "alt": "Ghoul horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Shadow Creature",
    "category": "Dark Entity",
    "origin": "Modern paranormal",
    "description": "A human-shaped darkness seen in corners, doorways, and sleep paralysis encounters.",
    "strengths": "Stealth, fear feeding, darkness blending, silent movement",
    "weaknesses": "Bright light, attention, spiritual protection",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/shadow-creature-1.jpg",
    "alt": "Shadow Creature horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/shadow-creature-1.jpg",
        "alt": "Shadow Creature horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/shadow-creature-2.jpg",
        "alt": "Shadow Creature horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/shadow-creature-3.jpg",
        "alt": "Shadow Creature horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Kraken",
    "category": "Sea Monster",
    "origin": "Norse seafaring legends",
    "description": "A colossal tentacled creature capable of dragging ships into the abyss.",
    "strengths": "Massive size, crushing tentacles, whirlpools",
    "weaknesses": "Harpoons, storms, shallow water, distance",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/kraken-1.jpg",
    "alt": "Kraken horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/kraken-1.jpg",
        "alt": "Kraken horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/kraken-2.jpg",
        "alt": "Kraken horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/kraken-3.jpg",
        "alt": "Kraken horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Siren",
    "category": "Luring Creature",
    "origin": "Greek mythology",
    "description": "A supernatural singer who draws victims toward destruction with irresistible songs.",
    "strengths": "Hypnotic voice, beauty illusion, water control",
    "weaknesses": "Ear protection, silence, willpower, distance",
    "dangerLevel": "High",
    "image": "assets/images/monsters/siren-1.jpg",
    "alt": "Siren horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/siren-1.jpg",
        "alt": "Siren horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/siren-2.jpg",
        "alt": "Siren horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/siren-3.jpg",
        "alt": "Siren horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Skinwalker",
    "category": "Shapeshifter",
    "origin": "Navajo-related legends",
    "description": "A feared shapeshifter associated with forbidden magic and animal forms.",
    "strengths": "Animal transformation, mimicry, stealth, curses",
    "weaknesses": "Cultural protections, recognition, breaking secrecy",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/skinwalker-1.jpg",
    "alt": "Skinwalker horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/skinwalker-1.jpg",
        "alt": "Skinwalker horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/skinwalker-2.jpg",
        "alt": "Skinwalker horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/skinwalker-3.jpg",
        "alt": "Skinwalker horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Poltergeist",
    "category": "Noisy Spirit",
    "origin": "Paranormal tradition",
    "description": "A disruptive spirit known for moving objects, knocking, and violent hauntings.",
    "strengths": "Telekinesis, noise attacks, object throwing",
    "weaknesses": "Cleansing, investigation, emotional calm",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/poltergeist-1.jpg",
    "alt": "Poltergeist horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/poltergeist-1.jpg",
        "alt": "Poltergeist horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/poltergeist-2.jpg",
        "alt": "Poltergeist horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/poltergeist-3.jpg",
        "alt": "Poltergeist horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Possessed Doll",
    "category": "Cursed Object",
    "origin": "Modern horror",
    "description": "A doll inhabited or influenced by a spirit, demon, or curse.",
    "strengths": "Deception, movement when unseen, psychological terror",
    "weaknesses": "Containment, burning, blessing, removal",
    "dangerLevel": "High",
    "image": "assets/images/monsters/possessed-doll-1.jpg",
    "alt": "Possessed Doll horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/possessed-doll-1.jpg",
        "alt": "Possessed Doll horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/possessed-doll-2.jpg",
        "alt": "Possessed Doll horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/possessed-doll-3.jpg",
        "alt": "Possessed Doll horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Grim Reaper",
    "category": "Death Figure",
    "origin": "European folklore",
    "description": "A skeletal figure carrying a scythe, symbolizing death's arrival.",
    "strengths": "Inevitable presence, fear aura, soul collection",
    "weaknesses": "Cannot be fought normally, bargaining myths vary",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/grim-reaper-1.jpg",
    "alt": "Grim Reaper horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/grim-reaper-1.jpg",
        "alt": "Grim Reaper horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/grim-reaper-2.jpg",
        "alt": "Grim Reaper horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/grim-reaper-3.jpg",
        "alt": "Grim Reaper horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Swamp Monster",
    "category": "Aquatic Beast",
    "origin": "Creature-feature horror",
    "description": "A humanoid or reptilian creature lurking in marshes, wetlands, and flooded ruins.",
    "strengths": "Camouflage, water ambush, claws, endurance",
    "weaknesses": "Dry land, fire, traps, bright lights",
    "dangerLevel": "High",
    "image": "assets/images/monsters/swamp-monster-1.jpg",
    "alt": "Swamp Monster horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/swamp-monster-1.jpg",
        "alt": "Swamp Monster horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/swamp-monster-2.jpg",
        "alt": "Swamp Monster horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/swamp-monster-3.jpg",
        "alt": "Swamp Monster horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Hellhound",
    "category": "Infernal Beast",
    "origin": "European folklore",
    "description": "A demonic black dog linked to death omens and the underworld.",
    "strengths": "Fire breath, tracking, speed, infernal bite",
    "weaknesses": "Holy symbols, silver, sacred ground",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/hellhound-1.jpg",
    "alt": "Hellhound horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/hellhound-1.jpg",
        "alt": "Hellhound horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/hellhound-2.jpg",
        "alt": "Hellhound horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/hellhound-3.jpg",
        "alt": "Hellhound horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Leviathan",
    "category": "Primordial Sea Beast",
    "origin": "Biblical / mythic tradition",
    "description": "A gigantic sea serpent or dragon representing chaos and oceanic terror.",
    "strengths": "Immense size, armor scales, tidal force",
    "weaknesses": "Divine weapons, containment, distance",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/leviathan-1.jpg",
    "alt": "Leviathan horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/leviathan-1.jpg",
        "alt": "Leviathan horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/leviathan-2.jpg",
        "alt": "Leviathan horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/leviathan-3.jpg",
        "alt": "Leviathan horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Chimera",
    "category": "Hybrid Beast",
    "origin": "Greek mythology",
    "description": "A fire-breathing hybrid of lion, goat, and serpent.",
    "strengths": "Fire breath, multiple attacks, hybrid resilience",
    "weaknesses": "Precision weapons, aerial advantage, internal weakness",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/chimera-1.jpg",
    "alt": "Chimera horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/chimera-1.jpg",
        "alt": "Chimera horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/chimera-2.jpg",
        "alt": "Chimera horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/chimera-3.jpg",
        "alt": "Chimera horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Minotaur",
    "category": "Labyrinth Beast",
    "origin": "Greek mythology",
    "description": "A bull-headed humanoid trapped within a maze.",
    "strengths": "Strength, charge attacks, maze knowledge",
    "weaknesses": "Traps, strategy, confined movement",
    "dangerLevel": "High",
    "image": "assets/images/monsters/minotaur-1.jpg",
    "alt": "Minotaur horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/minotaur-1.jpg",
        "alt": "Minotaur horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/minotaur-2.jpg",
        "alt": "Minotaur horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/minotaur-3.jpg",
        "alt": "Minotaur horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Medusa",
    "category": "Gorgon",
    "origin": "Greek mythology",
    "description": "A snake-haired monster whose gaze turns victims to stone.",
    "strengths": "Petrifying gaze, venomous snakes, terror",
    "weaknesses": "Mirrors, indirect sight, decapitation",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/medusa-1.jpg",
    "alt": "Medusa horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/medusa-1.jpg",
        "alt": "Medusa horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/medusa-2.jpg",
        "alt": "Medusa horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/medusa-3.jpg",
        "alt": "Medusa horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Harpy",
    "category": "Winged Monster",
    "origin": "Greek mythology",
    "description": "A predatory winged creature with a human-like face and bird body.",
    "strengths": "Flight, talons, shrieking attacks",
    "weaknesses": "Nets, arrows, confined spaces",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/harpy-1.jpg",
    "alt": "Harpy horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/harpy-1.jpg",
        "alt": "Harpy horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/harpy-2.jpg",
        "alt": "Harpy horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/harpy-3.jpg",
        "alt": "Harpy horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Cyclops",
    "category": "Giant",
    "origin": "Greek mythology",
    "description": "A one-eyed giant known for raw strength and primitive brutality.",
    "strengths": "Great strength, endurance, stone throwing",
    "weaknesses": "Single eye, slow movement, trickery",
    "dangerLevel": "High",
    "image": "assets/images/monsters/cyclops-1.jpg",
    "alt": "Cyclops horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/cyclops-1.jpg",
        "alt": "Cyclops horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/cyclops-2.jpg",
        "alt": "Cyclops horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/cyclops-3.jpg",
        "alt": "Cyclops horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Hydra",
    "category": "Multi-Headed Serpent",
    "origin": "Greek mythology",
    "description": "A serpent monster that grows new heads when one is cut off.",
    "strengths": "Regeneration, venom, multiple bites",
    "weaknesses": "Fire cauterization, coordinated attacks",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/hydra-1.jpg",
    "alt": "Hydra horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/hydra-1.jpg",
        "alt": "Hydra horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/hydra-2.jpg",
        "alt": "Hydra horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/hydra-3.jpg",
        "alt": "Hydra horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Gorgon",
    "category": "Cursed Monster",
    "origin": "Greek mythology",
    "description": "A terrifying female monster with serpentine features and a deadly gaze.",
    "strengths": "Stone gaze, venom, intimidation",
    "weaknesses": "Reflective surfaces, stealth, distance",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/gorgon-1.jpg",
    "alt": "Gorgon horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/gorgon-1.jpg",
        "alt": "Gorgon horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/gorgon-2.jpg",
        "alt": "Gorgon horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/gorgon-3.jpg",
        "alt": "Gorgon horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Cerberus",
    "category": "Underworld Guardian",
    "origin": "Greek mythology",
    "description": "A three-headed dog guarding the gates of the underworld.",
    "strengths": "Multiple heads, guardian instinct, supernatural strength",
    "weaknesses": "Music, sleep magic, divine authority",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/cerberus-1.jpg",
    "alt": "Cerberus horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/cerberus-1.jpg",
        "alt": "Cerberus horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/cerberus-2.jpg",
        "alt": "Cerberus horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/cerberus-3.jpg",
        "alt": "Cerberus horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Draugr",
    "category": "Norse Undead",
    "origin": "Norse folklore",
    "description": "A reanimated corpse that guards burial treasure and attacks intruders.",
    "strengths": "Super strength, corpse magic, fear aura",
    "weaknesses": "Decapitation, burning, proper burial rites",
    "dangerLevel": "High",
    "image": "assets/images/monsters/draugr-1.jpg",
    "alt": "Draugr horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/draugr-1.jpg",
        "alt": "Draugr horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/draugr-2.jpg",
        "alt": "Draugr horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/draugr-3.jpg",
        "alt": "Draugr horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Troll",
    "category": "Giant Humanoid",
    "origin": "Norse folklore",
    "description": "A large, dangerous creature often connected to mountains, caves, and bridges.",
    "strengths": "Strength, stone throwing, durability",
    "weaknesses": "Sunlight, trickery, bells in some tales",
    "dangerLevel": "High",
    "image": "assets/images/monsters/troll-1.jpg",
    "alt": "Troll horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/troll-1.jpg",
        "alt": "Troll horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/troll-2.jpg",
        "alt": "Troll horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/troll-3.jpg",
        "alt": "Troll horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Goblin",
    "category": "Trickster Creature",
    "origin": "European folklore",
    "description": "A small malicious creature known for theft, traps, and underground lairs.",
    "strengths": "Traps, numbers, stealth, cunning",
    "weaknesses": "Bright light, iron, poor discipline",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/goblin-1.jpg",
    "alt": "Goblin horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/goblin-1.jpg",
        "alt": "Goblin horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/goblin-2.jpg",
        "alt": "Goblin horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/goblin-3.jpg",
        "alt": "Goblin horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Orc",
    "category": "Brutal Humanoid",
    "origin": "Fantasy horror",
    "description": "A violent humanoid warrior associated with raids, darkness, and savage armies.",
    "strengths": "Strength, weapons, pack tactics",
    "weaknesses": "Poor planning, sunlight in some lore, fear of leaders",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/orc-1.jpg",
    "alt": "Orc horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/orc-1.jpg",
        "alt": "Orc horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/orc-2.jpg",
        "alt": "Orc horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/orc-3.jpg",
        "alt": "Orc horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Ogre",
    "category": "Man-Eating Giant",
    "origin": "European folklore",
    "description": "A large humanoid that devours humans and lives in remote places.",
    "strengths": "Size, strength, intimidation",
    "weaknesses": "Slow movement, trickery, traps",
    "dangerLevel": "High",
    "image": "assets/images/monsters/ogre-1.jpg",
    "alt": "Ogre horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/ogre-1.jpg",
        "alt": "Ogre horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/ogre-2.jpg",
        "alt": "Ogre horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/ogre-3.jpg",
        "alt": "Ogre horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Hag",
    "category": "Dark Crone",
    "origin": "European folklore",
    "description": "A witch-like creature associated with curses, nightmares, and bargains.",
    "strengths": "Curses, shapeshifting, dream invasion",
    "weaknesses": "Iron, broken bargains, daylight",
    "dangerLevel": "High",
    "image": "assets/images/monsters/hag-1.jpg",
    "alt": "Hag horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/hag-1.jpg",
        "alt": "Hag horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/hag-2.jpg",
        "alt": "Hag horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/hag-3.jpg",
        "alt": "Hag horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Doppelganger",
    "category": "Evil Double",
    "origin": "German folklore",
    "description": "A double of a living person, often seen as an omen or impersonator.",
    "strengths": "Mimicry, identity theft, deception",
    "weaknesses": "True memory tests, mirrors, exposure",
    "dangerLevel": "High",
    "image": "assets/images/monsters/doppelganger-1.jpg",
    "alt": "Doppelganger horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/doppelganger-1.jpg",
        "alt": "Doppelganger horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/doppelganger-2.jpg",
        "alt": "Doppelganger horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/doppelganger-3.jpg",
        "alt": "Doppelganger horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Incubus",
    "category": "Dream Demon",
    "origin": "Medieval demonology",
    "description": "A male demon associated with nightmares, seduction, and sleep attacks.",
    "strengths": "Dream invasion, charm, energy draining",
    "weaknesses": "Waking rituals, sacred symbols, protection charms",
    "dangerLevel": "High",
    "image": "assets/images/monsters/incubus-1.jpg",
    "alt": "Incubus horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/incubus-1.jpg",
        "alt": "Incubus horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/incubus-2.jpg",
        "alt": "Incubus horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/incubus-3.jpg",
        "alt": "Incubus horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Succubus",
    "category": "Dream Demon",
    "origin": "Medieval demonology",
    "description": "A female demon associated with seduction, nightmares, and spiritual draining.",
    "strengths": "Charm, illusion, dream control, energy feeding",
    "weaknesses": "Sacred symbols, resistance, banishing rituals",
    "dangerLevel": "High",
    "image": "assets/images/monsters/succubus-1.jpg",
    "alt": "Succubus horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/succubus-1.jpg",
        "alt": "Succubus horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/succubus-2.jpg",
        "alt": "Succubus horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/succubus-3.jpg",
        "alt": "Succubus horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Dybbuk",
    "category": "Possessing Spirit",
    "origin": "Jewish folklore",
    "description": "A restless spirit that clings to or possesses a living person.",
    "strengths": "Possession, voice manipulation, spiritual pressure",
    "weaknesses": "Exorcism, ritual names, religious authority",
    "dangerLevel": "High",
    "image": "assets/images/monsters/dybbuk-1.jpg",
    "alt": "Dybbuk horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/dybbuk-1.jpg",
        "alt": "Dybbuk horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/dybbuk-2.jpg",
        "alt": "Dybbuk horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/dybbuk-3.jpg",
        "alt": "Dybbuk horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Jinn",
    "category": "Spirit Being",
    "origin": "Arabian / Islamic tradition",
    "description": "A powerful spirit made of smokeless fire with free will.",
    "strengths": "Shapeshifting, invisibility, wishes, trickery",
    "weaknesses": "Iron, divine names, binding rituals",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/jinn-1.jpg",
    "alt": "Jinn horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/jinn-1.jpg",
        "alt": "Jinn horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/jinn-2.jpg",
        "alt": "Jinn horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/jinn-3.jpg",
        "alt": "Jinn horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Ifrit",
    "category": "Fire Jinn",
    "origin": "Arabian folklore",
    "description": "A powerful fiery spirit known for pride, vengeance, and destructive force.",
    "strengths": "Fire control, strength, flight, magic",
    "weaknesses": "Binding seals, water symbolism, sacred words",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/ifrit-1.jpg",
    "alt": "Ifrit horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/ifrit-1.jpg",
        "alt": "Ifrit horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/ifrit-2.jpg",
        "alt": "Ifrit horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/ifrit-3.jpg",
        "alt": "Ifrit horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Rakshasa",
    "category": "Demonic Shapeshifter",
    "origin": "Hindu mythology",
    "description": "A flesh-eating shapeshifter known for illusion and cruelty.",
    "strengths": "Illusions, shapeshifting, magic, strength",
    "weaknesses": "Divine weapons, mantras, exposure",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/rakshasa-1.jpg",
    "alt": "Rakshasa horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/rakshasa-1.jpg",
        "alt": "Rakshasa horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/rakshasa-2.jpg",
        "alt": "Rakshasa horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/rakshasa-3.jpg",
        "alt": "Rakshasa horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Aswang",
    "category": "Shapeshifting Monster",
    "origin": "Filipino folklore",
    "description": "A night creature that may appear as a vampire, witch, or flesh-eater.",
    "strengths": "Flight, shapeshifting, stealth, long tongue",
    "weaknesses": "Garlic, salt, sunlight, religious objects",
    "dangerLevel": "High",
    "image": "assets/images/monsters/aswang-1.jpg",
    "alt": "Aswang horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/aswang-1.jpg",
        "alt": "Aswang horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/aswang-2.jpg",
        "alt": "Aswang horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/aswang-3.jpg",
        "alt": "Aswang horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Manananggal",
    "category": "Severing Vampire",
    "origin": "Filipino folklore",
    "description": "A monster whose upper body detaches and flies at night to hunt.",
    "strengths": "Flight, long tongue, surprise attacks",
    "weaknesses": "Salt or ash on lower body, sunlight",
    "dangerLevel": "High",
    "image": "assets/images/monsters/manananggal-1.jpg",
    "alt": "Manananggal horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/manananggal-1.jpg",
        "alt": "Manananggal horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/manananggal-2.jpg",
        "alt": "Manananggal horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/manananggal-3.jpg",
        "alt": "Manananggal horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Tikbalang",
    "category": "Horse-Humanoid",
    "origin": "Filipino folklore",
    "description": "A tall horse-headed trickster that misleads travelers in forests.",
    "strengths": "Speed, illusion, disorientation",
    "weaknesses": "Wearing clothes inside out, respect rituals",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/tikbalang-1.jpg",
    "alt": "Tikbalang horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/tikbalang-1.jpg",
        "alt": "Tikbalang horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/tikbalang-2.jpg",
        "alt": "Tikbalang horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/tikbalang-3.jpg",
        "alt": "Tikbalang horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Pontianak",
    "category": "Vengeful Ghost",
    "origin": "Malay / Indonesian folklore",
    "description": "A female spirit linked to death, childbirth, and night attacks.",
    "strengths": "Flight, claws, shriek, deception",
    "weaknesses": "Nails, sharp objects, religious protection",
    "dangerLevel": "High",
    "image": "assets/images/monsters/pontianak-1.jpg",
    "alt": "Pontianak horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/pontianak-1.jpg",
        "alt": "Pontianak horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/pontianak-2.jpg",
        "alt": "Pontianak horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/pontianak-3.jpg",
        "alt": "Pontianak horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Kuntilanak",
    "category": "Female Ghost",
    "origin": "Indonesian folklore",
    "description": "A pale female spirit associated with trees, laughter, and revenge.",
    "strengths": "Haunting, fear, sudden attacks, mimicry",
    "weaknesses": "Prayers, sharp objects, leaving the area",
    "dangerLevel": "High",
    "image": "assets/images/monsters/kuntilanak-1.jpg",
    "alt": "Kuntilanak horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/kuntilanak-1.jpg",
        "alt": "Kuntilanak horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/kuntilanak-2.jpg",
        "alt": "Kuntilanak horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/kuntilanak-3.jpg",
        "alt": "Kuntilanak horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Jiangshi",
    "category": "Hopping Vampire",
    "origin": "Chinese folklore",
    "description": "A stiff reanimated corpse that drains life energy.",
    "strengths": "Qi draining, durability, night hunting",
    "weaknesses": "Taoist talismans, glutinous rice, sunlight",
    "dangerLevel": "High",
    "image": "assets/images/monsters/jiangshi-1.jpg",
    "alt": "Jiangshi horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/jiangshi-1.jpg",
        "alt": "Jiangshi horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/jiangshi-2.jpg",
        "alt": "Jiangshi horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/jiangshi-3.jpg",
        "alt": "Jiangshi horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Nian",
    "category": "Beast of New Year",
    "origin": "Chinese mythology",
    "description": "A monstrous beast driven away by red colors, fire, and loud sounds.",
    "strengths": "Strength, fear aura, annual raids",
    "weaknesses": "Red color, firecrackers, bright lights",
    "dangerLevel": "High",
    "image": "assets/images/monsters/nian-1.jpg",
    "alt": "Nian horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/nian-1.jpg",
        "alt": "Nian horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/nian-2.jpg",
        "alt": "Nian horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/nian-3.jpg",
        "alt": "Nian horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Kappa",
    "category": "Water Yokai",
    "origin": "Japanese folklore",
    "description": "A turtle-like river creature known for pulling victims underwater.",
    "strengths": "Water strength, wrestling, river ambush",
    "weaknesses": "Bowing, draining head water, cucumbers",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/kappa-1.jpg",
    "alt": "Kappa horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/kappa-1.jpg",
        "alt": "Kappa horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/kappa-2.jpg",
        "alt": "Kappa horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/kappa-3.jpg",
        "alt": "Kappa horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Oni",
    "category": "Demon Ogre",
    "origin": "Japanese folklore",
    "description": "A horned ogre-like demon carrying clubs and spreading terror.",
    "strengths": "Strength, iron club, intimidation",
    "weaknesses": "Protective charms, beans, divine force",
    "dangerLevel": "High",
    "image": "assets/images/monsters/oni-1.jpg",
    "alt": "Oni horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/oni-1.jpg",
        "alt": "Oni horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/oni-2.jpg",
        "alt": "Oni horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/oni-3.jpg",
        "alt": "Oni horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Yurei",
    "category": "Restless Ghost",
    "origin": "Japanese folklore",
    "description": "A ghost bound by grief, rage, or unfinished life events.",
    "strengths": "Haunting, curse, appearance manipulation",
    "weaknesses": "Rituals, closure, spiritual rites",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/yurei-1.jpg",
    "alt": "Yurei horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/yurei-1.jpg",
        "alt": "Yurei horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/yurei-2.jpg",
        "alt": "Yurei horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/yurei-3.jpg",
        "alt": "Yurei horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Tengu",
    "category": "Mountain Spirit",
    "origin": "Japanese folklore",
    "description": "A bird-like or long-nosed spirit, sometimes dangerous and proud.",
    "strengths": "Flight, martial skill, wind control",
    "weaknesses": "Humility, sacred boundaries, trickery",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/tengu-1.jpg",
    "alt": "Tengu horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/tengu-1.jpg",
        "alt": "Tengu horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/tengu-2.jpg",
        "alt": "Tengu horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/tengu-3.jpg",
        "alt": "Tengu horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Nure-onna",
    "category": "Snake Woman",
    "origin": "Japanese folklore",
    "description": "A serpent-bodied woman who lures victims near water.",
    "strengths": "Constriction, deception, aquatic ambush",
    "weaknesses": "Distance, blades, avoiding rivers at night",
    "dangerLevel": "High",
    "image": "assets/images/monsters/nure-onna-1.jpg",
    "alt": "Nure-onna horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/nure-onna-1.jpg",
        "alt": "Nure-onna horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/nure-onna-2.jpg",
        "alt": "Nure-onna horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/nure-onna-3.jpg",
        "alt": "Nure-onna horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Aka Manto",
    "category": "Urban Legend Spirit",
    "origin": "Japanese urban legend",
    "description": "A bathroom spirit that forces victims to choose between deadly options.",
    "strengths": "Teleportation, trap questions, fear control",
    "weaknesses": "Refusing choices, leaving quickly",
    "dangerLevel": "High",
    "image": "assets/images/monsters/aka-manto-1.jpg",
    "alt": "Aka Manto horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/aka-manto-1.jpg",
        "alt": "Aka Manto horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/aka-manto-2.jpg",
        "alt": "Aka Manto horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/aka-manto-3.jpg",
        "alt": "Aka Manto horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Slit-Mouthed Woman",
    "category": "Urban Legend Ghost",
    "origin": "Japanese urban legend",
    "description": "A masked woman who asks victims if she is beautiful before attacking.",
    "strengths": "Speed, scissors, psychological trap",
    "weaknesses": "Confusing answers, distraction, escape",
    "dangerLevel": "High",
    "image": "assets/images/monsters/slit-mouthed-woman-1.jpg",
    "alt": "Slit-Mouthed Woman horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/slit-mouthed-woman-1.jpg",
        "alt": "Slit-Mouthed Woman horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/slit-mouthed-woman-2.jpg",
        "alt": "Slit-Mouthed Woman horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/slit-mouthed-woman-3.jpg",
        "alt": "Slit-Mouthed Woman horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "La Llorona",
    "category": "Weeping Ghost",
    "origin": "Latin American folklore",
    "description": "A crying ghost who wanders near water searching for her children.",
    "strengths": "Luring cries, water haunting, grief aura",
    "weaknesses": "Prayer, distance from water, spiritual rites",
    "dangerLevel": "High",
    "image": "assets/images/monsters/la-llorona-1.jpg",
    "alt": "La Llorona horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/la-llorona-1.jpg",
        "alt": "La Llorona horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/la-llorona-2.jpg",
        "alt": "La Llorona horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/la-llorona-3.jpg",
        "alt": "La Llorona horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "El Chupacabra",
    "category": "Blood-Drinker",
    "origin": "Latin American cryptid lore",
    "description": "A creature said to drain livestock blood and stalk rural areas.",
    "strengths": "Blood draining, speed, stealth",
    "weaknesses": "Traps, weapons, daylight",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/el-chupacabra-1.jpg",
    "alt": "El Chupacabra horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/el-chupacabra-1.jpg",
        "alt": "El Chupacabra horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/el-chupacabra-2.jpg",
        "alt": "El Chupacabra horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/el-chupacabra-3.jpg",
        "alt": "El Chupacabra horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "El Silbon",
    "category": "Whistling Spirit",
    "origin": "Venezuelan / Colombian folklore",
    "description": "A cursed spirit whose whistle signals danger and death.",
    "strengths": "Omen whistle, stalking, curse aura",
    "weaknesses": "Dogs, chili peppers, protective rituals",
    "dangerLevel": "High",
    "image": "assets/images/monsters/el-silbon-1.jpg",
    "alt": "El Silbon horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/el-silbon-1.jpg",
        "alt": "El Silbon horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/el-silbon-2.jpg",
        "alt": "El Silbon horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/el-silbon-3.jpg",
        "alt": "El Silbon horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Mapinguari",
    "category": "Jungle Beast",
    "origin": "Amazonian folklore",
    "description": "A giant forest monster with a terrible smell and heavy hide.",
    "strengths": "Strength, thick hide, stench, forest camouflage",
    "weaknesses": "Eyes/mouth weak points, fire, distance",
    "dangerLevel": "High",
    "image": "assets/images/monsters/mapinguari-1.jpg",
    "alt": "Mapinguari horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/mapinguari-1.jpg",
        "alt": "Mapinguari horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/mapinguari-2.jpg",
        "alt": "Mapinguari horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/mapinguari-3.jpg",
        "alt": "Mapinguari horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Mothman",
    "category": "Winged Omen",
    "origin": "American cryptid lore",
    "description": "A red-eyed winged figure associated with disasters and eerie sightings.",
    "strengths": "Flight, omen presence, night vision",
    "weaknesses": "Avoidance, bright lights, unknown limits",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/mothman-1.jpg",
    "alt": "Mothman horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/mothman-1.jpg",
        "alt": "Mothman horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/mothman-2.jpg",
        "alt": "Mothman horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/mothman-3.jpg",
        "alt": "Mothman horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Bigfoot",
    "category": "Forest Cryptid",
    "origin": "North American folklore",
    "description": "A large hairy humanoid said to roam remote forests.",
    "strengths": "Strength, stealth, wilderness survival",
    "weaknesses": "Human traps, noise, exposure",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/bigfoot-1.jpg",
    "alt": "Bigfoot horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/bigfoot-1.jpg",
        "alt": "Bigfoot horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/bigfoot-2.jpg",
        "alt": "Bigfoot horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/bigfoot-3.jpg",
        "alt": "Bigfoot horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Jersey Devil",
    "category": "Winged Cryptid",
    "origin": "American folklore",
    "description": "A strange winged creature said to haunt the Pine Barrens.",
    "strengths": "Flight, hooves, scream, speed",
    "weaknesses": "Weapons, daylight, open terrain",
    "dangerLevel": "High",
    "image": "assets/images/monsters/jersey-devil-1.jpg",
    "alt": "Jersey Devil horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/jersey-devil-1.jpg",
        "alt": "Jersey Devil horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/jersey-devil-2.jpg",
        "alt": "Jersey Devil horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/jersey-devil-3.jpg",
        "alt": "Jersey Devil horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Goatman",
    "category": "Hybrid Cryptid",
    "origin": "American urban legend",
    "description": "A goat-like humanoid linked to bridges, forests, and violent attacks.",
    "strengths": "Strength, axe myths, intimidation",
    "weaknesses": "Distance, weapons, avoiding territory",
    "dangerLevel": "High",
    "image": "assets/images/monsters/goatman-1.jpg",
    "alt": "Goatman horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/goatman-1.jpg",
        "alt": "Goatman horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/goatman-2.jpg",
        "alt": "Goatman horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/goatman-3.jpg",
        "alt": "Goatman horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Bunyip",
    "category": "Water Monster",
    "origin": "Australian Aboriginal folklore",
    "description": "A mysterious creature said to inhabit swamps, rivers, and billabongs.",
    "strengths": "Aquatic ambush, roar, stealth",
    "weaknesses": "Dry land, fire, avoidance",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/bunyip-1.jpg",
    "alt": "Bunyip horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/bunyip-1.jpg",
        "alt": "Bunyip horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/bunyip-2.jpg",
        "alt": "Bunyip horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/bunyip-3.jpg",
        "alt": "Bunyip horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Yowie",
    "category": "Forest Cryptid",
    "origin": "Australian folklore",
    "description": "A large ape-like creature reported in the Australian wilderness.",
    "strengths": "Strength, stealth, endurance",
    "weaknesses": "Open areas, tracking teams, distance",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/yowie-1.jpg",
    "alt": "Yowie horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/yowie-1.jpg",
        "alt": "Yowie horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/yowie-2.jpg",
        "alt": "Yowie horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/yowie-3.jpg",
        "alt": "Yowie horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Drop Bear",
    "category": "Predatory Koala Myth",
    "origin": "Australian folklore parody",
    "description": "A fictional savage koala-like creature said to drop from trees.",
    "strengths": "Ambush from above, claws, surprise",
    "weaknesses": "Avoiding trees, protective myths",
    "dangerLevel": "Low",
    "image": "assets/images/monsters/drop-bear-1.jpg",
    "alt": "Drop Bear horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/drop-bear-1.jpg",
        "alt": "Drop Bear horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/drop-bear-2.jpg",
        "alt": "Drop Bear horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/drop-bear-3.jpg",
        "alt": "Drop Bear horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Loch Ness Monster",
    "category": "Lake Cryptid",
    "origin": "Scottish folklore",
    "description": "A large aquatic creature rumored to live in Loch Ness.",
    "strengths": "Aquatic stealth, size, mystery",
    "weaknesses": "Shallow water, sonar, distance",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/loch-ness-monster-1.jpg",
    "alt": "Loch Ness Monster horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/loch-ness-monster-1.jpg",
        "alt": "Loch Ness Monster horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/loch-ness-monster-2.jpg",
        "alt": "Loch Ness Monster horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/loch-ness-monster-3.jpg",
        "alt": "Loch Ness Monster horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Kelpie",
    "category": "Water Horse",
    "origin": "Scottish folklore",
    "description": "A shapeshifting water spirit that lures riders into drowning.",
    "strengths": "Shapeshifting, drowning grip, water control",
    "weaknesses": "Bridle removal, iron, staying away from water",
    "dangerLevel": "High",
    "image": "assets/images/monsters/kelpie-1.jpg",
    "alt": "Kelpie horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/kelpie-1.jpg",
        "alt": "Kelpie horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/kelpie-2.jpg",
        "alt": "Kelpie horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/kelpie-3.jpg",
        "alt": "Kelpie horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Redcap",
    "category": "Murderous Goblin",
    "origin": "Border folklore",
    "description": "A violent goblin said to dye its cap in victims' blood.",
    "strengths": "Speed, iron boots, savage attacks",
    "weaknesses": "Scripture, crosses, outlasting it",
    "dangerLevel": "High",
    "image": "assets/images/monsters/redcap-1.jpg",
    "alt": "Redcap horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/redcap-1.jpg",
        "alt": "Redcap horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/redcap-2.jpg",
        "alt": "Redcap horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/redcap-3.jpg",
        "alt": "Redcap horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Black Shuck",
    "category": "Death Hound",
    "origin": "English folklore",
    "description": "A ghostly black dog associated with storms, roads, and death omens.",
    "strengths": "Omen power, fear, spectral speed",
    "weaknesses": "Prayer, avoidance, sacred places",
    "dangerLevel": "High",
    "image": "assets/images/monsters/black-shuck-1.jpg",
    "alt": "Black Shuck horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/black-shuck-1.jpg",
        "alt": "Black Shuck horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/black-shuck-2.jpg",
        "alt": "Black Shuck horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/black-shuck-3.jpg",
        "alt": "Black Shuck horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Barghest",
    "category": "Spectral Dog",
    "origin": "Northern English folklore",
    "description": "A monstrous black dog that haunts lonely roads.",
    "strengths": "Shapeshifting, omen presence, stealth",
    "weaknesses": "Sacred protection, avoiding night roads",
    "dangerLevel": "High",
    "image": "assets/images/monsters/barghest-1.jpg",
    "alt": "Barghest horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/barghest-1.jpg",
        "alt": "Barghest horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/barghest-2.jpg",
        "alt": "Barghest horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/barghest-3.jpg",
        "alt": "Barghest horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Headless Horseman",
    "category": "Vengeful Rider",
    "origin": "European / American legend",
    "description": "A decapitated rider who hunts at night in search of a head.",
    "strengths": "Speed, fear, mounted pursuit",
    "weaknesses": "Crossing boundaries, daylight, trickery",
    "dangerLevel": "High",
    "image": "assets/images/monsters/headless-horseman-1.jpg",
    "alt": "Headless Horseman horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/headless-horseman-1.jpg",
        "alt": "Headless Horseman horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/headless-horseman-2.jpg",
        "alt": "Headless Horseman horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/headless-horseman-3.jpg",
        "alt": "Headless Horseman horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Boogeyman",
    "category": "Childhood Terror",
    "origin": "Global folklore",
    "description": "A shadowy fear figure used in cautionary tales.",
    "strengths": "Fear feeding, hiding, shapelessness",
    "weaknesses": "Light, courage, parental protection",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/boogeyman-1.jpg",
    "alt": "Boogeyman horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/boogeyman-1.jpg",
        "alt": "Boogeyman horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/boogeyman-2.jpg",
        "alt": "Boogeyman horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/boogeyman-3.jpg",
        "alt": "Boogeyman horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Creep",
    "category": "Stalker Entity",
    "origin": "Modern horror",
    "description": "A silent humanoid presence that watches from hallways, windows, or woods.",
    "strengths": "Stealth, patience, psychological terror",
    "weaknesses": "Locks, cameras, light, exposure",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/creep-1.jpg",
    "alt": "Creep horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/creep-1.jpg",
        "alt": "Creep horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/creep-2.jpg",
        "alt": "Creep horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/creep-3.jpg",
        "alt": "Creep horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "The Rake",
    "category": "Humanoid Creature",
    "origin": "Internet folklore",
    "description": "A pale crawling creature tied to nightmares and late-night encounters.",
    "strengths": "Speed, claws, crawling movement, fear",
    "weaknesses": "Barriers, light, weapons, distance",
    "dangerLevel": "High",
    "image": "assets/images/monsters/the-rake-1.jpg",
    "alt": "The Rake horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/the-rake-1.jpg",
        "alt": "The Rake horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/the-rake-2.jpg",
        "alt": "The Rake horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/the-rake-3.jpg",
        "alt": "The Rake horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Smiling Man",
    "category": "Urban Legend Entity",
    "origin": "Modern urban legend",
    "description": "A disturbing figure known for unnatural smiles and silent pursuit.",
    "strengths": "Psychological fear, pursuit, unpredictability",
    "weaknesses": "Public spaces, attention, escape",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/smiling-man-1.jpg",
    "alt": "Smiling Man horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/smiling-man-1.jpg",
        "alt": "Smiling Man horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/smiling-man-2.jpg",
        "alt": "Smiling Man horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/smiling-man-3.jpg",
        "alt": "Smiling Man horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Faceless Man",
    "category": "Unknown Entity",
    "origin": "Modern horror",
    "description": "A humanoid figure without facial features, often linked to memory loss and dread.",
    "strengths": "Identity erasure, silent stalking, fear aura",
    "weaknesses": "Names, mirrors, recognition rituals",
    "dangerLevel": "High",
    "image": "assets/images/monsters/faceless-man-1.jpg",
    "alt": "Faceless Man horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/faceless-man-1.jpg",
        "alt": "Faceless Man horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/faceless-man-2.jpg",
        "alt": "Faceless Man horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/faceless-man-3.jpg",
        "alt": "Faceless Man horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Scarecrow",
    "category": "Animated Construct",
    "origin": "Folk horror",
    "description": "A field guardian brought to life by curses, spirits, or revenge.",
    "strengths": "Camouflage, blades, fear symbolism",
    "weaknesses": "Fire, cutting supports, daylight",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/scarecrow-1.jpg",
    "alt": "Scarecrow horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/scarecrow-1.jpg",
        "alt": "Scarecrow horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/scarecrow-2.jpg",
        "alt": "Scarecrow horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/scarecrow-3.jpg",
        "alt": "Scarecrow horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Living Armor",
    "category": "Possessed Object",
    "origin": "Gothic horror",
    "description": "An empty suit of armor animated by spirits or dark magic.",
    "strengths": "Weapon skill, metal defense, tirelessness",
    "weaknesses": "Rust, magnets, breaking enchantment",
    "dangerLevel": "High",
    "image": "assets/images/monsters/living-armor-1.jpg",
    "alt": "Living Armor horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/living-armor-1.jpg",
        "alt": "Living Armor horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/living-armor-2.jpg",
        "alt": "Living Armor horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/living-armor-3.jpg",
        "alt": "Living Armor horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Gargoyle",
    "category": "Stone Guardian",
    "origin": "Medieval gothic lore",
    "description": "A stone creature that may awaken to guard cursed buildings.",
    "strengths": "Flight, stone skin, claws, ambush",
    "weaknesses": "Daylight in some lore, shattering stone",
    "dangerLevel": "High",
    "image": "assets/images/monsters/gargoyle-1.jpg",
    "alt": "Gargoyle horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/gargoyle-1.jpg",
        "alt": "Gargoyle horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/gargoyle-2.jpg",
        "alt": "Gargoyle horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/gargoyle-3.jpg",
        "alt": "Gargoyle horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Cursed Puppet",
    "category": "Haunted Object",
    "origin": "Stage horror",
    "description": "A puppet controlled by a curse, demon, or dead performer.",
    "strengths": "Manipulation, small size, eerie movement",
    "weaknesses": "Cut strings, burn body, break curse",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/cursed-puppet-1.jpg",
    "alt": "Cursed Puppet horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/cursed-puppet-1.jpg",
        "alt": "Cursed Puppet horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/cursed-puppet-2.jpg",
        "alt": "Cursed Puppet horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/cursed-puppet-3.jpg",
        "alt": "Cursed Puppet horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Mirror Entity",
    "category": "Reflection Spirit",
    "origin": "Modern paranormal",
    "description": "A being that appears through mirrors and reflections.",
    "strengths": "Reflection travel, mimicry, mind games",
    "weaknesses": "Covering mirrors, breaking glass, light",
    "dangerLevel": "High",
    "image": "assets/images/monsters/mirror-entity-1.jpg",
    "alt": "Mirror Entity horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/mirror-entity-1.jpg",
        "alt": "Mirror Entity horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/mirror-entity-2.jpg",
        "alt": "Mirror Entity horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/mirror-entity-3.jpg",
        "alt": "Mirror Entity horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Crawling Corpse",
    "category": "Undead",
    "origin": "Body horror",
    "description": "A broken reanimated body that crawls toward victims with unnatural persistence.",
    "strengths": "Persistence, surprise, pain immunity",
    "weaknesses": "Fire, head destruction, distance",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/crawling-corpse-1.jpg",
    "alt": "Crawling Corpse horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/crawling-corpse-1.jpg",
        "alt": "Crawling Corpse horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/crawling-corpse-2.jpg",
        "alt": "Crawling Corpse horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/crawling-corpse-3.jpg",
        "alt": "Crawling Corpse horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Flesh Golem",
    "category": "Construct",
    "origin": "Gothic horror",
    "description": "A stitched-together humanoid created from body parts and forbidden science.",
    "strengths": "Strength, durability, pain tolerance",
    "weaknesses": "Fire, electricity overload, creator control",
    "dangerLevel": "High",
    "image": "assets/images/monsters/flesh-golem-1.jpg",
    "alt": "Flesh Golem horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/flesh-golem-1.jpg",
        "alt": "Flesh Golem horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/flesh-golem-2.jpg",
        "alt": "Flesh Golem horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/flesh-golem-3.jpg",
        "alt": "Flesh Golem horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Frankenstein's Creature",
    "category": "Created Monster",
    "origin": "Gothic literature",
    "description": "A tragic being created through science, often feared for its size and rage.",
    "strengths": "Strength, intelligence, endurance",
    "weaknesses": "Isolation, fire, emotional manipulation",
    "dangerLevel": "High",
    "image": "assets/images/monsters/frankenstein-s-creature-1.jpg",
    "alt": "Frankenstein's Creature horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/frankenstein-s-creature-1.jpg",
        "alt": "Frankenstein's Creature horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/frankenstein-s-creature-2.jpg",
        "alt": "Frankenstein's Creature horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/frankenstein-s-creature-3.jpg",
        "alt": "Frankenstein's Creature horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Invisible Man",
    "category": "Scientific Horror",
    "origin": "Gothic science fiction",
    "description": "A person turned invisible, often descending into madness and crime.",
    "strengths": "Invisibility, stealth, surprise",
    "weaknesses": "Footprints, paint, smoke, sound",
    "dangerLevel": "High",
    "image": "assets/images/monsters/invisible-man-1.jpg",
    "alt": "Invisible Man horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/invisible-man-1.jpg",
        "alt": "Invisible Man horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/invisible-man-2.jpg",
        "alt": "Invisible Man horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/invisible-man-3.jpg",
        "alt": "Invisible Man horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Mad Scientist",
    "category": "Human Threat",
    "origin": "Gothic science horror",
    "description": "A brilliant but unethical figure who creates monsters or experiments on life.",
    "strengths": "Intelligence, inventions, manipulation",
    "weaknesses": "Hubris, unstable experiments, exposure",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/mad-scientist-1.jpg",
    "alt": "Mad Scientist horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/mad-scientist-1.jpg",
        "alt": "Mad Scientist horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/mad-scientist-2.jpg",
        "alt": "Mad Scientist horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/mad-scientist-3.jpg",
        "alt": "Mad Scientist horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Cursed Clown",
    "category": "Killer Clown",
    "origin": "Modern horror",
    "description": "A clown figure twisted into a predator of fear and chaos.",
    "strengths": "Fear manipulation, disguise, unpredictability",
    "weaknesses": "Exposure, weapons, removing disguise",
    "dangerLevel": "High",
    "image": "assets/images/monsters/cursed-clown-1.jpg",
    "alt": "Cursed Clown horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/cursed-clown-1.jpg",
        "alt": "Cursed Clown horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/cursed-clown-2.jpg",
        "alt": "Cursed Clown horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/cursed-clown-3.jpg",
        "alt": "Cursed Clown horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Scissor Killer",
    "category": "Slasher",
    "origin": "Modern horror",
    "description": "A silent killer associated with blades, stalking, and sudden attacks.",
    "strengths": "Stealth, weapons, patience",
    "weaknesses": "Police, traps, distance, disarming",
    "dangerLevel": "High",
    "image": "assets/images/monsters/scissor-killer-1.jpg",
    "alt": "Scissor Killer horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/scissor-killer-1.jpg",
        "alt": "Scissor Killer horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/scissor-killer-2.jpg",
        "alt": "Scissor Killer horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/scissor-killer-3.jpg",
        "alt": "Scissor Killer horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Pigman",
    "category": "Hybrid Killer",
    "origin": "Urban legend horror",
    "description": "A human-pig hybrid or masked killer tied to farms, tunnels, and slaughter imagery.",
    "strengths": "Strength, brutality, intimidation",
    "weaknesses": "Weapons, traps, open spaces",
    "dangerLevel": "High",
    "image": "assets/images/monsters/pigman-1.jpg",
    "alt": "Pigman horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/pigman-1.jpg",
        "alt": "Pigman horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/pigman-2.jpg",
        "alt": "Pigman horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/pigman-3.jpg",
        "alt": "Pigman horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Rat King",
    "category": "Swarm Horror",
    "origin": "European folklore concept",
    "description": "A mass of rats or rat-like intelligence controlling disease and panic.",
    "strengths": "Swarm numbers, disease, tight spaces",
    "weaknesses": "Fire, poison, sealing entry points",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/rat-king-1.jpg",
    "alt": "Rat King horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/rat-king-1.jpg",
        "alt": "Rat King horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/rat-king-2.jpg",
        "alt": "Rat King horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/rat-king-3.jpg",
        "alt": "Rat King horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Plague Doctor",
    "category": "Omen Figure",
    "origin": "Historical horror",
    "description": "A beaked figure transformed in horror into a symbol of plague, death, and experimentation.",
    "strengths": "Fear aura, toxins, medical tools",
    "weaknesses": "Fresh air, distance, removing mask",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/plague-doctor-1.jpg",
    "alt": "Plague Doctor horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/plague-doctor-1.jpg",
        "alt": "Plague Doctor horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/plague-doctor-2.jpg",
        "alt": "Plague Doctor horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/plague-doctor-3.jpg",
        "alt": "Plague Doctor horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Cemetery Angel",
    "category": "Living Statue",
    "origin": "Gothic horror",
    "description": "A graveyard statue that moves when unseen and guards the dead.",
    "strengths": "Stone body, stealth, sudden movement",
    "weaknesses": "Constant sight, breaking stone, daylight",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/cemetery-angel-1.jpg",
    "alt": "Cemetery Angel horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/cemetery-angel-1.jpg",
        "alt": "Cemetery Angel horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/cemetery-angel-2.jpg",
        "alt": "Cemetery Angel horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/cemetery-angel-3.jpg",
        "alt": "Cemetery Angel horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Blood Countess",
    "category": "Vampiric Noble",
    "origin": "Historical horror legend",
    "description": "A noble predator inspired by legends of blood rituals and aristocratic cruelty.",
    "strengths": "Influence, wealth, blood magic, servants",
    "weaknesses": "Exposure, fire, rebellion",
    "dangerLevel": "High",
    "image": "assets/images/monsters/blood-countess-1.jpg",
    "alt": "Blood Countess horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/blood-countess-1.jpg",
        "alt": "Blood Countess horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/blood-countess-2.jpg",
        "alt": "Blood Countess horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/blood-countess-3.jpg",
        "alt": "Blood Countess horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Night Hag",
    "category": "Sleep Demon",
    "origin": "Folklore / paranormal",
    "description": "A creature linked to sleep paralysis, chest pressure, and nightmares.",
    "strengths": "Dream attacks, paralysis, fear feeding",
    "weaknesses": "Waking rituals, light, protection charms",
    "dangerLevel": "High",
    "image": "assets/images/monsters/night-hag-1.jpg",
    "alt": "Night Hag horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/night-hag-1.jpg",
        "alt": "Night Hag horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/night-hag-2.jpg",
        "alt": "Night Hag horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/night-hag-3.jpg",
        "alt": "Night Hag horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Mare",
    "category": "Nightmare Spirit",
    "origin": "Germanic folklore",
    "description": "A spirit said to sit on sleepers and cause nightmares.",
    "strengths": "Sleep paralysis, dream terror, invisibility",
    "weaknesses": "Waking, iron, protective charms",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/mare-1.jpg",
    "alt": "Mare horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/mare-1.jpg",
        "alt": "Mare horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/mare-2.jpg",
        "alt": "Mare horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/mare-3.jpg",
        "alt": "Mare horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Alp",
    "category": "Dream Creature",
    "origin": "German folklore",
    "description": "A nightmare being that crushes sleeping victims and drinks vitality.",
    "strengths": "Dream control, chest pressure, shapeshifting",
    "weaknesses": "Blocking keyholes, iron, waking rituals",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/alp-1.jpg",
    "alt": "Alp horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/alp-1.jpg",
        "alt": "Alp horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/alp-2.jpg",
        "alt": "Alp horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/alp-3.jpg",
        "alt": "Alp horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Qallupilluit",
    "category": "Ice Sea Creature",
    "origin": "Inuit folklore",
    "description": "A creature said to snatch children near Arctic shorelines.",
    "strengths": "Water ambush, stealth under ice, claws",
    "weaknesses": "Avoiding thin ice, community warnings",
    "dangerLevel": "High",
    "image": "assets/images/monsters/qallupilluit-1.jpg",
    "alt": "Qallupilluit horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/qallupilluit-1.jpg",
        "alt": "Qallupilluit horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/qallupilluit-2.jpg",
        "alt": "Qallupilluit horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/qallupilluit-3.jpg",
        "alt": "Qallupilluit horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Adlet",
    "category": "Dog-Legged Humanoid",
    "origin": "Inuit folklore",
    "description": "A fierce race of beings with human upper bodies and canine legs.",
    "strengths": "Speed, pack hunting, cold survival",
    "weaknesses": "Weapons, isolation from pack, fire",
    "dangerLevel": "High",
    "image": "assets/images/monsters/adlet-1.jpg",
    "alt": "Adlet horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/adlet-1.jpg",
        "alt": "Adlet horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/adlet-2.jpg",
        "alt": "Adlet horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/adlet-3.jpg",
        "alt": "Adlet horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Aqrabuamelu",
    "category": "Scorpion Man",
    "origin": "Mesopotamian mythology",
    "description": "A scorpion-human guardian associated with ancient gates and deserts.",
    "strengths": "Venom, armor, strength, guarding instinct",
    "weaknesses": "Distance, ranged weapons, diplomacy",
    "dangerLevel": "High",
    "image": "assets/images/monsters/aqrabuamelu-1.jpg",
    "alt": "Aqrabuamelu horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/aqrabuamelu-1.jpg",
        "alt": "Aqrabuamelu horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/aqrabuamelu-2.jpg",
        "alt": "Aqrabuamelu horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/aqrabuamelu-3.jpg",
        "alt": "Aqrabuamelu horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Lamassu",
    "category": "Guardian Hybrid",
    "origin": "Mesopotamian mythology",
    "description": "A winged human-headed bull or lion, usually protective but terrifying when angered.",
    "strengths": "Flight, strength, divine authority",
    "weaknesses": "Respect, sacred law, avoidance",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/lamassu-1.jpg",
    "alt": "Lamassu horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/lamassu-1.jpg",
        "alt": "Lamassu horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/lamassu-2.jpg",
        "alt": "Lamassu horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/lamassu-3.jpg",
        "alt": "Lamassu horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Basilisk",
    "category": "Serpent King",
    "origin": "European bestiary",
    "description": "A deadly serpent or rooster-serpent whose gaze or venom kills.",
    "strengths": "Lethal gaze, venom, toxic presence",
    "weaknesses": "Mirrors, weasel myths, distance",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/basilisk-1.jpg",
    "alt": "Basilisk horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/basilisk-1.jpg",
        "alt": "Basilisk horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/basilisk-2.jpg",
        "alt": "Basilisk horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/basilisk-3.jpg",
        "alt": "Basilisk horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Cockatrice",
    "category": "Serpent-Rooster Beast",
    "origin": "European bestiary",
    "description": "A small dragon-like creature with a deadly glance and venomous body.",
    "strengths": "Killing gaze, venom, flight",
    "weaknesses": "Mirrors, weasels, spears",
    "dangerLevel": "High",
    "image": "assets/images/monsters/cockatrice-1.jpg",
    "alt": "Cockatrice horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/cockatrice-1.jpg",
        "alt": "Cockatrice horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/cockatrice-2.jpg",
        "alt": "Cockatrice horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/cockatrice-3.jpg",
        "alt": "Cockatrice horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Manticore",
    "category": "Man-Eating Beast",
    "origin": "Persian mythology",
    "description": "A lion-bodied monster with a human face and venomous tail.",
    "strengths": "Venom spikes, speed, bite, deception",
    "weaknesses": "Ranged weapons, armor, avoiding tail",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/manticore-1.jpg",
    "alt": "Manticore horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/manticore-1.jpg",
        "alt": "Manticore horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/manticore-2.jpg",
        "alt": "Manticore horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/manticore-3.jpg",
        "alt": "Manticore horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Sphinx",
    "category": "Riddle Guardian",
    "origin": "Egyptian / Greek mythology",
    "description": "A guardian creature known for riddles and deadly punishment.",
    "strengths": "Intelligence, strength, wings in Greek lore",
    "weaknesses": "Answering riddles, humility, strategy",
    "dangerLevel": "High",
    "image": "assets/images/monsters/sphinx-1.jpg",
    "alt": "Sphinx horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/sphinx-1.jpg",
        "alt": "Sphinx horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/sphinx-2.jpg",
        "alt": "Sphinx horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/sphinx-3.jpg",
        "alt": "Sphinx horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Anubis Guardian",
    "category": "Jackal-Headed Warden",
    "origin": "Egyptian-inspired horror",
    "description": "A jackal-headed guardian of tombs, judgment, and the dead.",
    "strengths": "Judgment power, strength, afterlife knowledge",
    "weaknesses": "Respecting tombs, sacred rites, truth",
    "dangerLevel": "High",
    "image": "assets/images/monsters/anubis-guardian-1.jpg",
    "alt": "Anubis Guardian horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/anubis-guardian-1.jpg",
        "alt": "Anubis Guardian horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/anubis-guardian-2.jpg",
        "alt": "Anubis Guardian horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/anubis-guardian-3.jpg",
        "alt": "Anubis Guardian horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Lich",
    "category": "Undead Sorcerer",
    "origin": "Fantasy horror",
    "description": "An undead mage who preserves its soul in a hidden object.",
    "strengths": "Necromancy, immortality, spellcasting",
    "weaknesses": "Destroy phylactery, holy magic, anti-magic",
    "dangerLevel": "Extreme",
    "image": "assets/images/monsters/lich-1.jpg",
    "alt": "Lich horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/lich-1.jpg",
        "alt": "Lich horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/lich-2.jpg",
        "alt": "Lich horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/lich-3.jpg",
        "alt": "Lich horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Necromancer",
    "category": "Death Mage",
    "origin": "Occult fantasy horror",
    "description": "A sorcerer who commands corpses, spirits, and death magic.",
    "strengths": "Raising undead, curses, dark rituals",
    "weaknesses": "Interrupted rituals, holy relics, exhaustion",
    "dangerLevel": "High",
    "image": "assets/images/monsters/necromancer-1.jpg",
    "alt": "Necromancer horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/necromancer-1.jpg",
        "alt": "Necromancer horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/necromancer-2.jpg",
        "alt": "Necromancer horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/necromancer-3.jpg",
        "alt": "Necromancer horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Revenant",
    "category": "Vengeful Undead",
    "origin": "European folklore",
    "description": "A corpse returned from the grave to punish the living.",
    "strengths": "Determination, strength, pain resistance",
    "weaknesses": "Completing justice, decapitation, burning",
    "dangerLevel": "High",
    "image": "assets/images/monsters/revenant-1.jpg",
    "alt": "Revenant horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/revenant-1.jpg",
        "alt": "Revenant horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/revenant-2.jpg",
        "alt": "Revenant horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/revenant-3.jpg",
        "alt": "Revenant horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Specter",
    "category": "Hostile Spirit",
    "origin": "Gothic horror",
    "description": "A dangerous apparition that feeds on fear and sorrow.",
    "strengths": "Haunting, fear drain, invisibility",
    "weaknesses": "Cleansing, light, spiritual closure",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/specter-1.jpg",
    "alt": "Specter horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/specter-1.jpg",
        "alt": "Specter horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/specter-2.jpg",
        "alt": "Specter horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/specter-3.jpg",
        "alt": "Specter horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Phantom Rider",
    "category": "Ghostly Horseman",
    "origin": "Road folklore",
    "description": "A spectral rider seen on lonely roads before tragedy.",
    "strengths": "Speed, omen presence, fear",
    "weaknesses": "Leaving the road, daylight, prayer",
    "dangerLevel": "Medium",
    "image": "assets/images/monsters/phantom-rider-1.jpg",
    "alt": "Phantom Rider horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/phantom-rider-1.jpg",
        "alt": "Phantom Rider horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/phantom-rider-2.jpg",
        "alt": "Phantom Rider horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/phantom-rider-3.jpg",
        "alt": "Phantom Rider horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Cave Dweller",
    "category": "Subterranean Humanoid",
    "origin": "Survival horror",
    "description": "A pale creature adapted to caves, darkness, and underground hunting.",
    "strengths": "Dark vision, climbing, ambush",
    "weaknesses": "Bright light, loud sound, open space",
    "dangerLevel": "High",
    "image": "assets/images/monsters/cave-dweller-1.jpg",
    "alt": "Cave Dweller horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/cave-dweller-1.jpg",
        "alt": "Cave Dweller horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/cave-dweller-2.jpg",
        "alt": "Cave Dweller horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/cave-dweller-3.jpg",
        "alt": "Cave Dweller horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  },
  {
    "name": "Deep One",
    "category": "Aquatic Humanoid",
    "origin": "Cosmic horror",
    "description": "A fish-like humanoid linked to ancient sea cults and coastal dread.",
    "strengths": "Swimming, claws, cult networks",
    "weaknesses": "Dry land, sunlight, isolation from water",
    "dangerLevel": "High",
    "image": "assets/images/monsters/deep-one-1.jpg",
    "alt": "Deep One horror monster illustration placeholder",
    "images": [
      {
        "src": "assets/images/monsters/deep-one-1.jpg",
        "alt": "Deep One horror image placeholder 1"
      },
      {
        "src": "assets/images/monsters/deep-one-2.jpg",
        "alt": "Deep One horror image placeholder 2"
      },
      {
        "src": "assets/images/monsters/deep-one-3.jpg",
        "alt": "Deep One horror image placeholder 3"
      }
    ],
    "profileUrl": ""
  }
];
