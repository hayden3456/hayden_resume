import{e as xe,a as u,t as b,f as we,b as L}from"../chunks/disclose-version.D5x2prPc.js";import{i as U}from"../chunks/legacy.DqUUrWkn.js";import{ag as ye,b as ke,h as R,N as W,a as _e,J as Me,ar as me,L as Ce,M as ie,O as F,d as j,az as H,K as ve,c as fe,p as Ee,G as le,aA as se,aB as Ae,aq as Se,aC as Ie,a4 as Pe,af as ze,an as Te,ae as De,a8 as Oe,aD as J,aE as Y,a2 as Re,B as re,aF as ue,aG as Ve,aH as Be,al as Le,e as Z,aI as je,g as $,j as I,i as M,r as p,a5 as He,t as K,f as ge,v as P}from"../chunks/runtime.Bw3E3tKW.js";import{p as T,o as pe}from"../chunks/index-client.BfS28M-C.js";import{a as Ne,b as be}from"../chunks/util.BWyIX4nH.js";import{c as qe}from"../chunks/svelte-component.CH8aBv-S.js";function N(t,e){return e}function Ge(t,e,a,i){for(var r=[],o=e.length,c=0;c<o;c++)Ae(e[c].e,r,!0);var v=o>0&&r.length===0&&a!==null;if(v){var h=a.parentNode;Se(h),h.append(a),i.clear(),D(t,e[0].prev,e[o-1].next)}Ie(r,()=>{for(var x=0;x<o;x++){var f=e[x];v||(i.delete(f.k),D(t,f.prev,f.next)),Pe(f.e,!v)}})}function q(t,e,a,i,r,o=null){var c=t,v={flags:e,items:new Map,first:null},h=(e&ue)!==0;if(h){var x=t;c=R?W(ze(x)):x.appendChild(ye())}R&&_e();var f=null,A=!1;ke(()=>{var l=a(),m=Me(l)?l:l==null?[]:me(l),n=m.length;if(A&&n===0)return;A=n===0;let C=!1;if(R){var w=c.data===Ce;w!==(n===0)&&(c=ie(),W(c),F(!1),C=!0)}if(R){for(var y=null,E,g=0;g<n;g++){if(j.nodeType===8&&j.data===Te){c=j,C=!0,F(!1);break}var s=m[g],d=i(s,g);E=he(j,v,y,null,s,d,g,r,e),v.items.set(d,E),y=E}n>0&&W(ie())}if(!R){var V=De;We(m,v,c,r,e,(V.f&H)!==0,i)}o!==null&&(n===0?f?ve(f):f=fe(()=>o(c)):f!==null&&Ee(f,()=>{f=null})),C&&F(!0),a()}),R&&(c=j)}function We(t,e,a,i,r,o,c){var X,Q,ee,te;var v=(r&Ve)!==0,h=(r&(J|Y))!==0,x=t.length,f=e.items,A=e.first,l=A,m,n=null,C,w=[],y=[],E,g,s,d;if(v)for(d=0;d<x;d+=1)E=t[d],g=c(E,d),s=f.get(g),s!==void 0&&((X=s.a)==null||X.measure(),(C??(C=new Set)).add(s));for(d=0;d<x;d+=1){if(E=t[d],g=c(E,d),s=f.get(g),s===void 0){var V=l?l.e.nodes_start:a;n=he(V,e,n,n===null?e.first:n.next,E,g,d,i,r),f.set(g,n),w=[],y=[],l=n.next;continue}if(h&&Fe(s,E,d,r),s.e.f&H&&(ve(s.e),v&&((Q=s.a)==null||Q.unfix(),(C??(C=new Set)).delete(s))),s!==l){if(m!==void 0&&m.has(s)){if(w.length<y.length){var O=y[0],k;n=O.prev;var z=w[0],_=w[w.length-1];for(k=0;k<w.length;k+=1)oe(w[k],O,a);for(k=0;k<y.length;k+=1)m.delete(y[k]);D(e,z.prev,_.next),D(e,n,z),D(e,_,O),l=O,n=_,d-=1,w=[],y=[]}else m.delete(s),oe(s,l,a),D(e,s.prev,s.next),D(e,s,n===null?e.first:n.next),D(e,n,s),n=s;continue}for(w=[],y=[];l!==null&&l.k!==g;)(o||!(l.e.f&H))&&(m??(m=new Set)).add(l),y.push(l),l=l.next;if(l===null)continue;s=l}w.push(s),n=s,l=s.next}if(l!==null||m!==void 0){for(var S=m===void 0?[]:me(m);l!==null;)(o||!(l.e.f&H))&&S.push(l),l=l.next;var B=S.length;if(B>0){var G=r&ue&&x===0?a:null;if(v){for(d=0;d<B;d+=1)(ee=S[d].a)==null||ee.measure();for(d=0;d<B;d+=1)(te=S[d].a)==null||te.fix()}Ge(e,S,G,f)}}v&&Oe(()=>{var ae;if(C!==void 0)for(s of C)(ae=s.a)==null||ae.apply()}),le.first=e.first&&e.first.e,le.last=n&&n.e}function Fe(t,e,a,i){i&J&&se(t.v,e),i&Y?se(t.i,a):t.i=a}function he(t,e,a,i,r,o,c,v,h){var x=(h&J)!==0,f=(h&Be)===0,A=x?f?Re(r):re(r):r,l=h&Y?re(c):c,m={i:l,v:A,k:o,a:null,e:null,prev:a,next:i};try{return m.e=fe(()=>v(t,A,l),R),m.e.prev=a&&a.e,m.e.next=i&&i.e,a===null?e.first=m:(a.next=m,a.e.next=m.e),i!==null&&(i.prev=m,i.e.prev=m.e),m}finally{}}function oe(t,e,a){for(var i=t.next?t.next.e.nodes_start:a,r=e?e.e.nodes_start:a,o=t.e.nodes_start;o!==i;){var c=Le(o);r.before(o),o=c}}function D(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}var Ke=(t,e)=>e.visible.set(!0),Ue=b(`<div class="relative flex h-[100vh] w-full flex-col justify-end overflow-hidden bg-[#fcedd1]
"><div class="darken-edges absolute z-50 h-[100vh] w-full svelte-1g2vnke"></div> <div class="parallax absolute bottom-0 left-0 right-0 z-0 h-full overflow-hidden bg-[#fcedd1] bg-[url('/images/stars.webp')] bg-no-repeat pl-24 opacity-15 bg-blend-multiply [--parallax-speed:8]"></div> <div class="parallax absolute bottom-0 left-0 right-0 z-10 h-full overflow-hidden rounded-tl-full bg-[#fae4c9] bg-[url('/images/kayly_cliff.jpg')] bg-cover bg-top pl-24 opacity-15 bg-blend-multiply [--parallax-speed:6]"></div> <div class="parallax absolute bottom-0 left-12 right-0 z-20 h-[60vh] rounded-tl-full bg-[#f8d8c1] [--parallax-speed:4]"></div> <div class="parallax bg-coverbg-center absolute bottom-0 left-24 right-0 z-30 h-[45vh] rounded-tl-full bg-[#f7c6b1] bg-[url('/images/kayly_cliff1.jpg')] bg-cover opacity-70 bg-blend-multiply [--parallax-speed:2|]"></div> <div class="parallax absolute left-0 right-0 top-[15vh] z-50 mx-auto w-fit px-4 text-left text-2xl [--parallax-speed:2] md:bottom-1/2 md:px-6 [@media_((min-height:600px)_and_(min-width:640px))]:text-4xl [@media_((min-height:800px)_and_(min-width:768px))]:text-5xl"><p class="font-['Roboto_Mono'] font-medium leading-none tracking-tight text-slate-600 drop-shadow"><span class="font-normal text-slate-500/15"></span>&nbsp;&nbsp;&nbsp;&nbsp;Nice to meet you, my name's <span class="text-indigo-500/50">Kayly</span> <span class="cursor active font-['Roboto_Mono'] text-slate-500/30" id="cursor-1">&#x2590;</span></p> <p class="mt-12 hidden max-w-[45rem] border-t border-slate-400/25 pt-8 text-sm leading-snug tracking-tight text-slate-600 md:text-base [@media(min-height:600px)]:block">I'm a <strong>chemical engineer</strong> that enjoys building things, solving
			problems and learning how stuff works. Thanks for stopping by and welcome to my page!</p> <button class="mt-16 flex items-center gap-1 rounded-full bg-slate-700 py-2 pl-6 pr-5 text-sm font-bold tracking-widest text-slate-300 shadow-lg shadow-slate-700/10 transition-all duration-500 ease-in-out hover:brightness-125">CONTACT ME <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg></button></div> <div class="relative z-40 h-[40vh] w-full min-w-[100vh] bg-[url('/images/kaylybg1.png')] bg-cover bg-top md:mt-44 xl:h-[50vh]"></div> <a href="#about" aria-label="To go to about section"><div class="absolute bottom-12 left-0 right-0 z-50 mx-auto h-16 w-16 animate-bounce rounded-full bg-slate-900/20 p-4 text-slate-200 md:h-20 md:w-20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></div></a></div>`);function Je(t,e){Z(e,!1);let a=je("modal");U();var i=Ue(),r=I(M(i),10),o=I(M(r),4);o.__click=[Ke,a],p(r),He(4),p(i),u(t,i),$()}xe(["click"]);var Ye=b(`<div class="relative left-0 z-50 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/95 py-24 mix-blend-multiply backdrop-blur"><div class="relative mx-auto max-w-7xl px-4 md:px-6"><a id="about"><h2 class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-tight text-[#fce4b8]">ABOUT ME</h2></a> <p class="mb-16 pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 md:text-3xl lg:w-1/2">My name is <span class="font-bold">Kayly Sefcik</span>. I'm a chemical engineer with a minor in biomedical engineering, passionate about catalysis, process optimization, and safety in chemical processes.</p> <div class="gap-24 text-pretty md:columns-2"><p class="text-sm leading-normal text-slate-400 sm:text-base">I have experience working on advanced chemical reactions, specifically in catalysis and gas reforming, using mass spectrometry analysis. My work includes the synthesis of catalysts and operational efficiency enhancements in chemical plants.</p> <p class="mt-8 text-sm leading-normal text-slate-400 sm:text-base">In my professional journey, I have also focused on process safety and optimization, utilizing software like Aspen Plus, MATLAB, and COMSOL. My experience includes developing training simulators for DCP Midstream, as well as automation models in Excel VBA to streamline lab data analysis.</p> <p class="mt-8 text-sm leading-normal text-slate-400 sm:text-base">Recently, I completed a Bachelor of Science in Chemical Engineering from the Colorado School of Mines, where I received the President’s Merit Scholarship and maintained a GPA of 3.942. In addition to my studies, I gained valuable hands-on experience as an intern at DCP Midstream and as an undergraduate researcher in catalysis.</p> <p class="mt-8 text-sm leading-normal text-slate-400 sm:text-base">Feel free to keep scrolling to learn more about my work and achievements. For additional details or references, please contact me directly.</p></div></div></div>`);function Ze(t){var e=Ye();u(t,e)}var $e=b('<p class="leading-normal tracking-normal"> </p>'),Xe=b('<li class="rounded-full bg-black/20 px-2 py-0.5"> </li>'),Qe=b(`<div class="milestone relative mx-auto flex max-w-3xl items-start justify-center sm:pl-8 sm:before:absolute sm:before:inset-0 sm:before:-left-72 sm:before:h-[1px] sm:before:w-1/2 sm:before:bg-gradient-to-r sm:before:from-white/25 sm:before:to-transparent"><time class="glass hidden h-20 w-48 shrink-0 items-center justify-center rounded-bl border border-b-black/10 border-l-white/10 border-r-black/10 border-t-white/10 bg-white/20 p-2 font-['Roboto_Mono'] text-xs font-semibold text-slate-300 shadow sm:flex"> </time> <div class="glass w-full rounded-lg rounded-b-lg rounded-r-lg border border-b-black/10 border-l-white/10 border-r-black/10 border-t-white/10 bg-white/10 p-4 shadow sm:rounded-tl-none sm:p-6"><div><h2 class="text-xl font-bold tracking-tight text-slate-300 sm:text-2xl"> </h2> <h3 class="font-['Roboto_Mono'] text-sm tracking-tight text-[#fce4b8] drop-shadow lg:text-base"> </h3></div> <div class="col-span-2 mt-6 flex flex-col gap-4 text-pretty text-xs text-slate-300 sm:text-sm"><!> <div class="my-6"><ul class="flex flex-wrap gap-1 font-['Roboto_Mono'] text-[0.7rem] leading-snug tracking-wide text-white/75"></ul></div></div> <div class="flex flex-wrap gap-3.5"></div></div></div>`);function et(t,e){let a=T(e,"heading",8,""),i=T(e,"subheading",8,""),r=T(e,"body",24,()=>[]),o=T(e,"keywords",24,()=>[]),c=T(e,"icons",24,()=>[]),v=T(e,"from",8,""),h=T(e,"to",8,""),x=T(e,"active",8,!1);var f=Qe(),A=M(f),l=M(A);p(A);var m=I(A,2),n=M(m),C=M(n),w=M(C,!0);p(C);var y=I(C,2),E=M(y,!0);p(y),p(n);var g=I(n,2),s=M(g);q(s,1,r,N,(k,z)=>{var _=$e(),S=M(_,!0);p(_),K(()=>L(S,P(z))),u(k,_)});var d=I(s,2),V=M(d);q(V,5,o,N,(k,z)=>{var _=Xe(),S=M(_,!0);p(_),K(()=>L(S,P(z))),u(k,_)}),p(V),p(d),p(g);var O=I(g,2);q(O,5,c,N,(k,z)=>{var _=we(),S=ge(_);qe(S,()=>P(z),(B,G)=>{G(B,{})}),u(k,_)}),p(O),p(m),p(f),K(()=>{Ne(f,"active",x()),L(l,`${v()??""} - ${h()??""}`),L(w,a()),L(E,i())}),u(t,f)}var tt=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/microsoft-office.svg" alt="Microsoft"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Microsoft</div></div>');function ne(t){var e=tt();u(t,e)}var at=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/aspen.png" alt="Aspen Plus"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Aspen Plus</div></div>');function de(t){var e=at();u(t,e)}var it=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/Matlab_Logo.png" alt="&lt;Matlab>"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Simulink</div></div>');function ce(t){var e=it();u(t,e)}var lt=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/polymath.svg" alt="PolyMath"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">PolyMath</div></div>');function st(t){var e=lt();u(t,e)}var rt=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/Wonderware.png" alt="Wonderware"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Wonderware</div></div>');function ot(t){var e=rt();u(t,e)}var nt=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/comsol.svg" alt="comsol"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Comsol</div></div>');function dt(t){var e=nt();u(t,e)}var ct=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/emerson.png" alt="Emerson"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Emerson</div></div>');function mt(t){var e=ct();u(t,e)}var vt=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/vmg.png" alt="Angular"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">VMG</div></div>');function ft(t){var e=vt();u(t,e)}var ut=b('<div class="tech-icon relative flex h-12 w-12 items-center justify-center rounded bg-black/20 p-1"><img src="/svg/seeq.png" alt="Seeq"> <div class="tooltip -bottom-10 mt-1 rounded-full bg-black/50 p-2 text-xs text-white">Seeq</div></div>');function gt(t){var e=ut();u(t,e)}var pt=b(`<div class="left-0 -mt-2 w-full overflow-hidden border-t-8 border-slate-700 bg-slate-800 pb-12 pt-24 md:py-24"><div class="relative mx-auto max-w-7xl px-4 md:px-6"><div class="parallax absolute
			-top-24 right-48 z-0 -mx-96 h-full w-full bg-[url('/images/coffee.webp')] bg-contain bg-no-repeat opacity-50 bg-blend-normal drop-shadow [--parallax-speed:5] sm:right-24 sm:bg-auto md:-right-[10vw] lg:opacity-100"></div> <a id="work"><h2 class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-wide text-[#fce4b8]">WORK</h2></a> <p class="relative z-20 mb-64 text-pretty pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 drop-shadow-lg md:text-3xl lg:w-1/2">The places I have worked at and what I got to build.</p> <div class="relative mx-auto space-y-12 overflow-hidden via-90% pb-4 sm:pt-8 sm:before:absolute sm:before:inset-0 sm:before:left-[1px] sm:before:h-full sm:before:w-[1px] sm:before:-translate-x-px sm:before:bg-gradient-to-b sm:before:from-white/25 sm:before:via-white/25 sm:before:to-transparent"></div></div></div>`);function bt(t,e){Z(e,!1);const a=[{from:"Fall 2024",to:"Present",title:"Undergraduate Researcher",workPlace:"@The Lab of Catalysis & Applied Technology in Surface Science",body:["Ran catalytic reactions with mass spectrometry analysis for the dry reforming of methane and the reverse water gas shift to assess the efficiency of various catalytic designs.","Developed synthesis procedures for catalysts and silica deposition on porous catalytic supports. Heavy literature research conducted.","Developed fully automated model in Excel for all analysis required in lab."],keywords:["Catalysis","Mass Spectrometry","Chemical Engineering","Laboratory Techniques","Excel","VBA","Data Analysis"],icons:[ne,de,ce,st,dt]},{from:"Summer 2024",to:"Summer 2024",title:"Chemical Engineer",workPlace:"@Field Session",body:["Completed nine labs within a six-week timeframe with 24-hour turnaround presentations and weekly reports combined with regular coursework and attendance.","Completed HAZOPs, oral briefings, computer simulations (Aspen Plus), and statistical analysis."],keywords:["HAZOP","Aspen Plus","Statistical Analysis","Chemical Engineering","Laboratory","Time Management","Presentation Skills"],icons:[de,ce]},{from:"Summer 2022",to:"Summer 2023",title:"Chemical Engineering Intern",workPlace:"@DCP Midstream, Denver, CO",body:["Collaborated with diverse engineering teams to enhance operational efficiency using software control systems for chemical plants.","Led the development of training simulators in Excel VBA to train new employees, simulating real-time plant control systems.","Contributed to process optimization projects and safety compliance initiatives, ensuring adherence to industry best practices.","Navigated Wonderware, DeltaV, and FoxView software for advanced operator displays.","Analyzed company P&IDs to generate thermodynamic/process simulations with VMG Symmetry Simulation Software.","Compiled large amounts of PI data, manipulated in Seeq, to create a simple visual format for easy identification of future mechanical failures (for heat exchangers)."],keywords:["Process Optimization","Excel VBA","Chemical Engineering","Process Simulation","VMG Symmetry","Wonderware","DeltaV","FoxView","PI Data","Seeq","Heat Exchangers","Safety Compliance","P&IDs"],icons:[ne,gt,ot,ft,mt]},{from:"Jan 2022",to:"Mar 2022",title:"Math Tutor",workPlace:"@Learning League, Arvada, CO",body:["Prepared educational material, assessing student progress and adapting methods to improve performance, overcoming educational challenges due to the COVID-19 pandemic."],keywords:["Teaching","Mathematics","Tutoring","Education","Adaptability","COVID-19"],icons:[]}];pe(()=>{be(".milestone")}),U();var i=pt(),r=M(i),o=I(M(r),6);q(o,5,()=>a,N,(c,v,h)=>{et(c,{get from(){return P(v).from},get to(){return P(v).to},get heading(){return P(v).title},get subheading(){return P(v).workPlace},get body(){return P(v).body},get keywords(){return P(v).keywords},get icons(){return P(v).icons},active:h===0})}),p(o),p(r),p(i),u(t,i),$()}var ht=b(`<div class="bg-slate-200"><div class="relative z-40 mx-auto max-w-7xl px-4 py-24 md:px-6"><a id="education"><h2 class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-tight text-slate-700"><span class="text-slate-700/50"></span>EDUCATION</h2></a> <div class="relative flex w-full flex-col items-center gap-16 text-sm text-slate-600 md:flex-row xl:gap-24"><div class="w-full min-w-80 max-w-full flex-1 gap-10 text-pretty rounded border-4 border-b-slate-800 border-l-slate-400 border-r-slate-800 border-t-slate-400 bg-gradient-to-br from-slate-700 to-slate-600 p-6 text-center text-sm text-slate-600 shadow-lg shadow-slate-400 sm:p-8 md:block md:w-[36rem]"><div class="border-2 border-b-slate-400 border-l-slate-800 border-r-slate-400 border-t-slate-800 bg-slate-200 p-4"><div class="rounded border border-slate-300 p-1"><div class="rounded border border-slate-200 bg-gradient-to-br from-white to-slate-100 px-6 py-4 sm:px-8 sm:py-6"><div class="mx-auto mb-4 h-12 w-10 rounded-b-full bg-[#f7c6b1] sm:mb-6"></div> <h2 class="mb-4 text-center text-lg font-bold text-slate-600 sm:mb-6 sm:text-xl">Colorado School of Mines</h2> <h3>Bachelor of Engineering in</h3> <h4 class="text-lg font-bold text-slate-700 sm:text-xl">Chemical Engineering</h4> <h4 class="hidden text-lg font-bold text-slate-500 sm:block">2024</h4> <div class="mt-6 grid w-full grid-cols-3 grid-rows-2 gap-2 sm:mt-16"><div class="row-span-2 ml-0 h-full w-12 rounded-full bg-slate-400"></div> <div class="ml-0 h-2 w-1/2 rounded-full bg-slate-300"></div> <div class="h-2 w-1/2 rounded-full bg-slate-300"></div> <div class="h-2 w-4/5 rounded-full bg-slate-300"></div> <div class="h-2 w-5/6 rounded-full bg-slate-300"></div></div></div></div></div></div> <div class="md:mt-8 md:w-2/5"><p class="mb-2 text-pretty text-2xl font-bold leading-tight tracking-tight text-slate-700 sm:text-3xl">Graduated from Colorado School of Mines with a degree in Chemical Engineering</p> <p class="mb-8 text-sm text-slate-500 sm:text-lg">GPA: 3.942/4.0</p> <p class="hidden text-xs sm:block sm:text-sm">Beyond formal education, I am constantly learning about engineering topics I find interesting or that
					can improve my work.</p></div></div></div></div>`);function xt(t){var e=ht();u(t,e)}var wt=b('<!> <div class="relative z-50 h-4 w-full bg-slate-700 svelte-1iiyzmn"></div> <!> <div class="relative z-50 h-4 w-full bg-slate-700 svelte-1iiyzmn"></div> <!> <div class="relative z-50 h-4 w-full bg-slate-700 svelte-1iiyzmn"></div> <!>',1);function At(t,e){Z(e,!1),pe(()=>{be(".cursor")}),U();var a=wt(),i=ge(a);Je(i,{});var r=I(i,4);Ze(r);var o=I(r,4);bt(o,{});var c=I(o,4);xt(c),u(t,a),$()}export{At as component};