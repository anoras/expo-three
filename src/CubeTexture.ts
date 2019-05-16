import THREE from './Three';

import parseAssetCallback from './loaders/parseAssetCallback';

type AnyFunction = (...args: any[]) => any;
type AnyObject = { [key: string]: any };
type ObjectOrFunction = AnyObject | AnyFunction;
export default class CubeTexture extends THREE.CubeTexture {
  static format = {
    direct_s: ['lf', 'rt', 'up', 'dn', 'ft', 'bk'],
    coord_s: ['px', 'nx', 'py', 'ny', 'pz', 'nz'],
    coord_m: ['xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg'],
  };
  // @ts-ignore
  loadAsync = async (options: { assetForDirection: ObjectOrFunction; directions?: string[] }) => {
    throw new Error("loadAsync is not implemented");
  };
}
