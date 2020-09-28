module Commerce.Proxy {
    "use strict";

    /**
     * Class represents retail server request factory.
     */
    export class RetailServerRequestFactory implements Common.IDataServiceRequestFactory {

        public locale: string = "";

        private _serverUri: string;
        private _operatingUnitNumber: string;
        private _authToken: string;

        constructor(serverUri: string, operatingUnitNumber: string, authToken: string) {
            this._serverUri = serverUri;
            this._operatingUnitNumber = operatingUnitNumber;
            this._authToken = authToken;
        }

        /**
         * Create a request.
         * @param {IDataServiceQueryInternal} dataServiceQuery The data service query.
         * @return {IDataServiceRequest} The data service request.
         */
        public create(dataServiceQuery: Common.IDataServiceQueryInternal): Common.IDataServiceRequest {
            return new DataServiceRequest(this._serverUri, dataServiceQuery, this._operatingUnitNumber, this._authToken, this.locale);
        }
    }
}