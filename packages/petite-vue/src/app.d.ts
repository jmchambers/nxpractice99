import { Directive } from './directives';
export declare const createApp: (initialData?: any) => {
    directive(name: string, def?: Directive): Directive<Element> | any;
    mount(el?: string | Element | null): any | undefined;
    unmount(): void;
};
