import { StaticPointer, VoidPointer } from "./core";
import { NativeClass, NativeClassType } from "./nativeclass";
import { NativeType, Type, uint32_t } from "./nativetype";
export declare class SharedPtrBase<T> extends NativeClass {
    vftable: VoidPointer;
    useRef: uint32_t;
    weakRef: uint32_t;
    value: T;
    [NativeType.ctor](): void;
    addRef(): void;
    release(): void;
    _DeleteThis(): void;
    _Destroy(): void;
    static make<T>(type: Type<T>): NativeClassType<SharedPtrBase<T>>;
}
/**
 * wrapper for std::shared_ptr
 */
export declare abstract class SharedPtr<T extends NativeClass> extends NativeClass {
    static readonly type: NativeClassType<any>;
    p: T | null;
    ref: SharedPtrBase<T> | null;
    [NativeType.ctor](): void;
    [NativeType.dtor](): void;
    [NativeType.ctor_copy](value: SharedPtr<T>): void;
    [NativeType.ctor_move](value: SharedPtr<T>): void;
    ctor_move(value: SharedPtr<T>): void;
    assign(value: SharedPtr<T>): this;
    assign_move(value: SharedPtr<T>): this;
    exists(): boolean;
    addRef(): void;
    assignTo(dest: StaticPointer): void;
    dispose(): void;
    abstract create(vftable: VoidPointer): void;
    static make<T extends NativeClass>(cls: {
        new (): T;
    }): NativeClassType<SharedPtr<T>>;
}
