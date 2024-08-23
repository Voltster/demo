import{r as O,f as I,j as r,m as L}from"./index-Dcst7LxM.js";import{M as C}from"./MainSection-DVUSMw9J.js";import{S as y}from"./SectionLayout-kgyTDnEG.js";import{I as Y}from"./InfinityScroll-BVnjCoeF.js";import{S as v}from"./SectionCard-D0CL6wEb.js";import{c as j}from"./Animation-ZVrJ1H8r.js";const S="/assets/companyOverview-Dv6fXtyW.png",X="/assets/companyOverview2-DKiv7j9c.png",z="/assets/ourMission1-CRpTdu6P.png",T="/assets/Vision-cEYZHoK2.png",W="/assets/ourGoal-BEf4PMip.png",D="/assets/Otc-C675mcIW.png";function k(p,e,t,i){return new(t||(t=Promise))(function(n,l){function s(o){try{c(i.next(o))}catch(h){l(h)}}function a(o){try{c(i.throw(o))}catch(h){l(h)}}function c(o){var h;o.done?n(o.value):(h=o.value,h instanceof t?h:new t(function(g){g(h)})).then(s,a)}c((i=i.apply(p,[])).next())})}const f=(p,e,t,i)=>{p.style.transition=`${e} ${t}ms ${i}`},d=(p,e,t)=>Math.min(Math.max(p,e),t);class N{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=s=>{const{width:a,height:c}=s,o=Math.sqrt(Math.pow(a,2)+Math.pow(c,2));return{width:o,height:o}},this.setSize=s=>{const a=this.calculateGlareSize(s);this.glareEl.style.width=`${a.width}px`,this.glareEl.style.height=`${a.height}px`},this.update=(s,a,c,o)=>{this.updateAngle(s,a.glareReverse),this.updateOpacity(s,a,c,o)},this.updateAngle=(s,a)=>{const{xPercentage:c,yPercentage:o}=s,h=180/Math.PI,g=c?Math.atan2(o,-c)*h:0;this.glareAngle=g-(a?180:0)},this.updateOpacity=(s,a,c,o)=>{const{xPercentage:h,yPercentage:g}=s,{glarePosition:b,glareReverse:A,glareMaxOpacity:P}=a,w=c?-1:1,E=o?-1:1,m=A?-1:1;let u=0;switch(b){case"top":u=-h*w*m;break;case"right":u=g*E*m;break;case"bottom":case void 0:u=h*w*m;break;case"left":u=-g*E*m;break;case"all":u=Math.hypot(h,g)}const M=d(u,0,100);this.glareOpacity=M*P/100},this.render=s=>{const{glareColor:a}=s;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${a} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const i={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},n=this.calculateGlareSize(e),l={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${n.width}px`,height:`${n.height}px`};Object.assign(this.glareWrapperEl.style,i),Object.assign(this.glareEl.style,l)}}class ${constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:i,yPercentage:n}=e,{tiltMaxAngleX:l,tiltMaxAngleY:s}=t;this.tiltAngleX=i*l/100,this.tiltAngleY=n*s/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:l,tiltMaxAngleY:s}=t;(i!==null||n!==null)&&(this.tiltAngleX=i!==null?i:0,this.tiltAngleY=n!==null?n:0,e.xPercentage=100*this.tiltAngleX/l,e.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=d(this.tiltAngleX,-90,90),this.tiltAngleY=d(this.tiltAngleY,-90,90),t&&(this.tiltAngleX=t==="x"?this.tiltAngleX:0,this.tiltAngleY=t==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const G=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class x extends O.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>k(this,void 0,void 0,function*(){if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;typeof e=="function"?(yield e())==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)}),this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){const i=new CustomEvent("autoreset");this.onMove(i)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":const{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:l,tiltMaxAngleY:s}=this.props,a=n/s*100;this.wrapperEl.clientPosition.xPercentage=d(i/l*100,-100,100),this.wrapperEl.clientPosition.yPercentage=d(a,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=d(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=d(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:i,flipHorizontally:n}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,i;if(e){const{x:n,y:l}=this.wrapperEl.clientPosition;t=l/window.innerHeight*200-100,i=n/window.innerWidth*200-100}else{const{size:{width:n,height:l,left:s,top:a},clientPosition:{x:c,y:o}}=this.wrapperEl;t=(o-a)/l*200-100,i=(c-s)/n*200-100}this.wrapperEl.clientPosition.xPercentage=d(t,-100,100),this.wrapperEl.clientPosition.yPercentage=d(i,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new $,this.initGlare(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new N(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;f(this.wrapperEl.node,"all",e,t),this.glare&&f(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:i}=this.props;return I.createElement("div",{ref:n=>this.wrapperEl.node=n,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}x.defaultProps=G;const H="/assets/Antibiotics-DK_D9Iem.jpg",R="/assets/Pulmonology-AzSf6rTn.jpg",F="/assets/Gastro-BIP_BSuZ.jpg",B="/assets/Pain-BYJ9Wsef.jpg",q="/assets/Otalaryngology-dJuWIChh.jpg",J="/assets/Pediatrics-By1aMl8m.jpg",V="/assets/Infectives-D54hNOgP.jpg",K=[{id:1,bgColor:"#F92316",icon:H,title:"Antibiotics"},{id:2,bgColor:"#F97D16",icon:R,title:"Pulmonology"},{id:3,bgColor:"#F0C401",icon:F,title:"Gastro-Intestinal"},{id:4,bgColor:"#20CD2A ",icon:D,title:"OTC"},{id:5,bgColor:"#2096CD",icon:B,title:"Pain Killers"},{id:6,bgColor:"#4970CD",icon:q,title:"Otalaryngology"},{id:7,bgColor:"#2320aD",icon:J,title:"Pediatrics"},{id:8,bgColor:"#7920CD",icon:V,title:"Anti-Infectives"}],U=K.map((p,e)=>r.jsx(L.div,{variants:j,initial:"initial",whileInView:"whileInView",custom:e,viewport:{once:!0,amount:.5},children:r.jsxs(x,{className:" flex flex-col items-center text-center group hover:bg-gray-200 cursor-pointer transition-all relative rounded-md overflow-hidden",children:[r.jsx("img",{src:p.icon,alt:p.icon,className:"object-cover w-full h-[15rem] "}),r.jsx("p",{className:"text-xl font-medium text-gray-100 mt-3 absolute bottom-0  py-2 w-full bg-gradient-to-b from-gray-500/0 via-black/50 via-40% to-gray-950",children:p.title})]})},p.id)),Z=()=>r.jsxs("div",{className:"py-[2vw]",children:[r.jsx("h3",{className:"uppercase text-4xl mb-2 font-semibold text-center text-[#B71B15]",children:"Therapeutic Division's"}),r.jsx("div",{className:"px-3 md:lg:xl:px-40 py-20 bg-opacity-10",children:r.jsx("div",{className:"grid grid-cols-1 lg:md:grid-cols-4 gap-4 group md:bg-white shadow-xl shadow-neutral-100 ",children:U})})]}),_="/assets/Aboutus-DcgsDI3i.webm",ae=()=>r.jsxs("main",{className:"min-h-screen relative w-full mx-auto ",children:[r.jsx(C,{title:"About Us",videoSrc:_}),r.jsx(y,{title:"Portfolio Overview",description:`MHJ Pharmaconcepts, Established in 2017 by Our Director- Mr. Mohiiitt Jaiin with a vision of Empowering Global Health with Excellence and Shaping the Future with Strategies. Well-known with the visualization of making India self-reliant in healthcare, MHJ Pharmaconcepts has rapidly emerged as one of India’s leading pharmaceutical companies with its approach in providing healthcare solutions.<br /> 
        We offer an extensive range of products, including generic branded formulations, advanced drug delivery systems (ADDS), and biotechnology products, catering to the global market. Our comprehensive portfolio encompasses generics, biosimilars, and differentiated formulations, which we market as both generics and branded generics in India and major international markets. Our commitment to excellence in pharmaceutical innovation and quality has made us a Proven partner in healthcare, both in India and across the globe. Through our custom pharmaceutical services, we continue to drive  advancements in medicines, ensuring high-quality healthcare to be  accessible to all.`,src:S,className:"w-11/12 mx-auto container"}),r.jsx(Z,{}),r.jsx(y,{title:"Global Standards",subheading:"Delivering Exceptional Quality and Comprehensive Offerings",description:" MHJ Pharmaconcepts: Maintaining Health Judiciously.<br /> MHJ Pharmaconcepts has grown into a name synonymous with maintaining health judiciously. With a strong foothold in the global market, our company has successfully expanded its scope of services, exporting medicines from India to the world, including antibiotics and other essential pharmaceutical products. We are dedicated to extending our export reach to over 50+ countries, ensuring access to quality healthcare across the globe.Our company is recognized by the World Health Organization (WHO) and holds certifications for GMP (Good Manufacturing Practices) and ISO 9001:2000, reflecting our commitment to excellence in product development, quality control, and overall business operations. This expansion and adherence to international standards have solidified the credibility of MHJ Pharmaconcepts as a trusted leader in the pharmaceutical industry.",src:X,className:"w-11/12 mx-auto container xl:flex-row-reverse"}),r.jsxs("section",{className:"my-20 mx-auto w-11/12",children:[r.jsx(Y,{}),r.jsx(v,{title:"Our Mission",description:"Our mission is to improve global health by delivering high-quality, affordable medications through innovation and rigorous standards. We are dedicated to enhancing patient care and empowering healthcare professionals worldwide.",image:z}),r.jsx(v,{title:"Our Vision",description:"Our Vision is to be a global leader in innovative and sustainable pharmaceutical manufacturing, driving better health outcomes through cutting-edge technology, exceptional quality, and a commitment to patient safety. We envision accessible medicines produced with the highest environmental standards, setting new industry benchmarks and making a lasting impact on global health.",image:T,className:"lg:flex-row-reverse"}),r.jsx(v,{title:"Our Goal",description:"To achieve 99.9% compliance with global regulatory standards while reducing production costs by 15% over the next five years through the implementation of advanced manufacturing technologies and sustainable practices. “This goal is specific, measurable, achievable, relevant, and time-bound (SMART), focusing on regulatory compliance, cost efficiency, and sustainability.",image:W})]})]});export{ae as default};