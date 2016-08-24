import {DivisionAttributeMeta} from "../model/division.attribute";
import {AttributeConsts} from "../model/DivisionTypes";

/**
 * Created by Alex on 17.04.2016.
 */
export var TALENTS: DivisionAttributeMeta[] = [
    {"attributeId": "technical",      "description":"While your signature skill is active, your Skill Power is increased by 13%."},  // stamina backpack
    {"attributeId": "inventive",      "description":"Your Skill Power is increased by 13% while you are at full health."},           // stamina backpack
    {"attributeId": "relentless",     "description":"3% of the damage dealt by your skills is returned to you as healing."},         // stamina backpack
    {"attributeId": "resourceful",       "description":"All healing applied to you is also applied to your skill objects."},         // stamina backpack
    {"attributeId": "specialized",       "description":"13% of your Firearms and Stamina are added to your Skill Power."},           // stamina backpack
    
    {"attributeId": "recovered",     "description":"Damage taken while doing a cover to cover maneuver is regenerated over 5 seconds upon reaching your destination"}, // holster
    {"attributeId": "nimble",        "description":"While doing a cover to cover move in combat, you heal 2% of your max Health for every y meter run"},     // holster
    {"attributeId": "steadfast",     "description":"While in cover, health regeneration kicks in twice as fast"},                                            // holster
    {"attributeId": "sturdy",        "description":"Your armor is increased by 12.5% when you stay more than y seconds in the same cover"},                  // holster
    
    {"attributeId": "savage",    "description":"Your Critical hit chance is increased by 13% against targets out of cover."},                // gloves
    {"attributeId": "reckless",  "description":"You deal 13% more damage and receive 10% more damage."},                                     // gloves, vest
    {"attributeId": "cunning",   "description":"After reloading, your next shot with this weapon has a 9.5% higher critical hit chance."},   // gloves
    {"attributeId": "decisive",  "description":"Headshots with your side arm deal 25% more damage."},                                        // gloves
    {"attributeId": "astute",    "description":"The first 3 bullets of your magazine have a 9.5% higher chance to do a Critical Hit."},      // gloves
    
    {"attributeId": "accomplished",  "description":"Rewards from Accolades are trippled."},                          // kneepads
    {"attributeId": "prosperous",    "description":"Critical headshots grant you credits."},                         // kneepads
    {"attributeId": "perceptive",    "description":"Your Item find and Gold find bonuses are increased by 25%."},    // kneepads
    
    {"attributeId": "enduring",      "description":"While in your last segment, your health continuously regenerates to fill up the segment."},  // mask
    {"attributeId": "refreshed",     "description":"When your health is in the last segment, all your healing is improved by 30%."},             // mask
    {"attributeId": "rejuvenated",   "description":"Consuming a medkit also removes all negative status effects from you."},                     // mask
    {"attributeId": "tenacious",     "description":"Using a Medkit increases your damage by 9.5% for y seconds."},                               // mask
    {"attributeId": "rehabilitated", "description":"When you are affected by a status effect you are healed for 2% every second."},              // mask
    
    {"attributeId": "robust",    "description":"You have 45% more armor while in cover."},                               // vest
    {"attributeId": "rapid",     "description":"The cooldown of your healing skills is decreased by 13%."},              // vest
    {"attributeId": "vigorous",  "description":"All your healing skills have Over Heal enabled."},                       // vest
    {"attributeId": "forceful",  "description":"Your armor is increased by x% while your Signature Skill is active."},   // vest
    
    {"attributeId": "shooter_talent",       "description":"Every consecutive hit deals 1% more damage. Stacks up to 100%. Missing shots drops bonus by 2%. Bonus is reduced by 1% every second."},
    {"attributeId": "nomad_talent",         "description":"When receiving fatal damage, you are instead healed to full health. Can occur once every 10 minutes."},
    {"attributeId": "tactician_talent",     "description":"Every 60k damage your group deals adds 1% skill power to you for a max of 100% bonus. Bonus is reduced by 1% every second the group isn’t dealing damage."},
    {"attributeId": "stalker_talent",       "description":"Headshots mark the enemy, increasing the damage inflicted on the target by 15% for a duration of 10 seconds each. A target can receive up to three marks."}
];

export var SETS: DivisionAttributeMeta[] = [
    {"attributeId": "striker",       "description":"Striker"},
    {"attributeId": "sentry",         "description":"Sentrys Call"},
    {"attributeId": "tactician",     "description":"Tactician"},
    {"attributeId": "nomad",       "description":"Nomad"}
];

