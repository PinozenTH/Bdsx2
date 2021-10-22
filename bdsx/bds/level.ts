import { abstract } from "../common";
import type { VoidPointer } from "../core";
import { CxxVector, CxxVectorLike } from "../cxxvector";
import { NativeClass } from "../nativeclass";
import type { Actor, ActorDefinitionIdentifier, ActorUniqueID, DimensionId, EntityRefTraits, ItemActor } from "./actor";
import type { BlockLegacy, BlockSource } from "./block";
import type { BlockPos, Vec3 } from "./blockpos";
import type { Dimension } from "./dimension";
import type { GameRules } from "./gamerules";
import type { ItemStack } from "./inventory";
import type { ServerPlayer } from "./player";
import type { Scoreboard } from "./scoreboard";

export enum Difficulty {
    Peaceful,
    Easy,
    Normal,
    Hard,
}

export class Level extends NativeClass {
    vftable:VoidPointer;
    /** @deprecated use getPlayers() */
    get players():CxxVectorLike<ServerPlayer> {
        const players = new CxxVectorLike(this.getPlayers());
        Object.defineProperty(this, 'players', {
            get(){
                players.setFromArray(this.getPlayers());
                return players;
            }
        });
        return players;
    }

    getPlayers():ServerPlayer[] {
        abstract();
    }
    getUsers():CxxVector<EntityRefTraits> {
        abstract();
    }
    protected _getEntities():CxxVector<EntityRefTraits> {
        abstract();
    }
    getEntities():Actor[] {
        abstract();
    }
    createDimension(id:DimensionId):Dimension {
        abstract();
    }
    destroyBlock(blockSource:BlockSource, blockPos:BlockPos, dropResources:boolean):boolean {
        abstract();
    }
    fetchEntity(id:ActorUniqueID, fetchRemovedActor:boolean):Actor|null {
        abstract();
    }
    getActivePlayerCount():number {
        abstract();
    }
    getActorFactory():ActorFactory {
        abstract();
    }
    getAdventureSettings():AdventureSettings {
        abstract();
    }
    getBlockPalette():BlockPalette {
        abstract();
    }
    getDimension(dimension:DimensionId):Dimension|null {
        abstract();
    }
    getLevelData():LevelData {
        abstract();
    }
    getGameRules():GameRules {
        abstract();
    }
    getScoreboard():Scoreboard {
        abstract();
    }
    getSeed():number {
        abstract();
    }
    getSpawner():Spawner {
        abstract();
    }
    getTagRegistry():TagRegistry {
        abstract();
    }
    getTime():number {
        abstract();
    }
    hasCommandsEnabled():boolean {
        abstract();
    }
    setCommandsEnabled(value:boolean):void {
        abstract();
    }
    setShouldSendSleepMessage(value:boolean):void {
        abstract();
    }
    setTime(time: number):void {
        abstract();
    }
    syncGameRules():void {
        abstract();
    }
    /** @param effectName accepts format like "minecraft:arrow_spell_emitter" */
    spawnParticleEffect(effectName:string, spawnLocation:Vec3, dimension:Dimension):void {
        abstract();
    }
}

export class ServerLevel extends Level {
}

export class LevelData extends NativeClass {
    getGameDifficulty():Difficulty {
        abstract();
    }
    setGameDifficulty(value:Difficulty):void {
        abstract();
    }
}

export class ActorFactory extends NativeClass {
}
export class BlockPalette extends NativeClass {
    /** @param name only accepts format like "minecraft:wool" */
    getBlockLegacy(name:BlockId):BlockLegacy;
    getBlockLegacy(name:string):BlockLegacy;
    getBlockLegacy(name:BlockId|string):BlockLegacy {
        abstract();
    }
}

export class AdventureSettings extends NativeClass {
}

export class TagRegistry extends NativeClass {
}

export class Spawner extends NativeClass {
    spawnItem(region:BlockSource, itemStack:ItemStack, pos:Vec3, throwTime:number):ItemActor {
        abstract();
    }
    spawnMob(region:BlockSource, id:ActorDefinitionIdentifier, pos:Vec3, naturalSpawn = false, surface = true, fromSpawner = false):Actor {
        abstract();
    }
}
