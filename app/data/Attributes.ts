import {DivisionAttribute} from "../model/division.attribute";
import {AttributeConsts} from "../model/DivisionTypes";

/**
 * Created by Alex on 17.04.2016.
 */
export var TALENTS: DivisionAttribute[] = [
    {"id": "technical",      "description":"While your signature skill is active, your Skill Power is increased by 13%."},  // stamina backpack
    {"id": "inventive",      "description":"Your Skill Power is increased by 13% while you are at full health."},           // stamina backpack
    {"id": "relentless",     "description":"3% of the damage dealt by your skills is returned to you as healing."},         // stamina backpack
    {"id": "resourceful",       "description":"All healing applied to you is also applied to your skill objects."},         // stamina backpack
    {"id": "specialized",       "description":"13% of your Firearms and Stamina are added to your Skill Power."},           // stamina backpack
    
    {"id": "recovered",     "description":"Damage taken while doing a cover to cover maneuver is regenerated over 5 seconds upon reaching your destination"}, // holster
    {"id": "nimble",        "description":"While doing a cover to cover move in combat, you heal 2% of your max Health for every y meter run"},     // holster
    {"id": "steadfast",     "description":"While in cover, health regeneration kicks in twice as fast"},                                            // holster
    {"id": "sturdy",        "description":"Your armor is increased by 12.5% when you stay more than y seconds in the same cover"},                  // holster
    
    {"id": "savage",    "description":"Your Critical hit chance is increased by 13% against targets out of cover."},                // gloves
    {"id": "reckless",  "description":"You deal 13% more damage and receive 10% more damage."},                                     // gloves, vest
    {"id": "cunning",   "description":"After reloading, your next shot with this weapon has a 9.5% higher critical hit chance."},   // gloves
    {"id": "decisive",  "description":"Headshots with your side arm deal 25% more damage."},                                        // gloves
    {"id": "astute",    "description":"The first 3 bullets of your magazine have a 9.5% higher chance to do a Critical Hit."},      // gloves
    
    {"id": "accomplished",  "description":"Rewards from Accolades are trippled."},                          // kneepads
    {"id": "prosperous",    "description":"Critical headshots grant you credits."},                         // kneepads
    {"id": "perceptive",    "description":"Your Item find and Gold find bonuses are increased by 25%."},    // kneepads
    
    {"id": "enduring",      "description":"While in your last segment, your health continuously regenerates to fill up the segment."},  // mask
    {"id": "refreshed",     "description":"When your health is in the last segment, all your healing is improved by 30%."},             // mask
    {"id": "rejuvenated",   "description":"Consuming a medkit also removes all negative status effects from you."},                     // mask
    {"id": "tenacious",     "description":"Using a Medkit increases your damage by 9.5% for y seconds."},                               // mask
    {"id": "rehabilitated", "description":"When you are affected by a status effect you are healed for 2% every second."},              // mask
    
    {"id": "robust",    "description":"You have 45% more armor while in cover."},                               // vest
    {"id": "rapid",     "description":"The cooldown of your healing skills is decreased by 13%."},              // vest
    {"id": "vigorous",  "description":"All your healing skills have Over Heal enabled."},                       // vest
    {"id": "forceful",  "description":"Your armor is increased by x% while your Signature Skill is active."},   // vest
    
    {"id": "shooter",       "description":"Every consecutive hit deals 1% more damage. Stacks up to 100%. Missing shots drops bonus by 2%. Bonus is reduced by 1% every second."},
    {"id": "nomad",         "description":"When receiving fatal damage, you are instead healed to full health. Can occur once every 10 minutes."},
    {"id": "tactician",     "description":"Every 60k damage your group deals adds 1% skill power to you for a max of 100% bonus. Bonus is reduced by 1% every second the group isn’t dealing damage."},
    {"id": "stalker",       "description":"Headshots mark the enemy, increasing the damage inflicted on the target by 15% for a duration of 10 seconds each. A target can receive up to three marks."}
];

