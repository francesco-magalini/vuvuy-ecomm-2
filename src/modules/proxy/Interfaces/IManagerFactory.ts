module Commerce.Proxy {
    "use strict";

    /**
     * Instance of client proxy.
     */
    export var Factory: IManagerFactory;

    export interface IManagerFactory {
        /**
         * Creates an instance of given entity manager.
         *
         * @param {string} entityManagerInterface The interface name.
         */
        getManager<T>(entityManagerInterface: string): T;

        /**
         * Creates an instance of given entity manager.
         *
         * @param {string} entityManagerInterface The interface name.
         * @param {any} [callerContext] The optional reference to caller object.
         */
        GetManager(entityManagerInterface: string, callerContext?: any): any;

        /**
         * Updates the server Uri of the commerce context.
         *
         * @param {string} serverUri The new URI.
         */
        updateServerUriInCommerceContext(retailServerUri: string);
    }
}