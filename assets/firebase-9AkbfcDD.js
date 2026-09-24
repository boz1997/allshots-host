var mg=Object.defineProperty;var Eg=(n,e,t)=>e in n?mg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var G=(n,e,t)=>Eg(n,typeof e!="symbol"?e+"":e,t);const _g=()=>{};var hl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],B=n[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,B=o?n[s+1]:0,u=s+2<n.length,c=u?n[s+2]:0,h=i>>2,C=(i&3)<<4|B>>4;let p=(B&15)<<2|c>>6,_=c&63;u||(_=64,o||(p=64)),r.push(t[h],t[C],t[p],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Df(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],B=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const C=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||B==null||c==null||C==null)throw new wg;const p=i<<2|B>>4;if(r.push(p),c!==64){const _=B<<4&240|c>>2;if(r.push(_),C!==64){const I=c<<6&192|C;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ig=function(n){const e=Df(n);return wf.encodeByteArray(e,!0)},Io=function(n){return Ig(n).replace(/\./g,"")},If=function(n){try{return wf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=()=>yg().__FIREBASE_DEFAULTS__,Ag=()=>{if(typeof process>"u"||typeof hl>"u")return;const n=hl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&If(n[1]);return e&&JSON.parse(e)},zo=()=>{try{return _g()||Tg()||Ag()||Rg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yf=n=>{var e,t;return(t=(e=zo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},$B=n=>{const e=yf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Tf=()=>{var n;return(n=zo())==null?void 0:n.config},Af=n=>{var e;return(e=zo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Io(JSON.stringify(t)),Io(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Pg(){var e;const n=(e=zo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Og(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ng(){const n=Ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fg(){return!Pg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lg(){try{return typeof indexedDB=="object"}catch{return!1}}function kg(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="FirebaseError";class Lt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vg,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pi.prototype.create)}}class pi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xg(i,r):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new Lt(s,B,r)}}function xg(n,e){try{let t=0,r="";for(;t<n.length;){const s=n.indexOf("{$",t);if(s===-1){r+=n.substring(t);break}const i=n.indexOf("}",s+2);if(i===-1){r+=n.substring(t);break}const o=n.substring(s+2,i),B=e[o];r+=n.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return r}catch{return n}}function Mg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(fl(i)&&fl(o)){if(!wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function fl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ss(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Gg(n,e){const t=new Ug(n,e);return t.subscribe.bind(t)}class Ug{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hg(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Za),s.error===void 0&&(s.error=Za),s.complete===void 0&&(s.complete=Za);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Za(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qo(n){return(await fetch(n,{credentials:"include"})).ok}class an{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Rf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jg(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);r===B&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qg(n){return n===cr?void 0:n}function jg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const zg={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Qg=ue.INFO,Wg={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},$g=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Wg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class YB{constructor(e){this.name=e,this._logLevel=Qg,this._logHandler=$g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Yg=(n,e)=>e.some(t=>n instanceof t);let Cl,dl;function Xg(){return Cl||(Cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zg(){return dl||(dl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pf=new WeakMap,_B=new WeakMap,bf=new WeakMap,eB=new WeakMap,XB=new WeakMap;function em(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Vn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Pf.set(t,n)}).catch(()=>{}),XB.set(e,n),e}function tm(n){if(_B.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});_B.set(n,e)}let DB={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _B.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nm(n){DB=n(DB)}function rm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(tB(this),e,...t);return bf.set(r,e.sort?e.sort():[e]),Vn(r)}:Zg().includes(n)?function(...e){return n.apply(tB(this),e),Vn(Pf.get(this))}:function(...e){return Vn(n.apply(tB(this),e))}}function sm(n){return typeof n=="function"?rm(n):(n instanceof IDBTransaction&&tm(n),Yg(n,Xg())?new Proxy(n,DB):n)}function Vn(n){if(n instanceof IDBRequest)return em(n);if(eB.has(n))return eB.get(n);const e=sm(n);return e!==n&&(eB.set(n,e),XB.set(e,n)),e}const tB=n=>XB.get(n);function im(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),B=Vn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Vn(o.result),u.oldVersion,u.newVersion,Vn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),B.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),B}const om=["get","getKey","getAll","getAllKeys","count"],am=["put","add","delete","clear"],nB=new Map;function pl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(nB.get(e))return nB.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=am.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||om.includes(t)))return;const i=async function(o,...B){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(B.shift())),(await Promise.all([c[t](...B),s&&u.done]))[0]};return nB.set(e,i),i}nm(n=>({...n,get:(e,t,r)=>pl(e,t)||n.get(e,t,r),has:(e,t)=>!!pl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(um(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function um(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wB="@firebase/app",gl="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new YB("@firebase/app"),cm="@firebase/app-compat",lm="@firebase/analytics-compat",hm="@firebase/analytics",fm="@firebase/app-check-compat",Cm="@firebase/app-check",dm="@firebase/auth",pm="@firebase/auth-compat",gm="@firebase/database",mm="@firebase/data-connect",Em="@firebase/database-compat",_m="@firebase/functions",Dm="@firebase/functions-compat",wm="@firebase/installations",Im="@firebase/installations-compat",ym="@firebase/messaging",Tm="@firebase/messaging-compat",Am="@firebase/performance",Rm="@firebase/performance-compat",vm="@firebase/remote-config",Pm="@firebase/remote-config-compat",bm="@firebase/storage",Sm="@firebase/storage-compat",Om="@firebase/firestore",Nm="@firebase/ai",Fm="@firebase/firestore-compat",Lm="firebase",km="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB="[DEFAULT]",Vm={[wB]:"fire-core",[cm]:"fire-core-compat",[hm]:"fire-analytics",[lm]:"fire-analytics-compat",[Cm]:"fire-app-check",[fm]:"fire-app-check-compat",[dm]:"fire-auth",[pm]:"fire-auth-compat",[gm]:"fire-rtdb",[mm]:"fire-data-connect",[Em]:"fire-rtdb-compat",[_m]:"fire-fn",[Dm]:"fire-fn-compat",[wm]:"fire-iid",[Im]:"fire-iid-compat",[ym]:"fire-fcm",[Tm]:"fire-fcm-compat",[Am]:"fire-perf",[Rm]:"fire-perf-compat",[vm]:"fire-rc",[Pm]:"fire-rc-compat",[bm]:"fire-gcs",[Sm]:"fire-gcs-compat",[Om]:"fire-fst",[Fm]:"fire-fst-compat",[Nm]:"fire-vertex","fire-js":"fire-js",[Lm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Map,xm=new Map,yB=new Map;function ml(n,e){try{n.container.addComponent(e)}catch(t){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hn(n){const e=n.name;if(yB.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;yB.set(e,n);for(const t of Qs.values())ml(t,n);for(const t of xm.values())ml(t,n);return!0}function mi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new pi("app","Firebase",Mm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=km;function Um(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:IB,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(t||(t=Tf()),!t)throw Xt.create("no-options");const i=Qs.get(s);if(i)if(wr(t,i.options)){if(wr(r,i.config))return i;throw Xt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(r)})}else throw Xt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Kg(s);for(const u of yB.values())o.addComponent(u);const B=new Gm(t,r,o);return Qs.set(s,B),B}function Wo(n=IB){const e=Qs.get(n);if(!e&&n===IB&&Tf())return Um();if(!e)throw Xt.create("no-app",{appName:n});return e}function Bv(){return Array.from(Qs.values())}function Rt(n,e,t){let r=Vm[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(o.join(" "));return}Hn(new an(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="firebase-heartbeat-database",Jm=1,Ws="firebase-heartbeat-store";let rB=null;function Sf(){return rB||(rB=im(Hm,Jm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ws)}catch(t){console.warn(t)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),rB}async function qm(n){try{const t=(await Sf()).transaction(Ws),r=await t.objectStore(Ws).get(Of(n));return await t.done,r}catch(e){if(e instanceof Lt)Bn.warn(e.message);else{const t=Xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(t.message)}}}async function El(n,e){try{const r=(await Sf()).transaction(Ws,"readwrite");await r.objectStore(Ws).put(e,Of(n)),await r.done}catch(t){if(t instanceof Lt)Bn.warn(t.message);else{const r=Xt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Bn.warn(r.message)}}}function Of(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=1024,Km=30;class zm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_l();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Km){const o=$m(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_l(),{heartbeatsToSend:r,unsentEntries:s}=Qm(this._heartbeatsCache.heartbeats),i=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Bn.warn(t),""}}}function _l(){return new Date().toISOString().substring(0,10)}function Qm(n,e=jm){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Dl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Wm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lg()?kg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return El(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return El(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Dl(n){return Io(JSON.stringify({version:2,heartbeats:n})).length}function $m(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n){Hn(new an("platform-logger",e=>new Bm(e),"PRIVATE")),Hn(new an("heartbeat",e=>new zm(e),"PRIVATE")),Rt(wB,gl,n),Rt(wB,gl,"esm2020"),Rt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ym("");var wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,Nf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,E){function w(){}w.prototype=E.prototype,R.F=E.prototype,R.prototype=new w,R.prototype.constructor=R,R.D=function(v,A,b){for(var D=Array(arguments.length-2),it=2;it<arguments.length;it++)D[it-2]=arguments[it];return E.prototype[A].apply(v,D)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,E,w){w||(w=0);const v=Array(16);if(typeof E=="string")for(var A=0;A<16;++A)v[A]=E.charCodeAt(w++)|E.charCodeAt(w++)<<8|E.charCodeAt(w++)<<16|E.charCodeAt(w++)<<24;else for(A=0;A<16;++A)v[A]=E[w++]|E[w++]<<8|E[w++]<<16|E[w++]<<24;E=R.g[0],w=R.g[1],A=R.g[2];let b=R.g[3],D;D=E+(b^w&(A^b))+v[0]+3614090360&4294967295,E=w+(D<<7&4294967295|D>>>25),D=b+(A^E&(w^A))+v[1]+3905402710&4294967295,b=E+(D<<12&4294967295|D>>>20),D=A+(w^b&(E^w))+v[2]+606105819&4294967295,A=b+(D<<17&4294967295|D>>>15),D=w+(E^A&(b^E))+v[3]+3250441966&4294967295,w=A+(D<<22&4294967295|D>>>10),D=E+(b^w&(A^b))+v[4]+4118548399&4294967295,E=w+(D<<7&4294967295|D>>>25),D=b+(A^E&(w^A))+v[5]+1200080426&4294967295,b=E+(D<<12&4294967295|D>>>20),D=A+(w^b&(E^w))+v[6]+2821735955&4294967295,A=b+(D<<17&4294967295|D>>>15),D=w+(E^A&(b^E))+v[7]+4249261313&4294967295,w=A+(D<<22&4294967295|D>>>10),D=E+(b^w&(A^b))+v[8]+1770035416&4294967295,E=w+(D<<7&4294967295|D>>>25),D=b+(A^E&(w^A))+v[9]+2336552879&4294967295,b=E+(D<<12&4294967295|D>>>20),D=A+(w^b&(E^w))+v[10]+4294925233&4294967295,A=b+(D<<17&4294967295|D>>>15),D=w+(E^A&(b^E))+v[11]+2304563134&4294967295,w=A+(D<<22&4294967295|D>>>10),D=E+(b^w&(A^b))+v[12]+1804603682&4294967295,E=w+(D<<7&4294967295|D>>>25),D=b+(A^E&(w^A))+v[13]+4254626195&4294967295,b=E+(D<<12&4294967295|D>>>20),D=A+(w^b&(E^w))+v[14]+2792965006&4294967295,A=b+(D<<17&4294967295|D>>>15),D=w+(E^A&(b^E))+v[15]+1236535329&4294967295,w=A+(D<<22&4294967295|D>>>10),D=E+(A^b&(w^A))+v[1]+4129170786&4294967295,E=w+(D<<5&4294967295|D>>>27),D=b+(w^A&(E^w))+v[6]+3225465664&4294967295,b=E+(D<<9&4294967295|D>>>23),D=A+(E^w&(b^E))+v[11]+643717713&4294967295,A=b+(D<<14&4294967295|D>>>18),D=w+(b^E&(A^b))+v[0]+3921069994&4294967295,w=A+(D<<20&4294967295|D>>>12),D=E+(A^b&(w^A))+v[5]+3593408605&4294967295,E=w+(D<<5&4294967295|D>>>27),D=b+(w^A&(E^w))+v[10]+38016083&4294967295,b=E+(D<<9&4294967295|D>>>23),D=A+(E^w&(b^E))+v[15]+3634488961&4294967295,A=b+(D<<14&4294967295|D>>>18),D=w+(b^E&(A^b))+v[4]+3889429448&4294967295,w=A+(D<<20&4294967295|D>>>12),D=E+(A^b&(w^A))+v[9]+568446438&4294967295,E=w+(D<<5&4294967295|D>>>27),D=b+(w^A&(E^w))+v[14]+3275163606&4294967295,b=E+(D<<9&4294967295|D>>>23),D=A+(E^w&(b^E))+v[3]+4107603335&4294967295,A=b+(D<<14&4294967295|D>>>18),D=w+(b^E&(A^b))+v[8]+1163531501&4294967295,w=A+(D<<20&4294967295|D>>>12),D=E+(A^b&(w^A))+v[13]+2850285829&4294967295,E=w+(D<<5&4294967295|D>>>27),D=b+(w^A&(E^w))+v[2]+4243563512&4294967295,b=E+(D<<9&4294967295|D>>>23),D=A+(E^w&(b^E))+v[7]+1735328473&4294967295,A=b+(D<<14&4294967295|D>>>18),D=w+(b^E&(A^b))+v[12]+2368359562&4294967295,w=A+(D<<20&4294967295|D>>>12),D=E+(w^A^b)+v[5]+4294588738&4294967295,E=w+(D<<4&4294967295|D>>>28),D=b+(E^w^A)+v[8]+2272392833&4294967295,b=E+(D<<11&4294967295|D>>>21),D=A+(b^E^w)+v[11]+1839030562&4294967295,A=b+(D<<16&4294967295|D>>>16),D=w+(A^b^E)+v[14]+4259657740&4294967295,w=A+(D<<23&4294967295|D>>>9),D=E+(w^A^b)+v[1]+2763975236&4294967295,E=w+(D<<4&4294967295|D>>>28),D=b+(E^w^A)+v[4]+1272893353&4294967295,b=E+(D<<11&4294967295|D>>>21),D=A+(b^E^w)+v[7]+4139469664&4294967295,A=b+(D<<16&4294967295|D>>>16),D=w+(A^b^E)+v[10]+3200236656&4294967295,w=A+(D<<23&4294967295|D>>>9),D=E+(w^A^b)+v[13]+681279174&4294967295,E=w+(D<<4&4294967295|D>>>28),D=b+(E^w^A)+v[0]+3936430074&4294967295,b=E+(D<<11&4294967295|D>>>21),D=A+(b^E^w)+v[3]+3572445317&4294967295,A=b+(D<<16&4294967295|D>>>16),D=w+(A^b^E)+v[6]+76029189&4294967295,w=A+(D<<23&4294967295|D>>>9),D=E+(w^A^b)+v[9]+3654602809&4294967295,E=w+(D<<4&4294967295|D>>>28),D=b+(E^w^A)+v[12]+3873151461&4294967295,b=E+(D<<11&4294967295|D>>>21),D=A+(b^E^w)+v[15]+530742520&4294967295,A=b+(D<<16&4294967295|D>>>16),D=w+(A^b^E)+v[2]+3299628645&4294967295,w=A+(D<<23&4294967295|D>>>9),D=E+(A^(w|~b))+v[0]+4096336452&4294967295,E=w+(D<<6&4294967295|D>>>26),D=b+(w^(E|~A))+v[7]+1126891415&4294967295,b=E+(D<<10&4294967295|D>>>22),D=A+(E^(b|~w))+v[14]+2878612391&4294967295,A=b+(D<<15&4294967295|D>>>17),D=w+(b^(A|~E))+v[5]+4237533241&4294967295,w=A+(D<<21&4294967295|D>>>11),D=E+(A^(w|~b))+v[12]+1700485571&4294967295,E=w+(D<<6&4294967295|D>>>26),D=b+(w^(E|~A))+v[3]+2399980690&4294967295,b=E+(D<<10&4294967295|D>>>22),D=A+(E^(b|~w))+v[10]+4293915773&4294967295,A=b+(D<<15&4294967295|D>>>17),D=w+(b^(A|~E))+v[1]+2240044497&4294967295,w=A+(D<<21&4294967295|D>>>11),D=E+(A^(w|~b))+v[8]+1873313359&4294967295,E=w+(D<<6&4294967295|D>>>26),D=b+(w^(E|~A))+v[15]+4264355552&4294967295,b=E+(D<<10&4294967295|D>>>22),D=A+(E^(b|~w))+v[6]+2734768916&4294967295,A=b+(D<<15&4294967295|D>>>17),D=w+(b^(A|~E))+v[13]+1309151649&4294967295,w=A+(D<<21&4294967295|D>>>11),D=E+(A^(w|~b))+v[4]+4149444226&4294967295,E=w+(D<<6&4294967295|D>>>26),D=b+(w^(E|~A))+v[11]+3174756917&4294967295,b=E+(D<<10&4294967295|D>>>22),D=A+(E^(b|~w))+v[2]+718787259&4294967295,A=b+(D<<15&4294967295|D>>>17),D=w+(b^(A|~E))+v[9]+3951481745&4294967295,R.g[0]=R.g[0]+E&4294967295,R.g[1]=R.g[1]+(A+(D<<21&4294967295|D>>>11))&4294967295,R.g[2]=R.g[2]+A&4294967295,R.g[3]=R.g[3]+b&4294967295}r.prototype.v=function(R,E){E===void 0&&(E=R.length);const w=E-this.blockSize,v=this.C;let A=this.h,b=0;for(;b<E;){if(A==0)for(;b<=w;)s(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<E;)if(v[A++]=R.charCodeAt(b++),A==this.blockSize){s(this,v),A=0;break}}else for(;b<E;)if(v[A++]=R[b++],A==this.blockSize){s(this,v),A=0;break}}this.h=A,this.o+=E},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var E=1;E<R.length-8;++E)R[E]=0;E=this.o*8;for(var w=R.length-8;w<R.length;++w)R[w]=E&255,E/=256;for(this.v(R),R=Array(16),E=0,w=0;w<4;++w)for(let v=0;v<32;v+=8)R[E++]=this.g[w]>>>v&255;return R};function i(R,E){var w=B;return Object.prototype.hasOwnProperty.call(w,R)?w[R]:w[R]=E(R)}function o(R,E){this.h=E;const w=[];let v=!0;for(let A=R.length-1;A>=0;A--){const b=R[A]|0;v&&b==E||(w[A]=b,v=!1)}this.g=w}var B={};function u(R){return-128<=R&&R<128?i(R,function(E){return new o([E|0],E<0?-1:0)}):new o([R|0],R<0?-1:0)}function c(R){if(isNaN(R)||!isFinite(R))return C;if(R<0)return M(c(-R));const E=[];let w=1;for(let v=0;R>=w;v++)E[v]=R/w|0,w*=4294967296;return new o(E,0)}function h(R,E){if(R.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R.charAt(0)=="-")return M(h(R.substring(1),E));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=c(Math.pow(E,8));let v=C;for(let b=0;b<R.length;b+=8){var A=Math.min(8,R.length-b);const D=parseInt(R.substring(b,b+A),E);A<8?(A=c(Math.pow(E,A)),v=v.j(A).add(c(D))):(v=v.j(w),v=v.add(c(D)))}return v}var C=u(0),p=u(1),_=u(16777216);n=o.prototype,n.m=function(){if(F(this))return-M(this).m();let R=0,E=1;for(let w=0;w<this.g.length;w++){const v=this.i(w);R+=(v>=0?v:4294967296+v)*E,E*=4294967296}return R},n.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(I(this))return"0";if(F(this))return"-"+M(this).toString(R);const E=c(Math.pow(R,6));var w=this;let v="";for(;;){const A=Be(w,E).g;w=j(w,A.j(E));let b=((w.g.length>0?w.g[0]:w.h)>>>0).toString(R);if(w=A,I(w))return b+v;for(;b.length<6;)b="0"+b;v=b+v}},n.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function I(R){if(R.h!=0)return!1;for(let E=0;E<R.g.length;E++)if(R.g[E]!=0)return!1;return!0}function F(R){return R.h==-1}n.l=function(R){return R=j(this,R),F(R)?-1:I(R)?0:1};function M(R){const E=R.g.length,w=[];for(let v=0;v<E;v++)w[v]=~R.g[v];return new o(w,~R.h).add(p)}n.abs=function(){return F(this)?M(this):this},n.add=function(R){const E=Math.max(this.g.length,R.g.length),w=[];let v=0;for(let A=0;A<=E;A++){let b=v+(this.i(A)&65535)+(R.i(A)&65535),D=(b>>>16)+(this.i(A)>>>16)+(R.i(A)>>>16);v=D>>>16,b&=65535,D&=65535,w[A]=D<<16|b}return new o(w,w[w.length-1]&-2147483648?-1:0)};function j(R,E){return R.add(M(E))}n.j=function(R){if(I(this)||I(R))return C;if(F(this))return F(R)?M(this).j(M(R)):M(M(this).j(R));if(F(R))return M(this.j(M(R)));if(this.l(_)<0&&R.l(_)<0)return c(this.m()*R.m());const E=this.g.length+R.g.length,w=[];for(var v=0;v<2*E;v++)w[v]=0;for(v=0;v<this.g.length;v++)for(let A=0;A<R.g.length;A++){const b=this.i(v)>>>16,D=this.i(v)&65535,it=R.i(A)>>>16,sr=R.i(A)&65535;w[2*v+2*A]+=D*sr,te(w,2*v+2*A),w[2*v+2*A+1]+=b*sr,te(w,2*v+2*A+1),w[2*v+2*A+1]+=D*it,te(w,2*v+2*A+1),w[2*v+2*A+2]+=b*it,te(w,2*v+2*A+2)}for(R=0;R<E;R++)w[R]=w[2*R+1]<<16|w[2*R];for(R=E;R<2*E;R++)w[R]=0;return new o(w,0)};function te(R,E){for(;(R[E]&65535)!=R[E];)R[E+1]+=R[E]>>>16,R[E]&=65535,E++}function se(R,E){this.g=R,this.h=E}function Be(R,E){if(I(E))throw Error("division by zero");if(I(R))return new se(C,C);if(F(R))return E=Be(M(R),E),new se(M(E.g),M(E.h));if(F(E))return E=Be(R,M(E)),new se(M(E.g),E.h);if(R.g.length>30){if(F(R)||F(E))throw Error("slowDivide_ only works with positive integers.");for(var w=p,v=E;v.l(R)<=0;)w=we(w),v=we(v);var A=de(w,1),b=de(v,1);for(v=de(v,2),w=de(w,2);!I(v);){var D=b.add(v);D.l(R)<=0&&(A=A.add(w),b=D),v=de(v,1),w=de(w,1)}return E=j(R,A.j(E)),new se(A,E)}for(A=C;R.l(E)>=0;){for(w=Math.max(1,Math.floor(R.m()/E.m())),v=Math.ceil(Math.log(w)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),b=c(w),D=b.j(E);F(D)||D.l(R)>0;)w-=v,b=c(w),D=b.j(E);I(b)&&(b=p),A=A.add(b),R=j(R,D)}return new se(A,R)}n.B=function(R){return Be(this,R).h},n.and=function(R){const E=Math.max(this.g.length,R.g.length),w=[];for(let v=0;v<E;v++)w[v]=this.i(v)&R.i(v);return new o(w,this.h&R.h)},n.or=function(R){const E=Math.max(this.g.length,R.g.length),w=[];for(let v=0;v<E;v++)w[v]=this.i(v)|R.i(v);return new o(w,this.h|R.h)},n.xor=function(R){const E=Math.max(this.g.length,R.g.length),w=[];for(let v=0;v<E;v++)w[v]=this.i(v)^R.i(v);return new o(w,this.h^R.h)};function we(R){const E=R.g.length+1,w=[];for(let v=0;v<E;v++)w[v]=R.i(v)<<1|R.i(v-1)>>>31;return new o(w,R.h)}function de(R,E){const w=E>>5;E%=32;const v=R.g.length-w,A=[];for(let b=0;b<v;b++)A[b]=E>0?R.i(b+w)>>>E|R.i(b+w+1)<<32-E:R.i(b+w);return new o(A,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Nf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,xn=o}).apply(typeof wl<"u"?wl:typeof self<"u"?self:typeof window<"u"?window:{});var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ff,Ns,Lf,uo,TB,kf,Vf,xf;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wi=="object"&&Wi];for(var l=0;l<a.length;++l){var f=a[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,l){if(l)e:{var f=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var P=a[d];if(!(P in f))break e;f=f[P]}a=a[a.length-1],d=f[a],l=l(d),l!=d&&l!=null&&e(f,a,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(l){var f=[],d;for(d in l)Object.prototype.hasOwnProperty.call(l,d)&&f.push([d,l[d]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,f){return a.call.apply(a.bind,arguments)}function c(a,l,f){return c=u,c.apply(null,arguments)}function h(a,l){var f=Array.prototype.slice.call(arguments,1);return function(){var d=f.slice();return d.push.apply(d,arguments),a.apply(this,d)}}function C(a,l){function f(){}f.prototype=l.prototype,a.Z=l.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(d,P,S){for(var q=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)q[ie-2]=arguments[ie];return l.prototype[P].apply(d,q)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const l=a.length;if(l>0){const f=Array(l);for(let d=0;d<l;d++)f[d]=a[d];return f}return[]}function I(a,l){for(let d=1;d<arguments.length;d++){const P=arguments[d];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=a.length||0;const S=P.length||0;a.length=f+S;for(let q=0;q<S;q++)a[f+q]=P[q]}else a.push(P)}}class F{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(a){o.setTimeout(()=>{throw a},0)}function j(){var a=R;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class te{constructor(){this.h=this.g=null}add(l,f){const d=se.get();d.set(l,f),this.h?this.h.next=d:this.g=d,this.h=d}}var se=new F(()=>new Be,a=>a.reset());class Be{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,de=!1,R=new te,E=()=>{const a=Promise.resolve(void 0);we=()=>{a.then(w)}};function w(){for(var a;a=j();){try{a.h.call(a.g)}catch(f){M(f)}var l=se;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}de=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,l),o.removeEventListener("test",f,l)}catch{}return a}();function D(a){return/^[\s\xa0]*$/.test(a)}function it(a,l){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}C(it,A),it.prototype.init=function(a,l){const f=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(f=="mouseover"?l=a.fromElement:f=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&it.Z.h.call(this)},it.prototype.h=function(){it.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sr="closure_listenable_"+(Math.random()*1e6|0),Gp=0;function Up(a,l,f,d,P){this.listener=a,this.proxy=null,this.src=l,this.type=f,this.capture=!!d,this.ha=P,this.key=++Gp,this.da=this.fa=!1}function Fi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Li(a,l,f){for(const d in a)l.call(f,a[d],d,a)}function Hp(a,l){for(const f in a)l.call(void 0,a[f],f,a)}function lc(a){const l={};for(const f in a)l[f]=a[f];return l}const hc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fc(a,l){let f,d;for(let P=1;P<arguments.length;P++){d=arguments[P];for(f in d)a[f]=d[f];for(let S=0;S<hc.length;S++)f=hc[S],Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}}function ki(a){this.src=a,this.g={},this.h=0}ki.prototype.add=function(a,l,f,d,P){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const q=ba(a,l,d,P);return q>-1?(l=a[q],f||(l.fa=!1)):(l=new Up(l,this.src,S,!!d,P),l.fa=f,a.push(l)),l};function Pa(a,l){const f=l.type;if(f in a.g){var d=a.g[f],P=Array.prototype.indexOf.call(d,l,void 0),S;(S=P>=0)&&Array.prototype.splice.call(d,P,1),S&&(Fi(l),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ba(a,l,f,d){for(let P=0;P<a.length;++P){const S=a[P];if(!S.da&&S.listener==l&&S.capture==!!f&&S.ha==d)return P}return-1}var Sa="closure_lm_"+(Math.random()*1e6|0),Oa={};function Cc(a,l,f,d,P){if(Array.isArray(l)){for(let S=0;S<l.length;S++)Cc(a,l[S],f,d,P);return null}return f=gc(f),a&&a[sr]?a.J(l,f,B(d)?!!d.capture:!1,P):Jp(a,l,f,!1,d,P)}function Jp(a,l,f,d,P,S){if(!l)throw Error("Invalid event type");const q=B(P)?!!P.capture:!!P;let ie=Fa(a);if(ie||(a[Sa]=ie=new ki(a)),f=ie.add(l,f,d,q,S),f.proxy)return f;if(d=qp(),f.proxy=d,d.src=a,d.listener=f,a.addEventListener)b||(P=q),P===void 0&&(P=!1),a.addEventListener(l.toString(),d,P);else if(a.attachEvent)a.attachEvent(pc(l.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return f}function qp(){function a(f){return l.call(a.src,a.listener,f)}const l=jp;return a}function dc(a,l,f,d,P){if(Array.isArray(l))for(var S=0;S<l.length;S++)dc(a,l[S],f,d,P);else d=B(d)?!!d.capture:!!d,f=gc(f),a&&a[sr]?(a=a.i,S=String(l).toString(),S in a.g&&(l=a.g[S],f=ba(l,f,d,P),f>-1&&(Fi(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete a.g[S],a.h--)))):a&&(a=Fa(a))&&(l=a.g[l.toString()],a=-1,l&&(a=ba(l,f,d,P)),(f=a>-1?l[a]:null)&&Na(f))}function Na(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[sr])Pa(l.i,a);else{var f=a.type,d=a.proxy;l.removeEventListener?l.removeEventListener(f,d,a.capture):l.detachEvent?l.detachEvent(pc(f),d):l.addListener&&l.removeListener&&l.removeListener(d),(f=Fa(l))?(Pa(f,a),f.h==0&&(f.src=null,l[Sa]=null)):Fi(a)}}}function pc(a){return a in Oa?Oa[a]:Oa[a]="on"+a}function jp(a,l){if(a.da)a=!0;else{l=new it(l,this);const f=a.listener,d=a.ha||a.src;a.fa&&Na(a),a=f.call(d,l)}return a}function Fa(a){return a=a[Sa],a instanceof ki?a:null}var La="__closure_events_fn_"+(Math.random()*1e9>>>0);function gc(a){return typeof a=="function"?a:(a[La]||(a[La]=function(l){return a.handleEvent(l)}),a[La])}function Ke(){v.call(this),this.i=new ki(this),this.M=this,this.G=null}C(Ke,v),Ke.prototype[sr]=!0,Ke.prototype.removeEventListener=function(a,l,f,d){dc(this,a,l,f,d)};function Ze(a,l){var f,d=a.G;if(d)for(f=[];d;d=d.G)f.push(d);if(a=a.M,d=l.type||l,typeof l=="string")l=new A(l,a);else if(l instanceof A)l.target=l.target||a;else{var P=l;l=new A(d,a),fc(l,P)}P=!0;let S,q;if(f)for(q=f.length-1;q>=0;q--)S=l.g=f[q],P=Vi(S,d,!0,l)&&P;if(S=l.g=a,P=Vi(S,d,!0,l)&&P,P=Vi(S,d,!1,l)&&P,f)for(q=0;q<f.length;q++)S=l.g=f[q],P=Vi(S,d,!1,l)&&P}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const f=a.g[l];for(let d=0;d<f.length;d++)Fi(f[d]);delete a.g[l],a.h--}}this.G=null},Ke.prototype.J=function(a,l,f,d){return this.i.add(String(a),l,!1,f,d)},Ke.prototype.K=function(a,l,f,d){return this.i.add(String(a),l,!0,f,d)};function Vi(a,l,f,d){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let P=!0;for(let S=0;S<l.length;++S){const q=l[S];if(q&&!q.da&&q.capture==f){const ie=q.listener,Me=q.ha||q.src;q.fa&&Pa(a.i,q),P=ie.call(Me,d)!==!1&&P}}return P&&!d.defaultPrevented}function Kp(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function mc(a){a.g=Kp(()=>{a.g=null,a.i&&(a.i=!1,mc(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class zp extends v{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:mc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){v.call(this),this.h=a,this.g={}}C(hs,v);var Ec=[];function _c(a){Li(a.g,function(l,f){this.g.hasOwnProperty(f)&&Na(l)},a),a.g={}}hs.prototype.N=function(){hs.Z.N.call(this),_c(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ka=o.JSON.stringify,Qp=o.JSON.parse,Wp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Dc(){}function wc(){}var fs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Va(){A.call(this,"d")}C(Va,A);function xa(){A.call(this,"c")}C(xa,A);var ir={},Ic=null;function xi(){return Ic=Ic||new Ke}ir.Ia="serverreachability";function yc(a){A.call(this,ir.Ia,a)}C(yc,A);function Cs(a){const l=xi();Ze(l,new yc(l))}ir.STAT_EVENT="statevent";function Tc(a,l){A.call(this,ir.STAT_EVENT,a),this.stat=l}C(Tc,A);function et(a){const l=xi();Ze(l,new Tc(l,a))}ir.Ja="timingevent";function Ac(a,l){A.call(this,ir.Ja,a),this.size=l}C(Ac,A);function ds(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function ps(){this.g=!0}ps.prototype.ua=function(){this.g=!1};function $p(a,l,f,d,P,S){a.info(function(){if(a.g)if(S){var q="",ie=S.split("&");for(let ge=0;ge<ie.length;ge++){var Me=ie[ge].split("=");if(Me.length>1){const Ue=Me[0];Me=Me[1];const Vt=Ue.split("_");q=Vt.length>=2&&Vt[1]=="type"?q+(Ue+"="+Me+"&"):q+(Ue+"=redacted&")}}}else q=null;else q=S;return"XMLHTTP REQ ("+d+") [attempt "+P+"]: "+l+`
`+f+`
`+q})}function Yp(a,l,f,d,P,S,q){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+P+"]: "+l+`
`+f+`
`+S+" "+q})}function Sr(a,l,f,d){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Zp(a,f)+(d?" "+d:"")})}function Xp(a,l){a.info(function(){return"TIMEOUT: "+l})}ps.prototype.info=function(){};function Zp(a,l){if(!a.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var f=S[a];if(!(f.length<2)){var d=f[1];if(Array.isArray(d)&&!(d.length<1)){var P=d[0];if(P!="noop"&&P!="stop"&&P!="close")for(let q=1;q<d.length;q++)d[q]=""}}}}return ka(S)}catch{return l}}var Mi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Rc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vc;function Ma(){}C(Ma,Dc),Ma.prototype.g=function(){return new XMLHttpRequest},vc=new Ma;function gs(a){return encodeURIComponent(String(a))}function eg(a){var l=1;a=a.split(":");const f=[];for(;l>0&&a.length;)f.push(a.shift()),l--;return a.length&&f.push(a.join(":")),f}function mn(a,l,f,d){this.j=a,this.i=l,this.l=f,this.S=d||1,this.V=new hs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pc}function Pc(){this.i=null,this.g="",this.h=!1}var bc={},Ga={};function Ua(a,l,f){a.M=1,a.A=Ui(kt(l)),a.u=f,a.R=!0,Sc(a,null)}function Sc(a,l){a.F=Date.now(),Gi(a),a.B=kt(a.A);var f=a.B,d=a.S;Array.isArray(d)||(d=[String(d)]),qc(f.i,"t",d),a.C=0,f=a.j.L,a.h=new Pc,a.g=Bl(a.j,f?l:null,!a.u),a.P>0&&(a.O=new zp(c(a.Y,a,a.g),a.P)),l=a.V,f=a.g,d=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ec[0]=P.toString()),P=Ec);for(let S=0;S<P.length;S++){const q=Cc(f,P[S],d||l.handleEvent,!1,l.h||l);if(!q)break;l.g[q.key]=q}l=a.J?lc(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Cs(),$p(a.i,a.v,a.B,a.l,a.S,a.u)}mn.prototype.ba=function(a){a=a.target;const l=this.O;l&&Dn(a)==3?l.j():this.Y(a)},mn.prototype.Y=function(a){try{if(a==this.g)e:{const ie=Dn(this.g),Me=this.g.ya(),ge=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Yc(this.g)))){this.K||ie!=4||Me==7||(Me==8||ge<=0?Cs(3):Cs(2)),Ha(this);var l=this.g.ca();this.X=l;var f=tg(this);if(this.o=l==200,Yp(this.i,this.v,this.B,this.l,this.S,ie,l),this.o){if(this.U&&!this.L){t:{if(this.g){var d,P=this.g;if((d=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(d)){var S=d;break t}}S=null}if(a=S)Sr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ja(this,a);else{this.o=!1,this.m=3,et(12),or(this),ms(this);break e}}if(this.R){a=!0;let Ue;for(;!this.K&&this.C<f.length;)if(Ue=ng(this,f),Ue==Ga){ie==4&&(this.m=4,et(14),a=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==bc){this.m=4,et(15),Sr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Sr(this.i,this.l,Ue,null),Ja(this,Ue);if(Oc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||f.length!=0||this.h.h||(this.m=1,et(16),a=!1),this.o=this.o&&a,!a)Sr(this.i,this.l,f,"[Invalid Chunked Response]"),or(this),ms(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ya(q),q.P=!0,et(11))}}else Sr(this.i,this.l,f,null),Ja(this,f);ie==4&&or(this),this.o&&!this.K&&(ie==4?sl(this.j,this):(this.o=!1,Gi(this)))}else pg(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),or(this),ms(this)}}}catch{}finally{}};function tg(a){if(!Oc(a))return a.g.la();const l=Yc(a.g);if(l==="")return"";let f="";const d=l.length,P=Dn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return or(a),ms(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<d;S++)a.h.h=!0,f+=a.h.i.decode(l[S],{stream:!(P&&S==d-1)});return l.length=0,a.h.g+=f,a.C=0,a.h.g}function Oc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ng(a,l){var f=a.C,d=l.indexOf(`
`,f);return d==-1?Ga:(f=Number(l.substring(f,d)),isNaN(f)?bc:(d+=1,d+f>l.length?Ga:(l=l.slice(d,d+f),a.C=d+f,l)))}mn.prototype.cancel=function(){this.K=!0,or(this)};function Gi(a){a.T=Date.now()+a.H,Nc(a,a.H)}function Nc(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ds(c(a.aa,a),l)}function Ha(a){a.D&&(o.clearTimeout(a.D),a.D=null)}mn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Xp(this.i,this.B),this.M!=2&&(Cs(),et(17)),or(this),this.m=2,ms(this)):Nc(this,this.T-a)};function ms(a){a.j.I==0||a.K||sl(a.j,a)}function or(a){Ha(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,_c(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Ja(a,l){try{var f=a.j;if(f.I!=0&&(f.g==a||qa(f.h,a))){if(!a.L&&qa(f.h,a)&&f.I==3){try{var d=f.Ba.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var P=d;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ki(f),qi(f);else break e;$a(f),et(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ds(c(f.Va,f),6e3));kc(f.h)<=1&&f.ta&&(f.ta=void 0)}else Br(f,11)}else if((a.L||f.g==a)&&Ki(f),!D(l))for(P=f.Ba.g.parse(l),l=0;l<P.length;l++){let ge=P[l];const Ue=ge[0];if(!(Ue<=f.K))if(f.K=Ue,ge=ge[1],f.I==2)if(ge[0]=="c"){f.M=ge[1],f.ba=ge[2];const Vt=ge[3];Vt!=null&&(f.ka=Vt,f.j.info("VER="+f.ka));const ur=ge[4];ur!=null&&(f.za=ur,f.j.info("SVER="+f.za));const wn=ge[5];wn!=null&&typeof wn=="number"&&wn>0&&(d=1.5*wn,f.O=d,f.j.info("backChannelRequestTimeoutMs_="+d)),d=f;const In=a.g;if(In){const Qi=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var S=d.h;S.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ja(S,S.h),S.h=null))}if(d.G){const Xa=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;Xa&&(d.wa=Xa,Ie(d.J,d.G,Xa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),d=f;var q=a;if(d.na=al(d,d.L?d.ba:null,d.W),q.L){Vc(d.h,q);var ie=q,Me=d.O;Me&&(ie.H=Me),ie.D&&(Ha(ie),Gi(ie)),d.g=q}else nl(d);f.i.length>0&&ji(f)}else ge[0]!="stop"&&ge[0]!="close"||Br(f,7);else f.I==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Br(f,7):Wa(f):ge[0]!="noop"&&f.l&&f.l.qa(ge),f.A=0)}}Cs(4)}catch{}}var rg=class{constructor(a,l){this.g=a,this.map=l}};function Fc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Lc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function kc(a){return a.h?1:a.g?a.g.size:0}function qa(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function ja(a,l){a.g?a.g.add(l):a.h=l}function Vc(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Fc.prototype.cancel=function(){if(this.i=xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const f of a.g.values())l=l.concat(f.G);return l}return _(a.i)}var Mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sg(a,l){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const d=a[f].indexOf("=");let P,S=null;d>=0?(P=a[f].substring(0,d),S=a[f].substring(d+1)):P=a[f],l(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function En(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof En?(this.l=a.l,Es(this,a.j),this.o=a.o,this.g=a.g,_s(this,a.u),this.h=a.h,Ka(this,jc(a.i)),this.m=a.m):a&&(l=String(a).match(Mc))?(this.l=!1,Es(this,l[1]||"",!0),this.o=Ds(l[2]||""),this.g=Ds(l[3]||"",!0),_s(this,l[4]),this.h=Ds(l[5]||"",!0),Ka(this,l[6]||"",!0),this.m=Ds(l[7]||"")):(this.l=!1,this.i=new Is(null,this.l))}En.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(ws(l,Gc,!0),":");var f=this.g;return(f||l=="file")&&(a.push("//"),(l=this.o)&&a.push(ws(l,Gc,!0),"@"),a.push(gs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ws(f,f.charAt(0)=="/"?ag:og,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ws(f,ug)),a.join("")},En.prototype.resolve=function(a){const l=kt(this);let f=!!a.j;f?Es(l,a.j):f=!!a.o,f?l.o=a.o:f=!!a.g,f?l.g=a.g:f=a.u!=null;var d=a.h;if(f)_s(l,a.u);else if(f=!!a.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var P=l.h.lastIndexOf("/");P!=-1&&(d=l.h.slice(0,P+1)+d)}if(P=d,P==".."||P==".")d="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){d=P.lastIndexOf("/",0)==0,P=P.split("/");const S=[];for(let q=0;q<P.length;){const ie=P[q++];ie=="."?d&&q==P.length&&S.push(""):ie==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),d&&q==P.length&&S.push("")):(S.push(ie),d=!0)}d=S.join("/")}else d=P}return f?l.h=d:f=a.i.toString()!=="",f?Ka(l,jc(a.i)):f=!!a.m,f&&(l.m=a.m),l};function kt(a){return new En(a)}function Es(a,l,f){a.j=f?Ds(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function _s(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Ka(a,l,f){l instanceof Is?(a.i=l,cg(a.i,a.l)):(f||(l=ws(l,Bg)),a.i=new Is(l,a.l))}function Ie(a,l,f){a.i.set(l,f)}function Ui(a){return Ie(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ds(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ws(a,l,f){return typeof a=="string"?(a=encodeURI(a).replace(l,ig),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ig(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gc=/[#\/\?@]/g,og=/[#\?:]/g,ag=/[#\?]/g,Bg=/[#\?@]/g,ug=/#/g;function Is(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&sg(a.i,function(l,f){a.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=Is.prototype,n.add=function(a,l){ar(this),this.i=null,a=Or(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(l),this.h+=1,this};function Uc(a,l){ar(a),l=Or(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Hc(a,l){return ar(a),l=Or(a,l),a.g.has(l)}n.forEach=function(a,l){ar(this),this.g.forEach(function(f,d){f.forEach(function(P){a.call(l,P,d,this)},this)},this)};function Jc(a,l){ar(a);let f=[];if(typeof l=="string")Hc(a,l)&&(f=f.concat(a.g.get(Or(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)f=f.concat(a[l]);return f}n.set=function(a,l){return ar(this),this.i=null,a=Or(this,a),Hc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=Jc(this,a),a.length>0?String(a[0]):l):l};function qc(a,l,f){Uc(a,l),f.length>0&&(a.i=null,a.g.set(Or(a,l),_(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let d=0;d<l.length;d++){var f=l[d];const P=gs(f);f=Jc(this,f);for(let S=0;S<f.length;S++){let q=P;f[S]!==""&&(q+="="+gs(f[S])),a.push(q)}}return this.i=a.join("&")};function jc(a){const l=new Is;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Or(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function cg(a,l){l&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(f,d){const P=d.toLowerCase();d!=P&&(Uc(this,d),qc(this,P,f))},a)),a.j=l}function lg(a,l){const f=new ps;if(o.Image){const d=new Image;d.onload=h(_n,f,"TestLoadImage: loaded",!0,l,d),d.onerror=h(_n,f,"TestLoadImage: error",!1,l,d),d.onabort=h(_n,f,"TestLoadImage: abort",!1,l,d),d.ontimeout=h(_n,f,"TestLoadImage: timeout",!1,l,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else l(!1)}function hg(a,l){const f=new ps,d=new AbortController,P=setTimeout(()=>{d.abort(),_n(f,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:d.signal}).then(S=>{clearTimeout(P),S.ok?_n(f,"TestPingServer: ok",!0,l):_n(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(P),_n(f,"TestPingServer: error",!1,l)})}function _n(a,l,f,d,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),d(f)}catch{}}function fg(){this.g=new Wp}function za(a){this.i=a.Sb||null,this.h=a.ab||!1}C(za,Dc),za.prototype.g=function(){return new Hi(this.i,this.h)};function Hi(a,l){Ke.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(Hi,Ke),n=Hi.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,Ts(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Kc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Kc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?ys(this):Ts(this),this.readyState==3&&Kc(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ys(this))},n.Na=function(a){this.g&&(this.response=a,ys(this))},n.ga=function(){this.g&&ys(this)};function ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ts(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=l.next();return a.join(`\r
`)};function Ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zc(a){let l="";return Li(a,function(f,d){l+=d,l+=":",l+=f,l+=`\r
`}),l}function Qa(a,l,f){e:{for(d in f){var d=!1;break e}d=!0}d||(f=zc(f),typeof a=="string"?f!=null&&gs(f):Ie(a,l,f))}function Se(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(Se,Ke);var Cg=/^https?$/i,dg=["POST","PUT"];n=Se.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,f,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vc.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(S){Qc(this,S);return}if(a=f||"",f=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var P in d)f.set(P,d[P]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const S of d.keys())f.set(S,d.get(S));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(dg,l,void 0)>=0)||d||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,q]of f)this.g.setRequestHeader(S,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){Qc(this,S)}};function Qc(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Wc(a),Ji(a)}function Wc(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ze(this,"complete"),Ze(this,"abort"),Ji(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ji(this,!0)),Se.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?$c(this):this.Xa())},n.Xa=function(){$c(this)};function $c(a){if(a.h&&typeof i<"u"){if(a.v&&Dn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ze(a,"readystatechange"),Dn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var d;if(d=S===0){let q=String(a.D).match(Mc)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),d=!Cg.test(q?q.toLowerCase():"")}f=d}if(f)Ze(a,"complete"),Ze(a,"success");else{a.o=6;try{var P=Dn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Wc(a)}}finally{Ji(a)}}}}function Ji(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,l||Ze(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Dn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Dn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),Qp(l)}};function Yc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pg(a){const l={};a=(a.g&&Dn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<a.length;d++){if(D(a[d]))continue;var f=eg(a[d]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=l[P]||[];l[P]=S,S.push(f)}Hp(l,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(a,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||l}function Xc(a){this.za=0,this.i=[],this.j=new ps,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=As("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=As("baseRetryDelayMs",5e3,a),this.Za=As("retryDelaySeedMs",1e4,a),this.Ta=As("forwardChannelMaxRetries",2,a),this.va=As("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Fc(a&&a.concurrentRequestLimit),this.Ba=new fg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Xc.prototype,n.ka=8,n.I=1,n.connect=function(a,l,f,d){et(0),this.W=a,this.H=l||{},f&&d!==void 0&&(this.H.OSID=f,this.H.OAID=d),this.F=this.X,this.J=al(this,null,this.W),ji(this)};function Wa(a){if(Zc(a),a.I==3){var l=a.V++,f=kt(a.J);if(Ie(f,"SID",a.M),Ie(f,"RID",l),Ie(f,"TYPE","terminate"),Rs(a,f),l=new mn(a,a.j,l),l.M=2,l.A=Ui(kt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=l.A,f=!0),f||(l.g=Bl(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Gi(l)}ol(a)}function qi(a){a.g&&(Ya(a),a.g.cancel(),a.g=null)}function Zc(a){qi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ki(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ji(a){if(!Lc(a.h)&&!a.m){a.m=!0;var l=a.Ea;we||E(),de||(we(),de=!0),R.add(l,a),a.D=0}}function gg(a,l){return kc(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ds(c(a.Ea,a,l),il(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new mn(this,this.j,a);let S=this.o;if(this.U&&(S?(S=lc(S),fc(S,this.U)):S=this.U),this.u!==null||this.R||(P.J=S,S=null),this.S)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var d=this.i[f];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,l>4096){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=tl(this,P,l),f=kt(this.J),Ie(f,"RID",a),Ie(f,"CVER",22),this.G&&Ie(f,"X-HTTP-Session-Id",this.G),Rs(this,f),S&&(this.R?l="headers="+gs(zc(S))+"&"+l:this.u&&Qa(f,this.u,S)),ja(this.h,P),this.Ra&&Ie(f,"TYPE","init"),this.S?(Ie(f,"$req",l),Ie(f,"SID","null"),P.U=!0,Ua(P,f,null)):Ua(P,f,l),this.I=2}}else this.I==3&&(a?el(this,a):this.i.length==0||Lc(this.h)||el(this))};function el(a,l){var f;l?f=l.l:f=a.V++;const d=kt(a.J);Ie(d,"SID",a.M),Ie(d,"RID",f),Ie(d,"AID",a.K),Rs(a,d),a.u&&a.o&&Qa(d,a.u,a.o),f=new mn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),l&&(a.i=l.G.concat(a.i)),l=tl(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ja(a.h,f),Ua(f,d,l)}function Rs(a,l){a.H&&Li(a.H,function(f,d){Ie(l,d,f)}),a.l&&Li({},function(f,d){Ie(l,d,f)})}function tl(a,l,f){f=Math.min(a.i.length,f);const d=a.l?c(a.l.Ka,a.l,a):null;e:{var P=a.i;let ie=-1;for(;;){const Me=["count="+f];ie==-1?f>0?(ie=P[0].g,Me.push("ofs="+ie)):ie=0:Me.push("ofs="+ie);let ge=!0;for(let Ue=0;Ue<f;Ue++){var S=P[Ue].g;const Vt=P[Ue].map;if(S-=ie,S<0)ie=Math.max(0,P[Ue].g-100),ge=!1;else try{S="req"+S+"_"||"";try{var q=Vt instanceof Map?Vt:Object.entries(Vt);for(const[ur,wn]of q){let In=wn;B(wn)&&(In=ka(wn)),Me.push(S+ur+"="+encodeURIComponent(In))}}catch(ur){throw Me.push(S+"type="+encodeURIComponent("_badmap")),ur}}catch{d&&d(Vt)}}if(ge){q=Me.join("&");break e}}q=void 0}return a=a.i.splice(0,f),l.G=a,q}function nl(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;we||E(),de||(we(),de=!0),R.add(l,a),a.A=0}}function $a(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ds(c(a.Da,a),il(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,rl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ds(c(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),qi(this),rl(this))};function Ya(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function rl(a){a.g=new mn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=kt(a.na);Ie(l,"RID","rpc"),Ie(l,"SID",a.M),Ie(l,"AID",a.K),Ie(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ie(l,"TO",a.ia),Ie(l,"TYPE","xmlhttp"),Rs(a,l),a.u&&a.o&&Qa(l,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ui(kt(l)),f.u=null,f.R=!0,Sc(f,a)}n.Va=function(){this.C!=null&&(this.C=null,qi(this),$a(this),et(19))};function Ki(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function sl(a,l){var f=null;if(a.g==l){Ki(a),Ya(a),a.g=null;var d=2}else if(qa(a.h,l))f=l.G,Vc(a.h,l),d=1;else return;if(a.I!=0){if(l.o)if(d==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var P=a.D;d=xi(),Ze(d,new Ac(d,f)),ji(a)}else nl(a);else if(P=l.m,P==3||P==0&&l.X>0||!(d==1&&gg(a,l)||d==2&&$a(a)))switch(f&&f.length>0&&(l=a.h,l.i=l.i.concat(f)),P){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function il(a,l){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*l}function Br(a,l){if(a.j.info("Error code "+l),l==2){var f=c(a.bb,a),d=a.Ua;const P=!d;d=new En(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Es(d,"https"),Ui(d),P?lg(d.toString(),f):hg(d.toString(),f)}else et(2);a.I=0,a.l&&a.l.pa(l),ol(a),Zc(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function ol(a){if(a.I=0,a.ja=[],a.l){const l=xc(a.h);(l.length!=0||a.i.length!=0)&&(I(a.ja,l),I(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function al(a,l,f){var d=f instanceof En?kt(f):new En(f);if(d.g!="")l&&(d.g=l+"."+d.g),_s(d,d.u);else{var P=o.location;d=P.protocol,l=l?l+"."+P.hostname:P.hostname,P=+P.port;const S=new En(null);d&&Es(S,d),l&&(S.g=l),P&&_s(S,P),f&&(S.h=f),d=S}return f=a.G,l=a.wa,f&&l&&Ie(d,f,l),Ie(d,"VER",a.ka),Rs(a,d),d}function Bl(a,l,f){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new Se(new za({ab:f})):new Se(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ul(){}n=ul.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function zi(){}zi.prototype.g=function(a,l){return new gt(a,l)};function gt(a,l){Ke.call(this),this.g=new Xc(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!D(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!D(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Nr(this)}C(gt,Ke),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Wa(this.g)},gt.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=ka(a),a=f);l.i.push(new rg(l.Ya++,a)),l.I==3&&ji(l)},gt.prototype.N=function(){this.g.l=null,delete this.j,Wa(this.g),delete this.g,gt.Z.N.call(this)};function cl(a){Va.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const f in l){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(cl,Va);function ll(){xa.call(this),this.status=1}C(ll,xa);function Nr(a){this.g=a}C(Nr,ul),Nr.prototype.ra=function(){Ze(this.g,"a")},Nr.prototype.qa=function(a){Ze(this.g,new cl(a))},Nr.prototype.pa=function(a){Ze(this.g,new ll)},Nr.prototype.oa=function(){Ze(this.g,"b")},zi.prototype.createWebChannel=zi.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,xf=function(){return new zi},Vf=function(){return xi()},kf=ir,TB={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,uo=Mi,Rc.COMPLETE="complete",Lf=Rc,wc.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,Ns=wc,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,Ff=Se}).apply(typeof Wi<"u"?Wi:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var me,x=(me=class{},G(me,"FOLD_CASE",1),G(me,"LITERAL",2),G(me,"CLASS_NL",4),G(me,"DOT_NL",8),G(me,"ONE_LINE",16),G(me,"NON_GREEDY",32),G(me,"PERL_X",64),G(me,"UNICODE_GROUPS",128),G(me,"WAS_DOLLAR",256),G(me,"LOOKBEHIND",512),G(me,"MATCH_NL",me.CLASS_NL|me.DOT_NL),G(me,"PERL",me.CLASS_NL|me.ONE_LINE|me.PERL_X|me.UNICODE_GROUPS),G(me,"POSIX",0),G(me,"UNANCHORED",0),G(me,"ANCHOR_START",1),G(me,"ANCHOR_BOTH",2),me);const Fr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},$s=128,AB=new Int32Array($s),RB=new Int32Array($s),$i=65535;for(let n=0;n<$s;n++)n>=97&&n<=122?AB[n]=n-32:AB[n]=n,n>=65&&n<=90?RB[n]=n+32:RB[n]=n;var EB,O=(EB=class{static toUpperCase(n){if(n<$s)return AB[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>$i?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=r.codePointAt(0)>$i?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<$s)return RB[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>$i?2:1;if(e.length>t)return n;const r=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=r.codePointAt(0)>$i?2:1;return r.length>s||r.codePointAt(0)!==n?n:e.codePointAt(0)}},G(EB,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),EB),g=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const Mf=new Uint8Array(256);for(let n=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";n<64;n++)Mf[e.charCodeAt(n)]=n;const Gf=n=>{const e=[];let t=0,r=0;for(let s=0;s<n.length;s++){let i=Mf[n.charCodeAt(s)];t|=(i&31)<<r,i&32?r+=5:(e.push(t),t=0,r=0)}return e},m=(n,e)=>{const t=Gf(n),r=e?t.length/2:t.length/3,s=new Uint32Array(r*3);let i=0,o=0;for(let B=0;B<r;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},Xm=n=>{const e=Gf(n),t=new Map;let r=0;for(let s=0;s<e.length;s+=2){r+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(r,r+o)}return t};var Yi=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return n in this.initializer}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.initializer[n],t=e?e():null;return this.cache.set(n,t),t}},An,at=(An=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=Xm("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},G(An,"_CASE_ORBIT",null),G(An,"_Print",null),G(An,"CATEGORIES",new Yi({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),G(An,"SCRIPTS",new Yi({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))})),G(An,"FOLD_CATEGORIES",new Yi({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),G(An,"FOLD_SCRIPT",new Yi({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})),An),Ee,z=(Ee=class{static is32(e,t){let r=0,s=e.length;for(;r<s;){const i=r+Math.floor((s-r)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:r=i+1}return!1}static is(e,t){if(t<=Ee.MAX_LATIN1){for(let r=0;r<e.length;r++){if(t>e.getHi(r))continue;const s=e.getLo(r);if(t<s)return!1;const i=e.getStride(r);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&Ee.is32(e,t)}static isUpper(e){if(e<=Ee.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return Ee.is(at.Upper,e)}static isPrint(e){return e<=Ee.MAX_LATIN1?e>=32&&e<Ee.MAX_ASCII||e>=161&&e!==173:Ee.is(at.Print,e)}static simpleFold(e){if(at.CASE_ORBIT.has(e))return at.CASE_ORBIT.get(e);const t=O.toLowerCase(e);return t!==e?t:O.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=Ee.MAX_ASCII&&t<=Ee.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let r=Ee.simpleFold(e);r!==e;r=Ee.simpleFold(r))if(r===t)return!0;return!1}},G(Ee,"MAX_RUNE",1114111),G(Ee,"MAX_ASCII",127),G(Ee,"MAX_LATIN1",255),G(Ee,"MAX_BMP",65535),G(Ee,"MIN_FOLD",65),G(Ee,"MAX_FOLD",125251),G(Ee,"MIN_HIGH_SURROGATE",55296),G(Ee,"MAX_HIGH_SURROGATE",56319),G(Ee,"MIN_LOW_SURROGATE",56320),G(Ee,"MAX_LOW_SURROGATE",57343),G(Ee,"MIN_SUPPLEMENTARY_CODE_POINT",65536),Ee);const ZB=256,Uf=new Uint8Array(ZB);for(let n=0;n<ZB;n++)Uf[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let sB=null,iB=null;var Te,W=(Te=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")||O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")}static unhex(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")?e-O.CODES.get("0"):O.CODES.get("a")<=e&&e<=O.CODES.get("f")?e-O.CODES.get("a")+10:O.CODES.get("A")<=e&&e<=O.CODES.get("F")?e-O.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(z.isPrint(e))Te.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case O.CODES.get('"'):t+='\\"';break;case O.CODES.get("\\"):t+="\\\\";break;case O.CODES.get("	"):t+="\\t";break;case O.CODES.get(`
`):t+="\\n";break;case O.CODES.get("\r"):t+="\\r";break;case O.CODES.get("\b"):t+="\\b";break;case O.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){const t=String(e),r=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);r.push(i),s+=i>z.MAX_BMP?2:1}return r}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<ZB?Uf[e]===1:!1}static emptyOpContext(e,t){let r=0;return e<0&&(r|=Te.EMPTY_BEGIN_TEXT|Te.EMPTY_BEGIN_LINE),e===10&&(r|=Te.EMPTY_BEGIN_LINE),t<0&&(r|=Te.EMPTY_END_TEXT|Te.EMPTY_END_LINE),t===10&&(r|=Te.EMPTY_END_LINE),Te.isWordRune(e)!==Te.isWordRune(t)?r|=Te.EMPTY_WORD_BOUNDARY:r|=Te.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>Te.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>z.MAX_BMP?2:1}static toArray(e){const t=e.length,r=new Array(t);for(let s=0;s<t;s++)r[s]=e[s];return r}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return sB||(sB=new TextEncoder),sB.encode(e);{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===z.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===z.MIN_LOW_SURROGATE?(i=z.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){iB||(iB=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return iB.decode(t)}else{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[r++],B=e[r++],u=e[r++],c=((i&7)<<18|(o&63)<<12|(B&63)<<6|u&63)-z.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(z.MIN_HIGH_SURROGATE+(c>>10)),t[s++]=String.fromCharCode(z.MIN_LOW_SURROGATE+(c&1023))}else{let o=e[r++],B=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},G(Te,"METACHARACTERS","\\.+*?()|[]{}^$"),G(Te,"EMPTY_BEGIN_LINE",1),G(Te,"EMPTY_END_LINE",2),G(Te,"EMPTY_BEGIN_TEXT",4),G(Te,"EMPTY_END_TEXT",8),G(Te,"EMPTY_WORD_BOUNDARY",16),G(Te,"EMPTY_NO_WORD_BOUNDARY",32),G(Te,"EMPTY_ALL",-1),Te);const Hf=(n=[],e=0)=>{const t=Object.create(null);for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)};var kn,Ir=(kn=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===kn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===kn.Encoding.UTF_16}},G(kn,"Encoding",Hf(["UTF_16","UTF_8"])),kn),Il=class extends Ir{constructor(n=null){super(),this.bytes=n}getEncoding(){return Ir.Encoding.UTF_8}asCharSequence(){return W.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},Zm=class extends Ir{constructor(n=null){super(),this.charSequence=n}getEncoding(){return Ir.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return W.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},fr=class{static utf16(n){return new Zm(n)}static utf8(n){return W.isByteArray(n)?new Il(n):new Il(W.stringToUtf8ByteArray(n))}},st=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},eE=class extends st{constructor(n,e=0,t=n.length){super(),this.bytes=n,this.start=e,this.end=t}hasString(n,e){const t=n.bytes;if(t.length===0)return!0;const r=this.indexOf(this.bytes,t,this.start+e);return r!==-1&&r<=this.end-t.length}hasAnyString(n,e){return n.ac8?n.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return st.EOF();const e=this.bytes[n]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&n+1<this.end){const t=this.bytes[n+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&n+2<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;return(r&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|r&63)<<3|3}else if(e>=240&&e<=244&&n+3<this.end){const t=this.bytes[n+1]&255;if((t&192)!==128)return e<<3|1;const r=this.bytes[n+2]&255;if((r&192)!==128)return e<<3|1;const s=this.bytes[n+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(r&63)<<6|s&63)<<3|4}else return e<<3|1}index(n,e){e+=this.start;const t=this.indexOf(this.bytes,n.prefixUTF8,e);return t<0?t:t-e}context(n){n+=this.start;let e=-1;if(n>this.start&&n<=this.end){let r=n-1;if(e=this.bytes[r--],e>=128){let s=n-4;for(s<this.start&&(s=this.start);r>=s&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start),e=this.step(r-this.start)>>3}}const t=n<this.end?this.step(n-this.start)>>3:-1;return W.emptyOpContext(e,t)}indexOf(n,e,t=0){let r=e.length;if(r===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-r;const o=typeof n.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=n.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&n[B]!==s;)B++;if(B>i)return-1}let u=!0;for(let c=1;c<r;c++)if(n[B+c]!==e[c]){u=!1;break}if(u)return B;B++}return-1}prefixLength(n){return n.prefixUTF8.length}},tE=class extends st{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.ac16?n.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(n){if(n+=this.start,n>=this.end)return st.EOF();const e=this.charSequence.charCodeAt(n);if(e<z.MIN_HIGH_SURROGATE||e>z.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=z.MIN_LOW_SURROGATE&&t<=z.MAX_LOW_SURROGATE?(e-z.MIN_HIGH_SURROGATE)*1024+(t-z.MIN_LOW_SURROGATE)+z.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return W.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},ye=class{static fromUTF8(n,e=0,t=n.length){return new eE(n,e,t)}static fromUTF16(n,e=0,t=n.length){return new tE(n,e,t)}},Ei=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},De=class extends Ei{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},nE=class extends Ei{constructor(n){super(n),this.name="RE2JSCompileException"}},ot=class extends Ei{constructor(n){super(n),this.name="RE2JSGroupException"}},rE=class extends Ei{constructor(n){super(n),this.name="RE2JSFlagsException"}},Vs=class extends Ei{constructor(n){super(n),this.name="RE2JSInternalException"}},dr,yl=(dr=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(r=>{const s=r.codePointAt(0);return s===O.CODES.get("\\")||s===O.CODES.get("$")?`\\${r}`:r}).join(""):e.indexOf("$")<0?e:e.split("").map(r=>r.codePointAt(0)===O.CODES.get("$")?"$$":r).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,this.numberOfInstructions=r.numberOfInstructions(),t instanceof Ir?this.resetMatcherInput(t):W.isByteArray(t)?this.resetMatcherInput(fr.utf8(t)):this.resetMatcherInput(fr.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof Ir||(W.isByteArray(e)?e=fr.utf8(e):e=fr.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ot(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ot(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new ot(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}getNamedGroups(){if(!this.hasMatch)throw new ot("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new ot(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new ot("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new ot("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,x.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,x.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new ot(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?ye.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):ye.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,x.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?W.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),r}appendReplacementInternalJava(e){let t="",r=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===O.CODES.get("\\")){if(r<i&&(t+=e.substring(r,i)),i++,i>=s)throw new ot("character to be escaped is missing");r=i,i++;continue}if(o===O.CODES.get("$")){if(r<i&&(t+=e.substring(r,i)),i+1>=s)throw new ot("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(O.CODES.get("0")<=B&&B<=O.CODES.get("9")){let u=B-O.CODES.get("0"),c=i+2;for(;c<s;c++){const C=e.codePointAt(c);if(C<O.CODES.get("0")||C>O.CODES.get("9")||u*10+C-O.CODES.get("0")>this.patternGroupCount)break;u=u*10+C-O.CODES.get("0")}if(u>this.patternGroupCount)throw new ot(`n > number of groups: ${u}`);const h=this.group(u);h!==null&&(t+=h),i=c,r=i}else if(B===O.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==O.CODES.get("}");)u++;if(u>=s)throw new ot("named capture group is missing trailing '}'");const c=e.substring(i+2,u),h=this.group(c);h!==null&&(t+=h),i=u+1,r=i}else throw new ot("Illegal group reference");continue}i++}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalJs(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===O.CODES.get("$")){let o=e.codePointAt(i+1);if(O.CODES.get("$")===o){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(O.CODES.get("&")===o){r<i&&(t+=e.substring(r,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,r=i+1;continue}else if(O.CODES.get("`")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(0,this.start(0)),i++,r=i+1;continue}else if(O.CODES.get("'")===o){r<i&&(t+=e.substring(r,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,r=i+1;continue}else if(O.CODES.get("1")<=o&&o<=O.CODES.get("9")){let B=o-O.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<O.CODES.get("0")||o>O.CODES.get("9")||B*10+o-O.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-O.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,r=i,i--;continue}const u=this.group(B);u!==null&&(t+=u),r=i,i--;continue}else if(o===O.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==O.CODES.get(">")&&e.codePointAt(B)!==O.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==O.CODES.get(">")){t+=e.substring(i-1,B+1),r=B+1,i=B;continue}const u=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const c=this.group(u);c!==null&&(t+=c)}else t+=`$<${u}>`;r=B+1,i=B;continue}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=dr.MAX_REPLACER_ARGS)throw new ot("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,r){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,r);return s+=String(e(...B)),s}buildReplacerArgs(e,t,r){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(r),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},G(dr,"MAX_REPLACER_ARGS",65535),dr),ce,N=(ce=class{static isRuneOp(e){return ce.RUNE<=e&&e<=ce.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=W.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&x.FOLD_CASE?z.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&x.FOLD_CASE?z.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let r=0,s=t>>1;for(;s>1;){const o=s>>1;r+=this.runes[r+o<<1]<=e?o:0,s-=o}r+=this.runes[r<<1]<=e?1:0;const i=r-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case ce.ALT:return`alt -> ${this.out}, ${this.arg}`;case ce.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case ce.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case ce.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case ce.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case ce.FAIL:return"fail";case ce.NOP:return`nop -> ${this.out}`;case ce.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case ce.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case ce.RUNE:return this.runes===null?"rune <null>":["rune ",ce.escapeRunes(this.runes),this.arg&x.FOLD_CASE?"/i":""," -> ",this.out].join("");case ce.RUNE1:return`rune1 ${ce.escapeRunes(this.runes)} -> ${this.out}`;case ce.RUNE_ANY:return`any -> ${this.out}`;case ce.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},G(ce,"ALT",1),G(ce,"ALT_MATCH",2),G(ce,"CAPTURE",3),G(ce,"EMPTY_WIDTH",4),G(ce,"FAIL",5),G(ce,"MATCH",6),G(ce,"NOP",7),G(ce,"RUNE",8),G(ce,"RUNE1",9),G(ce,"RUNE_ANY",10),G(ce,"RUNE_ANY_NOT_NL",11),G(ce,"LB_WRITE",12),G(ce,"LB_CHECK",13),ce),Tl=class{constructor(n){this.sparse=new Int32Array(n),this.densePcs=new Int32Array(n),this.denseCaps=null,this.size=0,this.ncap=0}init(n){this.ncap=n;const e=this.densePcs.length*n;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(n){const e=this.sparse[n];return e<this.size&&this.densePcs[e]===n}isEmpty(){return this.size===0}add(n){const e=this.size++;return this.sparse[n]=e,this.densePcs[e]=n,e}clear(){this.size=0}toString(){let n="{";for(let e=0;e<this.size;e++)e!==0&&(n+=", "),n+=this.densePcs[e];return n+="}",n}},sE=class vB{static fromRE2(e){const t=new vB;return t.prog=e.prog,t.re2=e,t.q0=new Tl(t.prog.numInst()),t.q1=new Tl(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return vB.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?W.emptyInts():W.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,r){const s=this.re2.cond;if(s===W.EMPTY_ALL||(r===x.ANCHOR_START||r===x.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,C=c&7,p=-1,_=0;c!==st.EOF()&&(c=e.step(i+C),p=c>>3,_=c&7);let I;for(i===0?I=W.emptyOpContext(-1,h):I=e.context(i);;){if(B.isEmpty()){if(s&W.EMPTY_BEGIN_TEXT&&i!==0||(r===x.ANCHOR_START||r===x.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const j=e.index(this.re2,i);if(j<0)break;i+=j,c=e.step(i),h=c>>3,C=c&7,c=e.step(i+C),p=c>>3,_=c&7,I=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let j=0;j<this.prog.lbStarts.length;j++)this.add(B,this.prog.lbStarts[j],i,this.matchcap,0,I);!this.matched&&(i===0||r===x.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,I));const F=i+C;if(I=e.context(F),this.step(B,u,i,F,h,I,r,i===e.endPos()),C===0||this.ncap===0&&this.matched)break;i+=C,h=p,C=_,h!==-1&&(c=e.step(i+C),p=c>>3,_=c&7);const M=B;B=u,u=M}return u.clear(),this.matched}matchSet(e,t,r){const s=this.re2.cond;if(s===W.EMPTY_ALL)return[];if((r===x.ANCHOR_START||r===x.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,u=this.q1,c=e.step(i),h=c>>3,C=c&7,p=-1,_=0;c!==st.EOF()&&(c=e.step(i+C),p=c>>3,_=c&7);let I=i===0?W.emptyOpContext(-1,h):e.context(i);const F=new Set;for(;!(B.isEmpty()&&(s&W.EMPTY_BEGIN_TEXT&&i!==0||(r===x.ANCHOR_START||r===x.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let te=0;te<this.prog.lbStarts.length;te++)this.add(B,this.prog.lbStarts[te],i,this.matchcap,0,I);(i===0||r===x.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,I);const M=i+C;I=e.context(M);for(let te=0;te<B.size;te++){const se=B.densePcs[te],Be=this.prog.inst[se],we=te*this.ncap;let de=!1;switch(Be.op){case N.MATCH:if(r===x.ANCHOR_BOTH&&i!==e.endPos())break;F.add(Be.arg);break;case N.RUNE:de=Be.matchRune(h);break;case N.RUNE1:de=h===Be.runes[0];break;case N.RUNE_ANY:de=!0;break;case N.RUNE_ANY_NOT_NL:de=h!==10;break;default:continue}de&&this.add(u,Be.out,M,B.denseCaps,we,I)}if(B.clear(),C===0)break;i+=C,h=p,C=_,h!==-1&&(c=e.step(i+C),p=c>>3,_=c&7);const j=B;B=u,u=j}return u.clear(),Array.from(F).sort((M,j)=>M-j)}step(e,t,r,s,i,o,B,u){const c=this.re2.longest;for(let h=0;h<e.size;h++){const C=e.densePcs[h],p=h*this.ncap;if(c&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const _=this.prog.inst[C];let I=!1;switch(_.op){case N.MATCH:if(B===x.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!c||!this.matched||this.matchcap[1]<r)){e.denseCaps[p+1]=r;for(let F=0;F<this.ncap;F++)this.matchcap[F]=e.denseCaps[p+F]}c||(e.size=0),this.matched=!0;break;case N.RUNE:I=_.matchRune(i);break;case N.RUNE1:I=i===_.runes[0];break;case N.RUNE_ANY:I=!0;break;case N.RUNE_ANY_NOT_NL:I=i!==10;break;default:continue}I&&this.add(t,_.out,s,e.denseCaps,p,o)}e.clear()}add(e,t,r,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),u=this.prog.inst[t];switch(u.op){case N.FAIL:return;case N.ALT:case N.ALT_MATCH:this.add(e,u.out,r,s,i,o),t=u.arg;continue;case N.EMPTY_WIDTH:if(!(u.arg&~o)){t=u.out;continue}return;case N.NOP:t=u.out;continue;case N.CAPTURE:if(u.arg<this.ncap){const c=s[i+u.arg];s[i+u.arg]=r,this.add(e,u.out,r,s,i,o),s[i+u.arg]=c;return}else{t=u.out;continue}case N.LB_WRITE:this.lbTable[Math.abs(u.arg)]=r,t=u.out;continue;case N.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===r){t=u.out;continue}}else if(this.lbTable[-u.arg]!==r){t=u.out;continue}return;case N.MATCH:case N.RUNE:case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:if(this.ncap>0){const c=B*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[c+h]=s[i+h]}return;default:throw new Vs("unhandled")}}}};const Al=n=>{let e=-2128831035;for(let t=0;t<n.length;t++)e^=n[t],e=Math.imul(e,16777619);return e},iE=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0};var oE=class{constructor(n,e,t=[]){this.nfaStates=n,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(z.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(z.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},Yt,aE=(Yt=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/Yt.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,r=[...e];let s=!1;const i=[];for(;r.length>0;){const B=r.pop();if(t.has(B))continue;t.add(B);const u=this.prog.getInst(B);switch(u.op){case N.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case N.ALT:case N.ALT_MATCH:r.push(u.out),r.push(u.arg);break;case N.NOP:case N.CAPTURE:r.push(u.out);break;case N.EMPTY_WIDTH:case N.LB_WRITE:case N.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,u)=>B-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const r=t.pcs,s=Al(r);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const u=i[B];if(iE(u.nfaStates,r))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=Yt.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new oE(r,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),r=e.length-t,s=e.slice(r),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const u=Al(B.nfaStates);let c=this.stateCache.get(u);c||(c=[],this.stateCache.set(u,c)),c.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,r){if(t<=z.MAX_LATIN1)if(r===x.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(r===x.UNANCHORED?0:z.MAX_RUNE+1),B=e.transKeys,u=B.length;for(let c=0;c<u;c++)if(B[c]===o)return e.transVals[c]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],u=this.prog.getInst(B);N.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}r===x.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=z.MAX_LATIN1)r===x.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(r===x.UNANCHORED?0:z.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,r){if((r===x.ANCHOR_START||r===x.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(r===x.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),u=B>>3,c=B&7;if(c===0)break;if(i=r===x.UNANCHORED&&u<=z.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,r),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(r===x.ANCHOR_BOTH){if(o+c===s)return!0}else return!0;if(i.nfaStates.length===0&&r!==x.UNANCHORED)return!1;o+=c}return!1}matchSet(e,t,r){if((r===x.ANCHOR_START||r===x.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(c,h)=>{c.isMatch&&(r===x.ANCHOR_BOTH?h===s&&c.matchIDs.forEach(C=>o.add(C)):c.matchIDs.forEach(C=>o.add(C)))};B(i,t);let u=t;for(;u<s;){const c=e.step(u),h=c>>3,C=c&7;if(C===0)break;if(i=r===x.UNANCHORED&&h<=z.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,r),i===null)return null;if(i.lastSeen=++this.clock,u+=C,B(i,u),i.nfaStates.length===0&&r!==x.UNANCHORED)break}return Array.from(o).sort((c,h)=>c-h)}},G(Yt,"MAX_CACHE_CLEARS",5),G(Yt,"STATE_MEMORY_ESTIMATE",838),Yt);const BE=32,uE=500,oB=256,cE=256*1024;var lE=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(oB),this.jobArg=new Uint8Array(oB),this.jobPos=new Int32Array(oB),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const r=n.numInst()*(e+1)+BE-1>>>5;this.visited.length<r?this.visited=new Uint32Array(r):this.visited.fill(0,0,r),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,r=t>>>5,s=1<<(t&31);return this.visited[r]&s?!1:(this.visited[r]|=s,!0)}push(n,e,t,r){if(n.prog.getInst(e).op!==N.FAIL&&(r||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=r?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,r,s){const i=n.longest;for(this.push(n,t,r,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],c=!0;for(;!(!c&&!this.shouldVisit(o,u));){c=!1;const h=n.prog.getInst(o);switch(h.op){case N.FAIL:throw new Vs("unexpected InstFail");case N.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(n,o,u,!0),o=h.out;continue}case N.ALT_MATCH:{const C=n.prog.getInst(h.out);if(N.isRuneOp(C.op)){this.push(n,h.arg,u,!1),o=h.arg,u=this.end;continue}this.push(n,h.out,this.end,!1),o=h.out;continue}case N.RUNE:{const C=e.step(u);if(C===st.EOF()||!h.matchRune(C>>3))break;u+=C&7,o=h.out;continue}case N.RUNE1:{const C=e.step(u);if(C===st.EOF()||C>>3!==h.runes[0])break;u+=C&7,o=h.out;continue}case N.RUNE_ANY_NOT_NL:{const C=e.step(u);if(C===st.EOF()||C>>3===10)break;u+=C&7,o=h.out;continue}case N.RUNE_ANY:{const C=e.step(u);if(C===st.EOF())break;u+=C&7,o=h.out;continue}case N.CAPTURE:if(B){this.cap[h.arg]=u;break}else{h.arg<this.ncap&&(this.push(n,o,this.cap[h.arg],!0),this.cap[h.arg]=u),o=h.out;continue}case N.EMPTY_WIDTH:{const C=e.context(u);if(h.arg&~C)break;o=h.out;continue}case N.NOP:o=h.out;continue;case N.MATCH:{if(s===x.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const C=this.matchcap[1];if((C===-1||i&&u>0&&u>C)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case N.LB_WRITE:case N.LB_CHECK:throw new Vs("Backtracker cannot evaluate Lookbehind instructions");default:throw new Vs("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Xi=[];var Zi=class Jf{static shouldBacktrack(e){return e.numInst()<=uE}static maxBitStateLen(e){return Jf.shouldBacktrack(e)?Math.floor(cE/e.numInst()):0}static execute(e,t,r,s,i){const o=e.cond;if(o===W.EMPTY_ALL||(s===x.ANCHOR_START||s===x.ANCHOR_BOTH)&&r!==0||o&W.EMPTY_BEGIN_TEXT&&r!==0)return null;const B=Xi.length>0?Xi.pop():new lE,u=t.endPos();B.reset(e.prog,u,i);let c=!1;if(o&W.EMPTY_BEGIN_TEXT||s===x.ANCHOR_START||s===x.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=r),B.tryBacktrack(e,t,e.prog.start,r,s)&&(c=!0);else{let C=-1;for(;r<=u&&C!==0;r+=C){if(e.prefix.length>0){const _=t.index(e,r);if(_<0)break;r+=_}if(B.ncap>0&&(B.cap[0]=r),B.tryBacktrack(e,t,e.prog.start,r,s)){c=!0;break}const p=t.step(r);C=p===st.EOF()?0:p&7}}if(!c)return Xi.push(B),null;const h=i===0?[]:W.toArray(B.matchcap.subarray(0,i));return Xi.push(B),h}},Rl=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const hE=(n,e,t,r)=>{const s=n.length,i=e.length;let o=0,B=0;const u=[],c=[];let h=!0,C=-1;const p=_=>{const I=_?n:e,F=_?o:B,M=_?t:r;return C>0&&I[F]<=u[C]?!1:(u.push(I[F],I[F+1]),_?o+=2:B+=2,C+=2,c.push(M),!0)};for(;o<s||B<i;)if(B>=i?h=p(!0):o>=s||e[B]<n[o]?h=p(!1):h=p(!0),!h)return null;return{merged:u,next:c}};var fE=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],r=new N(t.op);r.out=t.out,r.arg=t.arg,r.runes=t.runes?t.runes.slice():[],r.next=null,this.inst[e]=r}}};const CE=n=>{const e=new fE(n);for(let t=0;t<e.inst.length;t++){const r=e.inst[t];if(r.op!==N.ALT&&r.op!==N.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[r[i]];if(o.op!==N.ALT&&o.op!==N.ALT_MATCH&&(s="arg",i="out",o=e.inst[r[i]],o.op!==N.ALT&&o.op!==N.ALT_MATCH))continue;const B=e.inst[r[s]];if(B.op===N.ALT||B.op===N.ALT_MATCH)continue;let u="out",c="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,u="arg",c="out"),h&&(o[u]=r[s]),r[s]===o[u]&&(r[i]=o[c])}return e},dE=n=>{if(n.inst.length>=1e3)return null;const e=new Rl(n.inst.length),t=new Rl(n.inst.length),r=new Array(n.inst.length),s=new Array(n.inst.length).fill(!1),i=o=>{let B=!0;const u=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case N.ALT:case N.ALT_MATCH:{B=i(u.out)&&i(u.arg);let c=s[u.out],h=s[u.arg];if(c&&h)return!1;if(h){const I=u.out;u.out=u.arg,u.arg=I;const F=c;c=h,h=F}c&&(s[o]=!0,u.op=N.ALT_MATCH);const C=r[u.out]||[],p=r[u.arg]||[],_=hE(C,p,u.out,u.arg);if(!_)return!1;r[o]=_.merged,u.next=new Uint32Array(_.next);break}case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:B=i(u.out),s[o]=s[u.out],r[o]=r[u.out]?r[u.out].slice():[],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break;case N.MATCH:case N.FAIL:s[o]=u.op===N.MATCH;break;case N.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){r[o]=[],u.next=new Uint32Array([u.out]);break}let c=[];if(u.runes.length===1&&u.arg&x.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let C=z.simpleFold(h);C!==h;C=z.simpleFold(C))c.push(C,C);c.sort((C,p)=>C-p)}else for(let h=0;h<u.runes.length;h++)c.push(u.runes[h]);r[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let c=[];if(u.arg&x.FOLD_CASE){const h=u.runes[0];c.push(h,h);for(let C=z.simpleFold(h);C!==h;C=z.simpleFold(C))c.push(C,C);c.sort((C,p)=>C-p)}else c.push(u.runes[0],u.runes[0]);r[o]=c,u.next=new Uint32Array(Math.floor(c.length/2)+1).fill(u.out),u.op=N.RUNE;break}case N.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,z.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case N.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),r[o]=[0,9,11,z.MAX_RUNE],u.next=new Uint32Array(Math.floor(r[o].length/2)+1).fill(u.out);break}return B};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)r[o]&&(n.inst[o].runes=r[o]);return n},pE=(n,e)=>{for(let t=0;t<e.inst.length;t++){const r=e.inst[t];switch(r.op){case N.ALT:case N.ALT_MATCH:case N.RUNE:break;case N.CAPTURE:case N.EMPTY_WIDTH:case N.NOP:case N.MATCH:case N.FAIL:n.inst[t].next=null;break;case N.RUNE1:case N.RUNE_ANY:case N.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=r.op,n.inst[t].runes=r.runes?r.runes.slice():[];break}}};var vl=class qf{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==N.EMPTY_WIDTH||!(t.arg&W.EMPTY_BEGIN_TEXT))return null;let r=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===N.ALT||e.inst[i].op===N.ALT_MATCH){r=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case N.ALT:case N.ALT_MATCH:if(B===N.MATCH||e.inst[o.arg].op===N.MATCH)return null;break;case N.EMPTY_WIDTH:if(B===N.MATCH){if((o.arg&W.EMPTY_END_TEXT)===W.EMPTY_END_TEXT)continue;return null}break;default:if(B===N.MATCH&&r)return null;break}}let s=CE(e);return s=dE(s),s!==null&&pE(s,e),s}static next(e,t){const r=e.matchRunePos(t);return r>=0?e.next[r]:e.op===N.ALT_MATCH?e.out:0}static execute(e,t,r,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let u=!1,c=t.step(r),h=c>>3,C=c&7,p=st.EOF(),_=-1,I=0;c!==st.EOF()&&(p=t.step(r+C),p!==st.EOF()&&(_=p>>3,I=p&7));let F=r===0?W.emptyOpContext(-1,h):t.context(r),M=o.start,j;for(;;){switch(j=o.inst[M],M=j.out,j.op){case N.MATCH:return s===x.ANCHOR_BOTH&&r!==t.endPos()?null:(u=!0,B.length>0&&(B[0]=0,B[1]=r),i===0?[]:W.toArray(B));case N.RUNE:if(!j.matchRune(h))return null;break;case N.RUNE1:if(h!==j.runes[0])return null;break;case N.RUNE_ANY:break;case N.RUNE_ANY_NOT_NL:if(h===10)return null;break;case N.ALT:case N.ALT_MATCH:M=qf.next(j,h);continue;case N.FAIL:return null;case N.NOP:continue;case N.EMPTY_WIDTH:if(j.arg&~F)return null;continue;case N.CAPTURE:j.arg<B.length&&(B[j.arg]=r);continue;default:throw new Vs("bad inst")}if(C===0)break;F=W.emptyOpContext(h,_),r+=C,h=_,C=I,h!==-1&&(p=t.step(r+C),p!==st.EOF()?(_=p>>3,I=p&7):(_=-1,I=0))}return u?i===0?[]:W.toArray(B):null}},Y,T=(Y=class{static isPseudoOp(e){return e>=Y.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===O.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new Y(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=Y.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=Y.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Y.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Y.Op.EMPTY_MATCH:e+="(?:)";break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:case Y.Op.REPEAT:{const t=this.subs[0];switch(t.op>Y.Op.CAPTURE||t.op===Y.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Y.Op.STAR:e+="*";break;case Y.Op.PLUS:e+="+";break;case Y.Op.QUEST:e+="?";break;case Y.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&x.NON_GREEDY&&(e+="?");break}case Y.Op.CONCAT:for(let t of this.subs)t.op===Y.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case Y.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case Y.Op.LITERAL:this.flags&x.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=W.escapeRune(t);this.flags&x.FOLD_CASE&&(e+=")");break;case Y.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Y.Op.ANY_CHAR:e+="(?s:.)";break;case Y.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case Y.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case Y.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Y.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Y.Op.BEGIN_TEXT:e+="\\A";break;case Y.Op.END_TEXT:this.flags&x.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case Y.Op.BEGIN_LINE:e+="^";break;case Y.Op.END_LINE:e+="$";break;case Y.Op.WORD_BOUNDARY:e+="\\b";break;case Y.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Y.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===z.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=Y.quoteIfHyphen(r),e+=W.escapeRune(r),r!==s&&(e+="-",e+=Y.quoteIfHyphen(s),e+=W.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=Y.quoteIfHyphen(r),e+=W.escapeRune(r),r!==s&&(e+="-",e+=Y.quoteIfHyphen(s),e+=W.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===Y.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof Y)||this.op!==e.op)return!1;switch(this.op){case Y.Op.END_TEXT:if((this.flags&x.WAS_DOLLAR)!==(e.flags&x.WAS_DOLLAR))return!1;break;case Y.Op.LITERAL:case Y.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case Y.Op.ALTERNATE:case Y.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:if((this.flags&x.NON_GREEDY)!==(e.flags&x.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.REPEAT:if((this.flags&x.NON_GREEDY)!==(e.flags&x.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.PLB:case Y.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},G(Y,"Op",Hf(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),Y),Pl=class{constructor(n){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of n){let r=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[r]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[r][i]=this.next.length-1),r=this.next[r][i]}this.match[r]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const r=this.next[0][t];this.fail[r]=0,e.push(r)}for(;e.length>0;){const t=e.shift();for(const r in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],r)){const s=this.next[t][r];let i=this.fail[t];for(;i!==0&&!(r in this.next[i]);)i=this.fail[i];r in this.next[i]?this.fail[s]=this.next[i][r]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n.charCodeAt(s);for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}searchUTF8(n,e,t){let r=0;for(let s=e;s<t;s++){const i=n[s];for(;r!==0&&!(i in this.next[r]);)r=this.fail[r];if(i in this.next[r]&&(r=this.next[r][i]),this.match[r])return!0}return!1}},Ht,fe=(Ht=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Ht.Type.NONE:return!0;case Ht.Type.EXACT:return e.hasString(this,t);case Ht.Type.AND:for(let r=0;r<this.subs.length;r++)if(!this.subs[r].eval(e,t))return!1;return!0;case Ht.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let r=0;r<this.subs.length;r++)if(this.subs[r].eval(e,t))return!0;return!1;default:return!0}}},G(Ht,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Ht),gE=class $t{static build(e){const t=$t.fromRegexp(e);return $t.simplify(t)}static fromRegexp(e){if(!e)return new fe(fe.Type.NONE);switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.NO_MATCH:case T.Op.EMPTY_MATCH:case T.Op.BEGIN_LINE:case T.Op.END_LINE:case T.Op.BEGIN_TEXT:case T.Op.END_TEXT:case T.Op.WORD_BOUNDARY:case T.Op.NO_WORD_BOUNDARY:case T.Op.CHAR_CLASS:case T.Op.ANY_CHAR_NOT_NL:case T.Op.ANY_CHAR:return new fe(fe.Type.NONE);case T.Op.LITERAL:{if(e.runes.length===0||e.flags&x.FOLD_CASE)return new fe(fe.Type.NONE);const t=new fe(fe.Type.EXACT);let r="";for(let s=0;s<e.runes.length;s++)r+=String.fromCodePoint(e.runes[s]);return t.str=r,t.bytes=W.stringToUtf8ByteArray(t.str),t}case T.Op.CAPTURE:case T.Op.PLUS:return $t.fromRegexp(e.subs[0]);case T.Op.REPEAT:return e.min>=1?$t.fromRegexp(e.subs[0]):new fe(fe.Type.NONE);case T.Op.CONCAT:{const t=new fe(fe.Type.AND);for(const r of e.subs)t.subs.push($t.fromRegexp(r));return t}case T.Op.ALTERNATE:{const t=new fe(fe.Type.OR);for(const r of e.subs)t.subs.push($t.fromRegexp(r));return t}default:return new fe(fe.Type.NONE)}}static simplify(e){if(e.type===fe.Type.EXACT||e.type===fe.Type.NONE)return e;if(e.type===fe.Type.AND){const t=[];for(const r of e.subs){const s=$t.simplify(r);if(s.type!==fe.Type.NONE)if(s.type===fe.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new fe(fe.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===fe.Type.OR){const t=[];for(const o of e.subs){const B=$t.simplify(o);if(B.type===fe.Type.NONE)return new fe(fe.Type.NONE);if(B.type===fe.Type.OR)for(let u=0;u<B.subs.length;u++)t.push(B.subs[u]);else t.push(B)}if(t.length===0)return new fe(fe.Type.NONE);if(t.length===1)return t[0];const r=new Set,s=[];for(const o of t)o.type===fe.Type.EXACT?r.has(o.str)||(r.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==fe.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new Pl(s.map(o=>{const B=[];for(let u=0;u<o.str.length;u++)B.push(o.str.charCodeAt(u));return B})),e.ac8=new Pl(s.map(o=>o.bytes))),e}return e}},Tt=class{constructor(n=0,e=0){this.head=n,this.tail=e}},mE=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new N(n))}skipNop(n){let e=this.inst[n];for(;e.op===N.NOP||e.op===N.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!N.isRuneOp(e.op)||e.runes.length!==1)return[e.op===N.MATCH,n];for(;N.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&x.FOLD_CASE);)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===N.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case N.EMPTY_WIDTH:n|=t.arg;break;case N.FAIL:return-1;case N.CAPTURE:case N.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const r=this.inst[t>>1];t&1?(t=r.arg,r.arg=e):(t=r.out,r.out=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return n.tail&1?t.arg=e.head:t.out=e.head,new Tt(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}},eo=class{constructor(n=0,e=new Tt,t=!1){this.i=n,this.out=e,this.nullable=t}},EE=class kr{static ANY_RUNE_NOT_NL(){return[0,O.CODES.get(`
`)-1,O.CODES.get(`
`)+1,z.MAX_RUNE]}static ANY_RUNE(){return[0,z.MAX_RUNE]}static compileRegexp(e){const t=new kr,r=t.compile(e);return t.prog.patch(r.out,t.newInst(N.MATCH).i),t.prog.start=r.i,t.prog}static compileSet(e){const t=new kr;if(e.length===0)return t.prog.start=t.newInst(N.FAIL).i,t.prog;let r=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(N.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),r.push(o.i)}let s=r[0];for(let i=1;i<r.length;i++){const o=t.newInst(N.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=r[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new mE,this.newInst(N.FAIL)}newInst(e){return this.prog.addInst(e),new eo(this.prog.numInst()-1,new Tt,!0)}nop(){const e=this.newInst(N.NOP);return e.out=new Tt(e.i<<1,e.i<<1),e}fail(){return new eo}cap(e){const t=this.newInst(N.CAPTURE);return t.out=new Tt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new eo(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new Tt(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new Tt(r.i<<1|1,r.i<<1|1)),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(N.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=new Tt(r.i<<1,r.i<<1)):(s.out=e.i,r.out=new Tt(r.i<<1|1,r.i<<1|1)),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new eo(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(N.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Tt(t.i<<1,t.i<<1),t}rune(e,t){const r=this.newInst(N.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=x.FOLD_CASE,(e.length!==1||z.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=new Tt(r.i<<1,r.i<<1),!(t&x.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=N.RUNE1:e.length===2&&e[0]===0&&e[1]===z.MAX_RUNE?s.op=N.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===O.CODES.get(`
`)-1&&e[2]===O.CODES.get(`
`)+1&&e[3]===z.MAX_RUNE&&(s.op=N.RUNE_ANY_NOT_NL),r}lookBehind(e,t){const r=this.newInst(N.LB_WRITE);this.prog.getInst(r.i).arg=t;const s=this.rune(kr.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,r.i);const B=this.newInst(N.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new Tt(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case T.Op.NO_MATCH:return this.fail();case T.Op.EMPTY_MATCH:return this.nop();case T.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case T.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case T.Op.ANY_CHAR_NOT_NL:return this.rune(kr.ANY_RUNE_NOT_NL(),0);case T.Op.ANY_CHAR:return this.rune(kr.ANY_RUNE(),0);case T.Op.BEGIN_LINE:return this.empty(W.EMPTY_BEGIN_LINE);case T.Op.END_LINE:return this.empty(W.EMPTY_END_LINE);case T.Op.BEGIN_TEXT:return this.empty(W.EMPTY_BEGIN_TEXT);case T.Op.END_TEXT:return this.empty(W.EMPTY_END_TEXT);case T.Op.WORD_BOUNDARY:return this.empty(W.EMPTY_WORD_BOUNDARY);case T.Op.NO_WORD_BOUNDARY:return this.empty(W.EMPTY_NO_WORD_BOUNDARY);case T.Op.PLB:case T.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case T.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case T.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case T.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case T.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case T.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}case T.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}default:throw new nE("regexp: unhandled case in compile")}}},_E=class mt{static simplify(e){if(e===null)return null;switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:{const t=mt.simplify(e.subs[0]);if(t!==e.subs[0]){const r=T.fromRegexp(e);return r.runes=[],r.subs=[t],r}return e}case T.Op.CONCAT:case T.Op.ALTERNATE:{const t=[];let r=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=mt.simplify(i);if(o!==i&&(r=!0),e.op===T.Op.CONCAT){if(o.op===T.Op.NO_MATCH)return new T(T.Op.NO_MATCH);if(o.op===T.Op.EMPTY_MATCH){r=!0;continue}if(o.op===T.Op.CONCAT){r=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===T.Op.ALTERNATE){if(o.op===T.Op.NO_MATCH){r=!0;continue}if(o.op===T.Op.ALTERNATE){r=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(r){if(t.length===0)return new T(e.op===T.Op.CONCAT?T.Op.EMPTY_MATCH:T.Op.NO_MATCH);if(t.length===1)return t[0];const s=T.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case T.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new T(T.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?new T(T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE?new T(T.Op.ANY_CHAR_NOT_NL):e;case T.Op.STAR:case T.Op.PLUS:case T.Op.QUEST:{const t=mt.simplify(e.subs[0]);return mt.simplify1(e.op,e.flags,t,e)}case T.Op.REPEAT:{if(e.min===0&&e.max===0)return new T(T.Op.EMPTY_MATCH);const t=mt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return mt.simplify1(T.Op.STAR,e.flags,t,null);if(e.min===1)return mt.simplify1(T.Op.PLUS,e.flags,t,null);const s=new T(T.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(mt.simplify1(T.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),mt.simplify(s)}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=mt.simplify1(T.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new T(T.Op.CONCAT);o.subs=[t,s],s=mt.simplify1(T.Op.QUEST,e.flags,o,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new T(T.Op.CONCAT);return s.subs=r.slice(0),mt.simplify(s)}return new T(T.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){if(r.op===T.Op.EMPTY_MATCH)return r;if(r.op===T.Op.NO_MATCH)return e===T.Op.PLUS?r:new T(T.Op.EMPTY_MATCH);if(e===r.op&&(t&x.NON_GREEDY)===(r.flags&x.NON_GREEDY))return r;if(s!==null&&s.op===e&&(s.flags&x.NON_GREEDY)===(t&x.NON_GREEDY)&&r===s.subs[0])return s;const i=new T(e);return i.flags=t,i.subs=[r],i}},he=class{constructor(n,e){this.sign=n,this.cls=e}};const bl=[48,57],Sl=[9,10,12,13,32,32],Ol=[48,57,65,90,95,95,97,122],Nl=new Map([["\\d",new he(1,bl)],["\\D",new he(-1,bl)],["\\s",new he(1,Sl)],["\\S",new he(-1,Sl)],["\\w",new he(1,Ol)],["\\W",new he(-1,Ol)]]),Fl=[48,57,65,90,97,122],Ll=[65,90,97,122],kl=[0,127],Vl=[9,9,32,32],xl=[0,31,127,127],Ml=[48,57],Gl=[33,126],Ul=[97,122],Hl=[32,126],Jl=[33,47,58,64,91,96,123,126],ql=[9,13,32,32],jl=[65,90],Kl=[48,57,65,90,95,95,97,122],zl=[48,57,65,70,97,102],Ql=new Map([["[:alnum:]",new he(1,Fl)],["[:^alnum:]",new he(-1,Fl)],["[:alpha:]",new he(1,Ll)],["[:^alpha:]",new he(-1,Ll)],["[:ascii:]",new he(1,kl)],["[:^ascii:]",new he(-1,kl)],["[:blank:]",new he(1,Vl)],["[:^blank:]",new he(-1,Vl)],["[:cntrl:]",new he(1,xl)],["[:^cntrl:]",new he(-1,xl)],["[:digit:]",new he(1,Ml)],["[:^digit:]",new he(-1,Ml)],["[:graph:]",new he(1,Gl)],["[:^graph:]",new he(-1,Gl)],["[:lower:]",new he(1,Ul)],["[:^lower:]",new he(-1,Ul)],["[:print:]",new he(1,Hl)],["[:^print:]",new he(-1,Hl)],["[:punct:]",new he(1,Jl)],["[:^punct:]",new he(-1,Jl)],["[:space:]",new he(1,ql)],["[:^space:]",new he(-1,ql)],["[:upper:]",new he(1,jl)],["[:^upper:]",new he(-1,jl)],["[:word:]",new he(1,Kl)],["[:^word:]",new he(-1,Kl)],["[:xdigit:]",new he(1,zl)],["[:^xdigit:]",new he(-1,zl)]]);var yn=class Rn{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],o=e[s+1];i===o?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],o=e[s+1];let B=t,u=r;for(;B<=u;){for(;B<r&&Rn.cmp(e,B,i,o)<0;)B+=2;for(;u>t&&Rn.cmp(e,u,i,o)>0;)u-=2;if(B<=u){if(B!==u){let c=e[B];e[B]=e[u],e[u]=c,c=e[B+1],e[B+1]=e[u+1],e[u+1]=c}B+=2,u-=2}}t<u&&Rn.qsortIntPair(e,t,u),B<r&&Rn.qsortIntPair(e,B,r)}constructor(e=W.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Rn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&x.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=z.MIN_FOLD&&t>=z.MAX_FOLD)return this.appendRange(e,t);if(t<z.MIN_FOLD||e>z.MAX_FOLD)return this.appendRange(e,t);e<z.MIN_FOLD&&(this.appendRange(e,z.MIN_FOLD-1),e=z.MIN_FOLD),t>z.MAX_FOLD&&(this.appendRange(z.MAX_FOLD+1,t),t=z.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=z.simpleFold(r);s!==r;s=z.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const r=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(r,s);continue}for(let o=r;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r=0;r<e.length;++r){const s=e.getLo(r),i=e.getHi(r),o=e.getStride(r);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=z.MAX_RUNE&&this.appendRange(t,z.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=z.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=z.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new Rn().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return Rn.charClassToString(this.r,this.len)}},DE=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=W.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},U,wE=(U=class{static unicodeTable(e){return e==="Any"?{tab:U.ANY_TABLE,fold:U.ANY_TABLE,sign:1}:e==="Ascii"?{tab:U.ASCII_TABLE,fold:U.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:at.CATEGORIES.get("Cn"),fold:at.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:at.CATEGORIES.get("LC"),fold:at.FOLD_CATEGORIES.get("LC"),sign:1}:at.CATEGORIES.has(e)?{tab:at.CATEGORIES.get(e),fold:at.FOLD_CATEGORIES.get(e),sign:1}:at.SCRIPTS.has(e)?{tab:at.SCRIPTS.get(e),fold:at.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<z.MIN_FOLD||e>z.MAX_FOLD)return e;let t=e;const r=e;for(e=z.simpleFold(e);e!==r;e=z.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===T.Op.EMPTY_MATCH)return null;if(e.op===T.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===T.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new T(T.Op.LITERAL);return r.flags=t,r.runes=W.stringToRunes(e),r}static parse(e,t){return new U(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=U.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=U.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new De(U.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&z.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==O.CODES.get("_")&&!W.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=O.CODES.get("0")&&e.peek()<=O.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===O.CODES.get("0")?-1:r.length>8?-2:parseInt(r,10)}static isCharClass(e){return e.op===T.Op.LITERAL&&e.runes.length===1||e.op===T.Op.CHAR_CLASS||e.op===T.Op.ANY_CHAR_NOT_NL||e.op===T.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case T.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case T.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case T.Op.ANY_CHAR_NOT_NL:return t!==O.CODES.get(`
`);case T.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case T.Op.ANY_CHAR:break;case T.Op.ANY_CHAR_NOT_NL:U.matchRune(t,O.CODES.get(`
`))&&(e.op=T.Op.ANY_CHAR);break;case T.Op.CHAR_CLASS:t.op===T.Op.LITERAL?e.runes=new yn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new yn(e.runes).appendClass(t.runes).toArray();break;case T.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=T.Op.CHAR_CLASS,e.runes=new yn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new De(U.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case O.CODES.get("1"):case O.CODES.get("2"):case O.CODES.get("3"):case O.CODES.get("4"):case O.CODES.get("5"):case O.CODES.get("6"):case O.CODES.get("7"):if(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"))break;case O.CODES.get("0"):{let s=r-O.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"));i++)s=s*8+e.peek()-O.CODES.get("0"),e.skip(1);return s}case O.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===O.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===O.CODES.get("}"))break;const u=W.unhex(r);if(u<0||(B=B*16+u,B>z.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=W.unhex(r);if(!e.more())break;r=e.pop();const i=W.unhex(r);if(s<0||i<0)break;return s*16+i}case O.CODES.get("a"):return O.CODES.get("\x07");case O.CODES.get("f"):return O.CODES.get("\f");case O.CODES.get("n"):return O.CODES.get(`
`);case O.CODES.get("r"):return O.CODES.get("\r");case O.CODES.get("t"):return O.CODES.get("	");case O.CODES.get("v"):return O.CODES.get("\v");default:if(r<=z.MAX_ASCII&&!W.isalnum(r))return r;break}throw new De(U.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new De(U.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?U.parseEscape(e):e.pop()}static concatRunes(e,t){for(let r=0;r<t.length;r++)e.push(t[r]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===T.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(U.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new T(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>U.MAX_RUNES)throw new De(U.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===T.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(U.MAX_SIZE/this.repeats)?this.repeats=U.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(U.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>U.MAX_SIZE)throw new De(U.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let r=0;switch(e.op){case T.Op.LITERAL:r=e.runes.length;break;case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:case T.Op.STAR:r=2+this.calcSize(e.subs[0]);break;case T.Op.PLUS:case T.Op.QUEST:r=1+this.calcSize(e.subs[0]);break;case T.Op.CONCAT:for(let s of e.subs)r=r+this.calcSize(s);break;case T.Op.ALTERNATE:for(let s of e.subs)r=r+this.calcSize(s);e.subs.length>1&&(r=r+e.subs.length-1);break;case T.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?r=2+s:r=1+e.min*s;break}r=e.max*s+(e.max-e.min);break}}return r=Math.max(1,r),this.size===null&&(this.size=new Map),this.size.set(e,r),r}checkHeight(e){if(!(this.numRegexp<U.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>U.MAX_HEIGHT)throw new De(U.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let r=1;for(let s of e.subs){const i=this.calcHeight(s);r<1+i&&(r=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,r),r}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!T.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(this.numRunes+=e.runes.length,e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===T.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&z.simpleFold(e.runes[0])===e.runes[2]&&z.simpleFold(e.runes[2])===e.runes[0]||e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&z.simpleFold(e.runes[0])===e.runes[1]&&z.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|x.FOLD_CASE))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|x.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==T.Op.LITERAL||i.op!==T.Op.LITERAL||(s.flags&x.FOLD_CASE)!==(i.flags&x.FOLD_CASE)?!1:(i.runes=U.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(T.Op.LITERAL);return r.flags=t,t&x.FOLD_CASE&&(e=U.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,o){let B=this.flags;if(B&x.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=x.NON_GREEDY),o!==-1))throw new De(U.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new De(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[u-1];if(T.isPseudoOp(c.op))throw new De(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=r,h.flags=B,h.subs=[c],this.stack[u-1]=h,this.checkLimits(h),e===T.Op.REPEAT&&(t>=2||r>=2)&&!this.repeatIsValid(h,1e3))throw new De(U.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===T.Op.REPEAT){let r=e.max;if(r===0)return!0;if(r<0&&(r=e.min),r>t)return!1;r>0&&(t=Math.trunc(t/r))}for(let r of e.subs)if(!this.repeatIsValid(r,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(T.Op.EMPTY_MATCH)):this.push(this.collapse(e,T.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(T.Op.NO_MATCH)):this.push(this.collapse(e,T.Op.ALTERNATE))}cleanAlt(e){e.op===T.Op.CHAR_CLASS&&(e.runes=new yn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===z.MAX_RUNE?(e.runes=[],e.op=T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===z.MAX_RUNE&&(e.runes=[],e.op=T.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let B of e)r+=B.op===t?B.subs.length:1;let s=new Array(r).fill(null),i=0;for(let B of e)if(B.op===t){for(let u=0;u<B.subs.length;u++)s[i++]=B.subs[u];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===T.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,o=0,B=0,u=0;for(let h=0;h<=r;h++){let C=null,p=0,_=0;if(h<r){let I=e[t+h];if(I.op===T.Op.CONCAT&&I.subs.length>0&&(I=I.subs[0]),I.op===T.Op.LITERAL&&(C=I.runes,p=I.runes.length,_=I.flags&x.FOLD_CASE),_===B){let F=0;for(;F<o&&F<p&&i[F]===C[F];)F++;if(F>0){o=F;continue}}}if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const I=this.newRegexp(T.Op.LITERAL);I.flags=B,I.runes=i.slice(0,o);for(let j=u;j<h;j++)e[t+j]=this.removeLeadingString(e[t+j],o),this.checkLimits(e[t+j]);const F=this.collapse(e.slice(t+u,t+h),T.Op.ALTERNATE),M=this.newRegexp(T.Op.CONCAT);M.subs=[I,F],e[s++]=M}u=h,i=C,o=p,B=_}r=s,t=0,u=0,s=0;let c=null;for(let h=0;h<=r;h++){let C=null;if(!(h<r&&(C=U.leadingRegexp(e[t+h]),c!==null&&c.equals(C)&&(U.isCharClass(c)||c.op===T.Op.REPEAT&&c.min===c.max&&U.isCharClass(c.subs[0]))))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{const p=c;for(let F=u;F<h;F++){const M=F!==u;e[t+F]=this.removeLeadingRegexp(e[t+F],M),this.checkLimits(e[t+F])}const _=this.collapse(e.slice(t+u,t+h),T.Op.ALTERNATE),I=this.newRegexp(T.Op.CONCAT);I.subs=[p,_],e[s++]=I}u=h,c=C}}r=s,t=0,u=0,s=0;for(let h=0;h<=r;h++)if(!(h<r&&U.isCharClass(e[t+h]))){if(h!==u)if(h===u+1)e[s++]=e[t+u];else{let C=u;for(let _=u+1;_<h;_++){const I=e[t+C],F=e[t+_];(I.op<F.op||I.op===F.op&&(I.runes!==null?I.runes.length:0)<(F.runes!==null?F.runes.length:0))&&(C=_)}const p=e[t+u];e[t+u]=e[t+C],e[t+C]=p;for(let _=u+1;_<h;_++)U.mergeCharClass(e[t+u],e[t+_]),this.reuse(e[t+_]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}h<r&&(e[s++]=e[t+h]),u=h+1}r=s,t=0,u=0,s=0;for(let h=0;h<r;++h)h+1<r&&e[t+h].op===T.Op.EMPTY_MATCH&&e[t+h+1].op===T.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===T.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===T.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=T.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(T.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&x.LITERAL)return U.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new DE(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case O.CODES.get("("):if(this.flags&x.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&x.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(T.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case O.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case O.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case O.CODES.get("^"):this.flags&x.ONE_LINE?this.op(T.Op.BEGIN_TEXT):this.op(T.Op.BEGIN_LINE),s.skip(1);break;case O.CODES.get("$"):this.flags&x.ONE_LINE?this.op(T.Op.END_TEXT).flags|=x.WAS_DOLLAR:this.op(T.Op.END_LINE),s.skip(1);break;case O.CODES.get("."):this.flags&x.DOT_NL?this.op(T.Op.ANY_CHAR):this.op(T.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case O.CODES.get("["):this.parseClass(s);break;case O.CODES.get("*"):case O.CODES.get("+"):case O.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case O.CODES.get("*"):o=T.Op.STAR;break;case O.CODES.get("+"):o=T.Op.PLUS;break;case O.CODES.get("?"):o=T.Op.QUEST;break}this.repeat(o,t,r,i,s,e);break}case O.CODES.get("{"):{i=s.pos();const o=U.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,r=(o&z.MAX_BMP)<<16>>16,this.repeat(T.Op.REPEAT,t,r,i,s,e);break}case O.CODES.get("\\"):{const o=s.pos();if(s.skip(1),this.flags&x.PERL_X&&s.more())switch(s.pop()){case O.CODES.get("A"):this.op(T.Op.BEGIN_TEXT);break e;case O.CODES.get("b"):this.op(T.Op.WORD_BOUNDARY);break e;case O.CODES.get("B"):this.op(T.Op.NO_WORD_BOUNDARY);break e;case O.CODES.get("C"):throw new De(U.ERR_INVALID_ESCAPE,"\\C");case O.CODES.get("Q"):{let c=s.rest();const h=c.indexOf("\\E");h>=0?(c=c.substring(0,h),s.skipString(c),s.skipString("\\E")):s.skipString(c);let C=0;for(;C<c.length;){const p=c.codePointAt(C);this.literal(p),C+=W.charCount(p)}break e}case O.CODES.get("z"):this.op(T.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(T.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const c=new yn;if(this.parseUnicodeClass(s,c)){B.runes=c.toArray(),this.push(B);break e}}const u=new yn;if(this.parsePerlClassEscape(s,u)){B.runes=u.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(U.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new De(U.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const B=r.charAt(2)==="P"?4:3,u=r.indexOf(">");if(u<0)throw new De(U.ERR_INVALID_NAMED_CAPTURE,r);const c=r.substring(B,u);if(e.skipString(c),e.skip(B+1),!U.isValidCaptureName(c))throw new De(U.ERR_INVALID_NAMED_CAPTURE,r.substring(0,u+1));const h=this.op(T.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[c])throw new De(U.ERR_DUPLICATE_NAMED_CAPTURE,c);this.namedGroups[c]=this.numCap,h.name=c;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case O.CODES.get("i"):s|=x.FOLD_CASE,o=!0;break;case O.CODES.get("m"):s&=-17,o=!0;break;case O.CODES.get("s"):s|=x.DOT_NL,o=!0;break;case O.CODES.get("U"):s|=x.NON_GREEDY,o=!0;break;case O.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case O.CODES.get(":"):case O.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===O.CODES.get(":")&&this.op(T.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new De(U.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(T.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===T.Op.VERTICAL_BAR&&U.isCharClass(this.stack[e-1])&&U.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return U.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===T.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new De(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==T.Op.LEFT_PAREN)throw new De(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(U.hasCapture(e))throw new De(U.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=T.Op.PLB:t.op=T.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=T.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&x.PERL_X)||!e.more()||e.pop()!==O.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=Nl.has(s)?Nl.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&x.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const o=Ql.has(i)?Ql.get(i):null;if(o===null)throw new De(U.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&x.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&x.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===O.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new De(U.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==O.CODES.get("{"))o=W.runeToString(i);else{const h=e.rest(),C=h.indexOf("}");if(C<0)throw e.rewindTo(r),new De(U.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,C),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===O.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=U.unicodeTable(o);if(B===null)throw new De(U.ERR_INVALID_CHAR_RANGE,e.from(r));B.sign<0&&(s=0-s);const u=B.tab,c=B.fold;if(!(this.flags&x.FOLD_CASE)||c===null)t.appendTableWithSign(u,s);else{const h=new yn().appendTable(u).appendTable(c).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(T.Op.CHAR_CLASS);r.flags=this.flags;const s=new yn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&x.CLASS_NL||s.appendRange(O.CODES.get(`
`),O.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==O.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&x.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new De(U.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const u=U.parseClassChar(e,t);let c=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(c=U.parseClassChar(e,t),c<u)throw new De(U.ERR_INVALID_CHAR_RANGE,e.from(B))}this.flags&x.FOLD_CASE?s.appendFoldedRange(u,c):s.appendRange(u,c)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}},G(U,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),G(U,"ERR_INVALID_CHAR_RANGE","invalid character class range"),G(U,"ERR_INVALID_ESCAPE","invalid escape sequence"),G(U,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),G(U,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),G(U,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),G(U,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),G(U,"ERR_MISSING_BRACKET","missing closing ]"),G(U,"ERR_MISSING_PAREN","missing closing )"),G(U,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),G(U,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),G(U,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),G(U,"ERR_UNEXPECTED_PAREN","unexpected )"),G(U,"ERR_NESTING_DEPTH","expression nests too deeply"),G(U,"ERR_LARGE","expression too large"),G(U,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),G(U,"MAX_HEIGHT",1e3),G(U,"MAX_SIZE",3355443),G(U,"MAX_RUNES",33554432),G(U,"ANY_TABLE",new g(new Uint32Array([0,z.MAX_RUNE,1]))),G(U,"ASCII_TABLE",new g(new Uint32Array([0,127,1]))),G(U,"ASCII_FOLD_TABLE",new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),U),IE=class lr{static initTest(e){const t=lr.compile(e),r=new lr(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r.prefilter=t.prefilter,r}static compile(e){return lr.compileImpl(e,x.PERL,!1)}static compilePOSIX(e){return lr.compileImpl(e,x.POSIX,!0)}static compileImpl(e,t,r){let s=wE.parse(e,t);const i=s.maxCap();s=_E.simplify(s);const o=gE.build(s),B=EE.compileRegexp(s),u=new lr(e,B,i,r);u.prefilter=o.type===fe.Type.NONE?null:o;const[c,h]=B.prefix();return u.prefixComplete=c,u.prefix=h,u.prefixUTF8=W.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return lr.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new aE(this.prog),this.onepass=vl.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,r,s){if((r===x.ANCHOR_START||r===x.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(r===x.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+B}else if(r===x.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(r===x.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,r,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,r,s);if(this.prefilter!==null&&r===x.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return vl.execute(this,e,t,r,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=Zi.maxBitStateLen(this.prog)?Zi.execute(this,e,t,r,s):this.doExecuteNFA(e,t,r,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,r);if(i!==null)return i?[]:null;if(e.endPos()<=Zi.maxBitStateLen(this.prog))return Zi.execute(this,e,t,r,s)}return this.doExecuteNFA(e,t,r,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,r,s){let i=this.get();i||(i=sE.fromRE2(this)),i.init(s);const o=i.match(e,t,r)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof Ir||(W.isByteArray(e)?e=fr.utf8(e):e=fr.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?ye.fromUTF16(e.asCharSequence(),0,r):ye.fromUTF8(e.asBytes(),0,r),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,o="";const B=ye.fromUTF16(e);let u=0;for(;i<=e.length;){const c=this.executeEngine(B,i,x.UNANCHORED,2);if(c===null||c.length===0)break;o+=e.substring(s,c[0]),(c[1]>s||c[0]===0)&&(o+=t(e.substring(c[0],c[1])),u++),s=c[1];const h=B.step(i)&7;if(i+h>c[1]?i+=h:i+1>c[1]?i++:i=c[1],u>=r)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,u=-1;for(;B<t&&o<=i;){const c=this.executeEngine(e,o,x.UNANCHORED,this.prog.numCap);if(c===null||c.length===0)break;let h=!0;if(c[1]===o){c[0]===u&&(h=!1);const C=e.step(o);C<0?o=i+1:o+=C&7}else o=c[1];u=c[1],h&&(s.push(r(this.pad(c))),B++)}return s}findUTF8(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(ye.fromUTF8(e),0,x.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.executeEngine(ye.fromUTF16(e),0,x.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(ye.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(ye.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(ye.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(ye.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(ye.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(ye.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(ye.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(ye.fromUTF16(e),t);return r.length===0?null:r}},yE=class Vr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let r="",s=!1,i=e.length;i===0&&(r="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let c=e[B];if(c==="\\"){if(B+1<i)switch(c=e[B+1],c){case"\\":r+="\\\\",B+=2;continue;case"c":if(B+2<i){let p=e[B+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let _=p%32;r+="\\x",r+=(_>>4).toString(16).toUpperCase(),r+=(_&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}r+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let p=B+3,_=!1,I=!1;for(;p<i;){const F=e[p];if(F==="}"){I=!0;break}if(!Vr.isHexadecimal(F))break;_=!0,p++}if(I&&_){r+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let p=!0;for(let _=0;_<4;_++)if(!Vr.isHexadecimal(e[B+2+_])){p=!1;break}if(p){r+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}r+="u",B+=2,s=!0;continue;case"x":{let p=!1;if(B+2<i&&e[B+2]==="{"){let _=B+3,I=!1,F=!1;for(;_<i;){const M=e[_];if(M==="}"){F=!0;break}if(!Vr.isHexadecimal(M))break;I=!0,_++}F&&I&&(p=!0)}else B+3<i&&Vr.isHexadecimal(e[B+2])&&Vr.isHexadecimal(e[B+3])&&(p=!0);p?(r+="\\x",B+=2):(r+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":r+="\\"+c,B+=2;continue;default:{let p=e.codePointAt(B+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let _=W.charCount(p);r+=e.substring(B+1,B+1+_),B+=_+1,s=!0}else{r+="\\";let _=W.charCount(p);r+=e.substring(B+1,B+1+_),B+=_+1}continue}}}else if(c==="/"){r+="\\/",B+=1,s=!0;continue}else if(c==="[")o=!0;else if(c==="]")o=!1;else if(!o&&c==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){r+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),C=W.charCount(h);r+=e.substring(B,B+C),B+=C}const u=s?r:e;return t.length>0?`(?${t})${u}`:u}},Ne,eu=(Ne=class{static quote(e){return W.quoteMeta(e)}static quoteReplacement(e,t=!1){return yl.quoteReplacement(e,t)}static translateRegExp(e){return yE.translate(e)}static compile(e,t=0){let r=e;if(t&Ne.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&Ne.DOTALL&&(r=`(?s)${r}`),t&Ne.MULTILINE&&(r=`(?m)${r}`),t&-544)throw new rE("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=x.PERL;t&Ne.DISABLE_UNICODE_GROUPS&&(s&=-129),t&Ne.LOOKBEHINDS&&(s|=x.LOOKBEHIND);const i=new Ne(e,t);return i.re2Input=IE.compileImpl(r,s,(t&Ne.LONGEST_MATCH)!==0),i}static matches(e,t){return Ne.compile(e).testExact(t)}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new Ne(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return W.isByteArray(e)&&(e=fr.utf8(e)),new yl(this,e)}test(e){return W.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=W.isByteArray(e)?ye.fromUTF8(e):ye.fromUTF16(e);return this.re2Input.executeEngine(t,0,x.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;return r}split(e,t=0){const r=this.matcher(e),s=[];let i=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&s.length===t-1)break;if(o===r.start()){if(t===0){i+=1,o=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(o,r.inputLength()))}return(t!==0||s.length===0&&!(o===r.inputLength()&&o>0))&&s.push(r.substring(o,r.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const r=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);r.push(o===null?void 0:o)}r.index=t.start(0),r.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);r.groups=i}else r.groups=void 0;yield r}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},G(Ne,"CASE_INSENSITIVE",Fr.CASE_INSENSITIVE),G(Ne,"DOTALL",Fr.DOTALL),G(Ne,"MULTILINE",Fr.MULTILINE),G(Ne,"DISABLE_UNICODE_GROUPS",Fr.DISABLE_UNICODE_GROUPS),G(Ne,"LONGEST_MATCH",Fr.LONGEST_MATCH),G(Ne,"LOOKBEHINDS",Fr.LOOKBEHINDS),Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es="12.19.0";function TE(n){es=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new YB("@firebase/firestore");function xr(){return yr.logLevel}function K(n,...e){if(yr.logLevel<=ue.DEBUG){const t=e.map(tu);yr.debug(`Firestore (${es}): ${n}`,...t)}}function un(n,...e){if(yr.logLevel<=ue.ERROR){const t=e.map(tu);yr.error(`Firestore (${es}): ${n}`,...t)}}function Nt(n,...e){if(yr.logLevel<=ue.WARN){const t=e.map(tu);yr.warn(`Firestore (${es}): ${n}`,...t)}}function tu(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,jf(n,r,t)}function jf(n,e,t){let r=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw un(r),new Error(r)}function Q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||jf(e,s,r)}function re(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=AE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ae(n,e){return n<e?-1:n>e?1:0}function PB(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return aB(s)===aB(i)?ae(s,i):aB(s)?1:-1}return ae(n.length,e.length)}const RE=55296,vE=57343;function aB(n){const e=n.charCodeAt(0);return e>=RE&&e<=vE}function zr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new Re(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wl(this.data.getIterator())}getIteratorFrom(e){return new Wl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class Wl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="__name__";class xt{constructor(e,t,r){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&X(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=xt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ae(e.length,t.length)}static compareSegments(e,t){const r=xt.isNumericId(e),s=xt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?xt.extractNumericId(e).compare(xt.extractNumericId(t)):PB(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xn.fromString(e.substring(4,e.length-2))}}class Ce extends xt{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const PE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let It=class Mr extends xt{construct(e,t,r){return new Mr(e,t,r)}static isValidIdentifier(e){return PE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mr.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mt}static keyField(){return new Mr([Mt])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new J(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(r+=B,s++):(i(),s++)}if(i(),o)throw new J(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mr(t)}static emptyPath(){return new Mr([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(It.comparator)}static empty(){return new _t([])}unionWith(e){let t=new ke(It.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new _t(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function er(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bE(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Ce.fromString(e))}static fromName(e){return new $(Ce.fromString(e).popFirst(5))}static empty(){return new $(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n,e,t){if(!t)throw new J(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function SE(n,e,t,r){if(e===!0&&r===!0)throw new J(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $l(n){if(!$.isDocumentKey(n))throw new J(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yl(n){if($.isDocumentKey(n))throw new J(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _i(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $o(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function ht(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$o(n);throw new J(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function OE(n,e){if(e<=0)throw new J(k.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n,e){const t={typeString:n};return e&&(t.value=e),t}function Di(n,e){if(!_i(n))throw new J(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new J(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=-62135596800,Zl=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Zl);return new pe(t,r)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new J(k.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return pe._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,r;if(e>=0n)t=Number(e/1000000000n),r=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),r=0):(t=Number(e/1000000000n-1n),r=Number(s+1000000000n))}return new pe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xl)throw new J(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zl}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new J(k.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Di(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Xl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Le("string",pe._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qf("Invalid base64 string: "+i):i}}(e);return new Ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const NE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=NE.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function qn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf="server_timestamp",$f="__type__",Yf="__previous_value__",Xf="__local_write_time__";function Yo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[$f])==null?void 0:r.stringValue)===Wf}function wi(n){const e=n.mapValue.fields[Yf];return Yo(e)?wi(e):e}function Qr(n){const e=Jn(n.mapValue.fields[Xf].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,t,r,s,i,o,B,u,c,h,C,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=C,this._customHeaders=p,this.grpcFlowControlWindow=_}}const To="(default)";class Ys{constructor(e,t){this.projectId=e,this.database=t||To}static empty(){return new Ys("","")}get isDefaultDatabase(){return this.database===To}isEqual(e){return e instanceof Ys&&e.projectId===this.projectId&&e.database===this.database}}function LE(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new J(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ys(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=-1;function Xo(n){return n==null}function Xs(n){return n===0&&1/n==-1/0}function kE(n){return typeof n=="number"&&Number.isInteger(n)&&!Xs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function VE(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="__type__",xE="__max__",no={mapValue:{}},eC="__vector__",Zs="value",Wr={nullValue:"NULL_VALUE"},Ct={booleanValue:!0},Je={booleanValue:!1};function xe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yo(n)?4:ME(n)?9007199254740991:Ao(n)?10:11:X(28295,{value:n})}function Pt(n,e,t){if(n===e)return!0;const r=xe(n);if(r!==xe(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qr(n).isEqual(Qr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Jn(i.timestampValue),u=Jn(o.timestampValue);return B.seconds===u.seconds&&B.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return qn(i.bytesValue).isEqual(qn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ve(i.geoPointValue.latitude)===ve(o.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o,B){if("integerValue"in i&&"integerValue"in o)return ve(i.integerValue)===ve(o.integerValue);let u,c;if("doubleValue"in i&&"doubleValue"in o)u=ve(i.doubleValue),c=ve(o.doubleValue);else{if(!(B!=null&&B.i))return!1;u=ve(i.integerValue??i.doubleValue),c=ve(o.integerValue??o.doubleValue)}return u===c?!!(B!=null&&B.o)||Xs(u)===Xs(c):!!(B===void 0||B.u)&&isNaN(u)&&isNaN(c)}(n,e,t);case 9:return zr(n.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>Pt(s,i,t));case 10:case 11:return function(i,o,B){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(yo(u)!==yo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Pt(u[h],c[h],B)))return!1;return!0}(n,e,t);default:return X(52216,{left:n})}}function ei(n,e){return(n.values||[]).find(t=>Pt(t,e))!==void 0}function dt(n,e){if(n===e)return 0;const t=xe(n),r=xe(e);if(t!==r)return ae(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ae(n.booleanValue,e.booleanValue);case 2:return function(i,o){const B=ve(i.integerValue||i.doubleValue),u=ve(o.integerValue||o.doubleValue);return B<u?-1:B>u?1:B===u?0:isNaN(B)?isNaN(u)?0:-1:1}(n,e);case 3:return eh(n.timestampValue,e.timestampValue);case 4:return eh(Qr(n),Qr(e));case 5:return PB(n.stringValue,e.stringValue);case 6:return function(i,o){const B=qn(i),u=qn(o);return B.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const B=i.split("/"),u=o.split("/");for(let c=0;c<B.length&&c<u.length;c++){const h=ae(B[c],u[c]);if(h!==0)return h}return ae(B.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const B=ae(ve(i.latitude),ve(o.latitude));return B!==0?B:ae(ve(i.longitude),ve(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return th(n.arrayValue,e.arrayValue);case 10:return function(i,o){var p,_,I,F;const B=i.fields||{},u=o.fields||{},c=(p=B[Zs])==null?void 0:p.arrayValue,h=(_=u[Zs])==null?void 0:_.arrayValue,C=ae(((I=c==null?void 0:c.values)==null?void 0:I.length)||0,((F=h==null?void 0:h.values)==null?void 0:F.length)||0);return C!==0?C:th(c,h)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===no.mapValue&&o===no.mapValue)return 0;if(i===no.mapValue)return 1;if(o===no.mapValue)return-1;const B=i.fields||{},u=Object.keys(B),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let C=0;C<u.length&&C<h.length;++C){const p=PB(u[C],h[C]);if(p!==0)return p;const _=dt(B[u[C]],c[h[C]]);if(_!==0)return _}return ae(u.length,h.length)}(n.mapValue,e.mapValue);default:throw X(23264,{l:t})}}function eh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ae(n,e);const t=Jn(n),r=Jn(e),s=ae(t.seconds,r.seconds);return s!==0?s:ae(t.nanos,r.nanos)}function th(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=dt(t[s],r[s]);if(i!==void 0&&i!==0)return i}return ae(t.length,r.length)}function $r(n){return bB(n)}function bB(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return qn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=bB(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${bB(t.fields[o])}`;return s+"}"}(n.mapValue):X(61005,{value:n})}function co(n){switch(xe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wi(n);return e?16+co(e):16;case 5:return 2*n.stringValue.length;case 6:return qn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+co(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return er(r.fields,(i,o)=>{s+=i.length+co(o)}),s}(n.mapValue);default:throw X(13486,{value:n})}}function nh(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gt(n){return!!n&&"integerValue"in n}function Cr(n){return!!n&&"doubleValue"in n}function jn(n){return Gt(n)||Cr(n)}function Yr(n){return!!n&&"arrayValue"in n}function Dt(n){return!!n&&"nullValue"in n}function pt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pr(n){return!!n&&"mapValue"in n}function Ao(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Zf])==null?void 0:r.stringValue)===eC}function SB(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Zs])==null?void 0:t.arrayValue}function xs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return er(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=xs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xs(n.arrayValue.values[t]);return e}return{...n}}function ME(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===xE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!pr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xs(t)}setAll(e){let t=It.emptyPath(),r={},s=[];e.forEach((o,B)=>{if(!t.isImmediateParentOf(B)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=B.popLast()}o?r[B.lastSegment()]=xs(o):s.push(B.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());pr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];pr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){er(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rt(xs(this.value))}}function tC(n){const e=[];return er(n.fields,(t,r)=>{const s=new It([t]);if(pr(r)){const i=tC(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new _t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xs(e)?"-0":e}}function su(n){return{integerValue:""+n}}function iu(n,e,t){return kE(e)?su(e):Zo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this._=void 0}}function GE(n,e,t){return n instanceof ti?function(s,i){const o={fields:{[$f]:{stringValue:Wf},[Xf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yo(i)&&(i=wi(i)),i&&(o.fields[Yf]=i),{mapValue:o}}(t,e):n instanceof ni?rC(n,e):n instanceof ri?sC(n,e):n instanceof si?function(s,i){const o=nC(s,i),B=Po(o)+Po(s.h);return Gt(o)&&Gt(s.h)?su(B):Zo(s.serializer,B)}(n,e):n instanceof Ro?function(s,i){return rh(s,i,Math.min)}(n,e):n instanceof vo?function(s,i){return rh(s,i,Math.max)}(n,e):void 0}function UE(n,e,t){return n instanceof ni?rC(n,e):n instanceof ri?sC(n,e):t}function nC(n,e){return n instanceof si?jn(e)?e:{integerValue:0}:null}class ti extends ea{}class ni extends ea{constructor(e){super(),this.elements=e}}function rC(n,e){const t=iC(e);for(const r of n.elements)t.some(s=>Pt(s,r))||t.push(r);return{arrayValue:{values:t}}}class ri extends ea{constructor(e){super(),this.elements=e}}function sC(n,e){let t=iC(e);for(const r of n.elements)t=t.filter(s=>!Pt(s,r));return{arrayValue:{values:t}}}class ou extends ea{constructor(e,t){super(),this.serializer=e,this.h=t}}class si extends ou{}class Ro extends ou{}class vo extends ou{}function rh(n,e,t){if(!jn(e))return n.h;const r=t(Po(e),Po(n.h));return Gt(e)&&Gt(n.h)?su(r):Zo(n.serializer,r)}function Po(n){return ve(n.integerValue||n.doubleValue)}function iC(n){return Yr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t){this.field=e,this.transform=t}}function JE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ni&&s instanceof ni||r instanceof ri&&s instanceof ri?zr(r.elements,s.elements,Pt):r instanceof si&&s instanceof si||r instanceof Ro&&s instanceof Ro||r instanceof vo&&s instanceof vo?Pt(r.h,s.h):r instanceof ti&&s instanceof ti}(n.transform,e.transform)}class qE{constructor(e,t){this.version=e,this.transformResults=t}}class vt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ta{}function oC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new au(n.key,vt.none()):new Ii(n.key,n.data,vt.none());{const t=n.data,r=rt.empty();let s=new ke(It.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new tr(n.key,r,new _t(s.toArray()),vt.none())}}function jE(n,e,t){n instanceof Ii?function(s,i,o){const B=s.value.clone(),u=ih(s.fieldTransforms,i,o.transformResults);B.setAll(u),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()}(n,e,t):n instanceof tr?function(s,i,o){if(!lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=ih(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(aC(s)),u.setAll(B),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ms(n,e,t,r){return n instanceof Ii?function(i,o,B,u){if(!lo(i.precondition,o))return B;const c=i.value.clone(),h=oh(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof tr?function(i,o,B,u){if(!lo(i.precondition,o))return B;const c=oh(i.fieldTransforms,u,o),h=o.data;return h.setAll(aC(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(C=>C.field))}(n,e,t,r):function(i,o,B){return lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B}(n,e,t)}function KE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=nC(r.transform,s||null);i!=null&&(t===null&&(t=rt.empty()),t.set(r.field,i))}return t||null}function sh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zr(r,s,(i,o)=>JE(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ii extends ta{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class tr extends ta{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function aC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ih(n,e,t){const r=new Map;Q(n.length===t.length,32656,{T:t.length,P:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,B=e.data.field(i.field);r.set(i.field,UE(o,B,t[s]))}return r}function oh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,GE(i,o,e))}return r}class au extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zE extends ta{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t){this.position=e,this.inclusive=t}}function ah(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=$.comparator($.fromName(o.referenceValue),t.key):r=dt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Pt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{}class Fe extends BC{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new WE(e,t,r):t==="array-contains"?new XE(e,r):t==="in"?new ZE(e,r):t==="not-in"?new e_(e,r):t==="array-contains-any"?new t_(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $E(e,r):new YE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(dt(t,this.value)):t!==null&&xe(this.value)===xe(t)&&this.matchesComparison(dt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends BC{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new Ft(e,t)}matches(e){return uC(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function uC(n){return n.op==="and"}function cC(n){return QE(n)&&uC(n)}function QE(n){for(const e of n.filters)if(e instanceof Ft)return!1;return!0}function OB(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+$r(n.value);if(cC(n))return n.filters.map(e=>OB(e)).join(",");{const e=n.filters.map(t=>OB(t)).join(",");return`${n.op}(${e})`}}function lC(n,e){return n instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.field.isEqual(s.field)&&Pt(r.value,s.value)}(n,e):n instanceof Ft?function(r,s){return s instanceof Ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,B)=>i&&lC(o,s.filters[B]),!0):!1}(n,e):void X(19439)}function hC(n){return n instanceof Fe?function(t){return`${t.field.canonicalString()} ${t.op} ${$r(t.value)}`}(n):n instanceof Ft?function(t){return t.op.toString()+" {"+t.getFilters().map(hC).join(" ,")+"}"}(n):"Filter"}class WE extends Fe{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class $E extends Fe{constructor(e,t){super(e,"in",t),this.keys=fC("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class YE extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=fC("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fC(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class XE extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yr(t)&&ei(t.arrayValue,this.value)}}class ZE extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ei(this.value.arrayValue,t)}}class e_ extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ei(this.value.arrayValue,t)}}class t_ extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ei(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t="asc"){this.field=e,this.dir=t}}function n_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new pe(0,0))}static max(){return new ne(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t,r,s,i,o,B){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new We(e,0,ne.min(),ne.min(),ne.min(),rt.empty(),0)}static newFoundDocument(e,t,r,s){return new We(e,1,t,ne.min(),r,s,0)}static newNoDocument(e,t){return new We(e,2,t,ne.min(),ne.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new We(e,3,t,ne.min(),ne.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=-1;function r_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new pe(t+1,0):new pe(t,r));return new Kn(s,$.empty(),e)}function s_(n){return new Kn(n.readTime,n.key,oi)}class Kn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kn(ne.min(),$.empty(),oi)}static max(){return new Kn(ne.max(),$.empty(),oi)}}function i_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t=null,r=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function uh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new o_(n,e,t,r,s,i,o)}function CC(n){const e=re(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>OB(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>$r(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>$r(r)).join(",")),e.R=t}return e.R}function dC(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!n_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lC(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Bh(n.startAt,e.startAt)&&Bh(n.endAt,e.endAt)}function hr(n){return!!n.isCorePipeline}function pC(n){return!!n.path&&$.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t=null,r=[],s=[],i=null,o="F",B=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=u,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function a_(n,e,t,r,s,i,o,B){return new ts(n,e,t,r,s,i,o,B)}function na(n){return new ts(n)}function ch(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function B_(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function gC(n){return n.collectionGroup!==null}function Gs(n){const e=re(n);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new ke(It.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(B=B.add(c.field))})}),B})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new ii(i,r))}),t.has(It.keyField().canonicalString())||e.A.push(new ii(It.keyField(),r))}return e.A}function Jt(n){const e=re(n);return e.V||(e.V=u_(e,Gs(n))),e.V}function u_(n,e){if(n.limitType==="F")return uh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ii(s.field,i)});const t=n.endAt?new bo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new bo(n.startAt.position,n.startAt.inclusive):null;return uh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function NB(n,e){const t=n.filters.concat([e]);return new ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function c_(n,e){const t=n.explicitOrderBy.concat([e]);return new ts(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function So(n,e,t){return new ts(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function l_(n,e){return dC(Jt(n),Jt(e))&&n.limitType===e.limitType}function Us(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>hC(s)).join(", ")}]`),Xo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>$r(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>$r(s)).join(",")),`Target(${r})`}(Jt(n))}; limitType=${n.limitType})`}function ra(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):$.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,B,u){const c=ah(o,B,u);return o.inclusive?c<=0:c<0}(r.startAt,Gs(r),s)||r.endAt&&!function(o,B,u){const c=ah(o,B,u);return o.inclusive?c>=0:c>0}(r.endAt,Gs(r),s))}(n,e)}function Bu(n){return(e,t)=>{let r=!1;for(const s of Gs(n)){const i=h_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function h_(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(i,o,B){const u=o.data.field(i),c=B.data.field(i);return u!==null&&c!==null?dt(u,c):X(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,le;function C_(n){switch(n){case k.OK:return X(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return X(15467,{code:n})}}function mC(n){if(n===void 0)return un("GRPC error has no .code"),k.UNKNOWN;switch(n){case Oe.OK:return k.OK;case Oe.CANCELLED:return k.CANCELLED;case Oe.UNKNOWN:return k.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return k.INTERNAL;case Oe.UNAVAILABLE:return k.UNAVAILABLE;case Oe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Oe.NOT_FOUND:return k.NOT_FOUND;case Oe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Oe.ABORTED:return k.ABORTED;case Oe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Oe.DATA_LOSS:return k.DATA_LOSS;default:return X(39323,{code:n})}}(le=Oe||(Oe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){er(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=new Re($.comparator);function ct(){return d_}const EC=new Re($.comparator);function Gr(...n){let e=EC;for(const t of n)e=e.insert(t.key,t);return e}function _C(n){let e=EC;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function vn(){return Hs()}function DC(){return Hs()}function Hs(){return new vr(n=>n.toString(),(n,e)=>n.isEqual(e))}const p_=new Re($.comparator),g_=new ke($.comparator);function oe(...n){let e=g_;for(const t of n)e=e.add(t);return e}const m_=new ke(ae);function E_(){return m_}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=new xn([4294967295,4294967295],0);function lh(n){const e=__().encode(n),t=new Nf;return t.update(e),new Uint8Array(t.digest())}function hh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([t,r],0),new xn([s,i],0)]}class uu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fs(`Invalid padding: ${t}`);if(r<0)throw new Fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fs(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=xn.fromNumber(this.p)}v(e,t,r){let s=e.add(t.multiply(xn.fromNumber(r)));return s.compare(D_)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=lh(e),[r,s]=hh(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);if(!this.D(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new uu(i,s,t);return r.forEach(B=>o.insert(B)),o}insert(e){if(this.p===0)return;const t=lh(e),[r,s]=hh(t);for(let i=0;i<this.hashCount;i++){const o=this.v(r,s,i);this.C(o)}}C(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,r,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yi(ne.min(),s,new Re(ae),ct(),ct(),oe())}}class Ti{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ti(r,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t,r,s){this.F=e,this.removedTargetIds=t,this.key=r,this.O=s}}class wC{constructor(e,t){this.targetId=e,this.M=t}}class IC{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class fh{constructor(e){this.targetId=e,this.N=0,this.L=Ch(),this.B=Ve.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=oe(),t=oe(),r=oe();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:X(38017,{changeType:i})}}),new Ti(this.B,this.U,e,t,r)}G(){this.k=!1,this.L=Ch()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,Q(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const vs="WatchChangeAggregator";class w_{constructor(e){this.X=e,this.ee=new Map,this.te=ct(),this.ne=ro(),this.re=ct(),this.ie=ro(),this.se=new Re(ae)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,t=>{const r=this.ee.get(t);if(r)switch(e.state){case 0:this.ce(t)&&r.K(e.resumeToken);break;case 1:r.Y(),r.q||r.G(),r.K(e.resumeToken);break;case 2:r.Y(),r.q||this.removeTarget(t);break;case 3:this.ce(t)&&(r.Z(),r.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),r.K(e.resumeToken));break;default:X(56790,{state:e.state})}else K(vs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach((r,s)=>{this.ce(s)&&t(s)})}Ee(e){var t;return hr(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:pC(e)}he(e){const t=e.targetId,r=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(r===0){const o=new $(hr(i)?Ce.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,We.newNoDocument(o,ne.min()))}else Q(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.Pe(t);if(o!==r){const B=this.Ie(e),u=B?this.Re(B,e,o):1;if(u!==0){this.le(t);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,c)}}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=qn(r).toUint8Array()}catch(u){if(u instanceof Qf)return Nt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{B=new uu(o,s,i)}catch(u){return Nt(u instanceof Fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return B.p===0?null:B}Re(e,t,r){return t.M.count===r-this.de(e,t.targetId)?0:2}de(e,t){const r=this.X.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.X.Ve(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.ae(t,i,null),s++)}),s}fe(e){const t=new Map;this.ee.forEach((i,o)=>{const B=this.Te(o);if(B){if(i.current&&this.Ee(B.target)){const u=hr(B.target)?Ce.fromString(B.target.getPipelineDocuments()[0]):B.target.path,c=new $(u);this.me(c).has(o)||this.pe(o,c)||this.ae(o,c,We.newNoDocument(c,e))}i.$&&(t.set(o,i.W()),i.G())}});let r=oe();this.ie.forEach((i,o)=>{let B=!0;o.forEachWhile(u=>{const c=this.Te(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)}),B&&(r=r.add(i))}),this.te.forEach((i,o)=>o.setReadTime(e)),this.re.forEach((i,o)=>o.setReadTime(e));const s=new yi(e,t,this.se,this.te,this.re,r);return this.te=ct(),this.ne=ro(),this.re=ct(),this.ie=ro(),this.se=new Re(ae),s}oe(e,t){const r=this.ee.get(e);if(!r||!this.ce(e))return void K(vs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;r.j(t.key,s),hr(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,r){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),r&&(hr(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,r):this.te=this.te.insert(t,r))):K(vs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const r=t.W();return this.X.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}J(e){let t=this.ee.get(e);t||(K(vs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new fh(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new ke(ae),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new ke(ae),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||K(vs,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new fh(e)),this.X.getRemoteKeysForTarget(e).forEach(t=>{this.ae(e,t,null)})}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function ro(){return new Re($.comparator)}function Ch(){return new Re($.comparator)}const I_={asc:"ASCENDING",desc:"DESCENDING"},y_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T_={and:"AND",or:"OR"};class A_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function FB(n,e){return n.useProto3Json||Xo(e)?e:{value:e}}function Js(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cu(n){const e=Jn(n);return new pe(e.seconds,e.nanos)}function yC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fo(n,e){return Js(n,e.toTimestamp())}function qt(n){return Q(!!n,49232),ne.fromTimestamp(cu(n))}function lu(n,e){return LB(n,e).canonicalString()}function LB(n,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function TC(n){const e=Ce.fromString(n);return Q(bC(e),10190,{key:e.toString()}),e}function Oo(n,e){return lu(n.databaseId,e.path)}function BB(n,e){const t=TC(e);if(t.get(1)!==n.databaseId.projectId)throw new J(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new $(RC(t))}function AC(n,e){return lu(n.databaseId,e)}function R_(n){const e=TC(n);return e.length===4?Ce.emptyPath():RC(e)}function kB(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function RC(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function dh(n,e,t){return{name:Oo(n,e),fields:t.value.mapValue.fields}}function v_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string",58123),Ve.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ve.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&function(c){const h=c.code===void 0?k.UNKNOWN:mC(c.code);return new J(h,c.message||"")}(o);t=new IC(r,s,i,B||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=BB(n,r.document.name),i=qt(r.document.updateTime),o=r.document.createTime?qt(r.document.createTime):ne.min(),B=new rt({mapValue:{fields:r.document.fields}}),u=We.newFoundDocument(s,i,o,B),c=r.targetIds||[],h=r.removedTargetIds||[];t=new ho(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=BB(n,r.document),i=r.readTime?qt(r.readTime):ne.min(),o=We.newNoDocument(s,i),B=r.removedTargetIds||[];t=new ho([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=BB(n,r.document),i=r.removedTargetIds||[];t=new ho([],i,s,null)}else{if(!("filter"in e))return X(11601,{we:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new f_(s,i),B=r.targetId;t=new wC(B,o)}}return t}function P_(n,e){let t;if(e instanceof Ii)t={update:dh(n,e.key,e.value)};else if(e instanceof au)t={delete:Oo(n,e.key)};else if(e instanceof tr)t={update:dh(n,e.key,e.data),updateMask:M_(e.fieldMask)};else{if(!(e instanceof zE))return X(16599,{be:e.type});t={verify:Oo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const B=o.transform;if(B instanceof ti)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof ni)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof ri)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof si)return{fieldPath:o.field.canonicalString(),increment:B.h};if(B instanceof Ro)return{fieldPath:o.field.canonicalString(),minimum:B.h};if(B instanceof vo)return{fieldPath:o.field.canonicalString(),maximum:B.h};throw X(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fo(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X(27497)}(n,e.precondition)),t}function b_(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?qt(s.updateTime):qt(i);return o.isEqual(ne.min())&&(o=qt(i)),new qE(o,s.transformResults||[])}(t,e))):[]}function S_(n,e){return{documents:[AC(n,e.path)]}}function O_(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=AC(n,s);const i=function(c){if(c.length!==0)return PC(Ft.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Ur(p.field),direction:k_(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=FB(n,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{Se:t,parent:s}}function N_(n){let e=R_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Q(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(C){const p=vC(C);return p instanceof Ft&&cC(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(C){return C.map(p=>function(I){return new ii(Hr(I.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(t.orderBy));let B=null;t.limit&&(B=function(C){let p;return p=typeof C=="object"?C.value:C,Xo(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(C){const p=!!C.before,_=C.values||[];return new bo(_,p)}(t.startAt));let c=null;return t.endAt&&(c=function(C){const p=!C.before,_=C.values||[];return new bo(_,p)}(t.endAt)),a_(e,s,o,i,B,"F",u,c)}function F_(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function L_(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function vC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Hr(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hr(t.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hr(t.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Hr(t.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(n):n.fieldFilter!==void 0?function(t){return Fe.create(Hr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ft.create(t.compositeFilter.filters.map(r=>vC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(t.compositeFilter.op))}(n):X(30097,{filter:n})}function k_(n){return I_[n]}function V_(n){return y_[n]}function x_(n){return T_[n]}function Ur(n){return{fieldPath:n.canonicalString()}}function Hr(n){return It.fromServerFormat(n.fieldPath)}function PC(n){return n instanceof Fe?function(t){if(t.op==="=="){if(pt(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NAN"}};if(Dt(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pt(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NOT_NAN"}};if(Dt(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(t.field),op:V_(t.op),value:t.value}}}(n):n instanceof Ft?function(t){const r=t.getFilters().map(s=>PC(s));return r.length===1?r[0]:{compositeFilter:{op:x_(t.op),filters:r}}}(n):X(54877,{filter:n})}function M_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function SC(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function ai(n,e){const t={fields:{}};return e.forEach((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)}),{mapValue:t}}function OC(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n){return new A_(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(Ve.fromBase64String(e))}catch(t){throw new J(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Di(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Le("string",At._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function G_(){return new ia(Mt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jt._jsonSchemaVersion}}static fromJSON(e){if(Di(e,jt._jsonSchema))return new jt(e.latitude,e.longitude)}}jt._jsonSchemaVersion="firestore/geoPoint/1.0",jt._jsonSchema={type:Le("string",jt._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class U_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Qe.UNAUTHENTICATED))}shutdown(){}}class H_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class J_{constructor(e){this.De=e,this.currentUser=Qe.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.Ce===void 0,42304);let r=this.xe;const s=u=>this.xe!==r?(r=this.xe,t(u)):Promise.resolve();let i=new rn;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new rn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},B=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit(u=>B(u)),setTimeout(()=>{if(!this.auth){const u=this.De.getImmediate({optional:!0});u?B(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rn)}},0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.xe!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{Oe:r}),new NC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{Me:e}),new Qe(e)}}class q_{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class j_{constructor(e,t,r){this.Ne=e,this.Le=t,this.Be=r}getToken(){return Promise.resolve(new q_(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable(()=>t(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ph{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class K_{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,$e(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){Q(this.Ce===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.Ke)return Promise.resolve(new ph(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new ph(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function FC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="ConnectivityMonitor";class mh{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){K(gh,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){K(gh,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so=null;function VB(){return so===null?so=function(){return 268435456+Math.round(2147483648*Math.random())}():so++,"0x"+so.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uB="RestConnection",Q_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class W_{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${r}/databases/${s}`,this.tt=this.databaseId.database===To?`project_id=${r}`:`project_id=${r}&database_id=${s}`}nt(e,t,r,s,i){const o=VB(),B=this.rt(e,t.toUriEncodedString());K(uB,`Sending RPC '${e}' ${o}:`,B,r);const u={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(u,s,i);const{host:c}=new URL(B),h=dn(c);return this.st(e,B,u,r,h).then(C=>(K(uB,`Received RPC '${e}' ${o}: `,C),C),C=>{throw Nt(uB,`RPC '${e}' ${o} failed with error: `,C,"url: ",B,"request:",r),C})}_t(e,t,r,s,i,o){return this.nt(e,t,r,s,i)}it(e,t,r){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const r=Q_[e];let s=`${this.Xe}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection",Ps=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class qr extends W_{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!qr.yt){const e=Vf();Ps(e,kf.STAT_EVENT,t=>{t.stat===TB.PROXY?K(ze,"STAT_EVENT: detected buffering proxy"):t.stat===TB.NOPROXY&&K(ze,"STAT_EVENT: detected no buffering proxy")}),qr.yt=!0}}st(e,t,r,s,i){const o=VB();return new Promise((B,u)=>{const c=new Ff;c.setWithCredentials(!0),c.listenOnce(Lf.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case uo.NO_ERROR:const C=c.getResponseJson();K(ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(C)),B(C);break;case uo.TIMEOUT:K(ze,`RPC '${e}' ${o} timed out`),u(new J(k.DEADLINE_EXCEEDED,"Request time out"));break;case uo.HTTP_ERROR:const p=c.getStatus();if(K(ze,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_==null?void 0:_.error;if(I&&I.status&&I.message){const F=function(j){const te=j.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(te)>=0?te:k.UNKNOWN}(I.status);u(new J(F,I.message))}else u(new J(k.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new J(k.UNAVAILABLE,"Connection failed."));break;default:X(9055,{wt:e,streamId:o,bt:c.getLastErrorCode(),St:c.getLastError()})}}finally{K(ze,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);K(ze,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",h,r,15)})}vt(e,t,r){const s=VB(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(B.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(B.useFetchStreams=!0),this.it(B.initMessageHeaders,t,r),B.encodeInitMessageHeaders=!0;const c=i.join("");K(ze,`Creating RPC '${e}' stream ${s}: ${c}`,B);const h=o.createWebChannel(c,B);this.Dt(h);let C=!1,p=!1;const _=new $_({ot:I=>{p?K(ze,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(C||(K(ze,`Opening RPC '${e}' stream ${s} transport.`),h.open(),C=!0),K(ze,`RPC '${e}' stream ${s} sending:`,I),h.send(I))},ut:()=>h.close()});return Ps(h,Ns.EventType.OPEN,()=>{p||(K(ze,`RPC '${e}' stream ${s} transport opened.`),_.Rt())}),Ps(h,Ns.EventType.CLOSE,()=>{p||(p=!0,K(ze,`RPC '${e}' stream ${s} transport closed`),_.Vt(),this.xt(h))}),Ps(h,Ns.EventType.ERROR,I=>{p||(p=!0,Nt(ze,`RPC '${e}' stream ${s} transport errored. Name:`,I.name,"Message:",I.message),_.Vt(new J(k.UNAVAILABLE,"The operation could not be completed")))}),Ps(h,Ns.EventType.MESSAGE,I=>{var F;if(!p){const M=I.data[0];Q(!!M,16349);const j=M,te=(j==null?void 0:j.error)||((F=j[0])==null?void 0:F.error);if(te){K(ze,`RPC '${e}' stream ${s} received error:`,te);const se=te.status;let Be=function(R){const E=Oe[R];if(E!==void 0)return mC(E)}(se),we=te.message;se==="NOT_FOUND"&&we.includes("database")&&we.includes("does not exist")&&we.includes(this.databaseId.database)&&Nt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Be===void 0&&(Be=k.INTERNAL,we="Unknown error status: "+se+" with message "+te.message),p=!0,_.Vt(new J(Be,we)),h.close()}else K(ze,`RPC '${e}' stream ${s} received:`,M),_.dt(M)}}),qr.gt(),setTimeout(()=>{_.At()},0),_}terminate(){this.ft.forEach(e=>e.close()),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter(t=>t===e)}it(e,t,r){super.it(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return xf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n){return new qr(n)}qr.yt=!1;class LC{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=r,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),r=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,()=>(this.Bt=Date.now(),e())),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="PersistentStream";class kC{constructor(e,t,r,s,i,o,B,u){this.Ct=e,this.Kt=r,this.Qt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=u,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new LC(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,()=>this.tn()))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(un(t.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wt===t&&this.un(r,s)},r=>{e(()=>{const s=new J(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.cn(s)})})}un(e,t){const r=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct(()=>{r(()=>this.listener.ct())}),this.stream.Et(()=>{r(()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,()=>(this.Yt()&&(this.state=3),Promise.resolve())),this.listener.Et()))}),this.stream.Tt(s=>{r(()=>this.cn(s))}),this.stream.onMessage(s=>{r(()=>++this.jt==1?this.hn(s):this.onNext(s))})}Zt(){this.state=5,this.Ht.kt(async()=>{this.state=0,this.start()})}cn(e){return K(Eh,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget(()=>this.Wt===e?t():(K(Eh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class X_ extends kC{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=v_(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?qt(o.readTime):ne.min()}(e);return this.listener.Tn(t,r)}Pn(e){const t={};t.database=kB(this.serializer),t.addTarget=function(i,o){let B;const u=o.target;if(B=hr(u)?{pipelineQuery:L_(i,u)}:pC(u)?{documents:S_(i,u)}:{query:O_(i,u).Se},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=yC(i,o.resumeToken);const c=FB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){B.readTime=Js(i,o.snapshotVersion.toTimestamp());const c=FB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}return B}(this.serializer,e);const r=F_(this.serializer,e);r&&(t.labels=r),this.nn(t)}In(e){const t={};t.database=kB(this.serializer),t.removeTarget=e,this.nn(t)}}class Z_ extends kC{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=b_(e.writeResults,e.commitTime),r=qt(e.commitTime);return this.listener.dn(r,t)}fn(){const e={};e.database=kB(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>P_(this.serializer,r))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{}class tD extends eD{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new J(k.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,r,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.nt(e,LB(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(k.UNKNOWN,i.toString())})}_t(e,t,r,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,B])=>this.connection._t(e,LB(t,r),s,o,B,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(k.UNKNOWN,o.toString())})}terminate(){this.mn=!0,this.connection.terminate()}}function nD(n,e,t,r){return new tD(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="ComponentProvider",_h=new Map;function sD(n,e,t,r,s){return new FE(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,FC(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VC=41943040;class Bt{static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(VC,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.gn(r),this.yn=r=>t.writeSequenceNumber(r))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}aa.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==iD)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,o=!1;e.forEach(B=>{++s,B.next(()=>{++i,o&&i===s&&t()},u=>r(u))}),o=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,o=new Array(i);let B=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(h=>{o[c]=h,++B,B===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function aD(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rs(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="LruGarbageCollector",BD=1048576;function Ih([n,e],[t,r]){const s=ae(n,t);return s===0?ae(e,r):s}class uD{constructor(e){this.Yn=e,this.buffer=new ke(Ih),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ih(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){K(wh,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rs(t)?K(wh,"Ignoring IndexedDB error during garbage collection: ",t):await ns(t)}await this.nr(3e5)})}}class lD{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(aa.wn);const r=new uD(t);return this.rr.forEachTarget(e,s=>r.er(s.sequenceNumber)).next(()=>this.rr.sr(e,s=>r.er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.rr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Dh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dh):this._r(e,t))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let r,s,i,o,B,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),s=this.params.maximumSequenceNumbersToCollect):s=C,o=Date.now(),this.nthSequenceNumber(e,s))).next(C=>(r=C,B=Date.now(),this.removeTargets(e,r,t))).next(C=>(i=C,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(C=>(c=Date.now(),xr()<=ue.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(u-B)+`ms
	Removed ${C} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:C})))}}function hD(n,e){return new lD(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="firestore.googleapis.com",yh=!0;class Th{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xC,this.ssl=yh}else this.host=e.host,this.ssl=e.ssl??yh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=VC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BD)throw new J(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(SE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FC(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new J(k.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(r,s){if(r===s)return!0;if(!r||!s)return!1;const i=Object.keys(r),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(r[B]!==s[B])return!1;return!0}(this._customHeaders,e._customHeaders)}}let Ba=class{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Th({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Th(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new U_;switch(r.type){case"firstParty":return new j_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=_h.get(t);r&&(K(rD,"Removing Datastore"),_h.delete(t),r.terminate())}(this),Promise.resolve()}};function fD(n,e,t,r={}){var c;n=ht(n,Ba);const s=dn(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},B=`${e}:${t}`;s&&Qo(`https://${B}`),i.host!==xC&&i.host!==B&&Nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:B,ssl:s,emulatorOptions:r};if(!wr(u,o)&&(n._setSettings(u),r.mockUserToken)){let h,C;if(typeof r.mockUserToken=="string")h=r.mockUserToken,C=Qe.MOCK_USER;else{h=vf(r.mockUserToken,(c=n._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Qe(p)}n._authCredentials=new H_(new NC(h,C))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pn(this.firestore,e,this._query)}}class Pe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Di(t,Pe._jsonSchema))return new Pe(e,r||null,new $(Ce.fromString(t.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:Le("string",Pe._jsonSchemaVersion),referencePath:Le("string")};class Mn extends pn{constructor(e,t,r){super(e,t,na(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new $(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function lv(n,e,...t){if(n=_e(n),zf("collection","path",e),n instanceof Ba){const r=Ce.fromString(e,...t);return Yl(r),new Mn(n,null,r)}{if(!(n instanceof Pe||n instanceof Mn))throw new J(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return Yl(r),new Mn(n.firestore,null,r)}}function CD(n,e,...t){if(n=_e(n),arguments.length===1&&(e=nu.newId()),zf("doc","path",e),n instanceof Ba){const r=Ce.fromString(e,...t);return $l(r),new Pe(n,null,new $(r))}{if(!(n instanceof Pe||n instanceof Mn))throw new J(k.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return $l(r),new Pe(n.firestore,n instanceof Mn?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ft._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Di(e,ft._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ft(e.vectorValues);throw new J(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ft._jsonSchemaVersion="firestore/vectorValue/1.0",ft._jsonSchema={type:Le("string",ft._jsonSchemaVersion),vectorValues:Le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=/^__.*__$/;class pD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ii(e,this.data,t,this.fieldTransforms)}}class MC{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new tr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function GC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:n})}}class hu{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new hu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return No(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(GC(this.dataSource)&&dD.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class gD{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||sa(e)}createContext(e,t,r,s=!1){return new hu({dataSource:e,methodName:t,targetDoc:r,path:It.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ua(n){const e=n._freezeSettings(),t=sa(n._databaseId);return new gD(n._databaseId,!!e.ignoreUndefinedProperties,t)}function UC(n,e,t,r,s,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Cu("Data must be an object, but it was:",o,r);const B=HC(r,o);let u,c;if(i.merge)u=new _t(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const C of i.mergeFields){const p=Qn(e,C,t);if(!o.contains(p))throw new J(k.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);KC(h,p)||h.push(p)}u=new _t(h),c=o.fieldTransforms.filter(C=>u.covers(C.field))}else u=null,c=o.fieldTransforms;return new pD(new rt(B),u,c)}class ca extends oa{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ca}}class fu extends oa{_toFieldTransform(e){return new HE(e.path,new ti)}isEqual(e){return e instanceof fu}}function mD(n,e,t,r){const s=n.createContext(1,e,t);Cu("Data must be an object, but it was:",s,r);const i=[],o=rt.empty();er(r,(u,c)=>{const h=jC(e,u,t);c=_e(c);const C=s.childContextForFieldPath(h);if(c instanceof ca)i.push(h);else{const p=zn(c,C);p!=null&&(i.push(h),o.set(h,p))}});const B=new _t(i);return new MC(o,B,s.fieldTransforms)}function ED(n,e,t,r,s,i){const o=n.createContext(1,e,t),B=[Qn(e,r,t)],u=[s];if(i.length%2!=0)throw new J(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)B.push(Qn(e,i[p])),u.push(i[p+1]);const c=[],h=rt.empty();for(let p=B.length-1;p>=0;--p)if(!KC(c,B[p])){const _=B[p];let I=u[p];I=_e(I);const F=o.childContextForFieldPath(_);if(I instanceof ca)c.push(_);else{const M=zn(I,F);M!=null&&(c.push(_),h.set(_,M))}}const C=new _t(c);return new MC(h,C,o.fieldTransforms)}function _D(n,e,t,r=!1){return zn(t,n.createContext(r?4:3,e))}function zn(n,e,t){if(qC(n=_e(n)))return Cu("Unsupported field value:",e,n),HC(n,e);if(n instanceof oa)return function(s,i){if(!GC(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let B=0;for(const u of s){let c=zn(u,i.childContextForArray(B));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),B++}return{arrayValue:{values:o}}}(n,e)}return function(s,i,o){if((s=_e(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return iu(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=pe.fromDate(s);return{timestampValue:Js(i.serializer,B)}}if(s instanceof pe){const B=new pe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Js(i.serializer,B)}}if(JC(s)){const B=pe.fromInstant(s),u=new pe(B.seconds,1e3*Math.floor(B.nanoseconds/1e3));return{timestampValue:Js(i.serializer,u)}}if(s instanceof jt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof At)return{bytesValue:yC(i.serializer,s._byteString)};if(s instanceof Pe){const B=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(B))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:lu(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ft)return function(u,c){const h=u instanceof ft?u.toArray():u;return{mapValue:{fields:{[Zf]:{stringValue:eC},[Zs]:{arrayValue:{values:h.map(p=>{if(typeof p!="number")throw c.createError("VectorValues must only contain numeric values.");return Zo(c.serializer,p)})}}}}}}(s,i);if(SC(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${$o(s)}`)}(n,e)}function HC(n,e){const t={};return Kf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):er(n,(r,s)=>{const i=zn(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function JC(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function qC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pe||n instanceof jt||n instanceof At||n instanceof Pe||n instanceof oa||n instanceof ft||JC(n)||SC(n))}function Cu(n,e,t){if(!qC(t)||!_i(t)){const r=$o(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Qn(n,e,t){if((e=_e(e))instanceof ia)return e._internalPath;if(typeof e=="string")return jC(n,e);throw No("Field path arguments must be of type string or ",n,!1,void 0,t)}const DD=new RegExp("[~\\*/\\[\\]]");function jC(n,e,t){if(e.search(DD)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ia(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function No(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new J(k.INVALID_ARGUMENT,B+n+u)}function KC(n,e){return n.some(t=>t.isEqual(e))}function zC(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=rt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&_i(o)?B={mapValue:{fields:new Xe(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=zn(o,t)??void 0),B&&r.set(It.fromServerFormat(i.serverName),B)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(bE(r,(o,B)=>[It.fromServerFormat(B),o!==void 0?zn(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!_i(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function hv(){return new fu("serverTimestamp")}function ID(n){return new ft(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(n){let e;return n instanceof Pr?n:(e=_i(n)?vD(n):n instanceof Array?PD(n):QC(n,void 0),e)}function cB(n){if(n instanceof Pr)return n;if(n instanceof ft)return Bi(n);if(Array.isArray(n))return Bi(ID(n));throw new Error("Unsupported value: "+typeof n)}function du(n){return VE(n)?Co(n):H(n)}class Pr{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,H(e)],"add")}asBoolean(){if(this instanceof Wn)return this;if(this instanceof is)return new $C(this);if(this instanceof ss)return new RD(this);if(this instanceof L)return new WC(this);throw new J("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,H(e)],"subtract")}multiply(e){return new L("multiply",[this,H(e)],"multiply")}divide(e){return new L("divide",[this,H(e)],"divide")}mod(e){return new L("mod",[this,H(e)],"mod")}equal(e){return new L("equal",[this,H(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,H(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,H(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,H(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,H(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,H(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(s=>H(s));return new L("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,H(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Ls(e.map(H),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Ls(e.map(H),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Ls(e.map(H),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Ls(e.map(H),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,H(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,H(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,H(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,H(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,H(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,H(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,H(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,H(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(H(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(H(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(H(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,Bi(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(H);return new L("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,H(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,H(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,H(e),H(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,H(e),H(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(H);return new L("concat",[this,...r],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,H(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,H(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new L("array_transform",[this,H(e),H(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,H(e)];return t!==void 0&&r.push(H(t)),new L("array_slice",r,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,H(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,H(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,H(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,H(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,H(e),H("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,H(e),H("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,H(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,Bi(e)],"mapGet")}mapSet(e,t,...r){const s=[this,H(e),H(t),...r.map(H)];return new L("map_set",s,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,H(e)],"get_field")}count(){return Et._create("count",[this],"count")}sum(){return Et._create("sum",[this],"sum")}average(){return Et._create("average",[this],"average")}minimum(){return Et._create("minimum",[this],"minimum")}maximum(){return Et._create("maximum",[this],"maximum")}first(){return Et._create("first",[this],"first")}last(){return Et._create("last",[this],"last")}arrayAgg(){return Et._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Et._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Et._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new L("maximum",[this,...r.map(H)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new L("minimum",[this,...r.map(H)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,cB(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,cB(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,cB(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,H(e),H(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,H(e),H(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,du(e),H(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,H(e)];return t&&r.push(H(t)),new L("timestamp_extract",r,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const r=H(e);return new L("substring",t===void 0?[this,r]:[this,r,H(t)],"substring")}arrayGet(e){return new L("array_get",[this,H(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,H(e)],"ifError");return e instanceof Wn?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,H(e)],"mapRemove")}mapMerge(e,...t){const r=H(e),s=t.map(H);return new L("map_merge",[this,r,...s],"mapMerge")}pow(e){return new L("pow",[this,H(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,H(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,H(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,H(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,H(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,H(e),...t.map(H)],"coalesce")}join(e){return new L("join",[this,H(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,H(e)])}timestampTruncate(e,t){const r=[this,H(e)];return t&&r.push(H(t)),new L("timestamp_trunc",r)}ascending(){return bD(this)}descending(){return SD(this)}as(e){return new TD(this,e,"as")}}class Et{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new Et(e,t);return s._methodName=r,s}as(e){return new yD(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class yD{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class TD{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Ls extends Pr{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map(t=>t._toProto(e))}}}_readUserData(e){this.cr.forEach(t=>t._readUserData(e))}}class ss extends Pr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,H(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Co(n){return AD(n,"field")}function AD(n,e){return new ss(typeof n=="string"?Mt===n?G_()._internalPath:Qn("field",n):n._internalPath,e)}class is extends Pr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new is(e,void 0);return t._protoValue=e,t}_toProto(e){return Q(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,wD(this._protoValue)||(this._protoValue=zn(this.value,e))}}function Bi(n,e){return QC(n,"constant")}function QC(n,e){const t=new is(n,e);return typeof n=="boolean"?new $C(t):t}class L extends Pr{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Xe({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Wn extends Pr{get _methodName(){return this._expr._methodName}countIf(){return Et._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=H(e),r=new L("if_error",[this,t],"ifError");return t instanceof Wn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class WC extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class $C extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class RD extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function vD(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Bi(r)),t.push(H(s))}return new L("map",t,"map")}function PD(n){return function(t,r){return new L("array",t.map(s=>H(s)),r)}(n,"array")}function bD(n){return new YC(du(n),"ascending","ascending")}function SD(n){return new YC(du(n),"descending","descending")}class YC{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:OC(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class XC extends yt{get _name(){return"add_fields"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ai(e,this.fields)]}}_readUserData(e){super._readUserData(e),$n(this.fields,e)}}class ZC extends yt{get _name(){return"aggregate"}get _optionsUtil(){return new Xe({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ai(e,this.accumulators),ai(e,this.groups)]}}_readUserData(e){super._readUserData(e),$n(this.groups,e),$n(this.accumulators,e)}}class ed extends yt{get _name(){return"distinct"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ai(e,this.groups)]}}_readUserData(e){super._readUserData(e),$n(this.groups,e)}}class la extends yt{get _name(){return"collection"}get _optionsUtil(){return new Xe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class ha extends yt{get _name(){return"collection_group"}get _optionsUtil(){return new Xe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class pu extends yt{get _name(){return"database"}get _optionsUtil(){return new Xe({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class gu extends yt{get _name(){return"documents"}get _optionsUtil(){return new Xe({})}constructor(e,t){if(super(t),!e||e.length===0)throw new J(k.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(r);if(s.size!==r.length)throw new J(k.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=r,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class fa extends yt{get _name(){return"where"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),$n(this.condition,e)}}class Tr extends yt{get _name(){return"limit"}get _optionsUtil(){return new Xe({})}constructor(e,t){Q(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[iu(e,this.limit)]}}}class Ah extends yt{get _name(){return"offset"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[iu(e,this.offset)]}}}class OD extends yt{get _name(){return"select"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ai(e,this.selections)]}}_readUserData(e){super._readUserData(e),$n(this.selections,e)}}class Zt extends yt{get _name(){return"sort"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),$n(this.orderings,e)}}class mu extends yt{get _name(){return"replace_with"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),OC(mu.Ir)]}}_readUserData(e){super._readUserData(e),$n(this.map,e)}}mu.Ir="full_replace";function $n(n,e){return zC(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}Vr(e,t){const r=this.userDataReader.createContext(3,e);return zC(t)?t._readUserData(r):Array.isArray(t)?t.forEach(s=>s._readUserData(r)):t.forEach(s=>s._readUserData(r)),t}where(e){const t=this.stages.map(r=>r);return this.Vr("where",e),t.push(new fa(e,{})),new qs(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map(r=>r);return t.push(new Tr(e,{})),new qs(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map(s=>s);return"orderings"in e?r.push(new Zt(this.Vr("sort",e.orderings),{})):r.push(new Zt(this.Vr("sort",[e,...t]),{})),new qs(this._db,this.userDataReader,this._userDataWriter,r)}dr(e){return{pipeline:{stages:this.stages.map(t=>t._toProto(e))}}}}// Copyright 2024 Google LLC* @license
class nt{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Ca(this)}getPipelineCollectionGroup(){return Eu(this)}getPipelineCollectionId(){return ND(this)}getPipelineDocuments(){return xB(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((s,i)=>{s._name!==ed.name&&s._name!==ZC.name||(r="keyless"),s._name===OD.name&&r==="exact"&&(r="augmented"),s._name===XC.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Gn(this)}}function Gn(n){const e=n.stages[0];return e instanceof la||e instanceof ha||e instanceof pu||e instanceof gu?e._name:"unknown"}function Ca(n){if(Gn(n)==="collection")return n.stages[0].hr}function Eu(n){if(Gn(n)==="collection_group")return n.stages[0].collectionId}function ND(n){switch(Gn(n)){case"collection":return Ce.fromString(Ca(n)).lastSegment();case"collection_group":return Eu(n);default:return}}function xB(n){if(Gn(n)==="documents")return n.stages[0].Tr}class y{constructor(e,t){this.type=e,this.value=t}static mr(){return new y("ERROR",void 0)}static pr(){return new y("UNSET",void 0)}static gr(){return new y("NULL",Wr)}static newValue(e){return Dt(e)?new y("NULL",Wr):function(r){return!!r&&"booleanValue"in r}(e)?new y("BOOLEAN",e):Gt(e)?new y("INT",e):Cr(e)?new y("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new y("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new y("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new y("BYTES",e):e.referenceValue?new y("REFERENCE",e):e.geoPointValue?new y("GEO_POINT",e):Yr(e)?new y("ARRAY",e):Ao(e)?new y("VECTOR",e):pr(e)?new y("MAP",e):new y("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function js(n){if(!n.yr())return n.value}function td(n){return n instanceof Wn?n._expr:n}function ee(n){if((n=td(n))instanceof ss)return new FD(n);if(n instanceof is)return new LD(n);if(n instanceof Ls)return new kD(n);if(n instanceof L){if(n.name==="add")return new MD(n);if(n.name==="subtract")return new GD(n);if(n.name==="multiply")return new UD(n);if(n.name==="divide")return new HD(n);if(n.name==="mod")return new JD(n);if(n.name==="and")return new qD(n);if(n.name==="equal")return new nw(n);if(n.name==="not_equal")return new rw(n);if(n.name==="less_than")return new sw(n);if(n.name==="less_than_or_equal")return new iw(n);if(n.name==="greater_than")return new ow(n);if(n.name==="greater_than_or_equal")return new aw(n);if(n.name==="array_concat")return new Bw(n);if(n.name==="array_reverse")return new uw(n);if(n.name==="array_contains")return new cw(n);if(n.name==="array_contains_all")return new lw(n);if(n.name==="array_contains_any")return new hw(n);if(n.name==="array_length")return new fw(n);if(n.name==="array_element")return new Cw(n);if(n.name==="equal_any")return new nd(n);if(n.name==="not_equal_any")return new KD(n);if(n.name==="is_nan")return new zD(n);if(n.name==="is_not_nan")return new QD(n);if(n.name==="is_null")return new WD(n);if(n.name==="is_not_null")return new $D(n);if(n.name==="is_error")return new YD(n);if(n.name==="exists")return new XD(n);if(n.name==="not")return new da(n);if(n.name==="or")return new jD(n);if(n.name==="xor")return new _u(n);if(n.name==="conditional")return new ZD(n);if(n.name==="maximum")return new ew(n);if(n.name==="minimum")return new tw(n);if(n.name==="reverse")return new dw(n);if(n.name==="replace_first")return new pw(n);if(n.name==="replace_all")return new gw(n);if(n.name==="char_length")return new mw(n);if(n.name==="byte_length")return new Ew(n);if(n.name==="like")return new _w(n);if(n.name==="regex_contains")return new Dw(n);if(n.name==="regex_match")return new ww(n);if(n.name==="string_contains")return new Iw(n);if(n.name==="starts_with")return new yw(n);if(n.name==="ends_with")return new Tw(n);if(n.name==="to_lower")return new Aw(n);if(n.name==="to_upper")return new Rw(n);if(n.name==="trim")return new vw(n);if(n.name==="string_concat")return new Pw(n);if(n.name==="map_get")return new bw(n);if(n.name==="cosine_distance")return new Sw(n);if(n.name==="dot_product")return new Ow(n);if(n.name==="euclidean_distance")return new Nw(n);if(n.name==="vector_length")return new Fw(n);if(n.name==="unix_micros_to_timestamp")return new Mw(n);if(n.name==="timestamp_to_unix_micros")return new Hw(n);if(n.name==="unix_millis_to_timestamp")return new Gw(n);if(n.name==="timestamp_to_unix_millis")return new Jw(n);if(n.name==="unix_seconds_to_timestamp")return new Uw(n);if(n.name==="timestamp_to_unix_seconds")return new qw(n);if(n.name==="timestamp_add")return new jw(n);if(n.name==="timestamp_subtract")return new Kw(n)}throw new Error(`Unknown Expr : ${n}`)}class FD{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Mt)return y.newValue({referenceValue:Oo(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return y.newValue({timestampValue:fo(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return y.newValue({timestampValue:fo(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Yo(r)?y.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:fo(i.serializer,ne.fromTimestamp(Qr(o)))};if(i.serverTimestampBehavior==="previous"){const B=wi(o);if(B)return B}return{nullValue:"NULL_VALUE"}}(e,r)):y.newValue(r):y.pr()}}class LD{constructor(e){this.expr=e}evaluate(e,t){return y.newValue(this.expr._getValue())}}class kD{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.cr.map(s=>ee(s).evaluate(e,t));return r.some(s=>s.yr())?y.mr():y.newValue({arrayValue:{values:r.map(s=>s.value)}})}}function je(n){return Cr(n)?Number(n.doubleValue):Number(n.integerValue)}function Qt(n){return BigInt(n.integerValue)}const VD=BigInt("0x7fffffffffffffff"),xD=-BigInt("0x8000000000000000");class Ai{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length>=2,24778);const r=ee(this.expr.params[0]).evaluate(e,t),s=ee(this.expr.params[1]).evaluate(e,t);let i=this.br(r,s);for(const o of this.expr.params.slice(2)){const B=ee(o).evaluate(e,t);i=this.br(i,B)}return i}br(e,t){if(e.yr()||t.yr())return y.mr();if(e.wr()||t.wr())return y.gr();const r=e.value,s=t.value;if(!Cr(r)&&!Gt(r)||!Cr(s)&&!Gt(s))return y.mr();if(Cr(r)||Cr(s)){const i=this.Sr(r,s);return i?y.newValue(i):y.mr()}if(Gt(r)&&Gt(s)){const i=this.vr(r,s);return i===void 0?y.mr():typeof i=="number"?y.newValue({doubleValue:i}):i<xD||i>VD?y.mr():y.newValue({integerValue:`${i}`})}return y.mr()}}function cn(n,e){return xe(n)!==xe(e)?"TYPE_MISMATCH":pt(n)||pt(e)?"NOT_EQ":Dt(n)&&Dt(e)?"EQ":Dt(n)||Dt(e)?"NULL":Yr(n)&&Yr(e)?function(r,s){var o,B,u;if(((o=r.values)==null?void 0:o.length)!==((B=s.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let c=0;c<(((u=r.values)==null?void 0:u.length)??0);c++){const h=r.values[c],C=s.values[c];switch(cn(h,C)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:X(44609,{Dr:h,Cr:C})}}return i?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Ao(n)&&Ao(e)||pr(n)&&pr(e)?function(r,s){const i=r.fields||{},o=s.fields||{};if(yo(i)!==yo(o))return"NOT_EQ";let B=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(cn(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,s){return Pt(r,s,{u:!1,i:!0,o:!0})}(n,e)?"EQ":"NOT_EQ"}class MD extends Ai{vr(e,t){return Qt(e)+Qt(t)}Sr(e,t){return{doubleValue:je(e)+je(t)}}}class GD extends Ai{constructor(e){super(e),this.expr=e}vr(e,t){return Qt(e)-Qt(t)}Sr(e,t){return{doubleValue:je(e)-je(t)}}}class UD extends Ai{constructor(e){super(e),this.expr=e}vr(e,t){return Qt(e)*Qt(t)}Sr(e,t){return{doubleValue:je(e)*je(t)}}}class HD extends Ai{constructor(e){super(e),this.expr=e}vr(e,t){const r=Qt(t);if(r!==BigInt(0))return Qt(e)/r}Sr(e,t){const r=je(t);return r===0?{doubleValue:Xs(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:je(e)/r}}}class JD extends Ai{constructor(e){super(e),this.expr=e}vr(e,t){const r=Qt(t);if(r!==BigInt(0))return Qt(e)%r}Sr(e,t){const r=je(t);if(r!==0)return{doubleValue:je(e)%r}}}class qD{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=ee(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return y.newValue(Je);break;case"NULL":s=!0;break;default:r=!0}}return r?y.mr():s?y.gr():y.newValue(Ct)}}class da{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,9634);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return y.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return y.gr();default:return y.mr()}}}class jD{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=ee(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return y.newValue(Ct);break;case"NULL":s=!0;break;default:r=!0}}return r?y.mr():s?y.gr():y.newValue(Je)}}class _u{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const o of this.expr.params){const B=ee(o).evaluate(e,t);switch(B.type){case"BOOLEAN":r=_u.xor(r,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return y.mr()}}return s?y.gr():y.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class nd{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,55094);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return y.mr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return y.mr()}if(r)return y.gr();for(const u of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(Dt(s.value)&&Dt(u)?"EQ":cn(s.value,u)){case"EQ":return y.newValue(Ct);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(44608,{value:s.value,candidate:u})}return r?y.gr():y.newValue(Je)}}class KD{constructor(e){this.expr=e}evaluate(e,t){return new da(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class zD{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,23322);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return y.newValue(Je);case"DOUBLE":return y.newValue({booleanValue:isNaN(je(r.value))});case"NULL":return y.gr();default:return y.mr()}}}class QD{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,50406),new da(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class WD{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,23123),ee(this.expr.params[0]).evaluate(e,t).type){case"NULL":return y.newValue(Ct);case"UNSET":case"ERROR":return y.mr();default:return y.newValue(Je)}}}class $D{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,23167),new da(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class YD{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===1,5228),ee(this.expr.params[0]).evaluate(e,t).type==="ERROR"?y.newValue(Ct):y.newValue(Je)}}class XD{constructor(e){this.expr=e}evaluate(e,t){switch(Q(this.expr.params.length===1,6877),ee(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return y.mr();case"UNSET":return y.newValue(Je);default:return y.newValue(Ct)}}}class ZD{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===3,11706);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?ee(this.expr.params[1]).evaluate(e,t):ee(this.expr.params[2]).evaluate(e,t);case"NULL":return ee(this.expr.params[2]).evaluate(e,t);default:return y.mr()}}}class ew{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>ee(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||dt(i.value,s.value)>0?i:s}return s===void 0?y.gr():s}}class tw{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(i=>ee(i).evaluate(e,t));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||dt(i.value,s.value)<0?i:s}return s===void 0?y.gr():s}}class os{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return y.mr()}const s=ee(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return y.mr()}return this.Fr(r,s)}}class nw extends os{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return y.newValue(Ct);if(e.wr()||t.wr()||pt(e.value)||pt(t.value)||xe(e.value)!==xe(t.value))return y.newValue(Je);switch(cn(e.value,t.value)){case"EQ":return y.newValue(Ct);case"NOT_EQ":return y.newValue(Je);case"NULL":return y.gr();default:X(44615,{left:e,right:t})}}}class rw extends os{constructor(e){super(e),this.expr=e}Fr(e,t){switch(cn(e.value,t.value)){case"EQ":return y.newValue(Je);case"NOT_EQ":case"TYPE_MISMATCH":return y.newValue(Ct);case"NULL":return y.gr();default:X(44614,{left:e,right:t})}}}class sw extends os{constructor(e){super(e),this.expr=e}Fr(e,t){return xe(e.value)!==xe(t.value)||pt(e.value)||pt(t.value)?y.newValue(Je):y.newValue({booleanValue:dt(e.value,t.value)<0})}}class iw extends os{constructor(e){super(e),this.expr=e}Fr(e,t){return xe(e.value)!==xe(t.value)||pt(e.value)||pt(t.value)?y.newValue(Je):cn(e.value,t.value)==="EQ"?y.newValue(Ct):y.newValue({booleanValue:dt(e.value,t.value)<0})}}class ow extends os{constructor(e){super(e),this.expr=e}Fr(e,t){return xe(e.value)!==xe(t.value)||pt(e.value)||pt(t.value)?y.newValue(Je):y.newValue({booleanValue:dt(e.value,t.value)>0})}}class aw extends os{constructor(e){super(e),this.expr=e}Fr(e,t){return xe(e.value)!==xe(t.value)||pt(e.value)||pt(t.value)?y.newValue(Je):cn(e.value,t.value)==="EQ"?y.newValue(Ct):y.newValue({booleanValue:dt(e.value,t.value)>0})}}class Bw{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class uw{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,216);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return y.gr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return y.newValue({arrayValue:{values:[...i].reverse()}})}default:return y.mr()}}}class cw{constructor(e){this.expr=e}evaluate(e,t){return Q(this.expr.params.length===2,52884),new nd(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class lw{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,C;Q(this.expr.params.length===2,1392);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return y.mr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return y.mr()}if(r)return y.gr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((C=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:C.values)??[];for(const p of o){let _=!1;r=!1;for(const I of B){switch(Dt(p)&&Dt(I)?"EQ":cn(p,I)){case"EQ":_=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(44613,{value:I,search:p})}if(_)break}if(!_)return y.newValue(Je)}return y.newValue(Ct)}}class hw{constructor(e){this.expr=e}evaluate(e,t){var u,c,h,C;Q(this.expr.params.length===2,2680);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return y.mr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return y.mr()}if(r)return y.gr();const o=((c=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:c.values)??[],B=((C=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:C.values)??[];for(const p of B)for(const _ of o)switch(Dt(p)&&Dt(_)?"EQ":cn(p,_)){case"EQ":return y.newValue(Ct);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:X(60403,{value:p,search:_})}return r?y.gr():y.newValue(Je)}}class fw{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;Q(this.expr.params.length===1,38605);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return y.gr();case"ARRAY":return y.newValue({integerValue:`${((o=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return y.mr()}}}class Cw{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class dw{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,1508);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return y.gr();case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const B=Ve.fromBase64String(o).toUint8Array();return B.reverse(),y.newValue({bytesValue:Ve.fromUint8Array(B).toBase64()})}return y.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=r.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(B,c=>c.segment).reverse();return y.newValue({stringValue:u.join("")})}default:return y.mr()}}}class pw{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class gw{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class mw{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,19400);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return y.gr();case"STRING":{const s=function(o){let B=0;for(let u=0;u<o.length;u++){const c=o.codePointAt(u);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const h=o.codePointAt(u+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,u++):B+=1}else B+=1;else B+=1;else{if(!(c<=1114111))return;B+=1,u++}}return B}(r.value.stringValue);return s===void 0?y.mr():y.newValue({integerValue:s})}default:return y.mr()}}}class Ew{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,8486);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const o=(s=r.value)==null?void 0:s.bytesValue;return typeof o=="string"?y.newValue({integerValue:Ve.fromBase64String(o).toUint8Array().length}):y.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(u){let c=0;for(let h=0;h<u.length;h++){const C=u.codePointAt(h);if(C===void 0)return;if(C>=55296&&C<=57343){if(!(C<=56319))return;{const p=u.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,h++}}else if(C<=127)c+=1;else if(C<=2047)c+=2;else if(C<=65535)c+=3;else{if(!(C<=1114111))return;c+=4,h++}}return c}((i=r.value)==null?void 0:i.stringValue);return o===void 0?y.mr():y.newValue({integerValue:o})}case"NULL":return y.gr();default:return y.mr()}}}class as{constructor(e){this.expr=e}evaluate(e,t){var o,B;Q(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return y.mr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return y.mr()}return r?y.gr():this.Or((o=s.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class _w extends as{Or(e,t){try{const r=function(o){let B="";for(let u=0;u<o.length;u++){const c=o.charAt(u);switch(c){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+c;break;default:B+=c}}return"^"+B+"$"}(t),s=eu.compile(r);return y.newValue({booleanValue:s.matches(e)})}catch(r){return Nt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),y.mr()}}}class Dw extends as{Or(e,t){try{const r=eu.compile(t);return y.newValue({booleanValue:r.test(e)})}catch{return Nt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),y.mr()}}}class ww extends as{Or(e,t){try{return y.newValue({booleanValue:eu.compile(t).matches(e)})}catch{return Nt(`Invalid regex pattern found in regex_match: ${t}, returning error`),y.mr()}}}class Iw extends as{Or(e,t){return y.newValue({booleanValue:e.includes(t)})}}class yw extends as{Or(e,t){return y.newValue({booleanValue:e.startsWith(t)})}}class Tw extends as{Or(e,t){return y.newValue({booleanValue:e.endsWith(t)})}}class Aw{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,29079);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return y.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return y.gr();default:return y.mr()}}}class Rw{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,60487);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return y.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return y.gr();default:return y.mr()}}}class vw{constructor(e){this.expr=e}evaluate(e,t){var s,i;Q(this.expr.params.length===1,28544);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return y.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return y.gr();default:return y.mr()}}}class Pw{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>ee(o).evaluate(e,t));let s="",i=!1;for(const o of r)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return y.mr()}return i?y.gr():y.newValue({stringValue:s})}}class bw{constructor(e){this.expr=e}evaluate(e,t){var o,B,u,c;Q(this.expr.params.length===2,4483);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return y.pr();case"MAP":break;default:return y.mr()}const s=ee(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return y.mr();const i=(c=(B=(o=r.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:c[(u=s.value)==null?void 0:u.stringValue];return i===void 0?y.pr():y.newValue(i)}}class Du{constructor(e){this.expr=e}evaluate(e,t){var c,h;Q(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return y.mr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return y.mr()}if(r)return y.gr();const o=SB(s.value),B=SB(i.value);if(o===void 0||B===void 0||((c=o.values)==null?void 0:c.length)!==((h=B.values)==null?void 0:h.length))return y.mr();const u=this.Mr(o,B);return u===void 0||isNaN(u)?y.mr():y.newValue({doubleValue:u})}}class Sw extends Du{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,o=0,B=0;for(let c=0;c<r.length;c++){if(!jn(r[c])||!jn(s[c]))return;const h=je(r[c]),C=je(s[c]);i+=h*C,o+=h*h,B+=C*C}const u=Math.sqrt(o)*Math.sqrt(B);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class Ow extends Du{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!jn(r[o])||!jn(s[o]))return;i+=je(r[o])*je(s[o])}return i}}class Nw extends Du{Mr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let o=0;o<r.length;o++){if(!jn(r[o])||!jn(s[o]))return;const B=je(r[o]),u=je(s[o]);i+=Math.pow(B-u,2)}return Math.sqrt(i)}}class Fw{constructor(e){this.expr=e}evaluate(e,t){var s;Q(this.expr.params.length===1,39044);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=SB(r.value);return y.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return y.gr();default:return y.mr()}}}const ui=BigInt(-62135596800),ci=BigInt(253402300799),Fo=BigInt(1e3),Un=BigInt(1e6),Lw=ui*Fo,kw=ci*Fo+BigInt(999),Vw=ui*Un,xw=ci*Un+BigInt(999999);function wu(n){return n>=Vw&&n<=xw}function rd(n){return n>=ui&&n<=ci}function li(n,e){const t=BigInt(n);return!(t<ui||t>ci)&&!(e<0||e>=1e9)&&(t!==ui||e===0)&&!(t===ci&&e>999999999)}function sd(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Iu(n){return BigInt(n.seconds)*Un+BigInt(Math.trunc(n.nanoseconds/1e3))}class yu{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return y.gr();default:return y.mr()}}}class Mw extends yu{toTimestamp(e){if(!wu(e))return y.mr();let t=Number(e/Un),r=Number(e%Un*BigInt(1e3));const s=sd(t,r);return t=s.seconds,r=s.nanos,li(t,r)?y.newValue({timestampValue:{seconds:t,nanos:r}}):y.mr()}}class Gw extends yu{toTimestamp(e){if(!function(o){return o>=Lw&&o<=kw}(e))return y.mr();let t=Number(e/Fo),r=Number(e%Fo*BigInt(1e6));const s=sd(t,r);return t=s.seconds,r=s.nanos,li(t,r)?y.newValue({timestampValue:{seconds:t,nanos:r}}):y.mr()}}class Uw extends yu{toTimestamp(e){if(!rd(e))return y.mr();const t=Number(e);return y.newValue({timestampValue:{seconds:t,nanos:0}})}}class Tu{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return y.gr();default:return y.mr()}const s=cu(r.value.timestampValue);return li(s.seconds,s.nanoseconds)?this.Nr(s):y.mr()}}class Hw extends Tu{Nr(e){const t=Iu(e);return wu(t)?y.newValue({integerValue:`${t.toString()}`}):y.mr()}}class Jw extends Tu{Nr(e){const t=Iu(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?y.newValue({integerValue:r.toString()}):y.newValue({integerValue:(r-BigInt(1)).toString()})}}class qw extends Tu{Nr(e){const t=BigInt(e.seconds);return rd(t)?y.newValue({integerValue:t.toString()}):y.mr()}}class id{constructor(e){this.expr=e}evaluate(e,t){Q(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return y.mr()}const i=ee(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(te){switch(te){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return y.mr();break;case"NULL":r=!0;break;default:return y.mr()}const B=ee(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":r=!0;break;default:return y.mr()}if(r)return y.gr();const u=BigInt(B.value.integerValue);let c;try{switch(o){case"microsecond":c=u;break;case"millisecond":c=u*BigInt(1e3);break;case"second":c=u*BigInt(1e6);break;case"minute":c=u*BigInt(6e7);break;case"hour":c=u*BigInt(36e8);break;case"day":c=u*BigInt(864e8);break;default:return y.mr()}if(o!=="microsecond"&&u!==BigInt(0)&&c/u!==BigInt(this.Lr(o)))return y.mr()}catch(j){return Nt(`Error during timestamp arithmetic: ${j}`),y.mr()}const h=cu(s.value.timestampValue);if(!li(h.seconds,h.nanoseconds))return y.mr();const C=Iu(h),p=this.Br(C,c);if(!wu(p))return y.mr();const _=Number(p/Un),I=p%Un,F=Number((I<0?I+Un:I)*BigInt(1e3)),M=I<0?_-1:_;return li(M,F)?y.newValue({timestampValue:{seconds:M,nanos:F}}):y.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class jw extends id{Br(e,t){return e+t}}class Kw extends id{Br(e,t){return e-t}}function hi(n){if((n=td(n))instanceof ss)return`fld(${n.fieldName})`;if(n instanceof is)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Pe?`ref(${t.path})`:t instanceof ft?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof L)return`fn(${n.name},[${n.params.map(hi).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.cr.map(hi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function zw(n){if(n instanceof XC)return`${n._name}(${io(n.fields)})`;if(n instanceof ZC){let e=`${n._name}(${io(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${io(n.groups)})`),e}if(n instanceof ed)return`${n._name}(${io(n.groups)})`;if(n instanceof la)return`${n._name}(${n.hr})`;if(n instanceof ha)return`${n._name}(${n.collectionId})`;if(n instanceof pu)return`${n._name}()`;if(n instanceof gu)return`${n._name}(${n.Tr.sort()})`;if(n instanceof fa)return`${n._name}(${hi(n.condition)})`;if(n instanceof Tr)return`${n._name}(${n.limit})`;if(n instanceof Zt)return`${n._name}(${function(t){return t.map(r=>`${hi(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function io(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${hi(t)}`).join(",")}`}function sn(n){return n.stages.map(e=>zw(e)).join("|")}function od(n,e){return sn(n)===sn(e)}function Ge(n){return n instanceof nt}function Rh(n){return Ge(n)?sn(n):Us(n)}function ad(n){return Ge(n)?sn(n):function(t){return`${CC(Jt(t))}|lt:${t.limitType}`}(n)}function pa(n,e){return n instanceof nt&&e instanceof nt?od(n,e):!(n instanceof nt&&!(e instanceof nt)||!(n instanceof nt)&&e instanceof nt)&&l_(n,e)}function Bd(n){return hr(n)?sn(n):CC(n)}function ud(n,e){return n instanceof nt&&e instanceof nt?od(n,e):!(n instanceof nt&&!(e instanceof nt)||!(n instanceof nt)&&e instanceof nt)&&dC(n,e)}function Qw(n,e){const t=function(s){let i=!1;const o=[];for(const B of s)if(B instanceof Zt)if(i=!0,B.orderings.some(u=>u.expr instanceof ss&&u.expr.fieldName===Mt))o.push(B);else{const u=B.orderings.map(c=>c);u.push(Co(Mt).ascending()),o.push(new Zt(u,{}))}else B instanceof Tr&&(i||(o.push(new Zt([Co(Mt).ascending()],{})),i=!0)),o.push(B);return i||o.push(new Zt([Co(Mt).ascending()],{})),o}(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach(s=>s._readUserData(r))}return new nt(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ms(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ms(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=DC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const u=oC(o,B);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&zr(this.mutations,e.mutations,(t,r)=>sh(t,r))&&zr(this.baseMutations,e.baseMutations,(t,r)=>sh(t,r))}}class Au{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Q(e.mutations.length===r.length,58842,{Ur:e.mutations.length,kr:r.length});let s=function(){return p_}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Au(e,t,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="";function $w(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=vh(e)),e=Yw(n.get(t),e);return vh(e)}function Yw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case cd:t+="";break;default:t+=i}}return t}function vh(n){return n+cd+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t,r,s,i=ne.min(),o=ne.min(),B=Ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=u}withSequenceNumber(e){return new en(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new en(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.$r=e}}function eI(n){const e=N_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?So(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.Zi=new nI}addToCollectionParentIndex(e,t){return this.Zi.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Kn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class nI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ke(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ke(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new Yn(0)}static bs(){return new Yn(-1)}}// Copyright 2024 Google LLC* @license
function ld(n,e){var r;let t=e;for(const s of n.stages)t=sI({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function ga(n,e){return ld(n,[e]).length>0}function rI(n,e){return Ge(n)?ga(n,e):ra(n,e)}function sI(n,e,t){if(e instanceof la)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.hr)}(0,e,t);if(e instanceof fa)return function(s,i,o){return o.filter(B=>{const u=js(ee(i.condition).evaluate(s,B));return u!==void 0&&Pt(u,Ct)})}(n,e,t);if(e instanceof ha)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof pu)return function(s,i,o){return o.filter(B=>B.isFoundDocument())}(0,0,t);if(e instanceof gu)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&i.Pr.has(B.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Tr)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof Zt)return function(s,i,o){const B=i.orderings.map(u=>({Ms:ee(u.expr),direction:u.direction}));return[...o].sort((u,c)=>{for(const{Ms:h,direction:C}of B){const p=js(h.evaluate(s,u)),_=js(h.evaluate(s,c)),I=dt(p??Wr,_??Wr);if(I!==0)return C==="ascending"?I:-I}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function MB(n){const e=function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof Zt)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const s of e){const i=js(ee(s.expr).evaluate({serializer:n.serializer},t)),o=js(ee(s.expr).evaluate({serializer:n.serializer},r)),B=dt(i||Wr,o||Wr);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function lB(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Tr)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.changes=new vr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ms(r.mutation,s,_t.empty(),pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const s=vn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Gr();return i.forEach((B,u)=>{o=o.insert(B,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=vn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,B)=>{t.set(o,B)})})}computeViews(e,t,r,s){let i=ct();const o=Hs(),B=function(){return Hs()}();return t.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof tr)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ms(h.mutation,c,h.mutation.getFieldMask(),pe.now())):o.set(c.key,_t.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>B.set(c,new oI(h,o.get(c)??null))),B))}recalculateAndSaveOverlays(e,t){const r=Hs();let s=new Re((o,B)=>o-B),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const B of o)B.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let h=r.get(u)||_t.empty();h=B.applyToLocalView(c,h),r.set(u,h);const C=(s.get(B.batchId)||oe()).add(u);s=s.insert(B.batchId,C)})}).next(()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const u=B.getNext(),c=u.key,h=u.value,C=DC();h.forEach(p=>{if(!i.has(p)){const _=oC(t.get(p),r.get(p));_!==null&&C.set(p,_),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,C))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return Ge(t)?this.getDocumentsMatchingPipeline(e,t,r,s):B_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(vn());let B=oi,u=i;return o.next(c=>V.forEach(c,(h,C)=>(B<C.largestBatchId&&(B=C.largestBatchId),i.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,oe())).next(h=>({batchId:B,changes:_C(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let s=Gr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Gr();return this.indexManager.getCollectionParents(e,i).next(B=>V.forEach(B,u=>{const c=function(C,p){return new ts(p,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(h=>{h.forEach((C,p)=>{o=o.insert(C,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>ra(t,B)))}getDocumentsMatchingPipeline(e,t,r,s){if(Gn(t)==="collection_group"){const i=Eu(t);let o=Gr();return this.indexManager.getCollectionParents(e,i).next(B=>V.forEach(B,u=>{const c=function(C,p){const _=C.stages.map(I=>I instanceof ha?new la(p.canonicalString(),{}):I);return new nt(C.serializer,_)}(t,u.child(i));return this.getDocumentsMatchingPipeline(e,c,r,s).next(h=>{h.forEach((C,p)=>{o=o.insert(C,p)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(i=o,Gn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let B=oe();for(const u of xB(t))B=B.add($.fromPath(u));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new J("invalid-argument",`Invalid pipeline source to execute offline: ${sn(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>ga(t,B)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,We.newInvalidDocument(B)))});let s=Gr();return t.forEach((i,o)=>{const B=e.get(i);B!==void 0&&Ms(B.mutation,o,_t.empty(),pe.now()),r(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,r){switch(Gn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Ce.fromString(Ca(t)),r);case"collection_group":throw new J("invalid-argument",`Unexpected collection group pipeline: ${sn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,xB(t).map(s=>$.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new J("invalid-argument",`Failed to get overlays for pipeline: ${sn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return V.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,function(s){return{id:s.id,version:s.version,createTime:qt(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,function(s){return{name:s.name,query:eI(s.bundledQuery),readTime:qt(s.readTime)}}(t)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(){this.overlays=new Re($.comparator),this.Gs=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=vn();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}getAllOverlays(e,t){const r=vn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&r.set(s,i)}),V.resolve(r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Zr(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Gs.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Gs.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=vn(),i=t.length+1,o=new $(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const u=B.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Re((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=vn(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const B=vn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>B.set(c,h)),!(B.size()>=s)););return V.resolve(B)}Zr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Gs.get(s.largestBatchId).delete(r.key);this.Gs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xw(t,r));let i=this.Gs.get(t);i===void 0&&(i=oe(),this.Gs.set(t,i)),this.Gs.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.zs=new ke(He.js),this.Hs=new ke(He.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const r=new He(e,t);this.zs=this.zs.add(r),this.Hs=this.Hs.add(r)}Ys(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Zs(new He(e,t))}Xs(e,t){e.forEach(r=>this.removeReference(r,t))}e_(e){const t=new $(new Ce([])),r=new He(t,e),s=new He(t,e+1),i=[];return this.Hs.forEachInRange([r,s],o=>{this.Zs(o),i.push(o.key)}),i}t_(){this.zs.forEach(e=>this.Zs(e))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new $(new Ce([])),r=new He(t,e),s=new He(t,e+1);let i=oe();return this.Hs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new He(e,0),r=this.zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return $.comparator(e.key,t.key)||ae(e.r_,t.r_)}static Js(e,t){return ae(e.r_,t.r_)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new ke(He.js)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ww(i,t,r,s);this.mutationQueue.push(o);for(const B of s)this.i_=this.i_.add(new He(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,t){return V.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.__(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?ru:this.Gr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new He(t,0),s=new He(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([r,s],o=>{const B=this.s_(o.r_);i.push(B)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ke(ae);return t.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],B=>{r=r.add(B.r_)})}),V.resolve(this.o_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;$.isDocumentKey(i)||(i=i.child(""));const o=new He(new $(i),0);let B=new ke(ae);return this.i_.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(B=B.add(u.r_)),!0)},o),V.resolve(this.o_(B))}o_(e){const t=[];return e.forEach(r=>{const s=this.s_(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Q(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.i_;return V.forEach(t.mutations,s=>{const i=new He(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.i_=r})}Hr(e){}containsKey(e,t){const r=new He(t,0),s=this.i_.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.u_=e,this.docs=function(){return new Re($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.u_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():We.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():We.newInvalidDocument(s))}),V.resolve(r)}getAllEntries(e){let t=ct();return this.docs.forEach((r,s)=>{t=t.insert(r,s.document)}),V.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,o;Ge(t)?(i=Ce.fromString(Ca(t)),o=h=>ga(t,h)):(i=t.path,o=h=>ra(t,h));let B=ct();const u=new $(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:h,value:{document:C}}=c.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||i_(s_(C),r)<=0||(s.has(C.key)||o(C))&&(B=B.insert(C.key,C.mutableCopy()))}return V.resolve(B)}getAllFromCollectionGroup(e,t,r,s){X(9500)}c_(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new fI(this)}getSize(e){return V.resolve(this.size)}}class fI extends iI{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.persistence=e,this.l_=new vr(t=>Bd(t),ud),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.E_=0,this.h_=new Ru,this.targetCount=0,this.T_=Yn.ws()}forEachTarget(e,t){return this.l_.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.E_&&(this.E_=t),V.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Ds(t),V.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.l_.forEach((o,B)=>{B.sequenceNumber<=t&&r.get(B.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.l_.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.h_.Ys(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.h_.Xs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.h_.n_(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,t){this.P_={},this.overlays={},this.I_=new aa(0),this.R_=!1,this.R_=!0,this.A_=new cI,this.referenceDelegate=e(this),this.V_=new CI(this),this.indexManager=new tI,this.remoteDocumentCache=function(s){return new hI(s)}(r=>this.referenceDelegate.d_(r)),this.serializer=new Zw(t),this.f_=new BI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.P_[e.toKey()];return r||(r=new lI(t,this.referenceDelegate),this.P_[e.toKey()]=r),r}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const s=new dI(this.I_.next());return this.referenceDelegate.m_(),r(s).next(i=>this.referenceDelegate.p_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}g_(e,t){return V.or(Object.values(this.P_).map(r=>()=>r.containsKey(e,t)))}}class dI extends oD{constructor(e){super(),this.currentSequenceNumber=e}}class vu{constructor(e){this.persistence=e,this.y_=new Ru,this.w_=null}static b_(e){return new vu(e)}get S_(){if(this.w_)return this.w_;throw X(60996)}addReference(e,t,r){return this.y_.addReference(r,t),this.S_.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.y_.removeReference(r,t),this.S_.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),V.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach(s=>this.S_.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.S_.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.S_,r=>{const s=$.fromPath(r);return this.v_(e,s).next(i=>{i||t.removeEntry(s,ne.min())})}).next(()=>(this.w_=null,t.apply(e)))}updateLimboDocument(e,t){return this.v_(e,t).next(r=>{r?this.S_.delete(t.toString()):this.S_.add(t.toString())})}d_(e){return 0}v_(e,t){return V.or([()=>V.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class Lo{constructor(e,t){this.persistence=e,this.D_=new vr(r=>$w(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hD(this,t)}static b_(e,t){return new Lo(e,t)}m_(){}p_(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Cs(e){let t=0;return this.sr(e,r=>{t++}).next(()=>t)}sr(e,t){return V.forEach(this.D_,(r,s)=>this.Os(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,o=>this.Os(e,o,t).next(B=>{B||(r++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.D_.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),V.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=co(e.data.value)),t}Os(e,t,r){return V.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Vo=r,this.fo=s}static mo(e,t){let r=oe(),s=oe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(n,e){return $.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=function(){return Fg()?8:aD(Ye())>0?6:4}()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.vo(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Do(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new gI;return this.xo(e,t,o).next(B=>{if(i.result=B,this.yo)return this.Co(e,t,o,B.size)})}).next(()=>i.result)}Co(e,t,r,s){return Ge(t)?V.resolve():r.documentReadCount<this.wo?(xr()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Us(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),V.resolve()):(xr()<=ue.DEBUG&&K("QueryEngine","Query:",Us(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.bo*s?(xr()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Us(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(t))):V.resolve())}vo(e,t){if(Ge(t))return V.resolve(null);let r=t;if(ch(r))return V.resolve(null);let s=Jt(r);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(r.limit!==null&&i===1&&(r=So(r,null,"F"),s=Jt(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const B=oe(...o);return this.So.getDocuments(e,B).next(u=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.Fo(r,u);return this.Oo(r,h,B,c.readTime)?this.vo(e,So(r,null,"F")):this.Mo(e,h,r,c)}))})))}Do(e,t,r,s){return(Ge(t)?function(o){for(const B of o.stages){if(B instanceof Tr||B instanceof Ah)return!1;if(B instanceof fa){if(B.condition instanceof WC&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof ss&&B.condition._expr.params[0].fieldName===Mt)continue;return!1}}return!0}(t):ch(t))||s.isEqual(ne.min())?V.resolve(null):this.So.getDocuments(e,r).next(i=>{const o=this.Fo(t,i);return this.Oo(t,o,r,s)?V.resolve(null):(xr()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rh(t)),this.Mo(e,o,t,r_(s,oi)).next(B=>B))})}Fo(e,t){let r,s;return Ge(e)?(r=new ke(pI),s=i=>ga(e,i)):(r=new ke(Bu(e)),s=i=>ra(e,i)),t.forEach((i,o)=>{s(o)&&(r=r.add(o))}),r}Oo(e,t,r,s){if(Ge(e))return function(B){return B.stages.some(u=>u instanceof Tr||u instanceof Ah)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,r){return xr()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Rh(t)),this.So.getDocumentsMatchingQuery(e,t,Kn.min(),r)}Mo(e,t,r,s){return this.So.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="LocalStore",EI=3e8;class _I{constructor(e,t,r,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new Re(ae),this.Bo=new vr(i=>Bd(i),ud),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(r)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aI(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Lo))}}function DI(n,e,t,r){return new _I(n,e,t,r)}async function fd(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],B=[];let u=oe();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){B.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return t.localDocuments.getDocuments(r,u).next(c=>({$o:c,removedBatchIds:o,addedBatchIds:B}))})})}function wI(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return function(B,u,c,h){const C=c.batch,p=C.keys();let _=V.resolve();return p.forEach(I=>{_=_.next(()=>h.getEntry(u,I)).next(F=>{const M=c.docVersions.get(I);Q(M!==null,48541),F.version.compareTo(M)<0&&(C.applyToRemoteDocument(F,c),F.isValidDocument()&&(F.setReadTime(c.commitVersion),h.addEntry(F)))})}),_.next(()=>B.mutationQueue.removeMutationBatch(u,C))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(B){let u=oe();for(let c=0;c<B.mutationResults.length;++c)B.mutationResults[c].transformResults.length>0&&(u=u.add(B.batch.mutations[c].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Cd(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.V_.getLastRemoteSnapshotVersion(t))}function II(n,e){const t=re(n),r=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const B=[];e.targetChanges.forEach((h,C)=>{const p=s.get(C);if(!p)return;B.push(t.V_.removeMatchingKeys(i,h.removedDocuments,C).next(()=>t.V_.addMatchingKeys(i,h.addedDocuments,C)));let _=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(C)!==null?_=_.withResumeToken(Ve.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(C,_),function(F,M,j){return F.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=EI?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(p,_,h)&&B.push(t.V_.updateTargetData(i,_))});let u=ct(),c=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),B.push(yI(i,o,e.documentUpdates).next(h=>{u=h.Ko,c=h.Qo})),!r.isEqual(ne.min())){const h=t.V_.getLastRemoteSnapshotVersion(i).next(C=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,r));B.push(h)}return V.waitFor(B).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.Lo=s,i))}function yI(n,e,t){let r=oe(),s=oe();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=ct();return t.forEach((B,u)=>{const c=i.get(B);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(B)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(B,u.readTime),o=o.insert(B,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(B,u)):K(bu,"Ignoring outdated watch update for ",B,". Current version:",c.version," Watch version:",u.version)}),{Ko:o,Qo:s}})}function TI(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ru),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AI(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.V_.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.V_.allocateTargetId(r).next(o=>(s=new en(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.V_.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Lo.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(r.targetId,r),t.Bo.set(e,r.targetId)),r})}async function GB(n,e,t){const r=re(n),s=r.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!rs(o))throw o;K(bu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Lo=r.Lo.remove(e),r.Bo.delete(s.target)}function Ph(n,e,t){const r=re(n);let s=ne.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const C=re(u),p=C.Bo.get(h);return p!==void 0?V.resolve(C.Lo.get(p)):C.V_.getTargetData(c,h)}(r,o,Ge(e)?e:Jt(e)).next(B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,r.V_.getMatchingKeysForTargetId(o,B.targetId).next(u=>{i=u})}).next(()=>r.No.getDocumentsMatchingQuery(o,e,t?s:ne.min(),t?i:oe())).next(B=>(RI(r,B),{documents:B,Wo:i})))}function RI(n,e){e.forEach((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Uo.get(s)||ne.min();r.readTime.compareTo(i)>0&&n.Uo.set(s,r.readTime)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve())))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(un(t),this.Xo=!1):K("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="RemoteStore";class PI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new Yn(1e3),this.ca=new Yn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe(o=>{r.enqueueAndForget(async()=>{br(this)&&(K(Wt,"Restarting streams for network reachability change."),await async function(u){const c=re(u);c.la.add(4),await Ri(c),c.Ta.set("Unknown"),c.la.delete(4),await ma(c)}(this))})}),this.Ta=new vI(r,s)}}async function ma(n){if(br(n))for(const e of n.Ea)await e(!0)}async function Ri(n){for(const e of n.Ea)await e(!1)}function UB(n,e){return n.oa.get(e)||void 0}function dd(n,e){const t=re(n),r=UB(t,e.targetId);if(r!==void 0&&t._a.has(r))return;const s=function(B,u){const c=UB(B,u);c!==void 0&&B.aa.delete(c);const h=function(p,_){return _%2!=0?p.ca.next():p.ua.next()}(B,u);return B.oa.set(u,h),B.aa.set(h,u),h}(t,e.targetId);K(Wt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new en(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),Fu(t)?Nu(t):Bs(t).Yt()&&Ou(t,i)}function Su(n,e){const t=re(n),r=Bs(t),s=UB(t,e);K(Wt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),r.Yt()&&pd(t,s),t._a.size===0&&(r.Yt()?r.en():br(t)&&t.Ta.set("Unknown"))}function Ou(n,e){if(n.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.aa.get(e.targetId);if(t===void 0)return void K(Wt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Bs(n).Pn(e)}function pd(n,e){n.Pa.J(e),Bs(n).In(e)}function Nu(n){n.Pa=new w_({getRemoteKeysForTarget:e=>{const t=n.aa.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):oe()},ye:e=>n._a.get(e)||null,Ve:()=>n.datastore.serializer.databaseId}),Bs(n).start(),n.Ta.ea()}function Fu(n){return br(n)&&!Bs(n).Jt()&&n._a.size>0}function br(n){return re(n).la.size===0}function gd(n){n.Pa=void 0}async function bI(n){n.Ta.set("Online")}async function SI(n){n._a.forEach((e,t)=>{Ou(n,e)})}async function OI(n,e){gd(n),Fu(n)?(n.Ta.ra(e),Nu(n)):n.Ta.set("Unknown")}async function NI(n,e,t){if(n.Ta.set("Online"),e instanceof IC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s._a.has(B)){const u=s.aa.get(B);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.oa.delete(u),s.aa.delete(B)),s._a.delete(B)}s.Pa.removeTarget(B)}}(n,e)}catch(r){K(Wt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ko(n,r)}else if(e instanceof ho?n.Pa._e(e):e instanceof wC?n.Pa.he(e):n.Pa.ue(e),!t.isEqual(ne.min()))try{const r=await Cd(n.localStore);t.compareTo(r)>=0&&await function(i,o){const B=i.Pa.fe(o);B.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const C=i._a.get(h);C&&i._a.set(h,C.withResumeToken(c.resumeToken,o))}}),B.targetMismatches.forEach((c,h)=>{const C=i._a.get(c);if(!C)return;i._a.set(c,C.withResumeToken(Ve.EMPTY_BYTE_STRING,C.snapshotVersion)),pd(i,c);const p=new en(C.target,c,h,C.sequenceNumber);Ou(i,p)});const u=function(h,C){const p=new Map;C.targetChanges.forEach((I,F)=>{const M=h.aa.get(F);M!==void 0&&p.set(M,I)});let _=new Re(ae);return C.targetMismatches.forEach((I,F)=>{const M=h.aa.get(I);M!==void 0&&(_=_.insert(M,F))}),new yi(C.snapshotVersion,p,_,C.documentUpdates,C.augmentedDocumentUpdates,C.resolvedLimboDocuments)}(i,B);return i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){K(Wt,"Failed to raise snapshot:",r),await ko(n,r)}}async function ko(n,e,t){if(!rs(e))throw e;n.la.add(1),await Ri(n),n.Ta.set("Offline"),t||(t=()=>Cd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{K(Wt,"Retrying IndexedDB access"),await t(),n.la.delete(1),await ma(n)})}function md(n,e){return e().catch(t=>ko(n,t,e))}async function Ea(n){const e=re(n),t=Xn(e);let r=e.sa.length>0?e.sa[e.sa.length-1].batchId:ru;for(;FI(e);)try{const s=await TI(e.localStore,r);if(s===null){e.sa.length===0&&t.en();break}r=s.batchId,LI(e,s)}catch(s){await ko(e,s)}Ed(e)&&_d(e)}function FI(n){return br(n)&&n.sa.length<10}function LI(n,e){n.sa.push(e);const t=Xn(n);t.Yt()&&t.Rn&&t.An(e.mutations)}function Ed(n){return br(n)&&!Xn(n).Jt()&&n.sa.length>0}function _d(n){Xn(n).start()}async function kI(n){Xn(n).fn()}async function VI(n){const e=Xn(n);for(const t of n.sa)e.An(t.mutations)}async function xI(n,e,t){const r=n.sa.shift(),s=Au.from(r,e,t);await md(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ea(n)}async function MI(n,e){e&&Xn(n).Rn&&await async function(r,s){if(function(o){return C_(o)&&o!==k.ABORTED}(s.code)){const i=r.sa.shift();Xn(r).Xt(),await md(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ea(r)}}(n,e),Ed(n)&&_d(n)}async function bh(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),K(Wt,"RemoteStore received new credentials");const r=br(t);t.la.add(3),await Ri(t),r&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await ma(t)}async function GI(n,e){const t=re(n);e?(t.la.delete(2),await ma(t)):e||(t.la.add(2),await Ri(t),t.Ta.set("Unknown"))}function Bs(n){return n.Ia||(n.Ia=function(t,r,s){const i=re(t);return i.pn(),new X_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ct:bI.bind(null,n),Et:SI.bind(null,n),Tt:OI.bind(null,n),Tn:NI.bind(null,n)}),n.Ea.push(async e=>{e?(n.Ia.Xt(),Fu(n)?Nu(n):n.Ta.set("Unknown")):(await n.Ia.stop(),gd(n))})),n.Ia}function Xn(n){return n.Ra||(n.Ra=function(t,r,s){const i=re(t);return i.pn(),new Z_(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{ct:()=>Promise.resolve(),Et:kI.bind(null,n),Tt:MI.bind(null,n),Vn:VI.bind(null,n),dn:xI.bind(null,n)}),n.Ea.push(async e=>{e?(n.Ra.Xt(),await Ea(n)):(await n.Ra.stop(),n.sa.length>0&&(K(Wt,`Stopping write stream with ${n.sa.length} pending writes`),n.sa=[]))})),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,B=new ku(e,t,o,s,i);return B.start(r),B}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vu(n,e){if(un("AsyncQueue",`${e}: ${n}`),rs(n))return new J(k.UNAVAILABLE,`${e}: ${n}`);throw n}class Sh{constructor(){this.activeTargetIds=E_()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UI{constructor(){this.fu=new Sh,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,r){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new Sh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function hB(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{static emptySet(e){return new gr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||$.comparator(t.key,r.key):(t,r)=>$.comparator(t.key,r.key),this.keyedMap=Gr(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(){this.pu=new Re($.comparator)}track(e){const t=e.doc.key,r=this.pu.get(t);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(t,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(t):e.type===1&&r.type===2?this.pu=this.pu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):X(63341,{we:e,gu:r}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Xr{constructor(e,t,r,s,i,o,B,u,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(B=>{o.push({type:0,doc:B})}),new Xr(e,t,gr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some(e=>e.vu())}}class JI{constructor(){this.queries=Nh(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,r){const s=re(t),i=s.queries;s.queries=Nh(),i.forEach((o,B)=>{for(const u of B.bu)u.onError(r)})})(this,new J(k.ABORTED,"Firestore shutting down"))}}function Nh(){return new vr(n=>ad(n),pa)}async function xu(n,e){const t=re(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(r=2):(i=new HI,r=e.vu()?0:1);try{switch(r){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=Vu(o,`Initialization of query '${Ge(e.query)?sn(e.query):Us(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&Gu(t)}async function Mu(n,e){const t=re(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function qI(n,e){const t=re(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.bu)B.Cu(s)&&(r=!0);o.wu=s}}r&&Gu(t)}function jI(n,e,t){const r=re(n),s=r.queries.get(e);if(s)for(const i of s.bu)i.onError(t);r.queries.delete(e)}function Gu(n){n.Du.forEach(e=>{e.next()})}var HB;(function(n){n.Default="default",n.Cache="cache"})(HB||(HB={}));class Uu{constructor(e,t,r){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=r||{}}Cu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==HB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.key=e}}class wd{constructor(e){this.key=e}}class KI{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=oe(),this.mutatedKeys=oe(),this.Ju=Ge(e)?MB(e):Bu(e),this.Yu=new gr(this.Ju)}get Zu(){return this.zu}Xu(e,t){const r=t?t.ec:new Oh,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[u,c]=this.tc(this.query,s);e.inorderTraversal((C,p)=>{const _=s.get(C),I=rI(this.query,p)?p:null,F=!!_&&this.mutatedKeys.has(_.key),M=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let j=!1;_&&I?_.data.isEqual(I.data)?F!==M&&(r.track({type:3,doc:I}),j=!0):this.nc(_,I)||(r.track({type:2,doc:I}),j=!0,(u&&this.Ju(I,u)>0||c&&this.Ju(I,c)<0)&&(B=!0)):!_&&I?(r.track({type:0,doc:I}),j=!0):_&&!I&&(r.track({type:1,doc:_}),j=!0,(u||c)&&(B=!0)),j&&(I?(o=o.add(I),i=M?i.add(C):i.delete(C)):(o=o.delete(C),i=i.delete(C)))});const h=this.rc(this.query);if(h)if(Ge(this.query)){const C=[];o.forEach(I=>C.push(I));const p=ld(this.query,C);let _=new gr(MB(this.query));for(const I of p)_=_.add(I);o.forEach(I=>{_.has(I.key)||(i=i.delete(I.key),r.track({type:1,doc:I}))}),o=_}else{const C=this.sc(this.query);for(;o.size>h;){const p=C==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}}return{Yu:o,ec:r,Oo:B,mutatedKeys:i}}rc(e){var t;return Ge(e)?(t=lB(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(Ge(e)){const t=lB(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var r;if(Ge(e)){const s=(r=lB(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort((h,C)=>function(_,I){const F=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{we:M})}};return F(_)-F(I)}(h.type,C.type)||this.Ju(h.doc,C.doc)),this._c(r),s=s??!1;const B=t&&!s?this.oc():[],u=this.Hu.size===0&&this.current&&!s?1:0,c=u!==this.ju;return this.ju=u,o.length!==0||c?{snapshot:new Xr(this.query,e.Yu,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ac:B}:{ac:B}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new Oh,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach(t=>this.zu=this.zu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.zu=this.zu.delete(t)),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=oe(),this.Yu.forEach(r=>{this.uc(r.key)&&(this.Hu=this.Hu.add(r.key))});const t=[];return e.forEach(r=>{this.Hu.has(r)||t.push(new wd(r))}),this.Hu.forEach(r=>{e.has(r)||t.push(new Dd(r))}),t}cc(e){this.zu=e.Wo,this.Hu=oe();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return Xr.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Hu="SyncEngine";class zI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class QI{constructor(e){this.key=e,this.Ec=!1}}class WI{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new vr(B=>ad(B),pa),this.Pc=new Map,this.Ic=new Set,this.Rc=new Re($.comparator),this.Ac=new Map,this.Vc=new Ru,this.dc={},this.fc=new Map,this.mc=Yn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function $I(n,e,t=!0){const r=vd(n);let s;const i=r.Tc.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await Id(r,e,t,!0),s}async function YI(n,e){const t=vd(n);await Id(t,e,!0,!1)}async function Id(n,e,t,r){const s=await AI(n.localStore,Ge(e)?e:Jt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let B;return r&&(B=await XI(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&dd(n.remoteStore,s),B}async function XI(n,e,t,r,s){n.yc=(C,p,_)=>async function(F,M,j,te){let se=M.view.Xu(j);se.Oo&&(se=await Ph(F.localStore,M.query,!1).then(({documents:R})=>M.view.Xu(R,se)));const Be=te&&te.targetChanges.get(M.targetId),we=te&&te.targetMismatches.get(M.targetId)!=null,de=M.view.applyChanges(se,F.isPrimaryClient,Be,we);return Lh(F,M.targetId,de.ac),de.snapshot}(n,C,p,_);const i=await Ph(n.localStore,e,!0),o=new KI(e,i.Wo),B=o.Xu(i.documents),u=Ti.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),c=o.applyChanges(B,n.isPrimaryClient,u);Lh(n,t,c.ac);const h=new zI(e,t,o);return n.Tc.set(e,h),n.Pc.has(t)?n.Pc.get(t).push(e):n.Pc.set(t,[e]),c.snapshot}async function ZI(n,e,t){const r=re(n),s=r.Tc.get(e),i=r.Pc.get(s.targetId);if(i.length>1)return r.Pc.set(s.targetId,i.filter(o=>!pa(o,e))),void r.Tc.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await GB(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Su(r.remoteStore,s.targetId),JB(r,s.targetId)}).catch(ns)):(JB(r,s.targetId),await GB(r.localStore,s.targetId,!0))}async function ey(n,e){const t=re(n),r=t.Tc.get(e),s=t.Pc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Su(t.remoteStore,r.targetId))}async function ty(n,e,t){const r=By(n);try{const s=await function(o,B){const u=re(o),c=pe.now(),h=B.reduce((_,I)=>_.add(I.key),oe());let C,p;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let I=ct(),F=oe();return u.ko.getEntries(_,h).next(M=>{I=M,I.forEach((j,te)=>{te.isValidDocument()||(F=F.add(j))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,I)).next(M=>{C=M;const j=[];for(const te of B){const se=KE(te,C.get(te.key).overlayedDocument);se!=null&&j.push(new tr(te.key,se,tC(se.value.mapValue),vt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,j,B)}).next(M=>{p=M;const j=M.applyToLocalDocumentSet(C,F);return u.documentOverlayCache.saveOverlays(_,M.batchId,j)})}).then(()=>({batchId:p.batchId,changes:_C(C)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,B,u){let c=o.dc[o.currentUser.toKey()];c||(c=new Re(ae)),c=c.insert(B,u),o.dc[o.currentUser.toKey()]=c}(r,s.batchId,t),await vi(r,s.changes),await Ea(r.remoteStore)}catch(s){const i=Vu(s,"Failed to persist write");t.reject(i)}}async function yd(n,e){const t=re(n);try{const r=await II(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ac.get(i);o&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Ec=!0:s.modifiedDocuments.size>0?Q(o.Ec,14607):s.removedDocuments.size>0&&(Q(o.Ec,42227),o.Ec=!1))}),await vi(t,r,e)}catch(r){await ns(r)}}function Fh(n,e,t){const r=re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tc.forEach((i,o)=>{const B=o.view.xu(e);B.snapshot&&s.push(B.snapshot)}),function(o,B){const u=re(o);u.onlineState=B;let c=!1;u.queries.forEach((h,C)=>{for(const p of C.bu)p.xu(B)&&(c=!0)}),c&&Gu(u)}(r.eventManager,e),s.length&&r.hc.Tn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ny(n,e,t){const r=re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ac.get(e),i=s&&s.key;if(i){let o=new Re($.comparator);o=o.insert(i,We.newNoDocument(i,ne.min()));const B=oe().add(i),u=new yi(ne.min(),new Map,new Re(ae),o,ct(),B);await yd(r,u),r.Rc=r.Rc.remove(i),r.Ac.delete(e),Ju(r)}else await GB(r.localStore,e,!1).then(()=>JB(r,e,t)).catch(ns)}async function ry(n,e){const t=re(n),r=e.batch.batchId;try{const s=await wI(t.localStore,e);Ad(t,r,null),Td(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await vi(t,s)}catch(s){await ns(s)}}async function sy(n,e,t){const r=re(n);try{const s=await function(o,B){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,B).next(C=>(Q(C!==null,37113),h=C.keys(),u.mutationQueue.removeMutationBatch(c,C))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,B)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);Ad(r,e,t),Td(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await vi(r,s)}catch(s){await ns(s)}}function Td(n,e){(n.fc.get(e)||[]).forEach(t=>{t.resolve()}),n.fc.delete(e)}function Ad(n,e,t){const r=re(n);let s=r.dc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.dc[r.currentUser.toKey()]=s}}function JB(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Pc.get(e))n.Tc.delete(r),t&&n.hc.wc(r,t);n.Pc.delete(e),n.isPrimaryClient&&n.Vc.e_(e).forEach(r=>{n.Vc.containsKey(r)||Rd(n,r)})}function Rd(n,e){n.Ic.delete(e.path.canonicalString());const t=n.Rc.get(e);t!==null&&(Su(n.remoteStore,t),n.Rc=n.Rc.remove(e),n.Ac.delete(t),Ju(n))}function Lh(n,e,t){for(const r of t)r instanceof Dd?(n.Vc.addReference(r.key,e),iy(n,r)):r instanceof wd?(K(Hu,"Document no longer in limbo: "+r.key),n.Vc.removeReference(r.key,e),n.Vc.containsKey(r.key)||Rd(n,r.key)):X(19791,{bc:r})}function iy(n,e){const t=e.key,r=t.path.canonicalString();n.Rc.get(t)||n.Ic.has(r)||(K(Hu,"New document in limbo: "+t),n.Ic.add(r),Ju(n))}function Ju(n){for(;n.Ic.size>0&&n.Rc.size<n.maxConcurrentLimboResolutions;){const e=n.Ic.values().next().value;n.Ic.delete(e);const t=new $(Ce.fromString(e)),r=n.mc.next();n.Ac.set(r,new QI(t)),n.Rc=n.Rc.insert(t,r),dd(n.remoteStore,new en(Jt(na(t.path)),r,"TargetPurposeLimboResolution",aa.wn))}}async function vi(n,e,t){const r=re(n),s=[],i=[],o=[];r.Tc.isEmpty()||(r.Tc.forEach((B,u)=>{o.push(r.yc(u,e,t).then(c=>{var h;if((c||t)&&r.isPrimaryClient){const C=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,C?"current":"not-current")}if(c){s.push(c);const C=Pu.mo(u.targetId,c);i.push(C)}}))}),await Promise.all(o),r.hc.Tn(s),await async function(u,c){const h=re(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>V.forEach(c,p=>V.forEach(p.Vo,_=>h.persistence.referenceDelegate.addReference(C,p.targetId,_)).next(()=>V.forEach(p.fo,_=>h.persistence.referenceDelegate.removeReference(C,p.targetId,_)))))}catch(C){if(!rs(C))throw C;K(bu,"Failed to update sequence numbers: "+C)}for(const C of c){const p=C.targetId;if(!C.fromCache){const _=h.Lo.get(p),I=_.snapshotVersion,F=_.withLastLimboFreeSnapshotVersion(I);h.Lo=h.Lo.insert(p,F)}}}(r.localStore,i))}async function oy(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){K(Hu,"User change. New user:",e.toKey());const r=await fd(t.localStore,e);t.currentUser=e,function(i,o){i.fc.forEach(B=>{B.forEach(u=>{u.reject(new J(k.CANCELLED,o))})}),i.fc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vi(t,r.$o)}}function ay(n,e){const t=re(n),r=t.Ac.get(e);if(r&&r.Ec)return oe().add(r.key);{let s=oe();const i=t.Pc.get(e);if(!i)return s;for(const o of i??[]){const B=t.Tc.get(o);s=s.unionWith(B.view.Zu)}return s}}function vd(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ay.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ny.bind(null,e),e.hc.Tn=qI.bind(null,e.eventManager),e.hc.wc=jI.bind(null,e.eventManager),e}function By(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ry.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sy.bind(null,e),e}class Vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sa(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return DI(this.persistence,new mI,e.initialUser,this.serializer)}Dc(e){return new hd(vu.b_,this.serializer)}vc(e){return new UI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vo.provider={build:()=>new Vo};class uy extends Vo{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){Q(this.persistence.referenceDelegate instanceof Lo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cD(r,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new hd(r=>Lo.b_(r,t),this.serializer)}}class qB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oy.bind(null,this.syncEngine),await GI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new JI}()}createDatastore(e){const t=sa(e.databaseInfo.databaseId),r=Y_(e.databaseInfo);return nD(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,B){return new PI(r,s,i,o,B)}(this.localStore,this.datastore,e.asyncQueue,t=>Fh(this.syncEngine,t,0),function(){return mh.Ye()?new mh:new z_}())}createSyncEngine(e,t){return function(s,i,o,B,u,c,h){const C=new WI(s,i,o,B,u,c);return h&&(C.gc=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=re(s);K(Wt,"RemoteStore shutting down."),i.la.add(5),await Ri(i),i.ha.shutdown(),i.Ta.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}qB.provider={build:()=>new qB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="FirestoreClient";class cy{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(Zn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(Zn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fB(n,e){n.asyncQueue.verifyOperationInProgress(),K(Zn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ly(n);K(Zn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>bh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>bh(e.remoteStore,s)),n._onlineComponents=e}async function ly(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(Zn,"Using user provided OfflineComponentProvider");try{await fB(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Nt("Error using user provided cache. Falling back to memory cache: "+t),await fB(n,new Vo)}}else K(Zn,"Using default OfflineComponentProvider"),await fB(n,new uy(void 0));return n._offlineComponents}async function Pd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(Zn,"Using user provided OnlineComponentProvider"),await kh(n,n._uninitializedComponentsProvider._online)):(K(Zn,"Using default OnlineComponentProvider"),await kh(n,new qB))),n._onlineComponents}function hy(n){return Pd(n).then(e=>e.syncEngine)}async function xo(n){const e=await Pd(n),t=e.eventManager;return t.onListen=$I.bind(null,e.syncEngine),t.onUnlisten=ZI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ey.bind(null,e.syncEngine),t}function fy(n,e,t,r){const s=new Lu(r),i=new Uu(e,s,t);return n.asyncQueue.enqueueAndForget(async()=>xu(await xo(n),i)),()=>{s.Va(),n.asyncQueue.enqueueAndForget(async()=>Mu(await xo(n),i))}}function Cy(n,e,t={}){const r=new rn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,B,u,c){const h=new Lu({next:p=>{h.Va(),o.enqueueAndForget(()=>Mu(i,C));const _=p.docs.has(B);!_&&p.fromCache?c.reject(new J(k.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&u&&u.source==="server"?c.reject(new J(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),C=new Uu(na(B.path),h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return xu(i,C)}(await xo(n),n.asyncQueue,e,t,r)),r.promise}function dy(n,e,t={}){const r=new rn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,B,u,c){const h=new Lu({next:p=>{h.Va(),o.enqueueAndForget(()=>Mu(i,C)),p.fromCache&&u.source==="server"?c.reject(new J(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),C=new Uu(B instanceof qs?Qw(B):B,h,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return xu(i,C)}(await xo(n),n.asyncQueue,e,t,r)),r.promise}function py(n,e){const t=new rn;return n.asyncQueue.enqueueAndForget(async()=>ty(await hy(n),e,t)),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bd=class{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Qn("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},gy=class extends bd{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{convertValue(e,t="none"){switch(xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return er(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Zs].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ve(o.doubleValue));return new ft(t)}convertGeoPoint(e){return new jt(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=wi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Qr(e));default:return null}}convertTimestamp(e){const t=Jn(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);Q(bC(r),9688,{name:e});const s=new Ys(r.get(1),r.get(3)),i=new $(r.popFirst(5));return s.isEqual(t)||un(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="AsyncQueue";class xh{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new LC(this,"async_queue_retry"),this.Hc=()=>{const r=hB();r&&K(Vh,"Visibility state changed to "+r.visibilityState),this.Ht.$t()},this.Jc=e;const t=hB();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=hB();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise(()=>{});const t=new rn;return this.Zc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.$c.push(e),this.Xc()))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!rs(e))throw e;K(Vh,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt(()=>this.Xc())}}Zc(e){const t=this.Jc.then(()=>(this.Gc=!0,e().catch(r=>{throw this.Wc=r,this.Gc=!1,un("INTERNAL UNHANDLED ERROR: ",Mh(r)),r}).then(r=>(this.Gc=!1,r))));return this.Jc=t,t}enqueueAfterDelay(e,t,r){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=ku.createAndSchedule(this,e,t,r,i=>this.el(i));return this.Qc.push(s),s}Yc(){this.Wc&&X(47125,{tl:Mh(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then(()=>{this.Qc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()})}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function Mh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ln extends Ba{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new xh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xh(e),this._firestoreClient=void 0,await e}}}function dv(n,e){const t=typeof n=="object"?n:Wo(),r=typeof n=="string"?n:To,s=mi(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$B("firestore");i&&fD(s,...i)}return s}function _a(n){if(n._terminated)throw new J(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ey(n),n._firestoreClient}function Ey(n){var r,s,i,o;const e=n._freezeSettings(),t=sD(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new cy(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu extends my{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}}class ks{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mr extends bd{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Qn("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=mr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",mr._jsonSchema={type:Le("string",mr._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class po extends mr{data(e={}){return super.data(e)}}class Er{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new po(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(B=>{Ge(s._snapshot.query)?MB(s._snapshot.query):Bu(s.query._query);const u=new po(s._firestore,s._userDataWriter,B.doc.key,B.doc,new ks(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(B=>i||B.type!==3).map(B=>{const u=new po(s._firestore,s._userDataWriter,B.doc.key,B.doc,new ks(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return B.type!==0&&(c=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:_y(B.type),doc:u,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _y(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er._jsonSchemaVersion="firestore/querySnapshot/1.0",Er._jsonSchema={type:Le("string",Er._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ju{}class Ku extends ju{}function pv(n,e,...t){let r=[];e instanceof ju&&r.push(e),r=r.concat(t),function(i){const o=i.filter(u=>u instanceof zu).length,B=i.filter(u=>u instanceof Da).length;if(o>1||o>0&&B>0)throw new J(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Da extends Ku{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Da(e,t,r)}_apply(e){const t=this._parse(e);return Nd(e._query,t),new pn(e.firestore,e.converter,NB(e._query,t))}_parse(e){const t=ua(e.firestore);return function(i,o,B,u,c,h,C){let p;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new J(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Uh(C,h);const I=[];for(const F of C)I.push(Gh(u,i,F));p={arrayValue:{values:I}}}else p=Gh(u,i,C)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Uh(C,h),p=_D(B,o,C,h==="in"||h==="not-in");return Fe.create(c,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function gv(n,e,t){const r=e,s=Qn("where",n);return Da._create(s,r,t)}class zu extends ju{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new zu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ft.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const B=i.getFlattenedFilters();for(const u of B)Nd(o,u),o=NB(o,u)}(e._query,t),new pn(e.firestore,e.converter,NB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qu extends Ku{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qu(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new J(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ii(i,o)}(e._query,this._field,this._direction);return new pn(e.firestore,e.converter,c_(e._query,t))}}function mv(n,e="asc"){const t=e,r=Qn("orderBy",n);return Qu._create(r,t)}class Wu extends Ku{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Wu(e,t,r)}_apply(e){return new pn(e.firestore,e.converter,So(e._query,this._limit,this._limitType))}}function Ev(n){return OE("limit",n),Wu._create("limit",n,"F")}function Gh(n,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new J(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gC(e)&&t.indexOf("/")!==-1)throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ce.fromString(t));if(!$.isDocumentKey(r))throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nh(n,new $(r))}if(t instanceof Pe)return nh(n,t._key);throw new J(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$o(t)}.`)}function Uh(n,e){if(!Array.isArray(n)||n.length===0)throw new J(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Nd(n,e){const t=function(s,i){for(const o of s)for(const B of o.getFlattenedFilters())if(i.indexOf(B.op)>=0)return B.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new J(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n){n=ht(n,Pe);const e=ht(n.firestore,ln),t=_a(e);return Cy(t,n._key).then(r=>Fd(e,n,r))}function Dv(n){n=ht(n,pn);const e=ht(n.firestore,ln),t=_a(e),r=new qu(e);return Od(n._query),dy(t,n._query).then(s=>new Er(e,r,n,s))}function wv(n,e,t){n=ht(n,Pe);const r=ht(n.firestore,ln),s=Sd(n.converter,e),i=ua(r);return wa(r,[UC(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,vt.none())])}function Iv(n,e,t,...r){n=ht(n,Pe);const s=ht(n.firestore,ln),i=ua(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof ia?ED(i,"updateDoc",n._key,e,t,r):mD(i,"updateDoc",n._key,e),wa(s,[o.toMutation(n._key,vt.exists(!0))])}function yv(n){return wa(ht(n.firestore,ln),[new au(n._key,vt.none())])}function Tv(n,e){const t=ht(n.firestore,ln),r=CD(n),s=Sd(n.converter,e),i=ua(n.firestore);return wa(t,[UC(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,vt.exists(!1))]).then(()=>r)}function Av(n,...e){var c,h,C;n=_e(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Hh(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Hh(e[r])){const p=e[r];e[r]=(c=p.next)==null?void 0:c.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(C=p.complete)==null?void 0:C.bind(p)}let i,o,B;if(n instanceof Pe)o=ht(n.firestore,ln),B=na(n._key.path),i={next:p=>{e[r]&&e[r](Fd(o,n,p))},error:e[r+1],complete:e[r+2]};else{const p=ht(n,pn);o=ht(p.firestore,ln),B=p._query;const _=new qu(o);i={next:I=>{e[r]&&e[r](new Er(o,_,p,I))},error:e[r+1],complete:e[r+2]},Od(n._query)}const u=_a(o);return fy(u,B,s,i)}function wa(n,e){const t=_a(n);return py(t,e)}function Fd(n,e,t){const r=t.docs.get(e._key),s=new qu(n);return new mr(n,s,e._key,r,new ks(t.hasPendingWrites,t.fromCache),e.converter)}const Jh="@firebase/firestore",qh="4.17.2";(function(e,t=!0){TE(Rr),Hn(new an("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),B=new ln(new J_(r.getProvider("auth-internal")),new K_(o,r.getProvider("app-check-internal")),LE(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B},"PUBLIC").setMultipleInstances(!0)),Rt(Jh,qh,e),Rt(Jh,qh,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="type.googleapis.com/google.protobuf.Int64Value",wy="type.googleapis.com/google.protobuf.UInt64Value";function Ld(n,e){const t={};for(const r in n)n.hasOwnProperty(r)&&(t[r]=e(n[r]));return t}function Mo(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Mo(e));if(typeof n=="function"||typeof n=="object")return Ld(n,e=>Mo(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Zr(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case Dy:case wy:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Zr(e)):typeof n=="function"||typeof n=="object"?Ld(n,e=>Zr(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends Lt{constructor(e,t,r,s){super(`${$u}/${e}`,t||"",s!=null?{url:s}:void 0),this.details=r,Object.setPrototypeOf(this,lt.prototype)}}function Iy(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Go(n,e,t){let r=Iy(n),s=r,i;try{const o=e&&e.error;if(o){const B=o.status;if(typeof B=="string"){if(!jh[B])return new lt("internal",`Unknown backend error status: ${B} [${n}]`,void 0,t);r=jh[B],s=`Backend error status: ${B}`}const u=o.message;typeof u=="string"&&(s=u),i=o.details,i!==void 0&&(i=Zr(i))}}catch{}return r==="ok"?null:new lt(r,`${s} [${n}]`,i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,$e(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jB="us-central1",Ty=/^data: (.*?)(?:\n|$)/;function Ay(n){let e=null;return{promise:new Promise((t,r)=>{e=setTimeout(()=>{r(new lt("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class Ry{constructor(e,t,r,s,i=jB,o=(...B)=>fetch(...B)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new yy(e,t,r,s),this.cancelAllRequests=new Promise(B=>{this.deleteService=()=>Promise.resolve(B())});try{const B=new URL(i);this.customDomain=B.origin+(B.pathname==="/"?"":B.pathname),this.region=jB}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function vy(n,e,t){const r=dn(e);n.emulatorOrigin=`http${r?"s":""}://${e}:${t}`,r&&Qo(n.emulatorOrigin+"/backends")}function Py(n,e,t){const r=s=>Sy(n,e,s,{});return r.stream=(s,i)=>Ny(n,e,s,i),r}function kd(n){return n.emulatorOrigin&&dn(n.emulatorOrigin)?"include":void 0}async function by(n,e,t,r,s){t["Content-Type"]="application/json";let i;try{i=await r(n,{method:"POST",body:JSON.stringify(e),headers:t,credentials:kd(s)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function Vd(n,e){const t={},r=await n.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(t.Authorization="Bearer "+r.authToken),r.messagingToken&&(t["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=r.appCheckToken),t}function Sy(n,e,t,r){const s=n._url(e);return Oy(n,s,t,r)}async function Oy(n,e,t,r){t=Mo(t);const s={data:t},i=await Vd(n,r),o=r.timeout||7e4,B=Ay(o),u=await Promise.race([by(e,s,i,n.fetchImpl,n),B.promise,n.cancelAllRequests]);if(B.cancel(),!u)throw new lt("cancelled","Firebase Functions instance was deleted.");const c=Go(u.status,u.json,e);if(c)throw c;if(!u.json)throw new lt("internal","Response is not valid JSON object.",void 0,e);let h=u.json.data;if(typeof h>"u"&&(h=u.json.result),typeof h>"u")throw new lt("internal","Response is missing data field.",void 0,e);return{data:Zr(h)}}function Ny(n,e,t,r){const s=n._url(e);return Fy(n,s,t,r||{})}async function Fy(n,e,t,r){var p;t=Mo(t);const s={data:t},i=await Vd(n,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await n.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal,credentials:kd(n)})}catch(_){if(_ instanceof Error&&_.name==="AbortError"){const F=new lt("cancelled","Request was cancelled.");return{data:Promise.reject(F),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(F)}}}}}}const I=Go(0,null,e);return{data:Promise.reject(I),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(I)}}}}}}let B,u;const c=new Promise((_,I)=>{B=_,u=I});(p=r==null?void 0:r.signal)==null||p.addEventListener("abort",()=>{const _=new lt("cancelled","Request was cancelled.");u(_)});const h=o.body.getReader(),C=Ly(h,B,u,r==null?void 0:r.signal,e);return{stream:{[Symbol.asyncIterator](){const _=C.getReader();return{async next(){const{value:I,done:F}=await _.read();return{value:I,done:F}},async return(){return await _.cancel(),{done:!0,value:void 0}}}}},data:c}}function Ly(n,e,t,r,s){const i=(B,u)=>{const c=B.match(Ty);if(!c)return;const h=c[1];try{const C=JSON.parse(h);if("result"in C){e(Zr(C.result));return}if("message"in C){u.enqueue(Zr(C.message));return}if("error"in C){const p=Go(0,C,s);u.error(p),t(p);return}}catch(C){if(C instanceof lt){u.error(C),t(C);return}}},o=new TextDecoder;return new ReadableStream({start(B){let u="";return c();async function c(){if(r!=null&&r.aborted){const h=new lt("cancelled","Request was cancelled");return B.error(h),t(h),Promise.resolve()}try{const{value:h,done:C}=await n.read();if(C){u.trim()&&i(u.trim(),B),B.close();return}if(r!=null&&r.aborted){const _=new lt("cancelled","Request was cancelled");B.error(_),t(_),await n.cancel();return}u+=o.decode(h,{stream:!0});const p=u.split(`
`);u=p.pop()||"";for(const _ of p)_.trim()&&i(_.trim(),B);return c()}catch(h){const C=h instanceof lt?h:Go(0,null,s);B.error(C),t(C)}}},cancel(){return n.cancel()}})}const Kh="@firebase/functions",zh="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="auth-internal",Vy="app-check-internal",xy="messaging-internal";function My(n){const e=(t,{instanceIdentifier:r})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider(ky),o=t.getProvider(xy),B=t.getProvider(Vy);return new Ry(s,i,o,B,r)};Hn(new an($u,e,"PUBLIC").setMultipleInstances(!0)),Rt(Kh,zh,n),Rt(Kh,zh,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(n=Wo(),e=jB){const r=mi(_e(n),$u).getImmediate({identifier:e}),s=$B("functions");return s&&Gy(r,...s),r}function Gy(n,e,t){vy(_e(n),e,t)}function vv(n,e,t){return Py(_e(n),e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */My();var Uy="firebase",Hy="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt(Uy,Hy,"app");function xd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jy=xd,Md=new pi("auth","Firebase",xd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new YB("@firebase/auth");function go(n,...e){Uo.logLevel<=ue.WARN&&Uo.warn(`Auth (${Rr}): ${n}`,...e)}function mo(n,...e){Uo.logLevel<=ue.ERROR&&Uo.error(`Auth (${Rr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n,...e){throw Yu(n,...e)}function Ot(n,...e){return Yu(n,...e)}function Ia(n,e,t){const r={...Jy(),[e]:t};return new pi("auth","Firebase",r).create(e,{appName:n.name})}function Kt(n){return Ia(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gd(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(n,"argument-error"),Ia(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Md.create(n,...e)}function Z(n,e,...t){if(!n)throw Yu(e,...t)}function tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mo(e),new Error(e)}function hn(n,e){n||tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KB(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function qy(){return Qh()==="http:"||Qh()==="https:"}function Qh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qy()||Sg()||"connection"in navigator)?navigator.onLine:!0}function Ky(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){this.shortDelay=e,this.longDelay=t,hn(t>e,"Short delay should be less than long delay!"),this.isMobile=vg()||Og()}get(){return jy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n,e){hn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wy=new Pi(3e4,6e4);function nr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function rr(n,e,t,r,s={}){return Hd(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const B=gi({...o,key:n.config.apiKey}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:u,...i};return bg()||(c.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&dn(n.emulatorConfig.host)&&(c.credentials="include"),Ud.fetch()(await Jd(n,n.config.apiHost,t,B),c)})}async function Hd(n,e,t){n._canInitEmulator=!1;const r={...zy,...e};try{const s=new Yy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw oo(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[u,c]=B.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw oo(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw oo(n,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ia(n,h,c);bt(n,h)}}catch(s){if(s instanceof Lt)throw s;bt(n,"network-request-failed",{message:String(s)})}}async function bi(n,e,t,r,s={}){const i=await rr(n,e,t,r,s);return"mfaPendingCredential"in i&&bt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Xu(n.config,s):`${n.config.apiScheme}://${s}`;return Qy.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function $y(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),Wy.get())})}}function oo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ot(n,e,r);return s.customData._tokenResponse=t,s}function Wh(n){return n!==void 0&&n.enterprise!==void 0}class Xy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return $y(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Zy(n,e){return rr(n,"GET","/v2/recaptchaConfig",nr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(n,e){return rr(n,"POST","/v1/accounts:delete",e)}async function Ho(n,e){return rr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tT(n,e=!1){const t=_e(n),r=await t.getIdToken(e),s=Zu(r);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ks(CB(s.auth_time)),issuedAtTime:Ks(CB(s.iat)),expirationTime:Ks(CB(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function CB(n){return Number(n)*1e3}function Zu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=If(t);return s?JSON.parse(s):(mo("Failed to decode base64 JWT payload"),null)}catch(s){return mo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $h(n){const e=Zu(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Lt&&nT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function nT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ks(this.lastLoginAt),this.creationTime=Ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(n){var C;const e=n.auth,t=await n.getIdToken(),r=await fi(n,Ho(e,{idToken:t}));Z(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(C=s.providerUserInfo)!=null&&C.length?qd(s.providerUserInfo):[],o=iT(n.providerData,i),B=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),c=B?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new zB(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function sT(n){const e=_e(n);await Ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(n,e){const t=await Hd(n,{},async()=>{const r=gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Jd(n,s,"/v1/token",`key=${i}`),B=await n._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:B,body:r};return n.emulatorConfig&&dn(n.emulatorConfig.host)&&(u.credentials="include"),Ud.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aT(n,e){return rr(n,"POST","/v2/accounts:revokeToken",nr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$h(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const t=$h(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await oT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new jr;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class St{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new rT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zB(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await fi(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tT(this,e)}reload(){return sT(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new St({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ci(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await fi(this,eT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,u=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:C,emailVerified:p,isAnonymous:_,providerData:I,stsTokenManager:F}=t;Z(C&&F,e,"internal-error");const M=jr.fromJSON(this.name,F);Z(typeof C=="string",e,"internal-error"),Tn(r,e.name),Tn(s,e.name),Z(typeof p=="boolean",e,"internal-error"),Z(typeof _=="boolean",e,"internal-error"),Tn(i,e.name),Tn(o,e.name),Tn(B,e.name),Tn(u,e.name),Tn(c,e.name),Tn(h,e.name);const j=new St({uid:C,auth:e,email:s,emailVerified:p,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:M,createdAt:c,lastLoginAt:h});return I&&Array.isArray(I)&&(j.providerData=I.map(te=>({...te}))),u&&(j._redirectEventId=u),j}static async _fromIdTokenResponse(e,t,r=!1){const s=new jr;s.updateFromServerResponse(t);const i=new St({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ci(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?qd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),B=new jr;B.updateFromIdToken(r);const u=new St({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zB(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Map;function nn(n){hn(n instanceof Function,"Expected a class definition");let e=Yh.get(n);return e?(hn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jd.type="NONE";const Xh=jd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class _r{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ho(this.auth,{idToken:e}).catch(()=>{});return t?St._fromGetAccountInfoResponse(this.auth,t,e):null}return St._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,r="authUser"){if(!t.length)return new _r(nn(Xh),e,r);const s=(await Promise.all(t.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c);let i=s[0]||nn(Xh);const o=Eo(r,e.config.apiKey,e.name);let B=null;for(const c of t)try{const h=await c._get(o);if(h){let C;if(typeof h=="string"){const p=await Ho(e,{idToken:h}).catch(()=>{});if(!p)break;C=await St._fromGetAccountInfoResponse(e,p,h)}else C=St._fromJSON(e,h);c!==i&&(B=C),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new _r(i,e,r):(i=u[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new _r(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yd(e))return"Blackberry";if(Xd(e))return"Webos";if(zd(e))return"Safari";if((e.includes("chrome/")||Qd(e))&&!e.includes("edge/"))return"Chrome";if($d(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kd(n=Ye()){return/firefox\//i.test(n)}function zd(n=Ye()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qd(n=Ye()){return/crios\//i.test(n)}function Wd(n=Ye()){return/iemobile/i.test(n)}function $d(n=Ye()){return/android/i.test(n)}function Yd(n=Ye()){return/blackberry/i.test(n)}function Xd(n=Ye()){return/webos/i.test(n)}function ec(n=Ye()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function BT(n=Ye()){var e;return ec(n)&&!!((e=window.navigator)!=null&&e.standalone)}function uT(){return Ng()&&document.documentMode===10}function Zd(n=Ye()){return ec(n)||$d(n)||Xd(n)||Yd(n)||/windows phone/i.test(n)||Wd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(n,e=[]){let t;switch(n){case"Browser":t=Zh(Ye());break;case"Worker":t=`${Zh(Ye())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,B)=>{try{const u=e(i);o(u)}catch(u){B(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(n,e={}){return rr(n,"GET","/v2/passwordPolicy",nr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=6;class fT{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??hT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new cT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Md,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted){try{this.persistenceManager=await _r.create(this,e)}catch(o){go(`Failed to initialize persistence: ${o}`),this.persistenceManager=await _r.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){go(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ho(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===B)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ci(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ky()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(Kt(this));const t=e?_e(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lT(this),t=new fT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await aT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nn(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}).catch(u=>{if(!o)if(typeof t!="function"&&t.error)t.error(u);else if(r)r(u);else throw u}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const r=(t==null?void 0:t.message)||String(t),s=Ia(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ep(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&go(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gn(n){return _e(n)}class ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gg(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dT(n){ya=n}function tp(n){return ya.loadJS(n)}function pT(){return ya.recaptchaEnterpriseScript}function gT(){return ya.gapiScript}function mT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ET{constructor(){this.enterprise=new _T}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _T{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="recaptcha-enterprise",np="NO_RECAPTCHA",tf="onFirebaseAuthREInstanceReady";class Pn{constructor(e){this.type=DT,this.auth=gn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,B)=>{Zy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)B(new Error("recaptcha Enterprise site key undefined"));else{const c=new Xy(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{B(u)})})}function s(i,o,B){const u=window.grecaptcha;Wh(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(np)})}):B(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ET().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(async B=>{if(!t&&Wh(window.grecaptcha)&&Pn.scriptInjectionDeferred)await Pn.scriptInjectionDeferred.promise,s(B,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=pT();u.length!==0&&(u+=B+`&onload=${tf}`),Pn.scriptInjectionDeferred=new Rf,window[tf]=()=>{var c;(c=Pn.scriptInjectionDeferred)==null||c.resolve()},tp(u).then(()=>{var c;return(c=Pn.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{s(B,i,o)}).catch(c=>{o(c)})}}).catch(B=>{o(B)})})}}Pn.scriptInjectionDeferred=null;async function nf(n,e,t,r=!1,s=!1){const i=new Pn(n);let o;if(s)o=np;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const B={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in B){const u=B.phoneEnrollmentInfo.phoneNumber,c=B.phoneEnrollmentInfo.recaptchaToken;Object.assign(B,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in B){const u=B.phoneSignInInfo.recaptchaToken;Object.assign(B,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return B}return r?Object.assign(B,{captchaResp:o}):Object.assign(B,{captchaResponse:o}),Object.assign(B,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(B,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),B}async function QB(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await nf(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const B=await nf(n,e,t,t==="getOobCode");return r(n,B)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(n,e){const t=mi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(wr(i,e??{}))return s;bt(s,"already-initialized")}return t.initialize({options:e})}function IT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yT(n,e,t){const r=gn(n);Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rp(e),{host:o,port:B}=TT(e),u=B===null?"":`:${B}`,c={url:`${i}//${o}${u}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Z(wr(c,r.config.emulator)&&wr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,dn(o)?Qo(`${i}//${o}${u}`):AT()}function rp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function TT(n){const e=rp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:rf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:rf(o)}}}function rf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function AT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,t){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function RT(n,e){return rr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vT(n,e){return bi(n,"POST","/v1/accounts:signInWithPassword",nr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(n,e){return bi(n,"POST","/v1/accounts:signInWithEmailLink",nr(n,e))}async function bT(n,e){return bi(n,"POST","/v1/accounts:signInWithEmailLink",nr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends tc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new di(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new di(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return QB(e,t,"signInWithPassword",vT);case"emailLink":return PT(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return QB(e,r,"signUpPassword",RT);case"emailLink":return bT(e,{idToken:t,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n,e){return bi(n,"POST","/v1/accounts:signInWithIdp",nr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="http://localhost";class fn extends tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new fn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kr(e,t)}buildRequest(){const e={requestUri:ST,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=gi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NT(n){const e=Ss(Os(n)).link,t=e?Ss(Os(e)).deep_link_id:null,r=Ss(Os(n)).deep_link_id;return(r?Ss(Os(r)).link:null)||r||t||e||n}class nc{constructor(e){const t=Ss(Os(e)),r=t.apiKey??null,s=t.oobCode??null,i=OT(t.mode??null);Z(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=NT(e);try{return new nc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,t){return di._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=nc.parseLink(t);return Z(r,"argument-error"),di._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Ta{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class _o extends cs{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return Z("providerId"in t&&"signInMethod"in t,"argument-error"),fn._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return Z(e.idToken||e.accessToken,"argument-error"),fn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return _o.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return _o.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:B}=e;if(!r&&!s&&!t&&!i||!B)return null;try{return new _o(B)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends cs{constructor(){super("facebook.com")}static credential(e){return fn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Sn.credential(t,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends cs{constructor(){super("github.com")}static credential(e){return fn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends cs{constructor(){super("twitter.com")}static credential(e,t){return fn._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nn.credential(t,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(n,e){return bi(n,"POST","/v1/accounts:signUp",nr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),o=sf(r);return new Cn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=sf(r);return new Cn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function sf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n){var s;if($e(n.app))return Promise.reject(Kt(n));const e=gn(n);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new Cn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await sp(e,{returnSecureToken:!0}),r=await Cn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Lt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Jo(e,t,r,s)}}function ip(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}async function op(n,e,t=!1){const r=await fi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Cn._forOperation(n,"link",r)}async function LT(n,e,t){await Ci(e);const r=FT(e.providerData);Z(r.has(t)===n,e.auth,"provider-already-linked")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(n,e,t=!1){const{auth:r}=n;if($e(r.app))return Promise.reject(Kt(r));const s="reauthenticate";try{const i=await fi(n,ip(r,s,e,n),t);Z(i.idToken,r,"internal-error");const o=Zu(i.idToken);Z(o,r,"internal-error");const{sub:B}=o;return Z(n.uid===B,r,"user-mismatch"),Cn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(n,e,t=!1){if($e(n.app))return Promise.reject(Kt(n));const r="signIn",s=await ip(n,r,e),i=await Cn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function VT(n,e){return ap(gn(n),e)}async function bv(n,e){const t=_e(n);return await LT(!1,t,e.providerId),op(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(n){const e=gn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Sv(n,e,t){if($e(n.app))return Promise.reject(Kt(n));const r=gn(n),o=await QB(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sp).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Bp(n),u}),B=await Cn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(B.user),B}function Ov(n,e,t){return $e(n.app)?Promise.reject(Kt(n)):VT(_e(n),us.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bp(n),r})}function xT(n,e,t,r){return _e(n).onIdTokenChanged(e,t,r)}function MT(n,e,t){return _e(n).beforeAuthStateChanged(e,t)}function Nv(n){return _e(n).signOut()}const qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=1e3,UT=10;class cp extends up{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},GT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}cp.type="LOCAL";const HT=cp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp extends up{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}lp.type="SESSION";const hp=lp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Aa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const B=Array.from(o).map(async c=>c(t.origin,i)),u=await JT(B);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Aa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,u)=>{const c=rc("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(C){const p=C;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(p.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return window}function jT(n){zt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function KT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zT(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function QT(){return fp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="firebaseLocalStorageDb",WT=1,jo="firebaseLocalStorage",dp="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ra(n,e){return n.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function $T(){const n=indexedDB.deleteDatabase(Cp);return new Si(n).toPromise()}function pp(){const n=indexedDB.open(Cp,WT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(jo,{keyPath:dp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await $T(),e(await pp()))})})}async function of(n,e,t){const r=Ra(n,!0).put({[dp]:e,value:t});return new Si(r).toPromise()}async function YT(n,e){const t=Ra(n,!1).get(e),r=await new Si(t).toPromise();return r===void 0?null:r.value}function af(n,e){const t=Ra(n,!0).delete(e);return new Si(t).toPromise()}const XT=800,ZT=3;class gp{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=pp(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ZT)throw r;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Aa._getInstance(QT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await KT(),!this.activeServiceWorker)return;this.sender=new qT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await of(e,qo,"1"),await af(e,qo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>of(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>YT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>af(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=Ra(s,!1).getAll();return new Si(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||go(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}gp.type="LOCAL";const eA=gp;new Pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n,e){return e?nn(e):(Z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tA(n){return ap(n.auth,new ic(n),n.bypassAuthState)}function nA(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),kT(t,new ic(n),n.bypassAuthState)}async function rA(n){const{auth:e,user:t}=n;return Z(t,e,"internal-error"),op(t,new ic(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tA;case"linkViaPopup":case"linkViaRedirect":return rA;case"reauthViaPopup":case"reauthViaRedirect":return nA;default:bt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new Pi(2e3,1e4);async function Fv(n,e,t){if($e(n.app))return Promise.reject(Ot(n,"operation-not-supported-in-this-environment"));const r=gn(n);Gd(n,e,Ta);const s=sc(r,t);return new Ln(r,"signInViaPopup",e,s).executeNotNull()}async function Lv(n,e,t){const r=_e(n);Gd(r.auth,e,Ta);const s=sc(r.auth,t);return new Ln(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Ln extends mp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sA.get())};e()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="pendingRedirect",Do=new Map;class oA extends mp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await aA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aA(n,e){const t=cA(e),r=uA(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function BA(n,e){Do.set(n._key(),e)}function uA(n){return nn(n._redirectPersistence)}function cA(n){return Eo(iA,n.config.apiKey,n.name)}async function lA(n,e,t=!1){if($e(n.app))return Promise.reject(Kt(n));const r=gn(n),s=sc(r,e),o=await new oA(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=10*60*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ep(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bf(e))}saveEventToCache(e){this.cachedEventUids.add(Bf(e)),this.lastProcessedEventTime=Date.now()}}function Bf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ep({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ep(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(n,e={}){return rr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gA=/^https?/;async function mA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dA(n);for(const t of e)try{if(EA(t))return}catch{}bt(n,"unauthorized-domain")}function EA(n){const e=KB(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!gA.test(t))return!1;if(pA.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new Pi(3e4,6e4);function uf(){const n=zt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function DA(n){return new Promise((e,t)=>{var s,i,o;function r(){uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uf(),t(Ot(n,"network-request-failed"))},timeout:_A.get()})}if((i=(s=zt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=zt().gapi)!=null&&o.load)r();else{const B=mT("iframefcb");return zt()[B]=()=>{gapi.load?r():t(Ot(n,"network-request-failed"))},tp(`${gT()}?onload=${B}`).catch(u=>t(u))}}).catch(e=>{throw wo=null,e})}let wo=null;function wA(n){return wo=wo||DA(n),wo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=new Pi(5e3,15e3),yA="__/auth/iframe",TA="emulator/auth/iframe",AA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vA(n){const e=n.config;Z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xu(e,TA):`https://${n.config.authDomain}/${yA}`,r={apiKey:e.apiKey,appName:n.name,v:Rr},s=RA.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${gi(r).slice(1)}`}async function PA(n){const e=await wA(n),t=zt().gapi;return Z(t,n,"internal-error"),e.open({where:document.body,url:vA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(n,"network-request-failed"),B=zt().setTimeout(()=>{i(o)},IA.get());function u(){zt().clearTimeout(B),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SA=500,OA=600,NA="_blank",FA="http://localhost";class cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LA(n,e,t,r=SA,s=OA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let B="";const u={...bA,width:r.toString(),height:s.toString(),top:i,left:o},c=Ye().toLowerCase();t&&(B=Qd(c)?NA:t),Kd(c)&&(e=e||FA,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[_,I])=>`${p}${_}=${I},`,"");if(BT(c)&&B!=="_self")return kA(e||"",B),new cf(null);const C=window.open(e||"",B,h);Z(C,n,"popup-blocked");try{C.focus()}catch{}return new cf(C)}function kA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="__/auth/handler",xA="emulator/auth/handler",MA=encodeURIComponent("fac");async function lf(n,e,t,r,s,i){Z(n.config.authDomain,n,"auth-domain-config-required"),Z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Rr,eventId:s};if(e instanceof Ta){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Mg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,C]of Object.entries({}))o[h]=C}if(e instanceof cs){const h=e.getScopes().filter(C=>C!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const u=await n._getAppCheckToken(),c=u?`#${MA}=${encodeURIComponent(u)}`:"";return`${GA(n)}?${gi(B).slice(1)}${c}`}function GA({config:n}){return n.emulator?Xu(n,xA):`https://${n.authDomain}/${VA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dB="webStorageSupport";class UA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hp,this._completeRedirectFn=lA,this._overrideRedirectResult=BA}async _openPopup(e,t,r,s){var o;hn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await lf(e,t,r,KB(),s);return LA(e,i,rc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await lf(e,t,r,KB(),s);return jT(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await PA(e),r=new fA(e);return t.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(dB,{type:dB},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[dB];i!==void 0&&t(!!i),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=mA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zd()||zd()||ec()}}const HA=UA;var hf="@firebase/auth",ff="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jA(n){Hn(new an("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:B,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ep(n)},c=new CT(r,s,i,u);return IT(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Hn(new an("auth-internal",e=>{const t=gn(e.getProvider("auth").getImmediate());return(r=>new JA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rt(hf,ff,qA(n)),Rt(hf,ff,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=5*60,zA=Af("authIdTokenMaxAge")||KA;let Cf=null;const QA=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zA)return;const s=t==null?void 0:t.token;Cf!==s&&(Cf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function kv(n=Wo()){const e=mi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wT(n,{popupRedirectResolver:HA,persistence:[eA,HT,hp]}),r=Af("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=QA(i.toString());MT(t,o,()=>o(t.currentUser)),xT(t,B=>o(B))}}const s=yf("auth");return s&&yT(t,`http://${s}`),t}function WA(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}dT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",WA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jA("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="firebasestorage.googleapis.com",Dp="storageBucket",$A=2*60*1e3,YA=10*60*1e3,XA=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Lt{constructor(e,t,r=0){super(pB(e),`Firebase Storage: ${t} (${pB(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return pB(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function pB(n){return"storage/"+n}function oc(){const n="An unknown error occurred, please check the error payload for server response.";return new be(Ae.UNKNOWN,n)}function ZA(n){return new be(Ae.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function eR(n){return new be(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tR(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(Ae.UNAUTHENTICATED,n)}function nR(){return new be(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rR(n){return new be(Ae.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function wp(){return new be(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ip(){return new be(Ae.CANCELED,"User canceled the upload/download.")}function sR(n){return new be(Ae.INVALID_URL,"Invalid URL '"+n+"'.")}function iR(n){return new be(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function oR(){return new be(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Dp+"' property when initializing the app?")}function yp(){return new be(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aR(){return new be(Ae.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function BR(){return new be(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uR(n){return new be(Ae.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function WB(n){return new be(Ae.INVALID_ARGUMENT,n)}function Tp(){return new be(Ae.APP_DELETED,"The Firebase app was deleted.")}function cR(n){return new be(Ae.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(n,e){return new be(Ae.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function bs(n){throw new be(Ae.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=wt.makeFromUrl(e,t)}catch{return new wt(e,"")}if(r.path==="")return r;throw iR(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Be){Be.path.charAt(Be.path.length-1)==="/"&&(Be.path_=Be.path_.slice(0,-1))}const o="(/(.*))?$",B=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function c(Be){Be.path_=decodeURIComponent(Be.path)}const h="v[A-Za-z0-9_]+",C=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${C}/${h}/b/${s}/o${p}`,"i"),I={bucket:1,path:3},F=t===_p?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",j=new RegExp(`^https?://${F}/${s}/${M}`,"i"),se=[{regex:B,indices:u,postModify:i},{regex:_,indices:I,postModify:c},{regex:j,indices:{bucket:1,path:2},postModify:c}];for(let Be=0;Be<se.length;Be++){const we=se[Be],de=we.regex.exec(e);if(de){const R=de[we.indices.bucket];let E=de[we.indices.path];E||(E=""),r=new wt(R,E),we.postModify(r);break}}if(r==null)throw sR(e);return r}}class lR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(n,e,t){let r=1,s=null,i=null,o=!1,B=0;function u(){return B===2}let c=!1;function h(...M){c||(c=!0,e.apply(null,M))}function C(M){s=setTimeout(()=>{s=null,n(_,u())},M)}function p(){i&&clearTimeout(i)}function _(M,...j){if(c){p();return}if(M){p(),h.call(null,M,...j);return}if(u()||o){p(),h.call(null,M,...j);return}r<64&&(r*=2);let se;B===1?(B=2,se=0):se=(r+Math.random())*1e3,C(se)}let I=!1;function F(M){I||(I=!0,p(),!c&&(s!==null?(M||(B=2),clearTimeout(s),C(0)):M||(B=1)))}return C(0),i=setTimeout(()=>{o=!0,F(!0)},t),F}function fR(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(n){return n!==void 0}function dR(n){return typeof n=="function"}function pR(n){return typeof n=="object"&&!Array.isArray(n)}function va(n){return typeof n=="string"||n instanceof String}function df(n){return ac()&&n instanceof Blob}function ac(){return typeof Blob<"u"}function pf(n,e,t,r){if(r<e)throw WB(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw WB(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Ap(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Dr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Dr||(Dr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,t,r,s,i,o,B,u,c,h,C,p=!0,_=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=B,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=C,this.retry=p,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,F)=>{this.resolve_=I,this.reject_=F,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ao(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=B=>{const u=B.loaded,c=B.lengthComputable?B.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const B=i.getErrorCode()===Dr.NO_ERROR,u=i.getStatus();if(!B||Rp(u,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Dr.ABORT;r(!1,new ao(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ao(c,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,B=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(B,B.getResponse());CR(u)?i(u):i()}catch(u){o(u)}else if(B!==null){const u=oc();u.serverResponse=B.getErrorText(),this.errorCallback_?o(this.errorCallback_(B,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Tp():Ip();o(u)}else{const u=wp();o(u)}};this.canceled_?t(!1,new ao(!1,null,!0)):this.backoffId_=hR(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ao{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function mR(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ER(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _R(n,e){e&&(n["X-Firebase-GMPID"]=e)}function DR(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function wR(n,e,t,r,s,i,o=!0,B=!1){const u=Ap(n.urlParams),c=n.url+u,h=Object.assign({},n.headers);return _R(h,e),mR(h,t),ER(h,i),DR(h,r),new gR(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,B)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yR(...n){const e=IR();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ac())return new Blob(n);throw new be(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function TR(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(n){if(typeof atob>"u")throw uR("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gB{constructor(e,t){this.data=e,this.contentType=t||null}}function RR(n,e){switch(n){case Ut.RAW:return new gB(vp(e));case Ut.BASE64:case Ut.BASE64URL:return new gB(Pp(n,e));case Ut.DATA_URL:return new gB(PR(e),bR(e))}throw oc()}function vp(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=n.charCodeAt(++t);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function vR(n){let e;try{e=decodeURIComponent(n)}catch{throw zs(Ut.DATA_URL,"Malformed data URL.")}return vp(e)}function Pp(n,e){switch(n){case Ut.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw zs(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw zs(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=AR(e)}catch(s){throw s.message.includes("polyfill")?s:zs(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class bp{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw zs(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=SR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function PR(n){const e=new bp(n);return e.base64?Pp(Ut.BASE64,e.rest):vR(e.rest)}function bR(n){return new bp(n).contentType}function SR(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){let r=0,s="";df(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(df(this.data_)){const r=this.data_,s=TR(r,e,t);return s===null?null:new Fn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Fn(r,!0)}}static getBlob(...e){if(ac()){const t=e.map(r=>r instanceof Fn?r.data_:r);return new Fn(yR.apply(null,t))}else{const t=e.map(o=>va(o)?RR(Ut.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(o=>{for(let B=0;B<o.length;B++)s[i++]=o[B]}),new Fn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){let e;try{e=JSON.parse(n)}catch{return null}return pR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function NR(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Op(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(n,e){return e}class tt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||FR}}let Bo=null;function LR(n){return!va(n)||n.length<2?n:Op(n)}function Np(){if(Bo)return Bo;const n=[];n.push(new tt("bucket")),n.push(new tt("generation")),n.push(new tt("metageneration")),n.push(new tt("name","fullPath",!0));function e(i,o){return LR(o)}const t=new tt("name");t.xform=e,n.push(t);function r(i,o){return o!==void 0?Number(o):o}const s=new tt("size");return s.xform=r,n.push(s),n.push(new tt("timeCreated")),n.push(new tt("updated")),n.push(new tt("md5Hash",null,!0)),n.push(new tt("cacheControl",null,!0)),n.push(new tt("contentDisposition",null,!0)),n.push(new tt("contentEncoding",null,!0)),n.push(new tt("contentLanguage",null,!0)),n.push(new tt("contentType",null,!0)),n.push(new tt("metadata","customMetadata",!0)),Bo=n,Bo}function kR(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function VR(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const o=t[i];r[o.local]=o.xform(r,e[o.server])}return kR(r,n),r}function Fp(n,e,t){const r=Sp(e);return r===null?null:VR(n,r,t)}function xR(n,e,t,r){const s=Sp(e);if(s===null||!va(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const h=n.bucket,C=n.fullPath,p="/b/"+o(h)+"/o/"+o(C),_=Oi(p,t,r),I=Ap({alt:"media",token:c});return _+I})[0]}function Lp(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class ls{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n){if(!n)throw oc()}function Bc(n,e){function t(r,s){const i=Fp(n,s,e);return on(i!==null),i}return t}function MR(n,e){function t(r,s){const i=Fp(n,s,e);return on(i!==null),xR(i,s,n.host,n._protocol)}return t}function Ni(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=nR():s=tR():t.getStatus()===402?s=eR(n.bucket):t.getStatus()===403?s=rR(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function kp(n){const e=Ni(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=ZA(n.path)),i.serverResponse=s.serverResponse,i}return t}function GR(n,e,t){const r=e.fullServerUrl(),s=Oi(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,B=new ls(s,i,Bc(n,t),o);return B.errorHandler=kp(e),B}function UR(n,e,t){const r=e.fullServerUrl(),s=Oi(r,n.host,n._protocol),i="GET",o=n.maxOperationRetryTime,B=new ls(s,i,MR(n,t),o);return B.errorHandler=kp(e),B}function HR(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Vp(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=HR(null,e)),r}function JR(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function B(){let se="";for(let Be=0;Be<2;Be++)se=se+Math.random().toString().slice(2);return se}const u=B();o["Content-Type"]="multipart/related; boundary="+u;const c=Vp(e,r,s),h=Lp(c,t),C="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+u+"--",_=Fn.getBlob(C,r,p);if(_===null)throw yp();const I={name:c.fullPath},F=Oi(i,n.host,n._protocol),M="POST",j=n.maxUploadRetryTime,te=new ls(F,M,Bc(n,t),j);return te.urlParams=I,te.headers=o,te.body=_.uploadData(),te.errorHandler=Ni(e),te}class Ko{constructor(e,t,r,s){this.current=e,this.total=t,this.finalized=!!r,this.metadata=s||null}}function uc(n,e){let t=null;try{t=n.getResponseHeader("X-Goog-Upload-Status")}catch{on(!1)}return on(!!t&&(e||["active"]).indexOf(t)!==-1),t}function qR(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),o=Vp(e,r,s),B={name:o.fullPath},u=Oi(i,n.host,n._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},C=Lp(o,t),p=n.maxUploadRetryTime;function _(F){uc(F);let M;try{M=F.getResponseHeader("X-Goog-Upload-URL")}catch{on(!1)}return on(va(M)),M}const I=new ls(u,c,_,p);return I.urlParams=B,I.headers=h,I.body=C,I.errorHandler=Ni(e),I}function jR(n,e,t,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const h=uc(c,["active","final"]);let C=null;try{C=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{on(!1)}C||on(!1);const p=Number(C);return on(!isNaN(p)),new Ko(p,r.size(),h==="final")}const o="POST",B=n.maxUploadRetryTime,u=new ls(t,o,i,B);return u.headers=s,u.errorHandler=Ni(e),u}const gf=256*1024;function KR(n,e,t,r,s,i,o,B){const u=new Ko(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw aR();const c=u.total-u.current;let h=c;s>0&&(h=Math.min(h,s));const C=u.current,p=C+h;let _="";h===0?_="finalize":c===h?_="upload, finalize":_="upload";const I={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":`${u.current}`},F=r.slice(C,p);if(F===null)throw yp();function M(Be,we){const de=uc(Be,["active","final"]),R=u.current+h,E=r.size();let w;return de==="final"?w=Bc(e,i)(Be,we):w=null,new Ko(R,E,de==="final",w)}const j="POST",te=e.maxUploadRetryTime,se=new ls(t,j,M,te);return se.headers=I,se.body=F.uploadData(),se.progressCallback=B||null,se.errorHandler=Ni(n),se}const ut={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function mB(n){switch(n){case"running":case"pausing":case"canceling":return ut.RUNNING;case"paused":return ut.PAUSED;case"success":return ut.SUCCESS;case"canceled":return ut.CANCELED;case"error":return ut.ERROR;default:return ut.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,t,r){if(dR(e)||t!=null||r!=null)this.next=e,this.error=t??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){return(...e)=>{Promise.resolve().then(()=>n(...e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw bs("cannot .send() more than once");if(dn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WR extends QR{initXhr(){this.xhr_.responseType="text"}}function Jr(){return new WR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Np(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ae.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Rp(s.status,[]))if(i)s=wp();else{this.sleepTime=Math.max(this.sleepTime*2,XA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ae.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const r=qR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Jr,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,r)=>{const s=jR(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Jr,t,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=gf*this._chunkMultiplier,t=new Ko(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=KR(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const B=this._ref.storage._makeRequest(o,Jr,s,i,!1);this._request=B,B.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){gf*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const r=GR(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Jr,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const r=JR(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Jr,e,t);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t=this._state==="paused";this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Ip(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=mB(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,s){const i=new zR(t||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);t!==-1&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(mB(this._state)){case ut.SUCCESS:Lr(this._resolve.bind(null,this.snapshot))();break;case ut.CANCELED:case ut.ERROR:const t=this._reject;Lr(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(mB(this._state)){case ut.RUNNING:case ut.PAUSED:e.next&&Lr(e.next.bind(e,this.snapshot))();break;case ut.SUCCESS:e.complete&&Lr(e.complete.bind(e))();break;case ut.CANCELED:case ut.ERROR:e.error&&Lr(e.error.bind(e,this._error))();break;default:e.error&&Lr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t){this._service=e,t instanceof wt?this._location=t:this._location=wt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ar(e,t)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Op(this._location.path)}get storage(){return this._service}get parent(){const e=OR(this._location.path);if(e===null)return null;const t=new wt(this._location.bucket,e);return new Ar(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw cR(e)}}function YR(n,e,t){return n._throwIfRoot("uploadBytesResumable"),new $R(n,new Fn(e),t)}function XR(n){n._throwIfRoot("getDownloadURL");const e=UR(n.storage,n._location,Np());return n.storage.makeRequestWithTokens(e,Jr).then(t=>{if(t===null)throw BR();return t})}function ZR(n,e){const t=NR(n._location.path,e),r=new wt(n._location.bucket,t);return new Ar(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(n){return/^[A-Za-z]+:\/\//.test(n)}function tv(n,e){return new Ar(n,e)}function xp(n,e){if(n instanceof cc){const t=n;if(t._bucket==null)throw oR();const r=new Ar(t,t._bucket);return e!=null?xp(r,e):r}else return e!==void 0?ZR(n,e):n}function nv(n,e){if(e&&ev(e)){if(n instanceof cc)return tv(n,e);throw WB("To use ref(service, url), the first argument must be a Storage instance.")}else return xp(n,e)}function mf(n,e){const t=e==null?void 0:e[Dp];return t==null?null:wt.makeFromBucketSpec(t,n)}function rv(n,e,t,r={}){n.host=`${e}:${t}`;const s=dn(e);s&&Qo(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:vf(i,n.app.options.projectId))}class cc{constructor(e,t,r,s,i,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=_p,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$A,this._maxUploadRetryTime=YA,this._requests=new Set,s!=null?this._bucket=wt.makeFromBucketSpec(s,this._host):this._bucket=mf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=mf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ar(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new lR(Tp());{const o=wR(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Ef="@firebase/storage",_f="0.14.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="storage";function Vv(n,e,t){return n=_e(n),YR(n,e,t)}function xv(n){return n=_e(n),XR(n)}function Mv(n,e){return n=_e(n),nv(n,e)}function Gv(n=Wo(),e){n=_e(n);const r=mi(n,Mp).getImmediate({identifier:e}),s=$B("storage");return s&&sv(r,...s),r}function sv(n,e,t,r={}){rv(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new cc(t,r,s,e,Rr)}function ov(){Hn(new an(Mp,iv,"PUBLIC").setMultipleInstances(!0)),Rt(Ef,_f,""),Rt(Ef,_f,"esm2020")}ov();export{Pv as A,bv as B,Ov as C,Sv as D,us as E,_v as F,Lv as G,VT as H,Fv as I,Sn as J,_o as O,pe as T,Wo as a,kv as b,dv as c,Rv as d,Gv as e,xv as f,Bv as g,Dv as h,Um as i,lv as j,CD as k,Ev as l,mv as m,Iv as n,Av as o,vv as p,pv as q,Mv as r,wv as s,yv as t,Vv as u,hv as v,gv as w,Tv as x,xT as y,Nv as z};
