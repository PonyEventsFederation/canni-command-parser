declare class Nominal<T> { #__private: T }

export default function create(path?: string): NativeExports;

export type NativeExports = {
	h: () => string;
	random: (min: number, max: number, precise: boolean) => number;
};
