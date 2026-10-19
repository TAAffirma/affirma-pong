import{s,a}from"./sha256-CyjdDzHM.js";import"./main-BTgfUOuB.js";import"./childCommunication-DNz5EZLB.js";/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */async function h(e,i="SHA-1",n="hex"){let t;switch(i){case"SHA-1":{t=new s;break}case"SHA-256":{t=new a;break}}return t.update(e).digest(n)}async function g(e){const n=`blob ${e.byteLength.toString()}\0`;return new s().update(n).update(e).digest("hex")}export{g as gitHashFile,h as hashFile};
