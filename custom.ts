
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

//% emitAsConstant
declare const enum ProjectileMob2 {
    //% block="primed tnt" enumval=65 alias="PRIMED_TNT"
    //% blockIdentity="mobs.projectile" alias=PRIMED_TNT
    //% jres=Block.TNT
    PrimedTnt,
    //% block="xp bottle" enumval=68 alias=XP_BOTTLE
    //% blockIdentity="mobs.projectile" alias=XP_BOTTLE
    //% jres=Item.ExperienceBottle
    XpBottle,
    //% block="xp orb" enumval=69 alias=XP_ORB
    //% blockIdentity="mobs.projectile" alias=XP_ORB
    //% jres=Item.XpOrb
    XpOrb,
    //% block="fireworks rocket" enumval=72 alias=FIREWORKS_ROCKET
    //% blockIdentity="mobs.projectile" alias=FIREWORKS_ROCKET
    //% jres=Item.FireworksRocket
    FireworksRocket,
    //% block="arrow" enumval=80 alias=ARROW_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=ARROW_PROJECTILE_MOB
    //% jres=Item.Arrow
    Arrow,
    //% block="snowball" enumval=81 alias=SNOWBALL_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=SNOWBALL_PROJECTILE_MOB
    //% jres=Item.Snowball
    Snowball,
    //% block="egg" enumval=82 alias=EGG_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=EGG_PROJECTILE_MOB
    //% jres=Item.Egg
    Egg,
    //% block="splash potion" enumval=86 alias=SPLASH_POTION
    //% blockIdentity="mobs.projectile" alias=SPLASH_POTION
    //% jres=Item.SplashPotion
    SplashPotion,
    //% block="lightning bolt" enumval=93 alias=LIGHTNING_BOLT
    //% blockIdentity="mobs.projectile" alias=LIGHTNING_BOLT
    //% jres=Item.LightningBolt
    LightningBolt,
    //% block="evocation fang" enumval=103 alias=EVOCATION_FANG
    //% blockIdentity="mobs.projectile" alias=EVOCATION_FANG
    //% jres=Item.EvocationFang
    EvocationFang
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace mobs {

    // //% emitAsConstant
    // export const enum MyEnum {
    //     //% block="one"
    //     One,
    //     //% block="two"
    //     Two
    // }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here, eg: MyEnum.Two
     */
    //% block
    // export function foo(n: number, s: string, e: MyEnum): void {
    //     // Add code here
    // }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: MyEnum.Two
     */
    //% block="飛び道具 $projectileMob2"
    //% blockId=mobs.projectile
    export function projectileMob2(projectileMob2: ProjectileMob2): number {
        return projectileMob2 as number;
    }
}
