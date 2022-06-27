import { Context } from '../context';
import { effect as rawEffect } from '@vue/reactivity';
import { bind } from './bind';
import { on } from './on';
import { text } from './text';
import { effect } from './effect';

export interface Directive<T = Element> {
  (ctx: DirectiveContext<T>): (() => void) | void;
}

export interface DirectiveContext<T = Element> {
  el: T;
  get: (exp?: string) => any;
  effect: typeof rawEffect;
  exp: string;
  arg?: string;
  modifiers?: Record<string, true>;
  ctx: Context;
}

export const builtInDirectives: Record<string, Directive<any>> = {
  bind,
  on,
  text,
  effect,
};
