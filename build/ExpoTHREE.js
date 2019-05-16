//import '@expo/browser-polyfill';
import * as utils from './utils';
import Renderer from './Renderer';
/*
 Legacy
*/
export function createRenderer(props) {
    console.log('Warning: `ExpoTHREE.createRenderer(props)` is deprecated, use: `new ExpoTHREE.Renderer(props)`');
    return new Renderer(props);
}
export function renderer(props) {
    console.log('Warning: `ExpoTHREE.renderer(props)` is deprecated, use: `new ExpoTHREE.Renderer(props)`');
    return new Renderer(props);
}
// export function createTextureAsync({ asset }) {
//   console.log(
//     'Warning: `ExpoTHREE.createTextureAsync({ asset })` is deprecated, use: `new ExpoTHREE.loadAsync(asset, onLoad, onAssetRequested)`'
//   );
//   return loadTextureAsync({ asset });
// }
/*
 Exports
*/
export { default as CubeTexture } from './CubeTexture';
export { default as loadCubeTextureAsync } from './loadCubeTextureAsync';
export { default as parseAsync } from './parseAsync';
export { default as THREE } from './Three';
export { utils, Renderer, };
//# sourceMappingURL=ExpoTHREE.js.map