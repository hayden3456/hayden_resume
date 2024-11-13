import { w as setContext, R as slot, S as store_get, T as unsubscribe_stores, x as pop, v as push, V as current_component, W as attr, X as stringify } from './index-D8gnGM2b.js';
import { w as writable } from './index2-DlNtZyGE.js';

/* empty css                                                */
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function Window($$payload, $$props) {
  push();
  let {
    children,
    close = null,
    class: className = "",
    style = "dark",
    blurred = false
  } = $$props;
  let dark = style === "dark";
  let light = style === "light";
  $$payload.out += `<div${attr("class", `${stringify((className ?? "") + " relative z-50 h-fit rounded-lg py-4 pl-6 pr-8")} svelte-oetmi9 ${stringify([
    dark ? "dark" : "",
    light ? "light" : "",
    blurred ? "blurred" : ""
  ].filter(Boolean).join(" "))}`)}><div class="-ml-2 mb-4 flex gap-2">`;
  if (close) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="h-3 w-3 rounded-full bg-red-400 transition hover:brightness-90"></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="h-3 w-3 rounded-full bg-red-400"></div>`;
  }
  $$payload.out += `<!--]--> <div class="h-3 w-3 rounded-full bg-yellow-400"></div> <div class="h-3 w-3 rounded-full bg-green-400"></div></div> <div class="counter-reset-line -ml-2 pt-4 text-sm svelte-oetmi9">`;
  children($$payload);
  $$payload.out += `<!----></div></div>`;
  pop();
}
function Contact_modal($$payload, $$props) {
  let { close } = $$props;
  $$payload.out += `<div class="relative px-6 sm:px-8">`;
  Window($$payload, {
    style: "dark",
    close,
    children: ($$payload2) => {
      $$payload2.out += `<div class="grid max-w-md gap-4 px-2 pb-4 text-left sm:px-4"><h3 class="mb-2 text-3xl font-bold tracking-tight text-slate-300">Contact Information</h3> <div class="text-slate-400 font-large"><p>Name: Kayly Sefcik</p> <p>Email: kayly.sefcik [at] gmail.com</p> <p>Phone Number: (72[zero]) 369-7394</p></div> <div class="flex flex-col gap-3 mt-4"><button type="button" class="w-full rounded-full bg-slate-300 p-2 font-bold tracking-widest text-slate-700 transition-all duration-500 ease-in-out hover:brightness-105">CLOSE</button></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Linked_in($$payload) {
  $$payload.out += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>`;
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  var modal = setContext("modal", { visible: writable(false) });
  let { visible } = modal;
  function toggleModal() {
    visible.set(!store_get($$store_subs ??= {}, "$visible", visible));
  }
  let unsubscribe = visible.subscribe((value) => {
    return;
  });
  onDestroy(unsubscribe);
  $$payload.out += `<nav class="absolute left-0 right-0 z-50 mx-auto max-w-7xl p-4 md:p-6"><ul class="flex items-end justify-between text-slate-700"><li><a href="/" class="-ml-2 block p-2 text-sm font-bold tracking-tight">Kayly Sefcik</a></li> <li class="flex-1"></li> <li><a href="https://www.linkedin.com/in/kayly-sefcik/" class="-mr-1 block h-10 w-10 p-1">`;
  Linked_in($$payload);
  $$payload.out += `<!----></a></li></ul></nav> <main><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="left-0 -mt-2 w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-900 py-24"><div class="relative mx-auto max-w-7xl px-4 md:px-6"><a href="#top" class="mb-2 block text-base font-bold tracking-tight text-slate-400">Kayly Sefcik</a> <ul class="flex justify-between border-t border-slate-800 pt-16 text-sm text-slate-500 sm:gap-32"><li class="hidden flex-1 sm:block"></li> <li><ol class="flex flex-col gap-2 font-medium leading-loose tracking-tight"><li><button>CONTACT ME</button></li> <li><a href="#about">ABOUT ME</a></li> <li><a href="#work">WORK</a></li> <li><a href="#education">EDUCATION</a></li></ol></li> <li><a href="https://www.linkedin.com/in/kayly-sefcik/" class="-mr-1 block h-10 w-10 p-1">`;
  Linked_in($$payload);
  $$payload.out += `<!----></a></li></ul></div></footer> `;
  if (store_get($$store_subs ??= {}, "$visible", visible)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="fixed top-0 z-[100] flex h-full w-full cursor-default items-center justify-center bg-white/70 sm:bg-white/50 sm:backdrop-blur">`;
    Contact_modal($$payload, { close: toggleModal });
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-C-gY_jve.js.map
