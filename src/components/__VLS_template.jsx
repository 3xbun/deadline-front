export default (await import('vue')).defineComponent({
setup() {
return {};
},
});
function __VLS_template() {
import * as __VLS_types from './__VLS_types.js';
const __VLS_types: typeof import('./__VLS_types.js');

const __VLS_options = {
...({
setup() {
return {};
},
}),
};

const __VLS_name = (await import('./__VLS_types.js')).getNameOption({
setup() {
return {};
},
} as const);
let __VLS_ctx!: __VLS_types.PickNotAny<__VLS_Ctx, {}> & InstanceType<__VLS_types.PickNotAny<typeof __VLS_component, new () => {}>> & {};
let __VLS_vmUnwrap!: typeof __VLS_options & { components: {}; };
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_component extends { components: infer C; } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctx>;
let __VLS_selfComponent!: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_selfComponent, keyof typeof __VLS_otherComponents>;
__VLS_components. /* __VLS_.SearchTexts.Components */;
({} as __VLS_types.GlobalAttrs). /* __VLS_.SearchTexts.GlobalAttrs */;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
{
<div></div>;
{
<div class={"\u0063\u0061\u0072\u0064"}></div>;
{
<div class={"\u0069\u006d\u0067"}></div>;
{
<img src={"\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0076\u0069\u0061\u002e\u0070\u006c\u0061\u0063\u0065\u0068\u006f\u006c\u0064\u0065\u0072\u002e\u0063\u006f\u006d\u002f\u0031\u0035\u0030"} />;
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
let __VLS_component!: typeof import('./Timeline.vue')['default'];
