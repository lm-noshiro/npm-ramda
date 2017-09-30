import { Dictionary, List, Property } from "./$types";
declare const pluck: pluck_00;
type pluck_00 = {
    /**
     * Returns a new list by plucking the same named property off all objects in
     * the list supplied.
     *
     * `pluck` will work on
     * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
     * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
     *
     * @func
     * @memberOf R
     * @since v0.1.0
     * @category List
     * @sig Functor f => k -> f {k: v} -> f v
     * @param {Number|String} key The key name to pluck off of each object.
     * @param {Array} f The array or functor to consider.
     * @return {Array} The list of values for the given key.
     * @see R.props
     * @example
     *
     *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
     *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
     *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
     * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
     * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
     */
    (index: number): pluck_list_10;
    <T, K extends keyof T>(key: K): pluck_keyof_10<T, K>;
    <K extends string>(key: K): pluck_record_10<K>;
    <K extends string>(key: K): pluck_object_10<K>;
    (key: Property): pluck_general_10;
    <U>(index: number, list: List<List<U>>): pluck_list_11<U>;
    <T, K extends keyof T>(key: K, list: List<T>): pluck_keyof_11<T, K>;
    <K extends string, V, T extends Record<K, V>>(key: K, list: List<T>): pluck_record_11<K, V, T>;
    <K extends string, T extends Dictionary<Dictionary<any>>>(key: K, object: T): pluck_object_11<K, T>;
    (key: Property, list: List<any>): pluck_general_11;
};
type pluck_list_10 = {
    <U>(list: List<List<U>>): pluck_list_11<U>;
};
type pluck_keyof_10<T, K extends keyof T> = {
    (list: List<T>): pluck_keyof_11<T, K>;
};
type pluck_record_10<K extends string> = {
    <V, T extends Record<K, V>>(list: List<T>): pluck_record_11<K, V, T>;
};
type pluck_object_10<K extends string> = {
    <T extends Dictionary<Dictionary<any>>>(object: T): pluck_object_11<K, T>;
};
type pluck_general_10 = {
    (list: List<any>): pluck_general_11;
};
type pluck_list_11<U> = U[];
type pluck_keyof_11<T, K extends keyof T> = Array<T[K]>;
type pluck_record_11<K extends string, V, T extends Record<K, V>> = Array<T[K]>;
type pluck_object_11<K extends string, T extends Dictionary<Dictionary<any>>> = {
    [P in keyof T]: T[P][K];
};
type pluck_general_11 = any[];
export = pluck;
