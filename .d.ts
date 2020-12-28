declare module 'size-plugin' {
    import { Plugin } from 'webpack';

    interface SizePluginOptions {
        writeFile?: boolean;
    }

    class SizePlugin extends Plugin {
        // 使用了 constructor 就报错：no-useless-constructor: Cannot read property 'body' of null
        constructor(options?: SizePluginOptions);
    }

    export = SizePlugin;
}
