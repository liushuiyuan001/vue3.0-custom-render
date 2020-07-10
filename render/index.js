import { createRenderer } from '@vue/runtime-core';
import { nodeOps } from './nodeOps';
import {  patchProp } from './patchProp.js';
export const initRuntimeCanvas  = () => {
    const renderer = createRenderer({
       ...nodeOps,
       patchProp,
    })
    
    return {
        renderer
    }
}



