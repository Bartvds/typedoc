/**
 * This is a simple interface.
 */
export interface INameInterface
{
    /**
     * This is a interface member of INameInterface.
     *
     * It should be inherited by all subinterfaces.
     */
    name:string;

    /**
     * This is a interface function of INameInterface.
     *
     * It should be inherited by all subinterfaces.
     */
    getName():string;
}


/**
 * This is a simple interface.
 */
export interface IPrintInterface
{
    /**
     * This is a interface function of IPrintInterface
     *
     * It should be inherited by all subinterfaces.
     */
    print(value:string):void;
}


/**
 * This is a interface inheriting from two other interfaces.
 */
export interface IPrintNameInterface extends INameInterface, IPrintInterface
{
    /**
     * This is a interface function of IPrintNameInterface
     */
    printName():void;
}


/**
 * This is a simple base class.
 */
export class BaseClass implements INameInterface
{
    /**
     * This is a simple public member.
     */
    public name:string;

    /**
     * This is a static member.
     *
     * Static members should not be inherited.
     */
    static instance:BaseClass;

    /**
     * This is an instance member of an internal class.
     */
    private internalClass:InternalClass;


    constructor(name:string);
    constructor(source:BaseClass);
    constructor() {
        if (arguments.length > 0) {
            if (typeof arguments[0] == 'string') {
                this.name = arguments[0];
            } else if (arguments[0] instanceof BaseClass) {
                this.name = arguments[0].name;
            }
        }

        this.checkName();
    }


    /**
     * This is a simple member function.
     *
     * It should be inherited by all subclasses.
     *
     * @returns Return the name.
     */
    public getName():string {
        return this.name;
    }


    /**
     * This is a simple member function.
     *
     * It should be inherited by all subclasses.
     *
     * @param name The new name.
     */
    public setName(name:string) {
        this.name = name;
        this.checkName();
    }


    /**
     * This is a private function.
     */
    private checkName() {

    }


    /**
     * This is a static function.
     *
     * Static functions should not be inherited.
     *
     * @returns An instance of BaseClass.
     */
    static getInstance():BaseClass {
        return BaseClass.instance;
    }
}


/**
 * This is an internal class, it is not exported.
 */
class InternalClass
{
    constructor(options:{name:string}) {

    }
}


/**
 * This is a class that extends another class.
 *
 * This class has no own constructor, so its constructor should be inherited
 * from BaseClass.
 */
export class SubClassA extends BaseClass implements IPrintNameInterface
{
    /**
     * This is a simple interface function.
     */
    public print(value:string):void {
        console.log(value);
    }

    public printName():void {
        this.print(this.getName());
    }
}


/**
 * This is a class that extends another class.
 *
 * The constructor of the original class should be overwritten.
 */
export class SubClassB extends BaseClass
{
    constructor(name:string) {
        super(name);
    }
}


/**
 * This is a generic class.
 */
export class GenericClass<T>
{
    public value:T;


    public setValue(value:T) {
        this.value = value;
    }


    public getValue():T {
        return this.value;
    }
}