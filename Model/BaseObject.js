// import * as lodash from 'lodash';
// export abstract class BaseObject<T> {
//     // constructor(partialObject?: T) {
//     //     (<any>Object).assign(this, partialObject);
//     // }
// }
// // import * as lodash from 'lodash';
// // export default abstract class BaseObject {
// //     [key: string]: BaseObject;
// //     constructor(partialObject?: BaseObject) {
// //         this.mergeDeep(this, partialObject);
// //     }
// //     private mergeDeep(target: BaseObject, ...sources: BaseObject[]): BaseObject {
// //         if (!sources.length) {
// //             return target;
// //         };
// //         const source = sources.shift();
// //         if (this.isObject(target) && this.isObject(source)) {
// //             for (const key in source) {
// //                 if (this.isObject(source[key])) {
// //                     if (!target[key]) {
// //                         this.assign(target, { [key]: {} });
// //                     }
// //                     this.mergeDeep(target[key], source[key]);
// //                 } else {
// //                     this.assign(target, { [key]: source[key] });
// //                 }
// //             }
// //         }
// //         return this.mergeDeep(target, ...sources);
// //     }
// //     private isObject(item: BaseObject) : boolean {
// //         return (item && typeof item === 'object' && !Array.isArray(item));
// //     }
// //     private assign(...objects: BaseObject[]): BaseObject {
// //         return (<any>Object).assign(this, objects);
// //     };
// // } 

//# sourceMappingURL=BaseObject.js.map
