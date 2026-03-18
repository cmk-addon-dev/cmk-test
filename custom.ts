
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

//% emitAsConstant
declare const enum ProjectileMobArrow {
    //% block="arrow" enumval=80 alias=ARROW_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=ARROW_PROJECTILE_MOB
    //% jres=Item.Arrow
    Arrow,
}

//% emitAsConstant
declare const enum ProjectileMobSnowball {
    //% block="snowball" enumval=81 alias=SNOWBALL_PROJECTILE_MOB
    //% blockIdentity="mobs.projectile" alias=SNOWBALL_PROJECTILE_MOB
    //% jres=Item.Snowball
    Snowball,
}

//% emitAsConstant
declare const enum ProjectileMobTnt {
    //% block="primed tnt" enumval=65 alias="PRIMED_TNT"
    //% blockIdentity="mobs.projectile" alias=PRIMED_TNT
    //% jres=Block.TNT
    PrimedTnt,
}

//% emitAsConstant
declare const enum ProjectileMobLightningBolt {
    //% block="lightning bolt" enumval=93 alias=LIGHTNING_BOLT
    //% blockIdentity="mobs.projectile" alias=LIGHTNING_BOLT
    //% jres=Item.LightningBolt
    LightningBolt,
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace mobs {
    //% block="や $projectile"
    //% blockId=mobs.projectileArrow
    export function projectileMobArrow(projectile: ProjectileMobArrow): number {
        return projectile as number;
    }
    //% block="ゆきだま $projectile"
    //% blockId=mobs.projectileSnowball
    export function projectileMobSnowball(projectile: ProjectileMobSnowball): number {
        return projectile as number;
    }
    //% block="ＴＮＴ $projectile"
    //% blockId=mobs.projectileTnt
    export function projectileMobTnt(projectile: ProjectileMobTnt): number {
        return projectile as number;
    }
    //% block="かみなり $projectile"
    //% blockId=mobs.projectileLightningBolt
    export function projectileMobLightningBolt(projectile: ProjectileMobLightningBolt): number {
        return projectile as number;
    }
}
