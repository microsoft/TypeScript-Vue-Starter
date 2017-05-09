// This is necessary so that TypeScript doesn't
// give an error (from .ts files) when importing a .vue file.
// This *may* be removable in the future pending language service plugins for Vue.
declare module "*.vue" {
    import Vue from "vue";

    const component: typeof Vue;
    export default component;
}