import { e as defineNuxtRouteMiddleware } from './server.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';

const redirectIfAuthenticated = defineNuxtRouteMiddleware((to, from) => {
});

export { redirectIfAuthenticated as default };
//# sourceMappingURL=redirectIfAuthenticated-BuHtXJYY.mjs.map
