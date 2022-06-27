import type { Directive } from '../../pet-vue/src/directives';

export const html: Directive = ({ el, get, effect }) => {
  effect(() => {
    el.innerHTML = get();
  });
};
