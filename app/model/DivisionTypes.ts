/**
 * Created by Alex on 17.04.2016.
 */
export type AttributeId = "armor" | "chc" | "chd" | "health" | "scavaging" | "stability"
    |"accuracy" |"skill_power"|"health_kill"|"firearms"|"stamina"|"electronics"|"slot+"|"slot++"|"kill_xp"|"ammo_cap"|"slot"
    // Resistances
    |"disorient_res"|"blind_res"|"burn_res"|"bleed_res"|"exotic_res"|"elite_prot"|"disrupt_res"
    // Extra Damage
    |"weapon_dmg"|"armor_dmg"|"elite_dmg"|"headshot_dmg"|"backpack_cap"|

    "armor_plus"|"backpack_cap"|"skill_haste"|"signature_gain"|"seeker_damage"|"station_duration"|"turret_damage"|"shock_res"|

 "smg_damage"|
 "assault_damage"|
 "shotgun_damage"|
 "lmg_damage"|
"pistol_damage"|
 "sniper_damage"|

 "weapon_base_dmg"|
"weapon_base_rpm"|
"weapon_base_mag"|
"weapon_slot_barrel_short"|
"weapon_slot_barrel_long"|
"weapon_slot_magazine"|
"weapon_slot_muzzle_small"|
"weapon_slot_muzzle_large"|
"weapon_slot_optic_short"|
"weapon_slot_optic_long"|
"weapon_accuracy"|
"weapon_stability"|
"weapon_optimal_range"|
"weapon_reload_speed"|



"technical" |
"inventive" |
"relentless" |
"resourceful" |
"specialized" |

"recovered" |
"nimble" |
"steadfast" |
"sturdy" |

"savage" |
"reckless" |
"cunning" |
"decisive" |
"astute" |
 "accomplished" |
"prosperous" |
"perceptive" |

"enduring" |
"refreshed" |
"rejuvenated" |
"tenacious" |
"rehabilitated" |

"robust" |
"rapid" |
"vigorous" |
"forceful" |

"shooter" |
"nomad" |
"stalker" |
"tactician" |



"stalker"|
    "nomad"|
    "shooter"|
    "tactician"|
    
    
    // skills
    "smartcover_dmg_inc"|
"shield_damage"|
"mobile_cover_health"|
    "mobile_cover_dmg_res"|
    "heal_self"|
    "station_health"|
    "turret_health"|
    "sticky_damage"|
    "pulse_duration"|
    "pulse_chd"|
    "cover_dmg_res" |
    "pulse_chc" |
    "shield_health" |
    "heal_ally" |
    "seeker_radius" |
    "smart_duration" |
    "sticky_radius" |
    "station_speed" |
    "turret_duration";

export type AttributeDataType = "percent" | "meter" | "seconds" | "number";

export type ItemQuality = "set" | "highend" | "purple" | "blue" | "green" | "grey";

export type AttributeType = "native" | "major" | "minor" | "skill" | "weapon_talent" | "gear_talent";

export type ItemSlotType = "primary" | "secondary" | "body" | "mask" | "kneepads" | "backpack" | "gloves" | "holster" | 
    "gear_mod" | "weapon_slot_magazine" ; // TODO weapon_mod aufpliutten in einzelne typen

export type ItemSet = "striker" | "sentry" | "tactician" | "nomad" | "none";

export type Currency = "pxc" | "dz" | "credits";

export type ItemProducer = "boo" | "drop" | "dz02" | "dz03" | "dz04" | "dz05" | "dz06";




export class AttributeConsts {
    public static ARMOR: AttributeId = "armor";
    public static CHC: AttributeId = "chc";
    public static CHD: AttributeId = "chd";
    public static HEALTH: AttributeId = "health";
    public static SCAVAGING: AttributeId = "scavaging";
    public static STABILITY: AttributeId = "stability";
    public static ACCURACY: AttributeId = "accuracy";
    public static SKILL_POWER: AttributeId = "skill_power";
    public static HEALTH_ON_KILL: AttributeId = "health_kill";
    public static FIREARMS: AttributeId = "firearms";
    public static STAMINA: AttributeId = "stamina";
    public static ELECTRONICS: AttributeId = "electronics";
    public static GEAR_MOD: AttributeId = "slot";
    public static KILL_XP: AttributeId = "kill_xp";
    public static AMMO_CAP: AttributeId = "ammo_cap";
    public static ARMOR_PLUS: AttributeId = "armor_plus";
    public static BACKPACK_CAP: AttributeId = "backpack_cap";
    public static SKILL_HASTE: AttributeId = "skill_haste";
    public static SIGNATURE_GAIN: AttributeId = "signature_gain";
    public static SHOCK_RES: AttributeId = "shock_res";
    