export var ATTRIBUTES: DivisionAttributeMeta[] = [
    {"attributeId": AttributeConsts.WEAPON_DMG,      "description":"Weapon Damage",  "datatype": "percent"},
    {"attributeId": AttributeConsts.ARMOR_DMG,       "description":"Armor Damage",   "datatype": "percent"},
    {"attributeId": AttributeConsts.ELITE_DMG,       "description":"Elite Damage",   "datatype": "percent"},
    {"attributeId": AttributeConsts.SCAVAGING,       "description":"Scavaging",      "datatype": "percent"},
    {"attributeId": AttributeConsts.STABILITY,       "description":"Stability"},
    {"attributeId": AttributeConsts.ACCURACY,        "description":"Accuracy"},
    {"attributeId": AttributeConsts.ARMOR,           "description":"Armor"},
    {"attributeId": AttributeConsts.HEALTH,          "description":"Health"},
    {"attributeId": AttributeConsts.SKILL_POWER,     "description":"Skill Power"},
    {"attributeId": AttributeConsts.EXOTIC_DMG_RES,  "description":"Exotic Damage Resiliance",   "datatype": "percent"},
    {"attributeId": AttributeConsts.HEALTH_ON_KILL,  "description":"Health on Kill",             "datatype": "percent"},
    {"attributeId": AttributeConsts.HEADSHOT_DMG,    "description":"Headshot Damage",            "datatype": "percent"},
    {"attributeId": AttributeConsts.CHD,             "description":"Critical Hit Damage",        "datatype": "percent"},
    {"attributeId": AttributeConsts.CHC,             "description":"Critical Hit Chance",        "datatype": "percent"},
    {"attributeId": AttributeConsts.FIREARMS,        "description":"Firearms"},
    {"attributeId": AttributeConsts.STAMINA,         "description":"Stamina"},
    {"attributeId": AttributeConsts.ELECTRONICS,     "description":"Electronics"},
    {"attributeId": AttributeConsts.GEAR_MOD_1,        "description":"Gear Mod Slot"},
    {"attributeId": AttributeConsts.GEAR_MOD_2,        "description":"Gear Mod Slot"},
    {"attributeId": AttributeConsts.GEAR_MOD_3,        "description":"Gear Mod Slot"},
    {"attributeId": AttributeConsts.ARMOR_PLUS,      "description":"Armor Plus"},
    {"attributeId": AttributeConsts.SIGNATURE_GAIN,  "description":"Signature Skill Gain",       "datatype": "percent"},
    {"attributeId": AttributeConsts.BACKPACK_CAP,    "description":"Backpack Capacity"},
    {"attributeId": AttributeConsts.BLEED_RES,       "description":"Bleed Resistance",           "datatype": "percent"},
    {"attributeId": AttributeConsts.BURN_RES,        "description":"Burn Resistance",            "datatype": "percent"},
    {"attributeId": AttributeConsts.DISRUPT_RES,     "description":"Disrupt Resistance",         "datatype": "percent"},
    {"attributeId": AttributeConsts.AMMO_CAP,        "description":"Ammo Capacity",              "datatype": "percent"},
    {"attributeId": AttributeConsts.BLIND_RES,       "description":"Blind Resistance",           "datatype": "percent"},
    {"attributeId": AttributeConsts.DISORIENT_RES,   "description":"Disorient Resistance",       "datatype": "percent"},
    {"attributeId": AttributeConsts.KILL_XP,         "description":"Kill XP",                    "datatype": "percent"},
    {"attributeId": AttributeConsts.SHOCK_RES,       "description":"Shock Resistance",           "datatype": "percent"},
    {"attributeId": AttributeConsts.SKILL_HASTE,       "description":"Skill Haste",              "datatype": "percent"},
    {"attributeId": AttributeConsts.ELITE_PROT,       "description":"Protection from Elites",    "datatype": "percent"},

    {"attributeId": AttributeConsts.WEAPON_BASE_DMG,       "description":"Weapon Base Damage"},
    {"attributeId": AttributeConsts.ASSAULT_DAMAGE,       "description":"Extra Damage for Assault Rifles"},
    {"attributeId": AttributeConsts.SNIPER_DAMAGE,       "description":"Extra Damage for Sniper Rifles"},
    {"attributeId": AttributeConsts.SHOTGUN_DAMAGE,       "description":"Extra Damage for Shotguns"},
    {"attributeId": AttributeConsts.PISTOL_DAMAGE,       "description":"Extra Damage for Pistols"},
    {"attributeId": AttributeConsts.SMG_DAMAGE,       "description":"Extra Damage for SMGs"},


    {"attributeId": "mobile_cover_dmg_res",         "description":"Mobile Cover Damage Resistance",     "datatype": "percent"},
    {"attributeId": "cover_dmg_res",         "description":"Smart Cover Damage Resistance",     "datatype": "percent"},
    {"attributeId": "pulse_chc",             "description":"Pulse Critical Hit Chance",          "datatype": "percent"},
    {"attributeId": "pulse_chd",             "description":"Pulse Critical Hit Damage",          "datatype": "percent"},
    {"attributeId": "pulse_duration",        "description":"Pulse Duration",                     "datatype": "percent"},
    {"attributeId": "shield_health",         "description":"Ballistic Shield Health",            "datatype": "percent"},
    {"attributeId": "heal_ally",             "description":"First Aid ally heal",                "datatype": "percent"},
    {"attributeId": "seeker_radius",         "description":"Seeker Mine Radius",                 "datatype": "percent"},
    {"attributeId": "smart_duration",        "description":"Smart Cover Duration",               "datatype": "percent"},
    {"attributeId": "sticky_radius",         "description":"Sticky Bomb Radius",                 "datatype": "percent"},
    {"attributeId": "station_speed",         "description":"Support Station Healing Speed",      "datatype": "percent"},
    {"attributeId": "turret_duration",       "description":"Turret Duration",                    "datatype": "percent"},
    {"attributeId": "sticky_damage",         "description":"Sticky Bomb Damage",                 "datatype": "percent"},
    {"attributeId": "station_health",        "description":"Support station Health",             "datatype": "percent"},
    {"attributeId": "turret_health",         "description":"Turrent Health",                     "datatype": "percent"},
    {"attributeId": "seeker_damage",         "description":"Seeker Mine Damage",                 "datatype": "percent"},
    {"attributeId": "station_duration",      "description":"Support Station Duration",           "datatype": "percent"},
    {"attributeId": "turret_damage",         "description":"Turret Damage",                      "datatype": "percent"},
    {"attributeId": "heal_self",             "description":"First Aid self heal",                "datatype": "percent"}

];