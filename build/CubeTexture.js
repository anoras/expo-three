import THREE from './Three';
export default class CubeTexture extends THREE.CubeTexture {
    constructor() {
        super(...arguments);
        // @ts-ignore
        this.loadAsync = async (options) => {
            throw new Error("loadAsync is not implemented");
        };
    }
}
CubeTexture.format = {
    direct_s: ['lf', 'rt', 'up', 'dn', 'ft', 'bk'],
    coord_s: ['px', 'nx', 'py', 'ny', 'pz', 'nz'],
    coord_m: ['xpos', 'xneg', 'ypos', 'yneg', 'zpos', 'zneg'],
};
//# sourceMappingURL=CubeTexture.js.map