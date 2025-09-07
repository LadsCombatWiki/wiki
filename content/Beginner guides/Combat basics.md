---
title: "Combat basics"
draft: false
tags:
---
# Battle Controls

Despite being marketed as an otome game, LaDs has significant combat gameplay modes. All combat stages have a similar layout:

<p style="text-align: center;"> <img src="/Images/battle_controls/combat_ui.png" alt="Combat UI" /> </p>

The top half of the screen is populated with less commonly used functions but still important to know for battle. 
- **Pause/Menu**: If you need a break or need to restart the stage, tap this button to open up a box with additional functions, including a summary of the stage goals, a summary of your weapons and companion skills, audio settings, and battle settings. In battle settings, you can enable target lock functionality as well as allow for skipping skill animations. 
- **Elapsed Time**: Shows how much time has passed since the battle has started. Note that in the majority of battles, the timer starts before enemies have spawned. You have to run to the Start Battle icon to actually start the battle. 
- **Stage Objective**: Summarizes the goals for this battle. Here you will see objectives like how many waves are in the battle, how many enemies are in the wave, or how quickly you need to complete the battles to obtain stars, etc.
- **Auto/Manual Battle**: Where available, you can toggle auto or manual battle. Tutorial battles are always manual. Toggling auto will allow the game algorithm to battle for you. In most cases, the algorithm is poorly written and requires significantly more stats to beat the level. Auto combat is good for low level battles, or those with whale builds. We recommend manual combat to get around the poorly written algorithms. 

The bottom half of the screen is where the majority of the active combat controls reside. 
- **MC’s HP**: When this drops to 0, the battle is forfeit.
- **Companion’s HP**: Once this drops to 0, the battle is forfeit.
- **Energy**: Charges over time and allows you to use active and resonance skills
- **D-Pad**: short for “directional pad”, this is where you control the movements of MC

<p style="text-align: center;"> <img src="/Images/battle_controls/d-pad.gif" alt="D-Pad" /> </p>

- **Dash/Dodge**: using to avoid damage or to quick move in direction. If this button is tapped while no direction is selected on the D-Pad, MC will dodge backwards. 

<p style="text-align: center;"> <img src="/Images/battle_controls/dodge.gif" alt="Dodge" /> </p>

- **Direct Dodge**: Tap to make MC run in the direction selected by the D-Pad.

<p style="text-align: center;"> <img src="/Images/battle_controls/dirrect_dodge.gif" alt="Direct Dodge" /> </p>

- **Perfect Dodge**: If this button is tapped at the exact time that an enemy is about to attack MC, this is called a “Perfect Dodge”. A perfect dodge will trigger an empowered support skill (see below).
- **Basic Attack (BA)**: Tapping the button will make MC use her basic attack. Tapping repeatedly will execute a chain of basic attacks. Usually, a chain of attacks is referred to as 4BA or 2BA, etc.  The number before BA indicates how many attacks in the chain you need to do.

<p style="text-align: center;"> <img src="/Images/battle_controls/BA.gif" alt="Basic attack" /> </p>
<p style="text-align: center;"> <img src="/Images/battle_controls/4BA.gif" alt="Chain of 4 Basic attacks" /> </p>

- **Cancel animation**: The dodge button is often uses to cancel long skill animations or to interrupt chains of attacks. Sometimes in guides, it is recommended to not do the full chain of BA. In that case you need to dodge to interrupt it.

<p style="text-align: center;"> <img src="/Images/battle_controls/2BA.gif" alt="Chain of 2 Basic attacks with cancel" /> </p>

- **Charged Attack (CA)**: Holding the button will make MC use a charged attack. 

<p style="text-align: center;"> <img src="/Images/battle_controls/CA.gif" alt="Charged attack" /> </p>

- **Active Skill**: MC’s weapon has a special attack that deals more damage. The number under the button indicates how many energy charges are required to execute the attack. In most cases it is 1 energy.

<p style="text-align: center;"> <img src="/Images/battle_controls/active.gif" alt="Active skill" /> </p>

- **Resonance Skill (Reso)**: Partner up with your companion to unleash a joint attack that can break protocore shield(s). The number under the button indicates how many energy charges are required to execute the attack. Usually it is 2 energy.

<p style="text-align: center;"> <img src="/Images/battle_controls/reso.gif" alt="Resonance skill" /> </p>

- **Ardent Oath**: Can be considered an ultimate (ult) attack. MC and companion will work together to unleash a heavier attack. It comes with an animation that does not use up battle time and can be skipped if allowed in the battle settings. 

<p style="text-align: center;"> <img src="/Images/battle_controls/oath.gif" alt="Ardent Oath" /> </p>

- **Support Skill**: Command your companion to unleash a special attack. 

<p style="text-align: center;"> <img src="/Images/battle_controls/support.gif" alt="Support skill" /> </p>

- **Empowered Support Skill**: After triggering a perfect dodge, the support skill CD will end immediately and the button will flash for a short period of time. When used in its flashing state, the support skill is empowered with additional power, specific to the companion. After using an empowered skill, it enters cooldown and cannot be triggered for a short period. Note that if the support skill is not used before the flashing stops, this cooldown does not start and you can immediately trigger another empowered support. In some cases, this functionality can be used to continuously shorten the CD of the support skill.

<p style="text-align: center;"> <img src="/Images/battle_controls/emp_support.gif" alt="Empowered Support skill" /> </p>

# Normal vs Critical vs Weakened Damage
There are three types of damage that can be inflicted on enemies: normal, critical and weakened. 

Companion kit descriptions in the game describe damage in terms of multiples of a team’s stats (ex. Hunter guns’ first basic attack deals 44 + 59% ATK DMG). 

**Normal**:
**Normal** damage is determined by taking this basic formula and applying the team stats to it. Normal damage numbers appear as **White** values in battle. 

**Critical**:
A **critical hit** is when a normal attack is enhanced. How often this can happen is determined by the team’s **Crit Rate** and the amount of enhancement is determined by the team’s **Crit DMG**. For example, if the team has 57% crit rate, then approximately 57% of all hits on the enemy are critical hits. If this team has 157% crit dmg, then when a crit hit is dealt, it will be +57% higher than the normal value (if normal damage is 1000, then the crit hit will be 1570). Critical damage numbers appear as **Yellow** values in battle. 

**Weakened**:
When an enemy is weakened, they cannot take normal or critical damage. All damage is converted into **weakened** damage, and is calculated based on the team’s **damage boost to weakened stat** (d2w). Weakened damage numbers appear as **Blue/Purple** values in battle. 

>[!warning] Oath doesn't crit
> Unless otherwise stated, oath damage **cannot** crit. It is always normal damage or weakened damage. For this reason, it is usually recommended to use oath in weakness to deal more damage.

<p style="text-align: center;"> <img src="/Images/battle_controls/dmg_types.png" alt="Types of damage" /> </p>

>[!tip] Why does this matter?
> When [[Team building#Assembling a team|assembling teams]], it is important to know what sort of enemies are in the stage - this will determine how often the enemy is in a state when it will take normal & critical damage, vs a state when it will take weakened damage.

---
<sup>v1.0 by @jayci_3280 @kemrian. Proofreading by @anan1n @.kitty143</sup>