    public static SMG_DAMAGE: AttributeId = "smg_damage";
    public static ASSAULT_DAMAGE: AttributeId = "assault_damage";
    public static SHOTGUN_DAMAGE: AttributeId = "shotgun_damage";
    public static LMG_DAMAGE: AttributeId = "lmg_damage";
    public static PISTOL_DAMAGE: AttributeId = "pistol_damage";
    public static SNIPER_DAMAGE: AttributeId = "sniper_damage";
    
    
    



    
    
    
    // Weapons
    public static WEAPON_BASE_DMG: AttributeId = "weapon_base_dmg";
    public static WEAPON_BASE_RPM: AttributeId = "weapon_base_rpm";
    public static WEAPON_BASE_MAG: AttributeId = "weapon_base_mag";
    public static WEAPON_SLOT_BARREL_SHORT: AttributeId = "weapon_slot_barrel_short";
    public static WEAPON_SLOT_BARREL_LONG: AttributeId = "weapon_slot_barrel_long";
    public static WEAPON_SLOT_MAGAZINE: AttributeId = "weapon_slot_magazine";
    public static WEAPON_SLOT_MUZZLE_SMALL: AttributeId = "weapon_slot_muzzle_small";
    public static WEAPON_SLOT_MUZZLE_LARGE: AttributeId = "weapon_slot_muzzle_large";
    public static WEAPON_SLOT_OPTIC_SHORT: AttributeId = "weapon_slot_optic_short";
    public static WEAPON_SLOT_OPTIC_LONG: AttributeId = "weapon_slot_optic_long";
    public static WEAPON_ACCURACY: AttributeId = "weapon_accuracy";
    public static WEAPON_STABILITY: AttributeId = "weapon_stability";
    public static WEAPON_OPTIMAL_RANGE: AttributeId = "weapon_optimal_range";
    public static WEAPON_RELOAD_SPEED: AttributeId = "weapon_reload_speed";




    // Resistances
    public static DISORIENT_RES: AttributeId = "disorient_res";
    public static BLIND_RES: AttributeId = "blind_res";
    public static BURN_RES: AttributeId = "burn_res";
    public static BLEED_RES: AttributeId = "bleed_res";
    public static EXOTIC_DMG_RES: AttributeId = "exotic_res";
    public static ELITE_PROT: AttributeId = "elite_prot";
    public static DISRUPT_RES: AttributeId = "disrupt_res";

    public static WEAPON_DMG: AttributeId = "weapon_dmg";
    public static ARMOR_DMG: AttributeId = "armor_dmg";
    public static ELITE_DMG: AttributeId = "elite_dmg";
    public static HEADSHOT_DMG: AttributeId = "headshot_dmg";
}


export class SkillConsts {
    public static SMARTCOVER_DMG_RES: AttributeId = "cover_dmg_res";
    public static PULSE_CHC: AttributeId = "pulse_chc";
    public static PULSE_CHD: AttributeId = "pulse_chd";
    public static SHIELD_HEALTH: AttributeId = "shield_health";
    public static FIRST_AID_ALLY: AttributeId = "heal_ally";
    public static SEEKER_RADIUS: AttributeId = "seeker_radius";
    public static SMART_DURATION: AttributeId = "smart_duration";
    public static STICKY_RADIUS: AttributeId = "sticky_radius";
    public static STATION_SPEED: AttributeId = "station_speed";
    public static TURRET_DURATION: AttributeId = "turret_duration";
    public static FIRST_AID_SELF: AttributeId = "heal_self";
    public static PULSE_DURATION: AttributeId = "pulse_duration";
    public static STICKY_DAMAGE: AttributeId = "sticky_damage";
    public static STATION_HEALTH: AttributeId = "station_health";
    public static TURRET_HEALTH: AttributeId = "turret_health";
    public static MOBILE_COVER_DMG_RES: AttributeId = "mobile_cover_dmg_res";
    public static MOBILE_COVER_HEALTH: AttributeId = "mobile_cover_health";
    public static SHIELD_DMG: AttributeId = "shield_damage";
    public static SMARTCOVER_DMG_INC: AttributeId = "smartcover_dmg_inc";
    
    
    
    public static SEEKER_DAMAGE: AttributeId = "seeker_damage";
    public static STATION_DURATION: AttributeId = "station_duration";
    public static TURRET_DAMAGE: AttributeId = "turret_damage";


}


export class TalentConsts {
    public static STALKER: AttributeId = "stalker";
    public static TACTICIAN: AttributeId = "tactician";
    public static NOMAD: AttributeId = "nomad";
    public static SHOOTER: AttributeId = "shooter";


}