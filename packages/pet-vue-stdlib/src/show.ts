import type { Directive } from '../../pet-vue/src/directives';

export const show: Directive<HTMLElement> = ({ el, get, effect }) => {
  const initialDisplay = el.style.display;
  effect(() => {
    el.style.display = get() ? initialDisplay : 'none';
  });
};
