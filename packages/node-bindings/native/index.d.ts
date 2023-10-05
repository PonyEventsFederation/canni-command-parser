declare function create(path?: string): NativeExports;
export default create;

declare class Nominal<T> { #__private: T }

export type NativeExports = {
	h: () => string
};