export var ATTRIBUTES: DivisionAttribute[] = [
    {"id": AttributeConsts.WEAPON_DMG,      "description":"Weapon Damage",  "datatype": "percent"},
    {"id": AttributeConsts.ARMOR_DMG,       "description":"Armor Damage",   "datatype": "percent"},
    {"id": AttributeConsts.ELITE_DMG,       "description":"Elite Damage",   "datatype": "percent"},
    {"id": AttributeConsts.SCAVAGING,       "description":"Scavaging",      "datatype": "percent"},
    {"id": AttributeConsts.STABILITY,       "description":"Stability"},
    {"id": AttributeConsts.ACCURACY,        "description":"Accuracy"},
    {"id": AttributeConsts.ARMOR,           "description":"Armor"},
    {"id": AttributeConsts.HEALTH,          "description":"Health"},
    {"id": AttributeConsts.SKILL_POWER,     "description":"Skill Power"},
    {"id": AttributeConsts.EXOTIC_DMG_RES,  "description":"Exotic Damage Resiliance",   "datatype": "percent"},
    {"id": AttributeConsts.HEALTH_ON_KILL,  "description":"Health on Kill",             "datatype": "percent"},
    {"id": AttributeConsts.HEADSHOT_DMG,    "description":"Headshot Damage",            "datatype": "percent"},
    {"id": AttributeConsts.CHD,             "description":"Critical Hit Damage",        "datatype": "percent"},
    {"id": AttributeConsts.CHC,             "description":"Critical Hit Chance",        "datatype": "percent"},
    {"id": AttributeConsts.FIREARMS,        "description":"Firearms"},
    {"id": AttributeConsts.STAMINA,         "description":"Stamina"},
    {"id": AttributeConsts.ELECTRONICS,     "description":"Electronics"},
    {"id": AttributeConsts.GEAR_MOD,        "description":"Gear Mod Slot"},
    {"id": AttributeConsts.ARMOR_PLUS,      "description":"Armor Plus"},
    {"id": AttributeConsts.SIGNATURE_GAIN,  "description":"Signature Skill Gain",       "datatype": "percent"},
    {"id": AttributeConsts.BACKPACK_CAP,    "description":"Backpack Capacity"},
    {"id": AttributeConsts.BLEED_RES,       "description":"Bleed Resistance",           "datatype": "percent"},
    {"id": AttributeConsts.BURN_RES,        "description":"Burn Resistance",            "datatype": "percent"},
    {"id": AttributeConsts.DISRUPT_RES,     "description":"Disrupt Resistance",         "datatype": "percent"},
    {"id": AttributeConsts.AMMO_CAP,        "description":"Ammo Capacity",              "datatype": "percent"},
    {"id": AttributeConsts.BLIND_RES,       "description":"Blind Resistance",           "datatype": "percent"},
    {"id": AttributeConsts.DISORIENT_RES,   "description":"Disorient Resistance",       "datatype": "percent"},
    {"id": AttributeConsts.KILL_XP,         "description":"Kill XP",                    "datatype": "percent"},
    {"id": AttributeConsts.SHOCK_RES,       "description":"Shock Resistance",           "datatype": "percent"},
    {"id": AttributeConsts.SKILL_HASTE,       "description":"Skill Haste",              "datatype": "percent"},
    
    {"id": "cover_dmg_res",         "description":"Smart Cover Damager Resistance",     "datatype": "percent"},
    {"id": "pulse_chc",             "description":"Pulse Critical Hit Chance",          "datatype": "percent"},
    {"id": "pulse_chd",             "description":"Pulse Critical Hit Damage",          "datatype": "percent"},
    {"id": "pulse_duration",        "description":"Pulse Duration",                     "datatype": "percent"},
    {"id": "shield_health",         "description":"Ballistic Shield Health",            "datatype": "percent"},
    {"id": "heal_ally",             "description":"First Aid ally heal",                "datatype": "percent"},
    {"id": "seeker_radius",         "description":"Seeker Mine Radius",                 "datatype": "percent"},
    {"id": "smart_duration",        "description":"Smart Cover Duration",               "datatype": "percent"},
    {"id": "sticky_radius",         "description":"Sticky Bomb Radius",                 "datatype": "percent"},
    {"id": "station_speed",         "description":"Support Station Healing Speed",      "datatype": "percent"},
    {"id": "turret_duration",       "description":"Turret Duration",                    "datatype": "percent"},
    {"id": "sticky_damage",         "description":"Sticky Bomb Damage",                 "datatype": "percent"},
    {"id": "station_health",        "description":"Support station Health",             "datatype": "percent"},
    {"id": "turret_health",         "description":"Turrent Health",                     "datatype": "percent"},
    {"id": "seeker_damage",         "description":"Seeker Mine Damage",                 "datatype": "percent"},
    {"id": "station_duration",      "description":"Support Station Duration",           "datatype": "percent"},
    {"id": "turret_damage",         "description":"Turret Damage",                      "datatype": "percent"},
    {"id": "heal_self",             "description":"First Aid self heal",                "datatype": "percent"}

];