declare global {
    interface SymbolConstructor {
        readonly observable: symbol;
    }
}
declare const $$observable: string | symbol;
export default $$observable;
