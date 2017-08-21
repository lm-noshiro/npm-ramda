import { List } from "./$types";
declare const prepend: prepend_00;
type prepend_00 = {
    /**
     * Returns a new list with the given element at the front, followed by the
     * contents of the list.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig a -> [a] -> [a]
     * @param {*} el The item to add to the head of the output list.
     * @param {Array} list The array to add to the tail of the output list.
     * @return {Array} A new array.
     * @see R.append
     * @example
     *
     *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
     */
    <T>(value: T): prepend_10<T>;
    <$SEL extends "1">(): <T>(value: T) => prepend_10<T>;
    <$SEL extends "11">(): <T, U>(value: T, list: List<U>) => prepend_11<T, U>;
    <T, U>(value: T, list: List<U>): prepend_11<T, U>;
};
type prepend_10<T> = {
    <U>(list: List<U>): prepend_11<T, U>;
};
type prepend_11<T, U> = Array<T | U>;
export = prepend;
