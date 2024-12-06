// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"80cCk":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1SICI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _apiJs = require("./api.js");
var _logoPng = require("../assets/images/logo.png");
var _logoPngDefault = parcelHelpers.interopDefault(_logoPng);
var _dificultyPng = require("../assets/images/dificulty.png");
var _dificultyPngDefault = parcelHelpers.interopDefault(_dificultyPng);
var _attackPng = require("../assets/images/attack.png");
var _attackPngDefault = parcelHelpers.interopDefault(_attackPng);
var _shieldPng = require("../assets/images/shield.png");
var _shieldPngDefault = parcelHelpers.interopDefault(_shieldPng);
var _magicPng = require("../assets/images/magic.png");
var _magicPngDefault = parcelHelpers.interopDefault(_magicPng);
var _mutedPng = require("../assets/images/muted.png");
var _mutedPngDefault = parcelHelpers.interopDefault(_mutedPng);
var _audioPng = require("../assets/images/audio.png");
var _audioPngDefault = parcelHelpers.interopDefault(_audioPng);
var _pausePng = require("../assets/images/pause.png");
var _pausePngDefault = parcelHelpers.interopDefault(_pausePng);
var _playPng = require("../assets/images/play.png");
var _playPngDefault = parcelHelpers.interopDefault(_playPng);
var _lockPng = require("../assets/images/lock.png");
var _lockPngDefault = parcelHelpers.interopDefault(_lockPng);
var _unlockPng = require("../assets/images/unlock.png");
var _unlockPngDefault = parcelHelpers.interopDefault(_unlockPng);
document.addEventListener('DOMContentLoaded', ()=>{
    const lolLogo = document.getElementById('lolLogo');
    lolLogo.addEventListener('mouseenter', ()=>{
        // Quitar clases previas
        lolLogo.classList.remove('giro-rapido', 'giro-medio', 'giro-lento');
        // Agregar la clase de giro rápido
        lolLogo.classList.add('giro-rapido');
        // Esperar a que termine el giro rápido y agregar el giro medio
        setTimeout(()=>{
            lolLogo.classList.remove('giro-rapido');
            lolLogo.classList.add('giro-medio');
            // Esperar a que termine el giro medio y agregar el giro lento
            setTimeout(()=>{
                lolLogo.classList.remove('giro-medio');
                lolLogo.classList.add('giro-lento');
            }, 1000); // Duración del giro medio
        }, 500); // Duración del giro rápido
    });
    // Selección del video
    const backgroundVideo = document.getElementById('background-video');
    const muteButton = document.getElementById('mute-button');
    const pauseButton = document.getElementById('pause-button');
    //reproducir el video al cargar la pagina
    window.onload = ()=>{
        backgroundVideo.muted = true; // Asegúrate de que el video esté silenciado para permitir autoplay
        backgroundVideo.play().catch((error)=>{
            console.error('Error al reproducir el video:', error);
            // Intentar nuevamente sin silenciar si hay un error
            backgroundVideo.muted = false;
            backgroundVideo.play();
        });
    };
    // Evento para alternar entre silenciar y activar el sonido
    muteButton.addEventListener('click', ()=>{
        muteButton.textContent = '';
        // Crear un nuevo elemento img
        const imgElement = document.createElement('img');
        if (backgroundVideo.muted) {
            backgroundVideo.muted = false; // Activar sonido
            imgElement.src = (0, _mutedPngDefault.default); // Asignar la nueva imagen
            muteButton.appendChild(imgElement); // Agregar img al botón
            imgElement.classList.add('iconsBtn'); // agrego una clase
            muteButton.appendChild(document.createTextNode('Silenciar')); // Agregar texto
        } else {
            backgroundVideo.muted = true; // Silenciar sonido
            imgElement.src = (0, _audioPngDefault.default); // Asignar la nueva imagen
            muteButton.appendChild(imgElement); // Agregar img al botón
            imgElement.classList.add('iconsBtn'); // agrego una clase
            muteButton.appendChild(document.createTextNode('Activar Sonido')); // Agregar texto
        }
        console.log('Nueva imagen agregada:', imgElement.src);
    });
    // Evento para pausar y reanudar el video
    pauseButton.addEventListener('click', ()=>{
        pauseButton.textContent = '';
        // Crear un nuevo elemento img
        const imgElement = document.createElement('img');
        if (backgroundVideo.paused) {
            backgroundVideo.play();
            imgElement.src = (0, _pausePngDefault.default); // Asignar la nueva imagen
            pauseButton.appendChild(imgElement); // Agregar img al botón
            imgElement.classList.add('iconsBtn'); // agrego una clase
            pauseButton.appendChild(document.createTextNode('Pausar')); // Cambiar texto del botón a 'Pausar'
        } else {
            backgroundVideo.pause();
            imgElement.src = (0, _playPngDefault.default); // Asignar la nueva imagen
            pauseButton.appendChild(imgElement); // Agregar img al botón
            imgElement.classList.add('iconsBtn'); // agrego una clase
            pauseButton.appendChild(document.createTextNode('Play')); // Cambiar texto del botón a 'Reanudar'
        }
        console.log('Nueva imagen agregada:', imgElement.src);
    });
    // Función principal para cargar campeones
    const championsContainer = document.getElementById('champions-container');
    async function loadChampions() {
        try {
            const champions = await (0, _apiJs.fetchChampions)();
            Object.values(champions).forEach((champion)=>{
                // Crear la estructura de la tarjeta
                const championCard = document.createElement('div');
                championCard.classList.add('card');
                championCard.setAttribute('tabindex', '0'); // Mejora de accesibilidad
                const cardInner = document.createElement('div');
                cardInner.classList.add('card-inner');
                const cardFront = document.createElement('div');
                cardFront.classList.add('card-front');
                cardFront.innerHTML = `
                <h3>${champion.name}</h3>
                <img class="avatar" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg" alt="${champion.name}">
                <img class="logo" src="${0, _logoPngDefault.default}">
            `;
                const cardBack = document.createElement('div');
                cardBack.classList.add('card-back');
                let difficultyIcons = '';
                let attackIcons = '';
                let shieldIcons = '';
                let magicIcons = '';
                const maxIcons = 5;
                for(let i = 0; i < Math.min(champion.info.difficulty, maxIcons); i++)difficultyIcons += `<img class="icons-detail" src="${0, _dificultyPngDefault.default}" alt="Difficulty Icon">`;
                if (champion.info.difficulty > maxIcons) {
                    const remaining = champion.info.difficulty - maxIcons;
                    difficultyIcons += `<span class="difficulty-more">+${remaining}</span>`;
                }
                for(let i = 0; i < Math.min(champion.info.attack, maxIcons); i++)attackIcons += `<img class="icons-detail" src="${0, _attackPngDefault.default}" alt="Attack Icon">`;
                if (champion.info.attack > maxIcons) {
                    const remainingAttack = champion.info.attack - maxIcons;
                    attackIcons += `<span class="attack-more">+${remainingAttack}</span>`;
                }
                for(let i = 0; i < Math.min(champion.info.defense, maxIcons); i++)shieldIcons += `<img class="icons-detail" src="${0, _shieldPngDefault.default}" alt="Shield Icon">`;
                if (champion.info.shield > maxIcons) {
                    const remainingShield = champion.info.defense - maxIcons;
                    shieldIcons += `<span class="shield-more">+${remainingShield}</span>`;
                }
                for(let i = 0; i < Math.min(champion.info.magic, maxIcons); i++)magicIcons += `<img class="icons-detail" src="${0, _magicPngDefault.default}" alt="Magic Icon">`;
                if (champion.info.magic > maxIcons) {
                    const remainingMagic = champion.info.magic - maxIcons;
                    magicIcons += `<span class="magic-more">+${remainingMagic}</span>`;
                }
                cardBack.innerHTML = `
                <p class="card-title">${champion.title}</p>
                <div class="img-back">
                    <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg" alt="${champion.name}">
                </div>
                <div class="card-details">
                    <h3>${champion.name}</h3><hr>
                    <div class="card-intro">
                        <p><strong>Rol:</strong><small>${champion.tags.join('</small> <small>')}</small></p>
                        <p><strong>Dificultad:</strong> <span>${difficultyIcons == 0 ? 'Sin habilidad' : difficultyIcons}</span></p>
                        <p><strong>Magia:</strong> <span>${magicIcons == 0 ? 'Sin habilidad' : magicIcons}</span></p>
                        <p><strong>Ataque:</strong> <span>${attackIcons == 0 ? 'Sin habilidad' : attackIcons}</span></p>
                        <p><strong>Defenza:</strong> <span>${shieldIcons == 0 ? 'Sin habilidad' : shieldIcons}</span></p>
                    </div>
                    <buttom class="lock-button"><img src="${0, _unlockPngDefault.default}"></buttom>
                </div>
            `;
                cardInner.appendChild(cardFront);
                cardInner.appendChild(cardBack);
                championCard.appendChild(cardInner);
                championsContainer.appendChild(championCard);
                // Eventos de interacción para girar y sonido
                // championCard.addEventListener('pointerenter', () => {
                //     championCard.classList.add('is-flipped');
                //     slashSound.currentTime = 0;
                //     slashSound.play();
                // });
                //Eventos de interacción para resplandor
                championCard.addEventListener('mousemove', ()=>{});
                // Selección de todas las tarjetas y botones de bloqueo
                const championCards = document.querySelectorAll('.card');
                championCards.forEach((championCard)=>{
                    let isLocked = false; // Estado de bloqueo individual para cada carta
                    const lockButton = championCard.querySelector('.lock-button'); // Botón específico de cada carta
                    // Evento de click en el botón de bloqueo/desbloqueo
                    lockButton.addEventListener('click', (event)=>{
                        event.stopPropagation(); // Evitar que el clic se propague al resto de la tarjeta
                        const imgElement = lockButton.querySelector('img') || document.createElement('img');
                        if (isLocked) {
                            isLocked = false;
                            imgElement.src = (0, _unlockPngDefault.default); // Cambiar a imagen de desbloqueo
                            if (!lockButton.contains(imgElement)) lockButton.appendChild(imgElement); // Asegurarse de que la imagen esté en el botón
                            championCard.classList.remove('is-locked'); // Quitar clase de estado bloqueado
                            const lockSound = document.getElementById('lock-sound');
                            lockSound.play().catch((error)=>console.error('Error al reproducir el sonido:', error));
                            console.log('Tarjeta desbloqueada');
                        } else {
                            isLocked = true;
                            imgElement.src = (0, _lockPngDefault.default); // Cambiar a imagen de bloqueo
                            if (!lockButton.contains(imgElement)) lockButton.appendChild(imgElement); // Asegurarse de que la imagen esté en el botón
                            championCard.classList.add('is-locked'); // Agregar clase de estado bloqueado
                            const lockSound = document.getElementById('lock-sound');
                            lockSound.play().catch((error)=>console.error('Error al reproducir el sonido:', error));
                            console.log('Tarjeta bloqueada');
                        }
                    });
                    // Evento para girar la tarjeta, solo si no está bloqueada
                    championCard.addEventListener('click', ()=>{
                        if (!isLocked) {
                            championCard.classList.add('is-flipped'); // Girar la tarjeta
                            const slashSound = document.getElementById('slash-sound');
                            slashSound.play().catch((error)=>console.error('Error al reproducir el sonido:', error));
                        }
                    });
                    // Evento para restablecer la tarjeta al salir del puntero, solo si no está bloqueada
                    championCard.addEventListener('pointerleave', ()=>{
                        if (!isLocked) championCard.classList.remove('is-flipped');
                    });
                    // **Nuevo comportamiento: cambiar el color del borde en doble clic si está bloqueada**
                    championCard.addEventListener('dblclick', ()=>{
                        if (isLocked) {
                            const originalBorderColor = getComputedStyle(championCard).borderColor; // Guardar el color original
                            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generar un color aleatorio
                            championCard.style.borderColor = randomColor; // Cambiar el borde a color aleatorio
                            console.log(`Nuevo color de borde: ${randomColor}`);
                            // Restaurar el color original después de 2 segundos
                            setTimeout(()=>{
                                championCard.style.borderColor = "";
                                championCard.style.borderColor = originalBorderColor;
                                console.log('Color del borde restaurado');
                            }, 2000);
                        }
                    });
                });
            });
        } catch (error) {
            console.error('Error al cargar los campeones:', error);
            championsContainer.innerHTML = `<p>Error al cargar los campeones, Por favor intenta m\xe1s tarde.</p>`;
        }
    }
    loadChampions();
});

},{"./api.js":"9u7qN","../assets/images/logo.png":"XUk1G","../assets/images/dificulty.png":"iMQFr","../assets/images/attack.png":"hsHRv","../assets/images/shield.png":"J8IVw","../assets/images/magic.png":"guMDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../assets/images/muted.png":"8TVuE","../assets/images/audio.png":"dLWRz","../assets/images/pause.png":"azVEq","../assets/images/play.png":"jnXSJ","../assets/images/lock.png":"1iN1K","../assets/images/unlock.png":"cSDXj"}],"9u7qN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchChampions", ()=>fetchChampions);
const API_URL = 'https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion.json';
async function fetchChampions() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch champions');
        const data = await response.json();
        return data.data; // Lista de campeones
    } catch (error) {
        console.error('Error fetching API:', error);
        throw error;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"XUk1G":[function(require,module,exports,__globalThis) {
module.exports = require("47989e3df718c9fa").getBundleURL('10Mjw') + "logo.08a29ce2.png" + "?" + Date.now();

},{"47989e3df718c9fa":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"iMQFr":[function(require,module,exports,__globalThis) {
module.exports = require("a003d19f8f2b6256").getBundleURL('10Mjw') + "dificulty.ea81cad1.png" + "?" + Date.now();

},{"a003d19f8f2b6256":"lgJ39"}],"hsHRv":[function(require,module,exports,__globalThis) {
module.exports = require("8b0cb78f526860ec").getBundleURL('10Mjw') + "attack.06f83a32.png" + "?" + Date.now();

},{"8b0cb78f526860ec":"lgJ39"}],"J8IVw":[function(require,module,exports,__globalThis) {
module.exports = require("8a360a91cba654ff").getBundleURL('10Mjw') + "shield.553790bd.png" + "?" + Date.now();

},{"8a360a91cba654ff":"lgJ39"}],"guMDs":[function(require,module,exports,__globalThis) {
module.exports = require("e0011c45bfa5041e").getBundleURL('10Mjw') + "magic.65214a6e.png" + "?" + Date.now();

},{"e0011c45bfa5041e":"lgJ39"}],"8TVuE":[function(require,module,exports,__globalThis) {
module.exports = require("d93f05cdb8a5ca6a").getBundleURL('10Mjw') + "muted.f71f107e.png" + "?" + Date.now();

},{"d93f05cdb8a5ca6a":"lgJ39"}],"dLWRz":[function(require,module,exports,__globalThis) {
module.exports = require("dcd4485484a8f484").getBundleURL('10Mjw') + "audio.c5aafd75.png" + "?" + Date.now();

},{"dcd4485484a8f484":"lgJ39"}],"azVEq":[function(require,module,exports,__globalThis) {
module.exports = require("fdc66b8198eb1bcf").getBundleURL('10Mjw') + "pause.60bd1fd7.png" + "?" + Date.now();

},{"fdc66b8198eb1bcf":"lgJ39"}],"jnXSJ":[function(require,module,exports,__globalThis) {
module.exports = require("1e5b1e5d63db28b6").getBundleURL('10Mjw') + "play.a36b5fec.png" + "?" + Date.now();

},{"1e5b1e5d63db28b6":"lgJ39"}],"1iN1K":[function(require,module,exports,__globalThis) {
module.exports = require("a406c15ec03f9708").getBundleURL('10Mjw') + "lock.b82fee75.png" + "?" + Date.now();

},{"a406c15ec03f9708":"lgJ39"}],"cSDXj":[function(require,module,exports,__globalThis) {
module.exports = require("6ea457559460ea16").getBundleURL('10Mjw') + "unlock.5fafffbe.png" + "?" + Date.now();

},{"6ea457559460ea16":"lgJ39"}]},["80cCk","1SICI"], "1SICI", "parcelRequire94c2")

//# sourceMappingURL=index.18dbc454.js.map
