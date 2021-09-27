import { NativeClass } from "../nativeclass";
import { bool_t, float32_t, int32_t } from "../nativetype";
export declare enum GameRuleId {
    CommandBlockOutput = 0,
    DoDaylightCycle = 1,
    DoEntityDrops = 2,
    DoFireTick = 3,
    DoMobLoot = 4,
    DoMobSpawning = 5,
    DoTileDrops = 6,
    DoWeatherCycle = 7,
    DrowningDamage = 8,
    FallDamage = 9,
    FireDamage = 10,
    KeepInventory = 11,
    MobGriefing = 12,
    Pvp = 13,
    ShowCoordinates = 14,
    NaturalRegeneration = 15,
    TntExplodes = 16,
    SendCommandFeedback = 17,
    MaxCommandChainLength = 18,
    DoInsomnia = 19,
    CommandBlocksEnabled = 20,
    RandomTickSpeed = 21,
    DoImmediateRespawn = 22,
    ShowDeathMessages = 23,
    FunctionCommandLimit = 24,
    SpawnRadius = 25,
    ShowTags = 26,
    FreezeDamage = 27
}
export declare class GameRules extends NativeClass {
    getRule(id: GameRuleId): GameRule;
    hasRule(id: GameRuleId): boolean;
    setRule(id: GameRuleId, value: boolean | number, type?: GameRule.Type): void;
    static nameToGameRuleIndex(name: string): number;
}
export declare class GameRule extends NativeClass {
    shouldSave: bool_t;
    type: GameRule.Type;
    value: GameRule.Value;
    getBool(): boolean;
    getInt(): number;
    getFloat(): number;
    setBool(value: boolean): void;
    setInt(value: number): void;
    setFloat(value: number): void;
    getValue(): boolean | number | undefined;
    setValue(value: boolean | number, type?: GameRule.Type): void;
}
export declare namespace GameRule {
    enum Type {
        Invalid = 0,
        Bool = 1,
        Int = 2,
        Float = 3
    }
    class Value extends NativeClass {
        boolVal: bool_t;
        intVal: int32_t;
        floatVal: float32_t;
    }
}
