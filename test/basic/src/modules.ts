/**
 * This is a module. Unfortunately TypeScript does not parse comments above modules.
 */
export module MyModule
{
    /**
     * This is an object literal.
     */
    export var object = {
        /**
         * An object literal value.
         */
        name: 'Test',

        /**
         * An object literal function.
         */
        print: function(value:string) {
            console.log(value);
        }
    };


    export module MySubmodule
    {

    }
}