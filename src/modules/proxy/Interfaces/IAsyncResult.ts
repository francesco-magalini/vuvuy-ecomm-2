///<reference path='../Exceptions/ProxyError.ts'/>
///<reference path='../FunctionQueueHelper.ts'/>

module Commerce.Proxy {
    "use strict";

    /**
     * Represents the result of asynchronous calls.
     */
    export interface IAsyncResult<T> {
        /**
         * This function should be called when an async call succeeds.
         *
         * @param {(result: T) => void} callback The callback function.
         */
        done(callback: (result: T) => void): IAsyncResult<T>;

        /**
         * This function should be called when an error happens on an async call.
         *
         * @param {(error: ProxyError[]) => void} error The error callback function.
         */
        fail(callback: (error: ProxyError[]) => void): IAsyncResult<T>;

        /**
         * Calls a defined callback function on the result element, and returns a new async result with the mapped result.
         *
         * @param {(value: T) => U} mapFunction The function used to map the async result result from IAsyncResult<T> to IAsyncResult<U>.
         * @return {IAsyncResult<U>} The mapped async result.
         */
        map<U>(mapFunction: (value: T) => U): IAsyncResult<U>;
    }

    /**
     * Represents a null result.
     */
    export interface NullResult {
    }

    /**
     * Represents the result of result-less asynchronous calls.
     */
    export interface IVoidAsyncResult extends IAsyncResult<NullResult> {
        /**
         * This function should be called when an async call succeeds.
         *
         * @param {() => void} callback The callback function.
         */
        done(callback: () => void): IVoidAsyncResult;

        /**
         * This function should be called when an error happens on an async call.
         *
         * @param {(errors: ProxyError[]) => void} error The error callback function.
         */
        fail(callback: (errors: ProxyError[]) => void): IVoidAsyncResult;

        /**
         * Calls a defined callback function and returns a new async result with the mapped result.
         *
         * @param {() => U} mapFunction The function used to map the async result result from IAsyncResult<T> to IAsyncResult<U>.
         * @return {IAsyncResult<U>} The mapped async result.
         */
        map<U>(mapFunction: () => U): IAsyncResult<U>;
    }

    /**
     * Provides an interface for a cancelable result.
     */
    export interface ICancelableResult {
        canceled: boolean;
    }

    /**
     * Worker queue item.
     */
    interface WorkerQueueItem {
        asyncCall: () => IAsyncResult<any>;
        asyncResult: AsyncResult<any>;
    }
}