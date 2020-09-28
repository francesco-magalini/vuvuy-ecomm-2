module Commerce.Proxy.Common {
    "use strict";

    /**
     * Interface for data service request factory
     */
    export interface IDataServiceRequestFactory {

        /**
         * Locale for the current data service request factory.
         */
        locale: string;

        /**
         * Create a request.
         * @param {IDataServiceQueryInternal} dataServiceQuery The data service query.
         * @return {IDataServiceRequest} The data service request.
         */
        create(dataServiceQuery: IDataServiceQueryInternal): IDataServiceRequest;
    }
}