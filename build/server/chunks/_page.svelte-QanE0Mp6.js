import { x as pop, v as push, _ as getContext, $ as ensure_array_like, a0 as fallback, W as attr, Z as escape_html, a1 as bind_props, X as stringify } from './index-D8gnGM2b.js';

/* empty css                                                */
function Hero($$payload, $$props) {
  push();
  getContext("modal");
  $$payload.out += `<div class="relative flex h-[100vh] w-full flex-col justify-end overflow-hidden bg-[#fcedd1]"><div class="darken-edges absolute z-50 h-[100vh] w-full svelte-1g2vnke"></div> <div class="parallax absolute bottom-0 left-0 right-0 z-0 h-full overflow-hidden bg-[#fcedd1] bg-[url('/images/stars.webp')] bg-no-repeat pl-24 opacity-15 bg-blend-multiply [--parallax-speed:8]"></div> <div class="parallax absolute bottom-0 left-0 right-0 z-10 h-full overflow-hidden rounded-tl-full bg-[#fae4c9] bg-[url('/images/kayly_cliff.jpg')] bg-cover bg-top pl-24 opacity-15 bg-blend-multiply [--parallax-speed:6]"></div> <div class="parallax absolute bottom-0 left-12 right-0 z-20 h-[60vh] rounded-tl-full bg-[#f8d8c1] [--parallax-speed:4]"></div> <div class="parallax bg-coverbg-center absolute bottom-0 left-24 right-0 z-30 h-[45vh] rounded-tl-full bg-[#f7c6b1] bg-[url('/images/kayly_cliff1.jpg')] bg-cover opacity-70 bg-blend-multiply [--parallax-speed:2|]"></div> <div class="parallax absolute left-0 right-0 top-[15vh] z-50 mx-auto w-fit px-4 text-left text-2xl [--parallax-speed:2] md:bottom-1/2 md:px-6 [@media_((min-height:600px)_and_(min-width:640px))]:text-4xl [@media_((min-height:800px)_and_(min-width:768px))]:text-5xl"><p class="font-['Roboto_Mono'] font-medium leading-none tracking-tight text-slate-600 drop-shadow"><span class="font-normal text-slate-500/15"></span>    Nice to meet you, my name's <span class="text-indigo-500/50">Kayly</span> <span class="cursor active font-['Roboto_Mono'] text-slate-500/30" id="cursor-1">▐</span></p> <p class="mt-12 hidden max-w-[45rem] border-t border-slate-400/25 pt-8 text-sm leading-snug tracking-tight text-slate-600 md:text-base [@media(min-height:600px)]:block">I'm a <strong>chemical engineer</strong> that enjoys building things, solving
			problems and learning how stuff works. Thanks for stopping by and welcome to my page!</p> <button class="mt-16 flex items-center gap-1 rounded-full bg-slate-700 py-2 pl-6 pr-5 text-sm font-bold tracking-widest text-slate-300 shadow-lg shadow-slate-700/10 transition-all duration-500 ease-in-out hover:brightness-125">CONTACT ME <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div> <div class="relative z-40 h-[40vh] w-full min-w-[100vh] bg-[url('/images/kaylybg1.png')] bg-cover bg-top md:mt-44 xl:h-[50vh]"></div> <a href="#about" aria-label="To go to about section"><div class="absolute bottom-12 left-0 right-0 z-50 mx-auto h-16 w-16 animate-bounce rounded-full bg-slate-900/20 p-4 text-slate-200 md:h-20 md:w-20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></div></a></div>`;
  pop();
}
function About($$payload) {
  $$payload.out += `<div class="relative left-0 z-50 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/95 py-24 mix-blend-multiply backdrop-blur"><div class="relative mx-auto max-w-7xl px-4 md:px-6"><a id="about"><h2 class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-tight text-[#fce4b8]">ABOUT ME</h2></a> <p class="mb-16 pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 md:text-3xl lg:w-1/2">My name is <span class="font-bold">Kayly Sefcik</span>. I'm a chemical engineer with a minor in biomedical engineering, passionate about catalysis, process optimization, and safety in chemical processes.</p> <div class="gap-24 text-pretty md:columns-2"><p class="text-sm leading-normal text-slate-400 sm:text-base">I have experience working on advanced chemical reactions, specifically in catalysis and gas reforming, using mass spectrometry analysis. My work includes the synthesis of catalysts and operational efficiency enhancements in chemical plants.</p> <p class="mt-8 text-sm leading-normal text-slate-400 sm:text-base">In my professional journey, I have also focused on process safety and optimization, utilizing software like Aspen Plus, MATLAB, and COMSOL. My experience includes developing training simulators for DCP Midstream, as well as automation models in Excel VBA to streamline lab data analysis.</p> <p class="mt-8 text-sm leading-normal text-slate-400 sm:text-base">Recently, I completed a Bachelor of Science in Chemical Engineering from the Colorado School of Mines, where I received the President’s Merit Scholarship and maintained a GPA of 3.942. In addition to my studies, I gained valuable hands-on experience as an intern at DCP Midstream and as an undergraduate researcher in catalysis.</p> <p class="mt-8 text-sm leading-normal text-slate-400 sm:text-base">Feel free to keep scrolling to learn more about my work and achievements. For additional details or references, please contact me directly.</p></div></div></div>`;
}
function Milestone($$payload, $$props) {
  let heading = fallback($$props["heading"], "");
  let subheading = fallback($$props["subheading"], "");
  let body = fallback($$props["body"], () => [], true);
  let keywords = fallback($$props["keywords"], () => [], true);
  let icons = fallback($$props["icons"], () => [], true);
  let from = fallback($$props["from"], "");
  let to = fallback($$props["to"], "");
  let active = fallback($$props["active"], false);
  const each_array = ensure_array_like(body);
  const each_array_1 = ensure_array_like(keywords);
  const each_array_2 = ensure_array_like(icons);
  $$payload.out += `<div${attr("class", `milestone relative mx-auto flex max-w-3xl items-start justify-center sm:pl-8 sm:before:absolute sm:before:inset-0 sm:before:-left-72 sm:before:h-[1px] sm:before:w-1/2 sm:before:bg-gradient-to-r sm:before:from-white/25 sm:before:to-transparent ${stringify([active ? "active" : ""].filter(Boolean).join(" "))}`)}><time class="glass hidden h-20 w-48 shrink-0 items-center justify-center rounded-bl border border-b-black/10 border-l-white/10 border-r-black/10 border-t-white/10 bg-white/20 p-2 font-['Roboto_Mono'] text-xs font-semibold text-slate-300 shadow sm:flex">${escape_html(from)} - ${escape_html(to)}</time> <div class="glass w-full rounded-lg rounded-b-lg rounded-r-lg border border-b-black/10 border-l-white/10 border-r-black/10 border-t-white/10 bg-white/10 p-4 shadow sm:rounded-tl-none sm:p-6"><div><h2 class="text-xl font-bold tracking-tight text-slate-300 sm:text-2xl">${escape_html(heading)}</h2> <h3 class="font-['Roboto_Mono'] text-sm tracking-tight text-[#fce4b8] drop-shadow lg:text-base">${escape_html(subheading)}</h3></div> <div class="col-span-2 mt-6 flex flex-col gap-4 text-pretty text-xs text-slate-300 sm:text-sm"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let paragraph = each_array[$$index];
    $$payload.out += `<p class="leading-normal tracking-normal">${escape_html(paragraph)}</p>`;
  }
  $$payload.out += `<!--]--> <div class="my-6"><ul class="flex flex-wrap gap-1 font-['Roboto_Mono'] text-[0.7rem] leading-snug tracking-wide text-white/75"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let keyword = each_array_1[$$index_1];
    $$payload.out += `<li class="rounded-full bg-black/20 px-2 py-0.5">${escape_html(keyword)}</li>`;
  }
  $$payload.out += `<!--]--></ul></div></div> <div class="flex flex-wrap gap-3.5"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let icon = each_array_2[$$index_2];
    $$payload.out += `<!---->`;
    icon?.($$payload, {});
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></div></div></div>`;
  bind_props($$props, {
    heading,
    subheading,
    body,
    keywords,
    icons,
    from,
    to,
    active
  });
}
function Microsoft_office($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/microsoft-office.svg" alt="Microsoft"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Microsoft</div></div>`;
}
function Aspen($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/aspen.png" alt="Aspen Plus"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Aspen Plus</div></div>`;
}
function Matlab($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/Matlab_Logo.png" alt="&lt;Matlab>"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Simulink</div></div>`;
}
function Polymath($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/polymath.svg" alt="PolyMath"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">PolyMath</div></div>`;
}
function Wonderware($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/Wonderware.png" alt="Wonderware"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Wonderware</div></div>`;
}
function Comsol($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/comsol.svg" alt="comsol"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Comsol</div></div>`;
}
function Emerson($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/emerson.png" alt="Emerson"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Emerson</div></div>`;
}
function Vmg($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/vmg.png" alt="Angular"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">VMG</div></div>`;
}
function Seeq($$payload) {
  $$payload.out += `<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/seeq.png" alt="Seeq"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Seeq</div></div>`;
}
function Work($$payload, $$props) {
  push();
  const work = [
    {
      from: "Fall 2024",
      to: "Present",
      title: "Undergraduate Researcher",
      workPlace: "@The Lab of Catalysis & Applied Technology in Surface Science",
      body: [
        "Ran catalytic reactions with mass spectrometry analysis for the dry reforming of methane and the reverse water gas shift to assess the efficiency of various catalytic designs.",
        "Developed synthesis procedures for catalysts and silica deposition on porous catalytic supports. Heavy literature research conducted.",
        "Developed fully automated model in Excel for all analysis required in lab."
      ],
      keywords: [
        "Catalysis",
        "Mass Spectrometry",
        "Chemical Engineering",
        "Laboratory Techniques",
        "Excel",
        "VBA",
        "Data Analysis"
      ],
      icons: [
        Microsoft_office,
        Aspen,
        Matlab,
        Polymath,
        Comsol
      ]
    },
    {
      from: "Summer 2024",
      to: "Summer 2024",
      title: "Chemical Engineer",
      workPlace: "@Field Session",
      body: [
        "Completed nine labs within a six-week timeframe with 24-hour turnaround presentations and weekly reports combined with regular coursework and attendance.",
        "Completed HAZOPs, oral briefings, computer simulations (Aspen Plus), and statistical analysis."
      ],
      keywords: [
        "HAZOP",
        "Aspen Plus",
        "Statistical Analysis",
        "Chemical Engineering",
        "Laboratory",
        "Time Management",
        "Presentation Skills"
      ],
      icons: [Aspen, Matlab]
    },
    {
      from: "Summer 2022",
      to: "Summer 2023",
      title: "Chemical Engineering Intern",
      workPlace: "@DCP Midstream, Denver, CO",
      body: [
        "Collaborated with diverse engineering teams to enhance operational efficiency using software control systems for chemical plants.",
        "Led the development of training simulators in Excel VBA to train new employees, simulating real-time plant control systems.",
        "Contributed to process optimization projects and safety compliance initiatives, ensuring adherence to industry best practices.",
        "Navigated Wonderware, DeltaV, and FoxView software for advanced operator displays.",
        "Analyzed company P&IDs to generate thermodynamic/process simulations with VMG Symmetry Simulation Software.",
        "Compiled large amounts of PI data, manipulated in Seeq, to create a simple visual format for easy identification of future mechanical failures (for heat exchangers)."
      ],
      keywords: [
        "Process Optimization",
        "Excel VBA",
        "Chemical Engineering",
        "Process Simulation",
        "VMG Symmetry",
        "Wonderware",
        "DeltaV",
        "FoxView",
        "PI Data",
        "Seeq",
        "Heat Exchangers",
        "Safety Compliance",
        "P&IDs"
      ],
      icons: [
        Microsoft_office,
        Seeq,
        Wonderware,
        Vmg,
        Emerson
      ]
    },
    {
      from: "Jan 2022",
      to: "Mar 2022",
      title: "Math Tutor",
      workPlace: "@Learning League, Arvada, CO",
      body: [
        "Prepared educational material, assessing student progress and adapting methods to improve performance, overcoming educational challenges due to the COVID-19 pandemic."
      ],
      keywords: [
        "Teaching",
        "Mathematics",
        "Tutoring",
        "Education",
        "Adaptability",
        "COVID-19"
      ],
      icons: []
    }
  ];
  const each_array = ensure_array_like(work);
  $$payload.out += `<div class="left-0 -mt-2 w-full overflow-hidden border-t-8 border-slate-700 bg-slate-800 pb-12 pt-24 md:py-24"><div class="relative mx-auto max-w-7xl px-4 md:px-6"><div class="parallax absolute -top-24 right-48 z-0 -mx-96 h-full w-full bg-[url('/images/coffee.webp')] bg-contain bg-no-repeat opacity-50 bg-blend-normal drop-shadow [--parallax-speed:5] sm:right-24 sm:bg-auto md:-right-[10vw] lg:opacity-100"></div> <a id="work"><h2 class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-wide text-[#fce4b8]">WORK</h2></a> <p class="relative z-20 mb-64 text-pretty pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 drop-shadow-lg md:text-3xl lg:w-1/2">The places I have worked at and what I got to build.</p> <div class="relative mx-auto space-y-12 overflow-hidden via-90% pb-4 sm:pt-8 sm:before:absolute sm:before:inset-0 sm:before:left-[1px] sm:before:h-full sm:before:w-[1px] sm:before:-translate-x-px sm:before:bg-gradient-to-b sm:before:from-white/25 sm:before:via-white/25 sm:before:to-transparent"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let w = each_array[i];
    Milestone($$payload, {
      from: w.from,
      to: w.to,
      heading: w.title,
      subheading: w.workPlace,
      body: w.body,
      keywords: w.keywords,
      icons: w.icons,
      active: i === 0
    });
  }
  $$payload.out += `<!--]--></div></div></div>`;
  pop();
}
function Education($$payload) {
  $$payload.out += `<div class="bg-slate-200"><div class="relative z-40 mx-auto max-w-7xl px-4 py-24 md:px-6"><a id="education"><h2 class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-tight text-slate-700"><span class="text-slate-700/50"></span>EDUCATION</h2></a> <div class="relative flex w-full flex-col items-center gap-16 text-sm text-slate-600 md:flex-row xl:gap-24"><div class="w-full min-w-80 max-w-full flex-1 gap-10 text-pretty rounded border-4 border-b-slate-800 border-l-slate-400 border-r-slate-800 border-t-slate-400 bg-gradient-to-br from-slate-700 to-slate-600 p-6 text-center text-sm text-slate-600 shadow-lg shadow-slate-400 sm:p-8 md:block md:w-[36rem]"><div class="border-2 border-b-slate-400 border-l-slate-800 border-r-slate-400 border-t-slate-800 bg-slate-200 p-4"><div class="rounded border border-slate-300 p-1"><div class="rounded border border-slate-200 bg-gradient-to-br from-white to-slate-100 px-6 py-4 sm:px-8 sm:py-6"><div class="mx-auto mb-4 h-12 w-10 rounded-b-full bg-[#f7c6b1] sm:mb-6"></div> <h2 class="mb-4 text-center text-lg font-bold text-slate-600 sm:mb-6 sm:text-xl">Colorado School of Mines</h2> <h3>Bachelor of Engineering in</h3> <h4 class="text-lg font-bold text-slate-700 sm:text-xl">Chemical Engineering</h4> <h4 class="hidden text-lg font-bold text-slate-500 sm:block">2024</h4> <div class="mt-6 grid w-full grid-cols-3 grid-rows-2 gap-2 sm:mt-16"><div class="row-span-2 ml-0 h-full w-12 rounded-full bg-slate-400"></div> <div class="ml-0 h-2 w-1/2 rounded-full bg-slate-300"></div> <div class="h-2 w-1/2 rounded-full bg-slate-300"></div> <div class="h-2 w-4/5 rounded-full bg-slate-300"></div> <div class="h-2 w-5/6 rounded-full bg-slate-300"></div></div></div></div></div></div> <div class="md:mt-8 md:w-2/5"><p class="mb-2 text-pretty text-2xl font-bold leading-tight tracking-tight text-slate-700 sm:text-3xl">Graduated from Colorado School of Mines with a degree in Chemical Engineering</p> <p class="mb-8 text-sm text-slate-500 sm:text-lg">GPA: 3.942/4.0</p> <p class="hidden text-xs sm:block sm:text-sm">Beyond formal education, I am constantly learning about engineering topics I find interesting or that
					can improve my work.</p></div></div></div></div>`;
}
function _page($$payload, $$props) {
  push();
  Hero($$payload);
  $$payload.out += `<!----> <div class="relative z-50 h-4 w-full bg-slate-700 svelte-1iiyzmn"></div> `;
  About($$payload);
  $$payload.out += `<!----> <div class="relative z-50 h-4 w-full bg-slate-700 svelte-1iiyzmn"></div> `;
  Work($$payload);
  $$payload.out += `<!----> <div class="relative z-50 h-4 w-full bg-slate-700 svelte-1iiyzmn"></div> `;
  Education($$payload);
  $$payload.out += `<!---->`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-QanE0Mp6.js.map
