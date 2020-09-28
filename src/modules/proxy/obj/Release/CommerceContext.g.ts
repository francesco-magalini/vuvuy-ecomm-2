module Commerce.Proxy {
    import IDataServiceRequestFactory = Common.IDataServiceRequestFactory;
    import IDataServiceRequest = Common.IDataServiceRequest;
    import DataServiceQuery = Common.DataServiceQuery;
    import ODataOperationParameters = Common.ODataOperationParameters;
  
    export class CommerceContext {

        private _dataServiceRequestFactory: IDataServiceRequestFactory;

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory) {
            this._dataServiceRequestFactory = dataServiceRequestFactory;
        }

        /**
         * The matched retail server api version.
         */
        public static ApiVersion: string = "7.3";

        /**
         * The indicator for not logging the transaction in database.
         */
        public static DoNotLogTransactionId: string = "-1";

        public get dataServiceRequestFactory(): IDataServiceRequestFactory {
            return this._dataServiceRequestFactory;
        }

        public set dataServiceRequestFactory(dataServiceRequestFactory: IDataServiceRequestFactory) {
            this._dataServiceRequestFactory = dataServiceRequestFactory;
        }

        // Data service query for unbinded actions.
        public storeOperations(): StoreOperationsDataServiceQuery {
            return new StoreOperationsDataServiceQuery(this._dataServiceRequestFactory);
        }

        // Entities
        
        public categories(recordId?: number): CategoriesDataServiceQuery {
            var key = (recordId) ? { RecordId: recordId } : null;

            return new CategoriesDataServiceQuery(this._dataServiceRequestFactory, "Categories", "Category", Entities.CategoryClass, key);
        }
        public carts(id?: string): CartsDataServiceQuery {
            var key = (id) ? { Id: id } : null;

            return new CartsDataServiceQuery(this._dataServiceRequestFactory, "Carts", "Cart", Entities.CartClass, key);
        }
        public customers(accountNumber?: string): CustomersDataServiceQuery {
            var key = (accountNumber) ? { AccountNumber: accountNumber } : null;

            return new CustomersDataServiceQuery(this._dataServiceRequestFactory, "Customers", "Customer", Entities.CustomerClass, key);
        }
        public employees(staffId?: string): EmployeesDataServiceQuery {
            var key = (staffId) ? { StaffId: staffId } : null;

            return new EmployeesDataServiceQuery(this._dataServiceRequestFactory, "Employees", "Employee", Entities.EmployeeClass, key);
        }
        public checklists(recordId?: number): ChecklistsDataServiceQuery {
            var key = (recordId) ? { RecordId: recordId } : null;

            return new ChecklistsDataServiceQuery(this._dataServiceRequestFactory, "Checklists", "Checklist", Entities.ChecklistClass, key);
        }
        public salesOrders(id?: string): SalesOrdersDataServiceQuery {
            var key = (id) ? { Id: id } : null;

            return new SalesOrdersDataServiceQuery(this._dataServiceRequestFactory, "SalesOrders", "SalesOrder", Entities.SalesOrderClass, key);
        }
        public shifts(shiftId?: number, terminalId?: string): ShiftsDataServiceQuery {
            var key = (shiftId && terminalId) ? { ShiftId: shiftId, TerminalId: terminalId } : null;

            return new ShiftsDataServiceQuery(this._dataServiceRequestFactory, "Shifts", "Shift", Entities.ShiftClass, key);
        }
        public stockCountJournals(journalId?: string): StockCountJournalsDataServiceQuery {
            var key = (journalId) ? { JournalId: journalId } : null;

            return new StockCountJournalsDataServiceQuery(this._dataServiceRequestFactory, "StockCountJournals", "StockCountJournal", Entities.StockCountJournalClass, key);
        }
        public orgUnits(orgUnitNumber?: string): OrgUnitsDataServiceQuery {
            var key = (orgUnitNumber) ? { OrgUnitNumber: orgUnitNumber } : null;

            return new OrgUnitsDataServiceQuery(this._dataServiceRequestFactory, "OrgUnits", "OrgUnit", Entities.OrgUnitClass, key);
        }
        public products(recordId?: number): ProductsDataServiceQuery {
            var key = (recordId) ? { RecordId: recordId } : null;

            return new ProductsDataServiceQuery(this._dataServiceRequestFactory, "Products", "Product", Entities.ProductClass, key);
        }
        public catalogs(recordId?: number): CatalogsDataServiceQuery {
            var key = (recordId) ? { RecordId: recordId } : null;

            return new CatalogsDataServiceQuery(this._dataServiceRequestFactory, "Catalogs", "ProductCatalog", Entities.ProductCatalogClass, key);
        }
        public commerceLists(id?: number): CommerceListsDataServiceQuery {
            var key = (id) ? { Id: id } : null;

            return new CommerceListsDataServiceQuery(this._dataServiceRequestFactory, "CommerceLists", "CommerceList", Entities.CommerceListClass, key);
        }
        public productLists(id?: string): ProductListsDataServiceQuery {
            var key = (id) ? { Id: id } : null;

            return new ProductListsDataServiceQuery(this._dataServiceRequestFactory, "ProductLists", "ProductList", Entities.ProductListClass, key);
        }
        public recommendations(id?: string): RecommendationsDataServiceQuery {
            var key = (id) ? { Id: id } : null;

            return new RecommendationsDataServiceQuery(this._dataServiceRequestFactory, "Recommendations", "Recommendation", Entities.RecommendationClass, key);
        }
        public transferOrders(orderId?: string): TransferOrdersDataServiceQuery {
            var key = (orderId) ? { OrderId: orderId } : null;

            return new TransferOrdersDataServiceQuery(this._dataServiceRequestFactory, "TransferOrders", "TransferOrder", Entities.TransferOrderClass, key);
        }
        public purchaseOrders(orderId?: string): PurchaseOrdersDataServiceQuery {
            var key = (orderId) ? { OrderId: orderId } : null;

            return new PurchaseOrdersDataServiceQuery(this._dataServiceRequestFactory, "PurchaseOrders", "PurchaseOrder", Entities.PurchaseOrderClass, key);
        }
        public pickingLists(orderId?: string): PickingListsDataServiceQuery {
            var key = (orderId) ? { OrderId: orderId } : null;

            return new PickingListsDataServiceQuery(this._dataServiceRequestFactory, "PickingLists", "PickingList", Entities.PickingListClass, key);
        }
        public warehouses(inventLocation?: string): WarehousesDataServiceQuery {
            var key = (inventLocation) ? { InventLocation: inventLocation } : null;

            return new WarehousesDataServiceQuery(this._dataServiceRequestFactory, "Warehouses", "Warehouse", Entities.WarehouseClass, key);
        }
        public scanResults(scannedText?: string): DataServiceQuery<Entities.ScanResult> {
            var key = (scannedText) ? { ScannedText: scannedText } : null;

            return new DataServiceQuery<Entities.ScanResult>(this._dataServiceRequestFactory, "ScanResults", "ScanResult", Entities.ScanResultClass, key);
        }
        public applicableOperations(id?: string): ApplicableOperationsDataServiceQuery {
            var key = (id) ? { Id: id } : null;

            return new ApplicableOperationsDataServiceQuery(this._dataServiceRequestFactory, "ApplicableOperations", "SalesOrderContextualOperationsMap", Entities.SalesOrderContextualOperationsMapClass, key);
        }
        public inventoryInboundOutboundDocuments(workDocumentId?: string): InventoryInboundOutboundDocumentsDataServiceQuery {
            var key = (workDocumentId) ? { WorkDocumentId: workDocumentId } : null;

            return new InventoryInboundOutboundDocumentsDataServiceQuery(this._dataServiceRequestFactory, "InventoryInboundOutboundDocuments", "InventoryInboundOutboundDocument", Entities.InventoryInboundOutboundDocumentClass, key);
        }
        public businessPartners(businessPartnerId?: string): BusinessPartnersDataServiceQuery {
            var key = (businessPartnerId) ? { BusinessPartnerId: businessPartnerId } : null;

            return new BusinessPartnersDataServiceQuery(this._dataServiceRequestFactory, "BusinessPartners", "BusinessPartner", Entities.BusinessPartnerClass, key);
        }
        public businessPartnerUsers(email?: string): DataServiceQuery<Entities.BusinessPartnerUser> {
            var key = (email) ? { Email: email } : null;

            return new DataServiceQuery<Entities.BusinessPartnerUser>(this._dataServiceRequestFactory, "BusinessPartnerUsers", "BusinessPartnerUser", Entities.BusinessPartnerUserClass, key);
        }
        public suspendedCarts(id?: string): SuspendedCartsDataServiceQuery {
            var key = (id) ? { Id: id } : null;

            return new SuspendedCartsDataServiceQuery(this._dataServiceRequestFactory, "SuspendedCarts", "SuspendedCart", Entities.SuspendedCartClass, key);
        }
    }

    export class StoreOperationsDataServiceQuery extends DataServiceQuery<any> {
        constructor(dataServiceRequestFactory: IDataServiceRequestFactory) {
            super(dataServiceRequestFactory);
        }

        // Operations
        
        public roundAmountByTenderType(amount: number, tenderTypeId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { amount: amount, tenderTypeId: tenderTypeId };

            return this.createDataServiceRequestForOperation('RoundAmountByTenderType', true, '', 'false',  oDataOperationParameters);
        }
        
        public voidSuspendedTransactions(suspendedCartIds: string[], shiftId: number, shiftTerminalId: string, reasonCodeLines: Entities.ReasonCodeLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { suspendedCartIds: suspendedCartIds, shiftId: shiftId, shiftTerminalId: shiftTerminalId, reasonCodeLines: reasonCodeLines };

            return this.createDataServiceRequestForOperation('VoidSuspendedTransactions', true, '', '',  oDataOperationParameters);
        }
        
        public getMerchantPropertiesByServiceAccountId(serviceAccountIds: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { serviceAccountIds: serviceAccountIds };

            return this.createDataServiceRequestForOperation('GetMerchantPropertiesByServiceAccountId', true, Entities.PaymentMerchantInformationClass, 'true',  oDataOperationParameters);
        }
        
        public getStoreSafes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetStoreSafes', true, Entities.StoreSafeClass, 'true',  oDataOperationParameters);
        }
        
        public getShiftReconciliationLines(shiftReconciliationLineRetrievalCriteria: Entities.ShiftReconciliationLineRetrievalCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftReconciliationLineRetrievalCriteria: shiftReconciliationLineRetrievalCriteria };

            return this.createDataServiceRequestForOperation('GetShiftReconciliationLines', true, Entities.ShiftReconciliationLineClass, 'true',  oDataOperationParameters);
        }
        
        public reconcileLines(shiftReconciliationLines: Entities.ShiftReconciliationLine[], Description: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftReconciliationLines: shiftReconciliationLines, Description: Description };

            return this.createDataServiceRequestForOperation('ReconcileLines', true, '', '',  oDataOperationParameters);
        }
        
        public undoReconciliation(shiftReconciliationLines: Entities.ShiftReconciliationLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftReconciliationLines: shiftReconciliationLines };

            return this.createDataServiceRequestForOperation('UndoReconciliation', true, '', '',  oDataOperationParameters);
        }
        
        public getReceiptMasks(receiptTransactionType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { receiptTransactionType: receiptTransactionType };

            return this.createDataServiceRequestForOperation('GetReceiptMasks', true, Entities.ReceiptMaskClass, 'true',  oDataOperationParameters);
        }
        
        public getSearchSuggestions(searchSuggestionCriteria: Entities.SearchSuggestionCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchSuggestionCriteria: searchSuggestionCriteria };

            return this.createDataServiceRequestForOperation('GetSearchSuggestions', true, Entities.SearchSuggestionClass, 'true',  oDataOperationParameters);
        }
        
        public startSession(transactionId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId };

            return this.createDataServiceRequestForOperation('StartSession', true, '', '',  oDataOperationParameters);
        }
        
        public endSession(transactionId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId };

            return this.createDataServiceRequestForOperation('EndSession', true, '', '',  oDataOperationParameters);
        }
        
        public activateDevice(deviceNumber: string, terminalId: string, deviceId: string, forceActivate: boolean, deviceType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { deviceNumber: deviceNumber, terminalId: terminalId, deviceId: deviceId, forceActivate: forceActivate, deviceType: deviceType };

            return this.createDataServiceRequestForOperation('ActivateDevice', true, Entities.DeviceActivationResultClass, 'false',  oDataOperationParameters);
        }
        
        public massActivateDevice(deviceNumber: string, terminalId: string, deviceId: string, deviceType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { deviceNumber: deviceNumber, terminalId: terminalId, deviceId: deviceId, deviceType: deviceType };

            return this.createDataServiceRequestForOperation('MassActivateDevice', true, Entities.DeviceActivationResultClass, 'false',  oDataOperationParameters);
        }
        
        public deactivateDevice(transactionId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId };

            return this.createDataServiceRequestForOperation('DeactivateDevice', true, '', '',  oDataOperationParameters);
        }
        
        public createHardwareStationToken(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('CreateHardwareStationToken', true, Entities.CreateHardwareStationTokenResultClass, 'false',  oDataOperationParameters);
        }
        
        public validateHardwareStationToken(deviceNumber: string, hardwareStationToken: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { deviceNumber: deviceNumber, hardwareStationToken: hardwareStationToken };

            return this.createDataServiceRequestForOperation('ValidateHardwareStationToken', true, Entities.ValidateHardwareStationTokenResultClass, 'false',  oDataOperationParameters);
        }
        
        public getBarcodeById(barcodeId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { barcodeId: barcodeId };

            return this.createDataServiceRequestForOperation('GetBarcodeById', true, Entities.BarcodeClass, 'false',  oDataOperationParameters);
        }
        
        public getButtonGridById(buttonGridId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { buttonGridId: buttonGridId };

            return this.createDataServiceRequestForOperation('GetButtonGridById', true, Entities.ButtonGridClass, 'false',  oDataOperationParameters);
        }
        
        public getButtonGridsByIds(getButtonGridsByIdsCriteria: Entities.GetButtonGridsByIdsCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { getButtonGridsByIdsCriteria: getButtonGridsByIdsCriteria };

            return this.createDataServiceRequestForOperation('GetButtonGridsByIds', true, Entities.ButtonGridClass, 'true',  oDataOperationParameters);
        }
        
        public getCardTypes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCardTypes', true, Entities.CardTypeInfoClass, 'true',  oDataOperationParameters);
        }
        
        public resolveCardTypes(cardNumberPrefix: string, cardType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cardNumberPrefix: cardNumberPrefix, cardType: cardType };

            return this.createDataServiceRequestForOperation('ResolveCardTypes', true, Entities.CardTypeInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getSupportedPaymentCardTypes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetSupportedPaymentCardTypes', true, '', 'true',  oDataOperationParameters);
        }
        
        public getCities(countryRegionId: string, stateProvinceId: string, countyId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { countryRegionId: countryRegionId, stateProvinceId: stateProvinceId, countyId: countyId };

            return this.createDataServiceRequestForOperation('GetCities', true, Entities.CityInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getCountryRegionsForShipping(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCountryRegionsForShipping', false, Entities.CountryRegionInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getCountryRegionsByLanguageId(languageId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { languageId: languageId };

            return this.createDataServiceRequestForOperation('GetCountryRegionsByLanguageId', true, Entities.CountryRegionInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getCounties(countryRegionId: string, stateProvinceId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { countryRegionId: countryRegionId, stateProvinceId: stateProvinceId };

            return this.createDataServiceRequestForOperation('GetCounties', true, Entities.CountyInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getCreditMemoById(creditMemoId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { creditMemoId: creditMemoId };

            return this.createDataServiceRequestForOperation('GetCreditMemoById', true, Entities.CreditMemoClass, 'false',  oDataOperationParameters);
        }
        
        public getDownloadInterval(dataStoreName: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { dataStoreName: dataStoreName };

            return this.createDataServiceRequestForOperation('GetDownloadInterval', true, '', 'false',  oDataOperationParameters);
        }
        
        public getTerminalDataStoreName(terminalId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { terminalId: terminalId };

            return this.createDataServiceRequestForOperation('GetTerminalDataStoreName', true, '', 'false',  oDataOperationParameters);
        }
        
        public getDownloadLink(dataStoreName: string, downloadSessionId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { dataStoreName: dataStoreName, downloadSessionId: downloadSessionId };

            return this.createDataServiceRequestForOperation('GetDownloadLink', true, '', 'false',  oDataOperationParameters);
        }
        
        public getDataDownloadParametersByTerminal(TerminalDataDownloadRequestInfo: Entities.TerminalDataDownloadRequestInfo): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { TerminalDataDownloadRequestInfo: TerminalDataDownloadRequestInfo };

            return this.createDataServiceRequestForOperation('GetDataDownloadParametersByTerminal', true, Entities.DataDownloadParametersClass, 'false',  oDataOperationParameters);
        }
        
        public getDataUploadParametersByTerminal(TerminalDataUploadRequestInfo: Entities.TerminalDataUploadRequestInfo): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { TerminalDataUploadRequestInfo: TerminalDataUploadRequestInfo };

            return this.createDataServiceRequestForOperation('GetDataUploadParametersByTerminal', true, Entities.DataUploadParametersClass, 'false',  oDataOperationParameters);
        }
        
        public getDownloadSessions(dataStoreName: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { dataStoreName: dataStoreName };

            return this.createDataServiceRequestForOperation('GetDownloadSessions', true, Entities.DownloadSessionClass, 'true',  oDataOperationParameters);
        }
        
        public getInitialDownloadSessions(dataStoreName: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { dataStoreName: dataStoreName };

            return this.createDataServiceRequestForOperation('GetInitialDownloadSessions', true, Entities.DownloadSessionClass, 'true',  oDataOperationParameters);
        }
        
        public getUploadJobDefinitions(dataStoreName: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { dataStoreName: dataStoreName };

            return this.createDataServiceRequestForOperation('GetUploadJobDefinitions', true, '', 'true',  oDataOperationParameters);
        }
        
        public getUploadInterval(dataStoreName: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { dataStoreName: dataStoreName };

            return this.createDataServiceRequestForOperation('GetUploadInterval', true, '', 'false',  oDataOperationParameters);
        }
        
        public postOfflineTransactions(offlineTransactionForMPOS: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { offlineTransactionForMPOS: offlineTransactionForMPOS };

            return this.createDataServiceRequestForOperation('PostOfflineTransactions', true, '', 'false',  oDataOperationParameters);
        }
        
        public getRetailTrialPlanOffer(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetRetailTrialPlanOffer', true, '', 'false',  oDataOperationParameters);
        }
        
        public getLatestNumberSequence(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetLatestNumberSequence', true, Entities.NumberSequenceSeedDataClass, 'true',  oDataOperationParameters);
        }
        
        public getReceiptNumberResetInfo(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetReceiptNumberResetInfo', true, Entities.ReceiptNumberResetInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getLoyaltyRewardPointActivityTimeline(cardNumber: string, rewardPointId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cardNumber: cardNumber, rewardPointId: rewardPointId };

            return this.createDataServiceRequestForOperation('GetLoyaltyRewardPointActivityTimeline', true, Entities.LoyaltyRewardPointActivityClass, 'true',  oDataOperationParameters);
        }
        
        public getLoyaltyRewardPointActivityTimelineForExpiredPoints(cardNumber: string, rewardPointId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cardNumber: cardNumber, rewardPointId: rewardPointId };

            return this.createDataServiceRequestForOperation('GetLoyaltyRewardPointActivityTimelineForExpiredPoints', true, Entities.LoyaltyRewardPointActivityClass, 'true',  oDataOperationParameters);
        }
        
        public calculateTotalCurrencyAmount(currenciesAmount: Entities.CurrencyRequest[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { currenciesAmount: currenciesAmount };

            return this.createDataServiceRequestForOperation('CalculateTotalCurrencyAmount', true, Entities.CurrencyAmountClass, 'false',  oDataOperationParameters);
        }
        
        public getDiscountCode(discountCode: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { discountCode: discountCode };

            return this.createDataServiceRequestForOperation('GetDiscountCode', true, Entities.DiscountCodeClass, 'false',  oDataOperationParameters);
        }
        
        public getDiscountCodesByOfferId(offerId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { offerId: offerId };

            return this.createDataServiceRequestForOperation('GetDiscountCodesByOfferId', true, Entities.DiscountCodeClass, 'true',  oDataOperationParameters);
        }
        
        public getDiscountCodesByKeyword(keyword: string, activeDate: Date): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { keyword: keyword, activeDate: activeDate };

            return this.createDataServiceRequestForOperation('GetDiscountCodesByKeyword', true, Entities.DiscountCodeClass, 'true',  oDataOperationParameters);
        }
        
        public getDistricts(countryRegionId: string, stateProvinceId: string, countyId: string, cityName: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { countryRegionId: countryRegionId, stateProvinceId: stateProvinceId, countyId: countyId, cityName: cityName };

            return this.createDataServiceRequestForOperation('GetDistricts', true, Entities.DistrictInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getHardwareStationProfiles(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetHardwareStationProfiles', true, Entities.HardwareStationProfileClass, 'true',  oDataOperationParameters);
        }
        
        public getHardwareProfileById(hardwareProfileId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId };

            return this.createDataServiceRequestForOperation('GetHardwareProfileById', true, Entities.HardwareProfileClass, 'false',  oDataOperationParameters);
        }
        
        public getLocalizedStrings(languageId: string, textId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { languageId: languageId, textId: textId };

            return this.createDataServiceRequestForOperation('GetLocalizedStrings', true, Entities.LocalizedStringClass, 'true',  oDataOperationParameters);
        }
        
        public getOperationPermissionById(operationId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { operationId: operationId };

            return this.createDataServiceRequestForOperation('GetOperationPermissionById', true, Entities.OperationPermissionClass, 'false',  oDataOperationParameters);
        }
        
        public getReasonCodesById(reasonCodeGroupId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { reasonCodeGroupId: reasonCodeGroupId };

            return this.createDataServiceRequestForOperation('GetReasonCodesById', true, Entities.ReasonCodeClass, 'true',  oDataOperationParameters);
        }
        
        public searchReportDataSet(reportId: string, parameters: Entities.CommerceProperty[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { reportId: reportId, parameters: parameters };

            return this.createDataServiceRequestForOperation('SearchReportDataSet', true, Entities.ReportDataSetClass, 'false',  oDataOperationParameters);
        }
        
        public getReportDataSetById(reportId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { reportId: reportId };

            return this.createDataServiceRequestForOperation('GetReportDataSetById', true, Entities.ReportDataSetClass, 'false',  oDataOperationParameters);
        }
        
        public getSrsReportDataSet(reportId: string, parameters: Entities.CommerceProperty[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { reportId: reportId, parameters: parameters };

            return this.createDataServiceRequestForOperation('GetSrsReportDataSet', true, Entities.ReportDataSetClass, 'false',  oDataOperationParameters);
        }
        
        public getIncomeExpenseAccounts(incomeExpenseAccountType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { incomeExpenseAccountType: incomeExpenseAccountType };

            return this.createDataServiceRequestForOperation('GetIncomeExpenseAccounts', true, Entities.IncomeExpenseAccountClass, 'true',  oDataOperationParameters);
        }
        
        public getStateProvinces(countryRegionId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { countryRegionId: countryRegionId };

            return this.createDataServiceRequestForOperation('GetStateProvinces', true, Entities.StateProvinceInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getZipCodes(countryRegionId: string, stateProvinceId: string, countyId: string, cityName: string, district: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { countryRegionId: countryRegionId, stateProvinceId: stateProvinceId, countyId: countyId, cityName: cityName, district: district };

            return this.createDataServiceRequestForOperation('GetZipCodes', true, Entities.ZipCodeInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getAddressFromZipCode(countryRegionId: string, zipPostalCode: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { countryRegionId: countryRegionId, zipPostalCode: zipPostalCode };

            return this.createDataServiceRequestForOperation('GetAddressFromZipCode', true, Entities.ZipCodeInfoClass, 'true',  oDataOperationParameters);
        }
        
        public disassembleKitTransactions(kitTransaction: Entities.KitTransaction): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { kitTransaction: kitTransaction };

            return this.createDataServiceRequestForOperation('DisassembleKitTransactions', true, Entities.KitTransactionClass, 'false',  oDataOperationParameters);
        }
        
        public issueLoyaltyCard(loyaltyCard: Entities.LoyaltyCard): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { loyaltyCard: loyaltyCard };

            return this.createDataServiceRequestForOperation('IssueLoyaltyCard', true, Entities.LoyaltyCardClass, 'false',  oDataOperationParameters);
        }
        
        public getLoyaltyCard(cardNumber: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cardNumber: cardNumber };

            return this.createDataServiceRequestForOperation('GetLoyaltyCard', true, Entities.LoyaltyCardClass, 'false',  oDataOperationParameters);
        }
        
        public getCustomerLoyaltyCards(accountNumber: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { accountNumber: accountNumber };

            return this.createDataServiceRequestForOperation('GetCustomerLoyaltyCards', true, Entities.LoyaltyCardClass, 'true',  oDataOperationParameters);
        }
        
        public getLoyaltyCardTransactions(cardNumber: string, rewardPointId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cardNumber: cardNumber, rewardPointId: rewardPointId };

            return this.createDataServiceRequestForOperation('GetLoyaltyCardTransactions', true, Entities.LoyaltyCardTransactionClass, 'true',  oDataOperationParameters);
        }
        
        public getLoyaltyRewardPointsExpiringSoon(cardNumber: string, rewardPointId: string, daysToExpiry: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cardNumber: cardNumber, rewardPointId: rewardPointId, daysToExpiry: daysToExpiry };

            return this.createDataServiceRequestForOperation('GetLoyaltyRewardPointsExpiringSoon', true, Entities.LoyaltyRewardPointActivityClass, 'true',  oDataOperationParameters);
        }
        
        public searchJournalTransactions(searchCriteria: Entities.TransactionSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('SearchJournalTransactions', true, Entities.TransactionClass, 'true',  oDataOperationParameters);
        }
        
        public getGiftCard(giftCardId: string, tenderTypeId: string, pin: string, expirationMonth: number, expirationYear: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { giftCardId: giftCardId, tenderTypeId: tenderTypeId, pin: pin, expirationMonth: expirationMonth, expirationYear: expirationYear };

            return this.createDataServiceRequestForOperation('GetGiftCard', true, Entities.GiftCardClass, 'false',  oDataOperationParameters);
        }
        
        public getGiftCardInquiry(giftCardId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { giftCardId: giftCardId };

            return this.createDataServiceRequestForOperation('GetGiftCardInquiry', true, Entities.GiftCardClass, 'false',  oDataOperationParameters);
        }
        
        public getNonSalesTransactions(shiftId: string, shiftTerminalId: string, nonSalesTenderTypeValue: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftId: shiftId, shiftTerminalId: shiftTerminalId, nonSalesTenderTypeValue: nonSalesTenderTypeValue };

            return this.createDataServiceRequestForOperation('GetNonSalesTransactions', true, Entities.NonSalesTransactionClass, 'true',  oDataOperationParameters);
        }
        
        public createNonSalesTransaction(nonSalesTransaction: Entities.NonSalesTransaction): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { nonSalesTransaction: nonSalesTransaction };

            return this.createDataServiceRequestForOperation('CreateNonSalesTransaction', true, Entities.NonSalesTransactionClass, 'false',  oDataOperationParameters);
        }
        
        public createDropAndDeclareTransaction(dropAndDeclareTransaction: Entities.DropAndDeclareTransaction): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { dropAndDeclareTransaction: dropAndDeclareTransaction };

            return this.createDataServiceRequestForOperation('CreateDropAndDeclareTransaction', true, Entities.DropAndDeclareTransactionClass, 'false',  oDataOperationParameters);
        }
        
        public getTaxOverrides(overrideBy: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { overrideBy: overrideBy };

            return this.createDataServiceRequestForOperation('GetTaxOverrides', true, Entities.TaxOverrideClass, 'true',  oDataOperationParameters);
        }
        
        public getCustomerBalance(accountNumber: string, invoiceAccountNumber: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { accountNumber: accountNumber, invoiceAccountNumber: invoiceAccountNumber };

            return this.createDataServiceRequestForOperation('GetCustomerBalance', true, Entities.CustomerBalancesClass, 'false',  oDataOperationParameters);
        }
        
        public initiateLinkToExistingCustomer(email: string, ActivationToken: string, emailTemplateId: string, emailProperties: Entities.NameValuePair[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { email: email, ActivationToken: ActivationToken, emailTemplateId: emailTemplateId, emailProperties: emailProperties };

            return this.createDataServiceRequestForOperation('InitiateLinkToExistingCustomer', true, Entities.LinkToExistingCustomerResultClass, 'false',  oDataOperationParameters);
        }
        
        public finalizeLinkToExistingCustomer(email: string, ActivationToken: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { email: email, ActivationToken: ActivationToken };

            return this.createDataServiceRequestForOperation('FinalizeLinkToExistingCustomer', true, Entities.LinkToExistingCustomerResultClass, 'false',  oDataOperationParameters);
        }
        
        public unlinkFromExistingCustomer(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('UnlinkFromExistingCustomer', true, '', '',  oDataOperationParameters);
        }
        
        public getOfflineSyncStatus(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetOfflineSyncStatus', true, Entities.OfflineSyncStatsLineClass, 'true',  oDataOperationParameters);
        }
        
        public getOfflinePendingTransactionCount(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetOfflinePendingTransactionCount', true, '', 'false',  oDataOperationParameters);
        }
        
        public getOfflinePendingTransactionCountByShift(shiftId: number, shiftTerminalId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftId: shiftId, shiftTerminalId: shiftTerminalId };

            return this.createDataServiceRequestForOperation('GetOfflinePendingTransactionCountByShift', true, '', 'false',  oDataOperationParameters);
        }
        
        public updateDownloadSession(downloadSession: Entities.DownloadSession): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { downloadSession: downloadSession };

            return this.createDataServiceRequestForOperation('UpdateDownloadSession', true, '', 'false',  oDataOperationParameters);
        }
        
        public updateApplicationVersion(appVersion: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { appVersion: appVersion };

            return this.createDataServiceRequestForOperation('UpdateApplicationVersion', true, '', '',  oDataOperationParameters);
        }
        
        public getStorageAccessTokenForUpload(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetStorageAccessTokenForUpload', true, Entities.StorageAccessTokenClass, 'false',  oDataOperationParameters);
        }
        
        public getBusinessProcessModelLibraries(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetBusinessProcessModelLibraries', true, Entities.FrameworkClass, 'true',  oDataOperationParameters);
        }
        
        public getBusinessProcessModelLibrary(businessProcessModelFrameworkLineId: number, hierarchyDepth: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { businessProcessModelFrameworkLineId: businessProcessModelFrameworkLineId, hierarchyDepth: hierarchyDepth };

            return this.createDataServiceRequestForOperation('GetBusinessProcessModelLibrary', true, Entities.FrameworkClass, 'false',  oDataOperationParameters);
        }
        
        public searchTaskGuidesByTitle(businessProcessModelFrameworkLineId: number, taskGuideSearchText: string, queryTypeValue: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { businessProcessModelFrameworkLineId: businessProcessModelFrameworkLineId, taskGuideSearchText: taskGuideSearchText, queryTypeValue: queryTypeValue };

            return this.createDataServiceRequestForOperation('SearchTaskGuidesByTitle', true, Entities.TaskGuidesSearchResultClass, 'true',  oDataOperationParameters);
        }
        
        public generateBusinessProcessModelPackage(taskRecording: Entities.Recording): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { taskRecording: taskRecording };

            return this.createDataServiceRequestForOperation('GenerateBusinessProcessModelPackage', true, '', 'false',  oDataOperationParameters);
        }
        
        public downloadRecording(businessProcessModelLineId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { businessProcessModelLineId: businessProcessModelLineId };

            return this.createDataServiceRequestForOperation('DownloadRecording', true, Entities.RecordingClass, 'false',  oDataOperationParameters);
        }
        
        public loadRecordingFromFile(recordingUrl: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { recordingUrl: recordingUrl };

            return this.createDataServiceRequestForOperation('LoadRecordingFromFile', true, Entities.RecordingClass, 'false',  oDataOperationParameters);
        }
        
        public generateRecordingFile(taskRecording: Entities.Recording): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { taskRecording: taskRecording };

            return this.createDataServiceRequestForOperation('GenerateRecordingFile', true, '', 'false',  oDataOperationParameters);
        }
        
        public generateTrainingDocument(taskRecording: Entities.Recording): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { taskRecording: taskRecording };

            return this.createDataServiceRequestForOperation('GenerateTrainingDocument', true, '', 'false',  oDataOperationParameters);
        }
        
        public generateRecordingBundle(taskRecording: Entities.Recording): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { taskRecording: taskRecording };

            return this.createDataServiceRequestForOperation('GenerateRecordingBundle', true, '', 'false',  oDataOperationParameters);
        }
        
        public uploadRecording(taskRecording: Entities.Recording, businessProcessModelLineId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { taskRecording: taskRecording, businessProcessModelLineId: businessProcessModelLineId };

            return this.createDataServiceRequestForOperation('UploadRecording', true, '', '',  oDataOperationParameters);
        }
        
        public getAttributeDefinitions(attributeDefinitionCriteria: Entities.AttributeDefinitionCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { attributeDefinitionCriteria: attributeDefinitionCriteria };

            return this.createDataServiceRequestForOperation('GetAttributeDefinitions', true, Entities.AttributeDefinitionClass, 'true',  oDataOperationParameters);
        }
        
        public getAttributeGroupDefinitions(attributeGroupDefinitionCriteria: Entities.AttributeGroupDefinitionCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { attributeGroupDefinitionCriteria: attributeGroupDefinitionCriteria };

            return this.createDataServiceRequestForOperation('GetAttributeGroupDefinitions', true, Entities.AttributeGroupDefinitionClass, 'true',  oDataOperationParameters);
        }
        
        public saveFiscalTransaction(fiscalTransaction: Entities.FiscalTransaction): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { fiscalTransaction: fiscalTransaction };

            return this.createDataServiceRequestForOperation('SaveFiscalTransaction', true, '', '',  oDataOperationParameters);
        }
        
        public validatePrintReceiptCopyAllowed(salesOrderToPrint: Entities.SalesOrder): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesOrderToPrint: salesOrderToPrint };

            return this.createDataServiceRequestForOperation('ValidatePrintReceiptCopyAllowed', true, '', '',  oDataOperationParameters);
        }
        
        public registerAuditEvent(auditEvent: Entities.AuditEvent): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { auditEvent: auditEvent };

            return this.createDataServiceRequestForOperation('RegisterAuditEvent', true, '', '',  oDataOperationParameters);
        }
        
        public registerAndGetAuditEvent(auditEvent: Entities.AuditEvent): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { auditEvent: auditEvent };

            return this.createDataServiceRequestForOperation('RegisterAndGetAuditEvent', true, Entities.AuditEventClass, 'false',  oDataOperationParameters);
        }
        
        public getInventoryAvailableToPromise(productId: number, itemId: string, inventLocationId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productId: productId, itemId: itemId, inventLocationId: inventLocationId };

            return this.createDataServiceRequestForOperation('GetInventoryAvailableToPromise', true, Entities.InventoryAvailableToPromiseClass, 'true',  oDataOperationParameters);
        }
        
        public getSalesOrdersWithNoFiscalTransactions(storeNumber: string, terminalId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { storeNumber: storeNumber, terminalId: terminalId };

            return this.createDataServiceRequestForOperation('GetSalesOrdersWithNoFiscalTransactions', true, Entities.SalesOrderClass, 'true',  oDataOperationParameters);
        }
        
        public getNotifications(subscribedOperations: number[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { subscribedOperations: subscribedOperations };

            return this.createDataServiceRequestForOperation('GetNotifications', true, Entities.NotificationItemClass, 'true',  oDataOperationParameters);
        }
        
        public acknowledgeNotifications(lastPullDateTime: Date): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { lastPullDateTime: lastPullDateTime };

            return this.createDataServiceRequestForOperation('AcknowledgeNotifications', true, '', '',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationFiscalDocument(hardwareProfileId: string, functionalityProfileGroupId: string, fiscalIntegrationDocumentRetrievalCriteria: Entities.FiscalIntegrationDocumentRetrievalCriteria, connectorType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, functionalityProfileGroupId: functionalityProfileGroupId, fiscalIntegrationDocumentRetrievalCriteria: fiscalIntegrationDocumentRetrievalCriteria, connectorType: connectorType };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationFiscalDocument', true, Entities.FiscalIntegrationDocumentClass, 'false',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationNonFiscalDocument(hardwareProfileId: string, functionalityProfileGroupId: string, fiscalIntegrationDocumentRetrievalCriteria: Entities.FiscalIntegrationDocumentRetrievalCriteria, connectorType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, functionalityProfileGroupId: functionalityProfileGroupId, fiscalIntegrationDocumentRetrievalCriteria: fiscalIntegrationDocumentRetrievalCriteria, connectorType: connectorType };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationNonFiscalDocument', true, Entities.FiscalIntegrationDocumentClass, 'false',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationFiscalServiceSetupDocument(hardwareProfileId: string, functionalityProfileGroupId: string, connectorType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, functionalityProfileGroupId: functionalityProfileGroupId, connectorType: connectorType };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationFiscalServiceSetupDocument', true, Entities.FiscalIntegrationDocumentClass, 'false',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationFiscalServiceReadDataDocument(hardwareProfileId: string, functionalityProfileGroupId: string, connectorType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, functionalityProfileGroupId: functionalityProfileGroupId, connectorType: connectorType };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationFiscalServiceReadDataDocument', true, Entities.FiscalIntegrationDocumentClass, 'false',  oDataOperationParameters);
        }
        
        public processFiscalIntegrationFiscalServiceReadDataResult(hardwareProfileId: string, functionalityProfileGroupId: string, documentToProcess: string, connectorType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, functionalityProfileGroupId: functionalityProfileGroupId, documentToProcess: documentToProcess, connectorType: connectorType };

            return this.createDataServiceRequestForOperation('ProcessFiscalIntegrationFiscalServiceReadDataResult', true, '', '',  oDataOperationParameters);
        }
        
        public saveFiscalIntegrationRegistrationResult(hardwareProfileId: string, functionalityProfileGroupId: string, registrationResult: Entities.FiscalIntegrationRegistrationResult, connectorType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, functionalityProfileGroupId: functionalityProfileGroupId, registrationResult: registrationResult, connectorType: connectorType };

            return this.createDataServiceRequestForOperation('SaveFiscalIntegrationRegistrationResult', true, '', '',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationRegistrationProcess(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationRegistrationProcess', true, Entities.FiscalIntegrationRegistrationProcessClass, 'false',  oDataOperationParameters);
        }
        
        public getChannelSupportedFiscalIntegrationEventsByGroup(functionalityProfileGroupId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { functionalityProfileGroupId: functionalityProfileGroupId };

            return this.createDataServiceRequestForOperation('GetChannelSupportedFiscalIntegrationEventsByGroup', true, Entities.FiscalIntegrationSupportedEventsClass, 'false',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationTechnicalProfiles(hardwareProfileId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationTechnicalProfiles', true, Entities.FiscalIntegrationTechnicalProfileClass, 'true',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationTechnicalProfilesByFunctionalityGroupIds(hardwareProfileId: string, functionalityProfileGroupId: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, functionalityProfileGroupId: functionalityProfileGroupId };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationTechnicalProfilesByFunctionalityGroupIds', true, Entities.FiscalIntegrationTechnicalProfileClass, 'true',  oDataOperationParameters);
        }
        
        public backupFiscalRegistrationProcessContext(terminalId: string, storeNumber: string, channelId: number, fiscalProcessCompleted: boolean, fiscalIntegrationSerializedContext: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { terminalId: terminalId, storeNumber: storeNumber, channelId: channelId, fiscalProcessCompleted: fiscalProcessCompleted, fiscalIntegrationSerializedContext: fiscalIntegrationSerializedContext };

            return this.createDataServiceRequestForOperation('BackupFiscalRegistrationProcessContext', true, '', '',  oDataOperationParameters);
        }
        
        public getActiveFiscalRegistrationProcessContextBackup(terminalId: string, storeNumber: string, channelId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { terminalId: terminalId, storeNumber: storeNumber, channelId: channelId };

            return this.createDataServiceRequestForOperation('GetActiveFiscalRegistrationProcessContextBackup', true, '', 'false',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationTechnicalProfilesBySearchCriteria(hardwareProfileId: string, fiscalIntegrationTechnicalProfileSearchCriteria: Entities.FiscalIntegrationTechnicalProfileSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, fiscalIntegrationTechnicalProfileSearchCriteria: fiscalIntegrationTechnicalProfileSearchCriteria };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationTechnicalProfilesBySearchCriteria', true, Entities.FiscalIntegrationTechnicalProfileClass, 'true',  oDataOperationParameters);
        }
        
        public getFiscalIntegrationServiceStatus(fiscalIntegrationServiceInfo: Entities.FiscalIntegrationServiceInfo): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { fiscalIntegrationServiceInfo: fiscalIntegrationServiceInfo };

            return this.createDataServiceRequestForOperation('GetFiscalIntegrationServiceStatus', true, Entities.FiscalIntegrationServiceStatusClass, 'false',  oDataOperationParameters);
        }
        
        public submitFiscalIntegrationDocument(documentToSubmit: string, fiscalIntegrationServiceInfo: Entities.FiscalIntegrationServiceInfo): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentToSubmit: documentToSubmit, fiscalIntegrationServiceInfo: fiscalIntegrationServiceInfo };

            return this.createDataServiceRequestForOperation('SubmitFiscalIntegrationDocument', true, Entities.FiscalIntegrationServiceCommunicationResultClass, 'false',  oDataOperationParameters);
        }
        
        public getFeatureStates(featureNames: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { featureNames: featureNames };

            return this.createDataServiceRequestForOperation('GetFeatureStates', true, Entities.FeatureStateClass, 'true',  oDataOperationParameters);
        }
        
        public getLastFiscalIntegrationSequentialSignatures(sequentialKeys: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { sequentialKeys: sequentialKeys };

            return this.createDataServiceRequestForOperation('GetLastFiscalIntegrationSequentialSignatures', true, Entities.FiscalIntegrationSequentialSignatureDataClass, 'true',  oDataOperationParameters);
        }
        
        public getAvailablePromotions(searchCriteria: Entities.DiscountsSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('GetAvailablePromotions', true, Entities.PromotionClass, 'true',  oDataOperationParameters);
        }
        
        public createFiscalTransaction(functionalityProfileGroupId: string, registrationResult: Entities.FiscalIntegrationRegistrationResult, connectorType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { functionalityProfileGroupId: functionalityProfileGroupId, registrationResult: registrationResult, connectorType: connectorType };

            return this.createDataServiceRequestForOperation('CreateFiscalTransaction', true, Entities.FiscalTransactionClass, 'false',  oDataOperationParameters);
        }
        
        public getButtonGrids(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetButtonGrids', false, Entities.ButtonGridClass, 'true',  oDataOperationParameters);
        }
        
        public getButtonGridsByScreenSize(height: number, width: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { height: height, width: width };

            return this.createDataServiceRequestForOperation('GetButtonGridsByScreenSize', false, Entities.ButtonGridClass, 'true',  oDataOperationParameters);
        }
        
        public getCashDeclarations(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCashDeclarations', false, Entities.CashDeclarationClass, 'true',  oDataOperationParameters);
        }
        
        public getCountryRegions(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCountryRegions', false, Entities.CountryRegionInfoClass, 'true',  oDataOperationParameters);
        }
        
        public getCustomerGroups(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCustomerGroups', false, Entities.CustomerGroupClass, 'true',  oDataOperationParameters);
        }
        
        public getDeliveryOptions(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetDeliveryOptions', false, Entities.DeliveryOptionClass, 'true',  oDataOperationParameters);
        }
        
        public getChannelsByType(channelType: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelType: channelType };

            return this.createDataServiceRequestForOperation('GetChannelsByType', false, Entities.ChannelIdentityClass, 'true',  oDataOperationParameters);
        }
        
        public getChannels(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetChannels', false, Entities.ChannelIdentityClass, 'true',  oDataOperationParameters);
        }
        
        public getEnvironmentConfiguration(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetEnvironmentConfiguration', false, Entities.EnvironmentConfigurationClass, 'false',  oDataOperationParameters);
        }
        
        public getSearchConfiguration(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetSearchConfiguration', false, Entities.SearchConfigurationClass, 'false',  oDataOperationParameters);
        }
        
        public getExtensionPackageDefinitions(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetExtensionPackageDefinitions', false, Entities.ExtensionPackageDefinitionClass, 'true',  oDataOperationParameters);
        }
        
        public getExtensionProfile(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetExtensionProfile', false, Entities.ExtensionProfileClass, 'false',  oDataOperationParameters);
        }
        
        public getDeviceConfiguration(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetDeviceConfiguration', false, Entities.DeviceConfigurationClass, 'false',  oDataOperationParameters);
        }
        
        public getVisualProfile(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetVisualProfile', false, Entities.VisualProfileClass, 'false',  oDataOperationParameters);
        }
        
        public getLanguages(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetLanguages', false, Entities.SupportedLanguageClass, 'true',  oDataOperationParameters);
        }
        
        public getAffiliations(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetAffiliations', false, Entities.AffiliationClass, 'true',  oDataOperationParameters);
        }
        
        public getOperationPermissions(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetOperationPermissions', false, Entities.OperationPermissionClass, 'true',  oDataOperationParameters);
        }
        
        public getReasonCodes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetReasonCodes', false, Entities.ReasonCodeClass, 'true',  oDataOperationParameters);
        }
        
        public getReturnOrderReasonCodes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetReturnOrderReasonCodes', false, Entities.ReasonCodeClass, 'true',  oDataOperationParameters);
        }
        
        public getSalesTaxGroups(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetSalesTaxGroups', false, Entities.SalesTaxGroupClass, 'true',  oDataOperationParameters);
        }
        
        public getTenderTypes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetTenderTypes', false, Entities.TenderTypeClass, 'true',  oDataOperationParameters);
        }
        
        public getUnitsOfMeasure(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetUnitsOfMeasure', false, Entities.UnitOfMeasureClass, 'true',  oDataOperationParameters);
        }
        
        public getDiscountCodes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetDiscountCodes', false, Entities.DiscountCodeClass, 'true',  oDataOperationParameters);
        }
        
        public getCurrencies(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCurrencies', false, Entities.CurrencyClass, 'true',  oDataOperationParameters);
        }
        
        public getCurrenciesAmount(currencyCode: string, amount: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { currencyCode: currencyCode, amount: amount };

            return this.createDataServiceRequestForOperation('GetCurrenciesAmount', false, Entities.CurrencyAmountClass, 'true',  oDataOperationParameters);
        }
        
        public getCommissionSalesGroups(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCommissionSalesGroups', false, Entities.CommissionSalesGroupClass, 'true',  oDataOperationParameters);
        }
        
        public searchCommissionSalesGroups(searchText: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchText: searchText };

            return this.createDataServiceRequestForOperation('SearchCommissionSalesGroups', false, Entities.CommissionSalesGroupClass, 'true',  oDataOperationParameters);
        }
        
        public getPaymentMerchantInformation(hardwareProfileId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId };

            return this.createDataServiceRequestForOperation('GetPaymentMerchantInformation', false, Entities.PaymentMerchantInformationClass, 'false',  oDataOperationParameters);
        }
        
        public getPaymentPropertiesIfModified(hardwareProfileId: string, merchantInformationHash: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { hardwareProfileId: hardwareProfileId, merchantInformationHash: merchantInformationHash };

            return this.createDataServiceRequestForOperation('GetPaymentPropertiesIfModified', false, Entities.PaymentMerchantInformationClass, 'false',  oDataOperationParameters);
        }
        
        public getOnlineChannelPublishStatus(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetOnlineChannelPublishStatus', false, '', 'false',  oDataOperationParameters);
        }
        
        public setOnlineChannelPublishStatus(publishingStatus: number, statusMessage: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { publishingStatus: publishingStatus, statusMessage: statusMessage };

            return this.createDataServiceRequestForOperation('SetOnlineChannelPublishStatus', true, '', '',  oDataOperationParameters);
        }
        
        public getInventoryConfiguration(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetInventoryConfiguration', false, Entities.ChannelInventoryConfigurationClass, 'false',  oDataOperationParameters);
        }
        
        public getAvailableDevices(deviceType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { deviceType: deviceType };

            return this.createDataServiceRequestForOperation('GetAvailableDevices', false, Entities.DeviceClass, 'true',  oDataOperationParameters);
        }
        
        public getImageBlob(imageId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { imageId: imageId };

            return this.createDataServiceRequestForOperation('GetImageBlob', false, Entities.MediaBlobClass, 'false',  oDataOperationParameters);
        }
        
        public getExtensibleEnumerations(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetExtensibleEnumerations', false, Entities.ExtensibleEnumerationContainerClass, 'true',  oDataOperationParameters);
        }
        
        public getAddressPurposes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetAddressPurposes', false, Entities.AddressPurposeClass, 'true',  oDataOperationParameters);
        }
        
        public getReturnPolicy(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetReturnPolicy', false, Entities.ReturnPolicyClass, 'false',  oDataOperationParameters);
        }
        
    }

    // Entity specific queries
    
    export class CategoriesDataServiceQuery extends DataServiceQuery<Entities.Category> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getCategories(channelId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId };

            return this.createDataServiceRequestForOperation('GetCategories', true, Entities.CategoryClass, 'true', oDataOperationParameters);
        }
        
        public getAttributes(categoryId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { categoryId: categoryId };

            return this.createDataServiceRequestForOperation('GetAttributes', false, Entities.AttributeCategoryClass, 'true', oDataOperationParameters);
        }
        
        public getChildren(channelId: number, categoryId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, categoryId: categoryId };

            return this.createDataServiceRequestForOperation('GetChildren', true, Entities.CategoryClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class CartsDataServiceQuery extends DataServiceQuery<Entities.Cart> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public checkout(receiptEmail: string, tokenizedPaymentCard: Entities.TokenizedPaymentCard, receiptNumberSequence: string, cartTenderLines: Entities.CartTenderLine[], cartVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { receiptEmail: receiptEmail, tokenizedPaymentCard: tokenizedPaymentCard, receiptNumberSequence: receiptNumberSequence, cartTenderLines: cartTenderLines, cartVersion: cartVersion };

            return this.createDataServiceRequestForOperation('Checkout', true, Entities.SalesOrderClass, 'false', oDataOperationParameters);
        }
        
        public getMaxLoyaltyPointsToRedeemForTransactionBalance(loyaltyCardId: string, currencyCode: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { loyaltyCardId: loyaltyCardId, currencyCode: currencyCode };

            return this.createDataServiceRequestForOperation('GetMaxLoyaltyPointsToRedeemForTransactionBalance', true, Entities.LoyaltyPointRedemptionEstimateClass, 'false', oDataOperationParameters);
        }
        
        public getPaymentsHistory(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetPaymentsHistory', true, Entities.TenderLineClass, 'true', oDataOperationParameters);
        }
        
        public getLineDeliveryOptionsByChannelId(lineShippingAddresses: Entities.LineShippingAddress[], channelId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { lineShippingAddresses: lineShippingAddresses, channelId: channelId };

            return this.createDataServiceRequestForOperation('GetLineDeliveryOptionsByChannelId', true, Entities.SalesLineDeliveryOptionClass, 'true', oDataOperationParameters);
        }
        
        public getLineDeliveryOptions(lineShippingAddresses: Entities.LineShippingAddress[], filterOption: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { lineShippingAddresses: lineShippingAddresses, filterOption: filterOption };

            return this.createDataServiceRequestForOperation('GetLineDeliveryOptions', true, Entities.SalesLineDeliveryOptionClass, 'true', oDataOperationParameters);
        }
        
        public getDeliveryPreferences(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetDeliveryPreferences', true, Entities.CartDeliveryPreferencesClass, 'false', oDataOperationParameters);
        }
        
        public getDeliveryOptions(shippingAddress: Entities.Address, cartLineIds: string[], filterOption: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shippingAddress: shippingAddress, cartLineIds: cartLineIds, filterOption: filterOption };

            return this.createDataServiceRequestForOperation('GetDeliveryOptions', true, Entities.DeliveryOptionClass, 'true', oDataOperationParameters);
        }
        
        public updateLineDeliverySpecifications(lineDeliverySpecifications: Entities.LineDeliverySpecification[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { lineDeliverySpecifications: lineDeliverySpecifications };

            return this.createDataServiceRequestForOperation('UpdateLineDeliverySpecifications', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public updateDeliverySpecification(deliverySpecification: Entities.DeliverySpecification): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { deliverySpecification: deliverySpecification };

            return this.createDataServiceRequestForOperation('UpdateDeliverySpecification', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public addCharge(moduleTypeValue: number, chargeCode: string, amount: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { moduleTypeValue: moduleTypeValue, chargeCode: chargeCode, amount: amount };

            return this.createDataServiceRequestForOperation('AddCharge', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public overrideCharge(chargeLineId: string, amount: number, reasonCodeLines: Entities.ReasonCodeLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { chargeLineId: chargeLineId, amount: amount, reasonCodeLines: reasonCodeLines };

            return this.createDataServiceRequestForOperation('OverrideCharge', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public addCartLineCharge(cartLineId: string, moduleTypeValue: number, chargeCode: string, amount: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartLineId: cartLineId, moduleTypeValue: moduleTypeValue, chargeCode: chargeCode, amount: amount };

            return this.createDataServiceRequestForOperation('AddCartLineCharge', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public overrideCartLineCharge(cartLineId: string, chargeLineId: string, amount: number, reasonCodeLines: Entities.ReasonCodeLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartLineId: cartLineId, chargeLineId: chargeLineId, amount: amount, reasonCodeLines: reasonCodeLines };

            return this.createDataServiceRequestForOperation('OverrideCartLineCharge', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public void(reasonCodeLines: Entities.ReasonCodeLine[], cartVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { reasonCodeLines: reasonCodeLines, cartVersion: cartVersion };

            return this.createDataServiceRequestForOperation('Void', true, Entities.SalesOrderClass, 'false', oDataOperationParameters);
        }
        
        public addCartLines(cartLines: Entities.CartLine[], cartVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartLines: cartLines, cartVersion: cartVersion };

            return this.createDataServiceRequestForOperation('AddCartLines', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public updateCartLines(cartLines: Entities.CartLine[], cartVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartLines: cartLines, cartVersion: cartVersion };

            return this.createDataServiceRequestForOperation('UpdateCartLines', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public voidCartLines(cartLines: Entities.CartLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartLines: cartLines };

            return this.createDataServiceRequestForOperation('VoidCartLines', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public removeCartLines(cartLineIds: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartLineIds: cartLineIds };

            return this.createDataServiceRequestForOperation('RemoveCartLines', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public addTenderLine(cartTenderLine: Entities.CartTenderLine, cartVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartTenderLine: cartTenderLine, cartVersion: cartVersion };

            return this.createDataServiceRequestForOperation('AddTenderLine', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public calculateTenderDiscount(tenderLine: Entities.TenderLine, cartVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { tenderLine: tenderLine, cartVersion: cartVersion };

            return this.createDataServiceRequestForOperation('CalculateTenderDiscount', true, Entities.TenderDiscountLineClass, 'false', oDataOperationParameters);
        }
        
        public addPreprocessedTenderLine(preprocessedTenderLine: Entities.TenderLine, cartVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { preprocessedTenderLine: preprocessedTenderLine, cartVersion: cartVersion };

            return this.createDataServiceRequestForOperation('AddPreprocessedTenderLine', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public validateTenderLineForAdd(tenderLine: Entities.TenderLine): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { tenderLine: tenderLine };

            return this.createDataServiceRequestForOperation('ValidateTenderLineForAdd', true, '', '', oDataOperationParameters);
        }
        
        public updateTenderLineSignature(tenderLineId: string, signatureData: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { tenderLineId: tenderLineId, signatureData: signatureData };

            return this.createDataServiceRequestForOperation('UpdateTenderLineSignature', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public getDeclinedOrVoidedCardReceipts(preprocessedTenderLine: Entities.TenderLine, receiptRetrievalCriteria: Entities.ReceiptRetrievalCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { preprocessedTenderLine: preprocessedTenderLine, receiptRetrievalCriteria: receiptRetrievalCriteria };

            return this.createDataServiceRequestForOperation('GetDeclinedOrVoidedCardReceipts', true, Entities.ReceiptClass, 'true', oDataOperationParameters);
        }
        
        public copy(targetCartType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { targetCartType: targetCartType };

            return this.createDataServiceRequestForOperation('Copy', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public addInvoicedSalesLinesToCart(transactionId: string, invoicedSalesLinesIds: number[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, invoicedSalesLinesIds: invoicedSalesLinesIds };

            return this.createDataServiceRequestForOperation('AddInvoicedSalesLinesToCart', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public voidTenderLine(tenderLineId: string, reasonCodeLines: Entities.ReasonCodeLine[], isPreprocessed: boolean, forceVoid: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { tenderLineId: tenderLineId, reasonCodeLines: reasonCodeLines, isPreprocessed: isPreprocessed, forceVoid: forceVoid };

            return this.createDataServiceRequestForOperation('VoidTenderLine', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public issueGiftCard(giftCardId: string, amount: number, currencyCode: string, lineDescription: string, tenderTypeId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { giftCardId: giftCardId, amount: amount, currencyCode: currencyCode, lineDescription: lineDescription, tenderTypeId: tenderTypeId };

            return this.createDataServiceRequestForOperation('IssueGiftCard', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public refillGiftCard(giftCardId: string, amount: number, currencyCode: string, lineDescription: string, tenderTypeId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { giftCardId: giftCardId, amount: amount, currencyCode: currencyCode, lineDescription: lineDescription, tenderTypeId: tenderTypeId };

            return this.createDataServiceRequestForOperation('RefillGiftCard', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public cashOutGiftCard(giftCardId: string, amount: number, currencyCode: string, lineDescription: string, tenderTypeId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { giftCardId: giftCardId, amount: amount, currencyCode: currencyCode, lineDescription: lineDescription, tenderTypeId: tenderTypeId };

            return this.createDataServiceRequestForOperation('CashOutGiftCard', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public suspend(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('Suspend', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public suspendWithJournal(journalCartId: string, receiptNumberSequence: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { journalCartId: journalCartId, receiptNumberSequence: receiptNumberSequence };

            return this.createDataServiceRequestForOperation('SuspendWithJournal', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public resume(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('Resume', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public resumeFromReceiptId(receiptId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { receiptId: receiptId };

            return this.createDataServiceRequestForOperation('ResumeFromReceiptId', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public removeDiscountCodes(discountCodes: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { discountCodes: discountCodes };

            return this.createDataServiceRequestForOperation('RemoveDiscountCodes', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public getSuspended(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetSuspended', true, Entities.CartClass, 'true', oDataOperationParameters);
        }
        
        public search(cartSearchCriteria: Entities.CartSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartSearchCriteria: cartSearchCriteria };

            return this.createDataServiceRequestForOperation('Search', true, Entities.CartClass, 'true', oDataOperationParameters);
        }
        
        public overrideCartLinePrice(cartLineId: string, price: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartLineId: cartLineId, price: price };

            return this.createDataServiceRequestForOperation('OverrideCartLinePrice', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public getCardPaymentAcceptPoint(cardPaymentAcceptSettings: Entities.CardPaymentAcceptSettings, extensionProperties: Entities.CommerceProperty[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cardPaymentAcceptSettings: cardPaymentAcceptSettings, extensionProperties: extensionProperties };

            return this.createDataServiceRequestForOperation('GetCardPaymentAcceptPoint', true, Entities.CardPaymentAcceptPointClass, 'false', oDataOperationParameters);
        }
        
        public retrieveCardPaymentAcceptResult(resultAccessCode: string, extensionProperties: Entities.CommerceProperty[], cartId: string, settings: Entities.RetrievePaymentResultSettings): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { resultAccessCode: resultAccessCode, extensionProperties: extensionProperties, cartId: cartId, settings: settings };

            return this.createDataServiceRequestForOperation('RetrieveCardPaymentAcceptResult', true, Entities.CardPaymentAcceptResultClass, 'false', oDataOperationParameters);
        }
        
        public recallOrder(transactionId: string, salesId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, salesId: salesId };

            return this.createDataServiceRequestForOperation('RecallOrder', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public recallQuote(transactionId: string, quoteId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, quoteId: quoteId };

            return this.createDataServiceRequestForOperation('RecallQuote', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public recalculateOrder(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('RecalculateOrder', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public resetAllCharges(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('ResetAllCharges', false, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public getPromotions(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetPromotions', true, Entities.CartPromotionsClass, 'false', oDataOperationParameters);
        }
        
        public getAvailablePromotions(cartLineIds: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartLineIds: cartLineIds };

            return this.createDataServiceRequestForOperation('GetAvailablePromotions', true, Entities.CartPromotionLineClass, 'true', oDataOperationParameters);
        }
        
        public recallSalesInvoice(transactionId: string, invoiceId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, invoiceId: invoiceId };

            return this.createDataServiceRequestForOperation('RecallSalesInvoice', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public addOrderInvoice(invoiceId: string, lineDescription: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { invoiceId: invoiceId, lineDescription: lineDescription };

            return this.createDataServiceRequestForOperation('AddOrderInvoice', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public addInvoices(invoiceIds: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { invoiceIds: invoiceIds };

            return this.createDataServiceRequestForOperation('AddInvoices', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public updateCommissionSalesGroup(transactionId: string, cartLineId: string, commissionSalesGroup: string, isUserInitiated: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, cartLineId: cartLineId, commissionSalesGroup: commissionSalesGroup, isUserInitiated: isUserInitiated };

            return this.createDataServiceRequestForOperation('UpdateCommissionSalesGroup', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public addCoupons(couponCodes: string[], isLegacyDiscountCode: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { couponCodes: couponCodes, isLegacyDiscountCode: isLegacyDiscountCode };

            return this.createDataServiceRequestForOperation('AddCoupons', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public removeCoupons(couponCodes: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { couponCodes: couponCodes };

            return this.createDataServiceRequestForOperation('RemoveCoupons', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public getChargeCodes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetChargeCodes', false, Entities.ChargeCodeClass, 'true', oDataOperationParameters);
        }
        
        public addDiscountCode(discountCode: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { discountCode: discountCode };

            return this.createDataServiceRequestForOperation('AddDiscountCode', true, Entities.CartClass, 'false', oDataOperationParameters);
        }
        
        public getReturnOptions(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetReturnOptions', false, Entities.TenderTypeAmountClass, 'true', oDataOperationParameters);
        }
        
        public validateForCheckout(cartVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartVersion: cartVersion };

            return this.createDataServiceRequestForOperation('ValidateForCheckout', false, Entities.CartLineValidationResultsClass, 'false', oDataOperationParameters);
        }
        
    }
    
    export class CustomersDataServiceQuery extends DataServiceQuery<Entities.Customer> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public search(customerSearchCriteria: Entities.CustomerSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { customerSearchCriteria: customerSearchCriteria };

            return this.createDataServiceRequestForOperation('Search', true, Entities.GlobalCustomerClass, 'true', oDataOperationParameters);
        }
        
        public searchByFields(CustomerSearchByFieldCriteria: Entities.CustomerSearchByFieldCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { CustomerSearchByFieldCriteria: CustomerSearchByFieldCriteria };

            return this.createDataServiceRequestForOperation('SearchByFields', true, Entities.GlobalCustomerClass, 'true', oDataOperationParameters);
        }
        
        public getByAccountNumbers(accountNumbers: string[], searchLocationValue: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { accountNumbers: accountNumbers, searchLocationValue: searchLocationValue };

            return this.createDataServiceRequestForOperation('GetByAccountNumbers', true, Entities.CustomerClass, 'true', oDataOperationParameters);
        }
        
        public createCustomerTimelineItem(customerTimelineItem: Entities.CustomerTimelineItem): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { customerTimelineItem: customerTimelineItem };

            return this.createDataServiceRequestForOperation('CreateCustomerTimelineItem', true, Entities.CustomerTimelineItemClass, 'false', oDataOperationParameters);
        }
        
        public updateCustomerTimelineItem(customerTimelineItem: Entities.CustomerTimelineItem): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { customerTimelineItem: customerTimelineItem };

            return this.createDataServiceRequestForOperation('UpdateCustomerTimelineItem', true, Entities.CustomerTimelineItemClass, 'false', oDataOperationParameters);
        }
        
        public getOrderHistory(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetOrderHistory', true, Entities.SalesOrderClass, 'true', oDataOperationParameters);
        }
        
        public getOrderShipmentsHistory(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetOrderShipmentsHistory', true, Entities.OrderShipmentsClass, 'true', oDataOperationParameters);
        }
        
        public postNonTransactionalActivityLoyaltyPoints(loyaltyCardId: string, channelId: number, affiliationId: number, activityTypeId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { loyaltyCardId: loyaltyCardId, channelId: channelId, affiliationId: affiliationId, activityTypeId: activityTypeId };

            return this.createDataServiceRequestForOperation('PostNonTransactionalActivityLoyaltyPoints', true, '', '', oDataOperationParameters);
        }
        
        public getPurchaseHistory(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetPurchaseHistory', false, Entities.PurchaseHistoryClass, 'true', oDataOperationParameters);
        }
        
        public getCustomerSearchFields(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCustomerSearchFields', false, Entities.CustomerSearchFieldClass, 'true', oDataOperationParameters);
        }
        
        public getCustomerTimelineItemTypes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCustomerTimelineItemTypes', false, Entities.CustomerTimelineItemTypeMapClass, 'true', oDataOperationParameters);
        }
        
        public getCustomerTimelineItems(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCustomerTimelineItems', false, Entities.CustomerTimelineItemClass, 'true', oDataOperationParameters);
        }
        
        public getCustomerTimelineRefiners(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCustomerTimelineRefiners', false, Entities.CustomerTimelineRefinerClass, 'true', oDataOperationParameters);
        }
        
        public getTitles(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetTitles', false, Entities.CustomerTitleClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class EmployeesDataServiceQuery extends DataServiceQuery<Entities.Employee> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getActivities(employeeActivitySearchCriteria: Entities.EmployeeActivitySearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { employeeActivitySearchCriteria: employeeActivitySearchCriteria };

            return this.createDataServiceRequestForOperation('GetActivities', true, Entities.EmployeeActivityClass, 'true', oDataOperationParameters);
        }
        
        public getManagerActivityView(employeeActivitySearchCriteria: Entities.EmployeeActivitySearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { employeeActivitySearchCriteria: employeeActivitySearchCriteria };

            return this.createDataServiceRequestForOperation('GetManagerActivityView', true, Entities.EmployeeActivityClass, 'true', oDataOperationParameters);
        }
        
        public registerActivity(employeeActivityType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { employeeActivityType: employeeActivityType };

            return this.createDataServiceRequestForOperation('RegisterActivity', true, '', 'false', oDataOperationParameters);
        }
        
        public getAccessibleOrgUnits(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetAccessibleOrgUnits', true, Entities.OrgUnitClass, 'true', oDataOperationParameters);
        }
        
        public getLatestActivity(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetLatestActivity', true, Entities.EmployeeActivityClass, 'false', oDataOperationParameters);
        }
        
        public searchClientBookCustomers(clientBookCustomerSearchCriteria: Entities.ClientBookCustomerSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { clientBookCustomerSearchCriteria: clientBookCustomerSearchCriteria };

            return this.createDataServiceRequestForOperation('SearchClientBookCustomers', true, Entities.ClientBookCustomerClass, 'true', oDataOperationParameters);
        }
        
        public getClientBookSearchRefiners(refinerSourceTypes: number[], searchCriteria: Entities.ClientBookCustomerSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { refinerSourceTypes: refinerSourceTypes, searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('GetClientBookSearchRefiners', true, Entities.ClientBookRefinerClass, 'true', oDataOperationParameters);
        }
        
        public updateClientBook(clientBookChanges: Entities.ClientBookChanges): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { clientBookChanges: clientBookChanges };

            return this.createDataServiceRequestForOperation('UpdateClientBook', true, '', '', oDataOperationParameters);
        }
        
        public getCurrentEmployee(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCurrentEmployee', false, Entities.EmployeeClass, 'false', oDataOperationParameters);
        }
        
    }
    
    export class ChecklistsDataServiceQuery extends DataServiceQuery<Entities.Checklist> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public searchChecklists(checklistSearchCriteria: Entities.ChecklistSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { checklistSearchCriteria: checklistSearchCriteria };

            return this.createDataServiceRequestForOperation('SearchChecklists', true, Entities.ChecklistClass, 'true', oDataOperationParameters);
        }
        
        public searchTasks(taskSearchCriteria: Entities.TaskSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { taskSearchCriteria: taskSearchCriteria };

            return this.createDataServiceRequestForOperation('SearchTasks', true, Entities.ChecklistTaskClass, 'true', oDataOperationParameters);
        }
        
        public createTask(createTask: Entities.ChecklistTask): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { createTask: createTask };

            return this.createDataServiceRequestForOperation('CreateTask', true, Entities.ChecklistTaskClass, 'false', oDataOperationParameters);
        }
        
        public updateChecklists(updateChecklists: Entities.Checklist[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { updateChecklists: updateChecklists };

            return this.createDataServiceRequestForOperation('UpdateChecklists', true, Entities.ChecklistClass, 'true', oDataOperationParameters);
        }
        
        public updateTasks(updateTasks: Entities.ChecklistTask[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { updateTasks: updateTasks };

            return this.createDataServiceRequestForOperation('UpdateTasks', true, Entities.ChecklistTaskClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class SalesOrdersDataServiceQuery extends DataServiceQuery<Entities.SalesOrder> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public searchSalesTransactionsByReceiptId(receiptId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { receiptId: receiptId };

            return this.createDataServiceRequestForOperation('SearchSalesTransactionsByReceiptId', true, Entities.SalesOrderClass, 'true', oDataOperationParameters);
        }
        
        public search(salesOrderSearchCriteria: Entities.SalesOrderSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesOrderSearchCriteria: salesOrderSearchCriteria };

            return this.createDataServiceRequestForOperation('Search', true, Entities.SalesOrderClass, 'true', oDataOperationParameters);
        }
        
        public searchOrders(orderSearchCriteria: Entities.OrderSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { orderSearchCriteria: orderSearchCriteria };

            return this.createDataServiceRequestForOperation('SearchOrders', true, Entities.SalesOrderClass, 'true', oDataOperationParameters);
        }
        
        public getReceipts(receiptRetrievalCriteria: Entities.ReceiptRetrievalCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { receiptRetrievalCriteria: receiptRetrievalCriteria };

            return this.createDataServiceRequestForOperation('GetReceipts', true, Entities.ReceiptClass, 'true', oDataOperationParameters);
        }
        
        public sendReceipt(searchCriteria: Entities.SearchReceiptCriteria, recipientAddresses: Entities.ElectronicAddress[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria, recipientAddresses: recipientAddresses };

            return this.createDataServiceRequestForOperation('SendReceipt', true, '', '', oDataOperationParameters);
        }
        
        public getGiftReceipts(SalesLineNumbers: number[], receiptRetrievalCriteria: Entities.ReceiptRetrievalCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { SalesLineNumbers: SalesLineNumbers, receiptRetrievalCriteria: receiptRetrievalCriteria };

            return this.createDataServiceRequestForOperation('GetGiftReceipts', true, Entities.ReceiptClass, 'true', oDataOperationParameters);
        }
        
        public getByReceiptId(receiptId: string, orderStoreNumber: string, orderTerminalId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { receiptId: receiptId, orderStoreNumber: orderStoreNumber, orderTerminalId: orderTerminalId };

            return this.createDataServiceRequestForOperation('GetByReceiptId', true, Entities.SalesOrderClass, 'true', oDataOperationParameters);
        }
        
        public getSalesOrderDetailsByTransactionId(transactionId: string, searchLocationValue: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, searchLocationValue: searchLocationValue };

            return this.createDataServiceRequestForOperation('GetSalesOrderDetailsByTransactionId', false, Entities.SalesOrderClass, 'false', oDataOperationParameters);
        }
        
        public getSalesOrderDetailsBySalesId(salesId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesId: salesId };

            return this.createDataServiceRequestForOperation('GetSalesOrderDetailsBySalesId', false, Entities.SalesOrderClass, 'false', oDataOperationParameters);
        }
        
        public getSalesOrderDetailsByQuotationId(quotationId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { quotationId: quotationId };

            return this.createDataServiceRequestForOperation('GetSalesOrderDetailsByQuotationId', false, Entities.SalesOrderClass, 'false', oDataOperationParameters);
        }
        
        public shipFulfillmentLines(ShipFulfillmentLines: Entities.ShipFulfillmentLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { ShipFulfillmentLines: ShipFulfillmentLines };

            return this.createDataServiceRequestForOperation('ShipFulfillmentLines', true, '', '', oDataOperationParameters);
        }
        
        public acceptFulfillmentLines(FulfillmentLineParameter: Entities.FulfillmentLineParameter[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { FulfillmentLineParameter: FulfillmentLineParameter };

            return this.createDataServiceRequestForOperation('AcceptFulfillmentLines', true, '', '', oDataOperationParameters);
        }
        
        public pickFulfillmentLines(FulfillmentLineParameter: Entities.FulfillmentLineParameter[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { FulfillmentLineParameter: FulfillmentLineParameter };

            return this.createDataServiceRequestForOperation('PickFulfillmentLines', true, '', '', oDataOperationParameters);
        }
        
        public packFulfillmentLines(FulfillmentLineParameter: Entities.FulfillmentLineParameter[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { FulfillmentLineParameter: FulfillmentLineParameter };

            return this.createDataServiceRequestForOperation('PackFulfillmentLines', true, '', '', oDataOperationParameters);
        }
        
        public markFulfillmentLinesAsPacked(FulfillmentLineParameter: Entities.FulfillmentLineParameter[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { FulfillmentLineParameter: FulfillmentLineParameter };

            return this.createDataServiceRequestForOperation('MarkFulfillmentLinesAsPacked', true, '', 'false', oDataOperationParameters);
        }
        
        public markAsPicked(FulfillmentLineParameter: Entities.FulfillmentLineParameter[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { FulfillmentLineParameter: FulfillmentLineParameter };

            return this.createDataServiceRequestForOperation('MarkAsPicked', true, '', '', oDataOperationParameters);
        }
        
        public getFulfillmentPickingLists(pickingListFulfillmentLine: Entities.FulfillmentLineParameter[], hardwareProfileId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { pickingListFulfillmentLine: pickingListFulfillmentLine, hardwareProfileId: hardwareProfileId };

            return this.createDataServiceRequestForOperation('GetFulfillmentPickingLists', true, Entities.ReceiptClass, 'true', oDataOperationParameters);
        }
        
        public getFulfillmentLines(fulfillmentLineSearchCriteria: Entities.FulfillmentLineSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { fulfillmentLineSearchCriteria: fulfillmentLineSearchCriteria };

            return this.createDataServiceRequestForOperation('GetFulfillmentLines', true, Entities.FulfillmentLineClass, 'true', oDataOperationParameters);
        }
        
        public getFulfillmentPackingSlips(packFulfillmentLines: Entities.FulfillmentLineParameter[], hardwareProfileId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { packFulfillmentLines: packFulfillmentLines, hardwareProfileId: hardwareProfileId };

            return this.createDataServiceRequestForOperation('GetFulfillmentPackingSlips', true, Entities.ReceiptClass, 'true', oDataOperationParameters);
        }
        
        public getFulfillmentPackingSlipsById(salesId: string, PackingSlipId: string, hardwareProfileId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesId: salesId, PackingSlipId: PackingSlipId, hardwareProfileId: hardwareProfileId };

            return this.createDataServiceRequestForOperation('GetFulfillmentPackingSlipsById', true, Entities.ReceiptClass, 'true', oDataOperationParameters);
        }
        
        public rejectFulfillmentLines(RejectFulfillmentLines: Entities.RejectFulfillmentLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { RejectFulfillmentLines: RejectFulfillmentLines };

            return this.createDataServiceRequestForOperation('RejectFulfillmentLines', true, '', '', oDataOperationParameters);
        }
        
        public getInvoicesBySalesId(salesId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesId: salesId };

            return this.createDataServiceRequestForOperation('GetInvoicesBySalesId', true, Entities.SalesInvoiceClass, 'true', oDataOperationParameters);
        }
        
        public getOrderInvoices(customerId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { customerId: customerId };

            return this.createDataServiceRequestForOperation('GetOrderInvoices', true, Entities.OrderInvoiceClass, 'true', oDataOperationParameters);
        }
        
        public getInvoices(invoiceSearchCriteria: Entities.InvoiceSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { invoiceSearchCriteria: invoiceSearchCriteria };

            return this.createDataServiceRequestForOperation('GetInvoices', true, Entities.OrderInvoiceClass, 'true', oDataOperationParameters);
        }
        
        public getInvoicedSalesLinesBySalesIds(salesIds: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesIds: salesIds };

            return this.createDataServiceRequestForOperation('GetInvoicedSalesLinesBySalesIds', true, Entities.SalesLineClass, 'true', oDataOperationParameters);
        }
        
        public createPickingList(salesId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesId: salesId };

            return this.createDataServiceRequestForOperation('CreatePickingList', true, '', '', oDataOperationParameters);
        }
        
        public createPickingListForItems(salesId: string, pickAndPackSalesLineParameters: Entities.PickAndPackSalesLineParameter[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesId: salesId, pickAndPackSalesLineParameters: pickAndPackSalesLineParameters };

            return this.createDataServiceRequestForOperation('CreatePickingListForItems', true, '', 'false', oDataOperationParameters);
        }
        
        public getPickingLists(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetPickingLists', false, Entities.PickingListClass, 'true', oDataOperationParameters);
        }
        
        public createPackingSlip(salesId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesId: salesId };

            return this.createDataServiceRequestForOperation('CreatePackingSlip', true, '', '', oDataOperationParameters);
        }
        
        public getPackingSlipsData(salesId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { salesId: salesId };

            return this.createDataServiceRequestForOperation('GetPackingSlipsData', false, Entities.PackingSlipDataClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class ShiftsDataServiceQuery extends DataServiceQuery<Entities.Shift> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public upsertShifts(shifts: Entities.Shift[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shifts: shifts };

            return this.createDataServiceRequestForOperation('UpsertShifts', true, '', 'false', oDataOperationParameters);
        }
        
        public upsertAndValidateShifts(shiftId: number, terminalId: string, shifts: Entities.Shift[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftId: shiftId, terminalId: terminalId, shifts: shifts };

            return this.createDataServiceRequestForOperation('UpsertAndValidateShifts', true, '', 'false', oDataOperationParameters);
        }
        
        public deleteShifts(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('DeleteShifts', true, '', 'false', oDataOperationParameters);
        }
        
        public open(shiftId: number, cashDrawer: string, isShared: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftId: shiftId, cashDrawer: cashDrawer, isShared: isShared };

            return this.createDataServiceRequestForOperation('Open', true, Entities.ShiftClass, 'false', oDataOperationParameters);
        }
        
        public close(transactionId: string, forceClose: boolean, hasOfflinePendingTransactions: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, forceClose: forceClose, hasOfflinePendingTransactions: hasOfflinePendingTransactions };

            return this.createDataServiceRequestForOperation('Close', true, Entities.ShiftClass, 'false', oDataOperationParameters);
        }
        
        public getSuspendedCartsByShift(shiftTerminalId: string, shiftId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftTerminalId: shiftTerminalId, shiftId: shiftId };

            return this.createDataServiceRequestForOperation('GetSuspendedCartsByShift', true, Entities.SuspendedCartClass, 'true', oDataOperationParameters);
        }
        
        public voidSuspendedCarts(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('VoidSuspendedCarts', true, '', '', oDataOperationParameters);
        }
        
        public saveTenderLines(tenderLines: Entities.ShiftTenderLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { tenderLines: tenderLines };

            return this.createDataServiceRequestForOperation('SaveTenderLines', true, '', '', oDataOperationParameters);
        }
        
        public blindClose(transactionId: string, forceClose: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, forceClose: forceClose };

            return this.createDataServiceRequestForOperation('BlindClose', true, Entities.ShiftClass, 'false', oDataOperationParameters);
        }
        
        public forceDelete(transactionId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId };

            return this.createDataServiceRequestForOperation('ForceDelete', true, '', '', oDataOperationParameters);
        }
        
        public resume(cashDrawer: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cashDrawer: cashDrawer };

            return this.createDataServiceRequestForOperation('Resume', true, Entities.ShiftClass, 'false', oDataOperationParameters);
        }
        
        public use(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('Use', true, Entities.ShiftClass, 'false', oDataOperationParameters);
        }
        
        public suspend(transactionId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId };

            return this.createDataServiceRequestForOperation('Suspend', true, Entities.ShiftClass, 'false', oDataOperationParameters);
        }
        
        public getByStatus(statusValue: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { statusValue: statusValue };

            return this.createDataServiceRequestForOperation('GetByStatus', false, Entities.ShiftClass, 'true', oDataOperationParameters);
        }
        
        public getByStatusFilterByUserRole(statusValue: number, filterByUserRole: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { statusValue: statusValue, filterByUserRole: filterByUserRole };

            return this.createDataServiceRequestForOperation('GetByStatusFilterByUserRole', false, Entities.ShiftClass, 'true', oDataOperationParameters);
        }
        
        public getByRetrievalCriteria(shiftRetrievalCriteria: Entities.ShiftRetrievalCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftRetrievalCriteria: shiftRetrievalCriteria };

            return this.createDataServiceRequestForOperation('GetByRetrievalCriteria', true, Entities.ShiftClass, 'true', oDataOperationParameters);
        }
        
        public getXReport(transactionId: string, hardwareProfileId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, hardwareProfileId: hardwareProfileId };

            return this.createDataServiceRequestForOperation('GetXReport', false, Entities.ReceiptClass, 'false', oDataOperationParameters);
        }
        
        public getZReport(transactionId: string, hardwareProfileId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transactionId: transactionId, hardwareProfileId: hardwareProfileId };

            return this.createDataServiceRequestForOperation('GetZReport', false, Entities.ReceiptClass, 'false', oDataOperationParameters);
        }
        
        public getOpenTenderLines(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetOpenTenderLines', false, Entities.ShiftTenderLineClass, 'true', oDataOperationParameters);
        }
        
        public validateCashDrawerLimit(shiftTerminalId: string, shiftId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { shiftTerminalId: shiftTerminalId, shiftId: shiftId };

            return this.createDataServiceRequestForOperation('ValidateCashDrawerLimit', true, '', '', oDataOperationParameters);
        }
        
    }
    
    export class StockCountJournalsDataServiceQuery extends DataServiceQuery<Entities.StockCountJournal> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public sync(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('Sync', true, Entities.StockCountJournalClass, 'true', oDataOperationParameters);
        }
        
        public syncTransactions(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('SyncTransactions', true, Entities.StockCountJournalTransactionClass, 'true', oDataOperationParameters);
        }
        
        public calculateEstimatedOnHandInventory(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('CalculateEstimatedOnHandInventory', true, Entities.StockCountJournalTransactionClass, 'true', oDataOperationParameters);
        }
        
        public removeJournal(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('RemoveJournal', true, '', '', oDataOperationParameters);
        }
        
        public removeTransaction(itemId: string, inventSizeId: string, inventColorId: string, inventStyleId: string, configurationId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { itemId: itemId, inventSizeId: inventSizeId, inventColorId: inventColorId, inventStyleId: inventStyleId, configurationId: configurationId };

            return this.createDataServiceRequestForOperation('RemoveTransaction', true, '', '', oDataOperationParameters);
        }
        
        public removeStockCountLineByLineId(stockCountLineId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { stockCountLineId: stockCountLineId };

            return this.createDataServiceRequestForOperation('RemoveStockCountLineByLineId', true, '', '', oDataOperationParameters);
        }
        
        public removeStockCountLineByProductRecId(productId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productId: productId };

            return this.createDataServiceRequestForOperation('RemoveStockCountLineByProductRecId', true, '', '', oDataOperationParameters);
        }
        
        public commit(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('Commit', true, '', '', oDataOperationParameters);
        }
        
    }
    
    export class OrgUnitsDataServiceQuery extends DataServiceQuery<Entities.OrgUnit> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getTillLayout(height: number, width: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { height: height, width: width };

            return this.createDataServiceRequestForOperation('GetTillLayout', true, Entities.TillLayoutClass, 'false', oDataOperationParameters);
        }
        
        public search(storeSearchCriteria: Entities.SearchStoreCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { storeSearchCriteria: storeSearchCriteria };

            return this.createDataServiceRequestForOperation('Search', true, Entities.OrgUnitClass, 'true', oDataOperationParameters);
        }
        
        public getOrgUnitLocationsByArea(searchArea: Entities.SearchArea, deliveryModeTypeFilter: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchArea: searchArea, deliveryModeTypeFilter: deliveryModeTypeFilter };

            return this.createDataServiceRequestForOperation('GetOrgUnitLocationsByArea', true, Entities.OrgUnitLocationClass, 'true', oDataOperationParameters);
        }
        
        public searchOrgUnitLocations(orgUnitLocationSearchCriteria: Entities.OrgUnitLocationSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { orgUnitLocationSearchCriteria: orgUnitLocationSearchCriteria };

            return this.createDataServiceRequestForOperation('SearchOrgUnitLocations', true, Entities.OrgUnitLocationClass, 'true', oDataOperationParameters);
        }
        
        public getOrgUnitConfiguration(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetOrgUnitConfiguration', true, Entities.ChannelConfigurationClass, 'false', oDataOperationParameters);
        }
        
        public getStoreHours(storeNumber: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { storeNumber: storeNumber };

            return this.createDataServiceRequestForOperation('GetStoreHours', false, Entities.StoreHoursClass, 'false', oDataOperationParameters);
        }
        
        public getAvailableInventory(itemId: string, variantId: string, barcode: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { itemId: itemId, variantId: variantId, barcode: barcode };

            return this.createDataServiceRequestForOperation('GetAvailableInventory', true, Entities.OrgUnitAvailabilityClass, 'true', oDataOperationParameters);
        }
        
        public getAvailableInventoryNearby(itemIds: Entities.ItemUnit[], searchArea: Entities.SearchArea): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { itemIds: itemIds, searchArea: searchArea };

            return this.createDataServiceRequestForOperation('GetAvailableInventoryNearby', true, Entities.OrgUnitAvailabilityClass, 'true', oDataOperationParameters);
        }
        
        public getProductAvailabilityByDimensions(inventLocationIds: string[], productId: number, productDimensionCombinations: Entities.ProductDimensionCombination[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { inventLocationIds: inventLocationIds, productId: productId, productDimensionCombinations: productDimensionCombinations };

            return this.createDataServiceRequestForOperation('GetProductAvailabilityByDimensions', true, Entities.OrgUnitAvailabilityClass, 'true', oDataOperationParameters);
        }
        
        public searchProductAvailability(productId: number, orgUnitAvailabilitySearchCriteria: Entities.OrgUnitAvailabilitySearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productId: productId, orgUnitAvailabilitySearchCriteria: orgUnitAvailabilitySearchCriteria };

            return this.createDataServiceRequestForOperation('SearchProductAvailability', true, Entities.OrgUnitAvailabilityClass, 'true', oDataOperationParameters);
        }
        
        public getTerminalInfo(deviceType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { deviceType: deviceType };

            return this.createDataServiceRequestForOperation('GetTerminalInfo', false, Entities.TerminalInfoClass, 'true', oDataOperationParameters);
        }
        
        public getProductAvailability(productId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productId: productId };

            return this.createDataServiceRequestForOperation('GetProductAvailability', false, Entities.OrgUnitAvailabilityClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class ProductsDataServiceQuery extends DataServiceQuery<Entities.Product> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getDimensionValues(channelId: number, dimension: number, matchingDimensionValues: Entities.ProductDimension[], kitVariantResolutionContext: Entities.ProductVariantResolutionOnKitSelectionContext): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, dimension: dimension, matchingDimensionValues: matchingDimensionValues, kitVariantResolutionContext: kitVariantResolutionContext };

            return this.createDataServiceRequestForOperation('GetDimensionValues', true, Entities.ProductDimensionValueClass, 'true', oDataOperationParameters);
        }
        
        public getVariantsByDimensionValues(channelId: number, matchingDimensionValues: Entities.ProductDimension[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, matchingDimensionValues: matchingDimensionValues };

            return this.createDataServiceRequestForOperation('GetVariantsByDimensionValues', true, Entities.SimpleProductClass, 'true', oDataOperationParameters);
        }
        
        public getVariantsByComponentsInSlots(channelId: number, matchingSlotToComponentRelationship: Entities.ComponentInSlotRelation[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, matchingSlotToComponentRelationship: matchingSlotToComponentRelationship };

            return this.createDataServiceRequestForOperation('GetVariantsByComponentsInSlots', true, Entities.SimpleProductClass, 'true', oDataOperationParameters);
        }
        
        public getByIds(channelId: number, productIds: number[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, productIds: productIds };

            return this.createDataServiceRequestForOperation('GetByIds', true, Entities.SimpleProductClass, 'true', oDataOperationParameters);
        }
        
        public compare(channelId: number, catalogId: number, productIds: number[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId, productIds: productIds };

            return this.createDataServiceRequestForOperation('Compare', true, Entities.ProductComparisonLineClass, 'true', oDataOperationParameters);
        }
        
        public getRecommendedProducts(productIds: number[], customerId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productIds: productIds, customerId: customerId };

            return this.createDataServiceRequestForOperation('GetRecommendedProducts', true, Entities.ProductSearchResultClass, 'true', oDataOperationParameters);
        }
        
        public refineSearchByCategory(channelId: number, catalogId: number, categoryId: number, refinementCriteria: Entities.ProductRefinerValue[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId, categoryId: categoryId, refinementCriteria: refinementCriteria };

            return this.createDataServiceRequestForOperation('RefineSearchByCategory', true, Entities.ProductSearchResultClass, 'true', oDataOperationParameters);
        }
        
        public refineSearchByText(channelId: number, catalogId: number, searchText: string, refinementCriteria: Entities.ProductRefinerValue[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId, searchText: searchText, refinementCriteria: refinementCriteria };

            return this.createDataServiceRequestForOperation('RefineSearchByText', true, Entities.ProductSearchResultClass, 'true', oDataOperationParameters);
        }
        
        public getProductSearchRefiners(searchCriteria: Entities.ProductSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('GetProductSearchRefiners', true, Entities.ProductRefinerClass, 'true', oDataOperationParameters);
        }
        
        public search(productSearchCriteria: Entities.ProductSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productSearchCriteria: productSearchCriteria };

            return this.createDataServiceRequestForOperation('Search', true, Entities.ProductClass, 'true', oDataOperationParameters);
        }
        
        public getRefiners(productSearchCriteria: Entities.ProductSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productSearchCriteria: productSearchCriteria };

            return this.createDataServiceRequestForOperation('GetRefiners', true, Entities.ProductRefinerClass, 'true', oDataOperationParameters);
        }
        
        public changes(productSearchCriteria: Entities.ChangedProductsSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productSearchCriteria: productSearchCriteria };

            return this.createDataServiceRequestForOperation('Changes', true, Entities.ProductClass, 'true', oDataOperationParameters);
        }
        
        public beginReadChangedProducts(changedProductSearchCriteria: Entities.ChangedProductsSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { changedProductSearchCriteria: changedProductSearchCriteria };

            return this.createDataServiceRequestForOperation('BeginReadChangedProducts', true, Entities.ReadChangedProductsSessionClass, 'false', oDataOperationParameters);
        }
        
        public readChangedProducts(productSearchCriteria: Entities.ChangedProductsSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productSearchCriteria: productSearchCriteria };

            return this.createDataServiceRequestForOperation('ReadChangedProducts', true, Entities.ProductClass, 'true', oDataOperationParameters);
        }
        
        public getDeletedListings(catalogId: number, skip: number, top: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { catalogId: catalogId, skip: skip, top: top };

            return this.createDataServiceRequestForOperation('GetDeletedListings', true, Entities.DeletedListingsResultClass, 'false', oDataOperationParameters);
        }
        
        public getDeletedCatalogs(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetDeletedCatalogs', false, '', 'true', oDataOperationParameters);
        }
        
        public getDeletedLanguages(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetDeletedLanguages', false, '', 'true', oDataOperationParameters);
        }
        
        public getProductRatings(productIds: number[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productIds: productIds };

            return this.createDataServiceRequestForOperation('GetProductRatings', true, Entities.ProductRatingClass, 'true', oDataOperationParameters);
        }
        
        public getProductAssortmentIntervals(productIds: number[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productIds: productIds };

            return this.createDataServiceRequestForOperation('GetProductAssortmentIntervals', true, Entities.ProductAssortmentIntervalClass, 'true', oDataOperationParameters);
        }
        
        public getDeliveryOptions(productIds: number[], address: Entities.Address, filterOption: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productIds: productIds, address: address, filterOption: filterOption };

            return this.createDataServiceRequestForOperation('GetDeliveryOptions', true, Entities.ProductDeliveryOptionsClass, 'true', oDataOperationParameters);
        }
        
        public deleteListingsByCatalogs(catalogIds: number[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { catalogIds: catalogIds };

            return this.createDataServiceRequestForOperation('DeleteListingsByCatalogs', true, '', '', oDataOperationParameters);
        }
        
        public deleteListingsByLanguages(languages: string[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { languages: languages };

            return this.createDataServiceRequestForOperation('DeleteListingsByLanguages', true, '', '', oDataOperationParameters);
        }
        
        public endReadChangedProducts(session: Entities.ReadChangedProductsSession): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { session: session };

            return this.createDataServiceRequestForOperation('EndReadChangedProducts', true, '', '', oDataOperationParameters);
        }
        
        public updateListingPublishingStatus(publishingStatuses: Entities.ListingPublishStatus[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { publishingStatuses: publishingStatuses };

            return this.createDataServiceRequestForOperation('UpdateListingPublishingStatus', true, '', '', oDataOperationParameters);
        }
        
        public getPrices(itemId: string, inventoryDimensionId: string, barcode: string, customerAccountNumber: string, unitOfMeasureSymbol: string, quantity: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { itemId: itemId, inventoryDimensionId: inventoryDimensionId, barcode: barcode, customerAccountNumber: customerAccountNumber, unitOfMeasureSymbol: unitOfMeasureSymbol, quantity: quantity };

            return this.createDataServiceRequestForOperation('GetPrices', true, Entities.ProductPriceClass, 'true', oDataOperationParameters);
        }
        
        public getProductAvailabilities(itemIds: number[], channelId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { itemIds: itemIds, channelId: channelId };

            return this.createDataServiceRequestForOperation('GetProductAvailabilities', true, Entities.ProductAvailableQuantityClass, 'true', oDataOperationParameters);
        }
        
        public getActivePrices(projectDomain: Entities.ProjectionDomain, productIds: number[], activeDate: Date, customerId: string, affiliationLoyaltyTiers: Entities.AffiliationLoyaltyTier[], includeSimpleDiscountsInContextualPrice: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { projectDomain: projectDomain, productIds: productIds, activeDate: activeDate, customerId: customerId, affiliationLoyaltyTiers: affiliationLoyaltyTiers, includeSimpleDiscountsInContextualPrice: includeSimpleDiscountsInContextualPrice };

            return this.createDataServiceRequestForOperation('GetActivePrices', true, Entities.ProductPriceClass, 'true', oDataOperationParameters);
        }
        
        public getFilteredSlotComponents(channelId: number, slotId: number, selectedComponents: Entities.ComponentInSlotRelation[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, slotId: slotId, selectedComponents: selectedComponents };

            return this.createDataServiceRequestForOperation('GetFilteredSlotComponents', true, Entities.ProductComponentClass, 'true', oDataOperationParameters);
        }
        
        public getComponentByProductSlotRelation(channelId: number, componentRelation: Entities.ComponentInSlotRelation): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, componentRelation: componentRelation };

            return this.createDataServiceRequestForOperation('GetComponentByProductSlotRelation', true, Entities.ProductComponentClass, 'false', oDataOperationParameters);
        }
        
        public getCategoryPaths(channelId: number, catalogId: number, CategoryPathLookups: Entities.CategoryPathLookup[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId, CategoryPathLookups: CategoryPathLookups };

            return this.createDataServiceRequestForOperation('GetCategoryPaths', true, Entities.CategoryPathResultClass, 'true', oDataOperationParameters);
        }
        
        public searchByCategory(channelId: number, catalogId: number, categoryId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId, categoryId: categoryId };

            return this.createDataServiceRequestForOperation('SearchByCategory', false, Entities.ProductSearchResultClass, 'true', oDataOperationParameters);
        }
        
        public searchByText(channelId: number, catalogId: number, searchText: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId, searchText: searchText };

            return this.createDataServiceRequestForOperation('SearchByText', false, Entities.ProductSearchResultClass, 'true', oDataOperationParameters);
        }
        
        public searchByCriteria(searchCriteria: Entities.ProductSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('SearchByCriteria', true, Entities.ProductSearchResultClass, 'true', oDataOperationParameters);
        }
        
        public getByLookupClauses(channelId: number, productLookupClauses: Entities.ProductLookupClause[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, productLookupClauses: productLookupClauses };

            return this.createDataServiceRequestForOperation('GetByLookupClauses', true, Entities.SimpleProductClass, 'true', oDataOperationParameters);
        }
        
        public getSearchSuggestions(channelId: number, catalogId: number, searchText: string, hitPrefix: string, hitSuffix: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId, searchText: searchText, hitPrefix: hitPrefix, hitSuffix: hitSuffix };

            return this.createDataServiceRequestForOperation('GetSearchSuggestions', false, Entities.SearchSuggestionClass, 'true', oDataOperationParameters);
        }
        
        public getRefinersByCategory(catalogId: number, categoryId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { catalogId: catalogId, categoryId: categoryId };

            return this.createDataServiceRequestForOperation('GetRefinersByCategory', false, Entities.ProductRefinerClass, 'true', oDataOperationParameters);
        }
        
        public getRefinersByText(catalogId: number, searchText: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { catalogId: catalogId, searchText: searchText };

            return this.createDataServiceRequestForOperation('GetRefinersByText', false, Entities.ProductRefinerClass, 'true', oDataOperationParameters);
        }
        
        public getRefinerValuesByCategory(catalogId: number, categoryId: number, refinerId: number, refinerSourceValue: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { catalogId: catalogId, categoryId: categoryId, refinerId: refinerId, refinerSourceValue: refinerSourceValue };

            return this.createDataServiceRequestForOperation('GetRefinerValuesByCategory', false, Entities.ProductRefinerValueClass, 'true', oDataOperationParameters);
        }
        
        public getRefinerValuesByText(catalogId: number, searchText: string, refinerId: number, refinerSourceValue: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { catalogId: catalogId, searchText: searchText, refinerId: refinerId, refinerSourceValue: refinerSourceValue };

            return this.createDataServiceRequestForOperation('GetRefinerValuesByText', false, Entities.ProductRefinerValueClass, 'true', oDataOperationParameters);
        }
        
        public getChannelProductAttributes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetChannelProductAttributes', false, Entities.AttributeProductClass, 'true', oDataOperationParameters);
        }
        
        public getById(channelId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId };

            return this.createDataServiceRequestForOperation('GetById', false, Entities.SimpleProductClass, 'false', oDataOperationParameters);
        }
        
        public getAttributeValues(channelId: number, catalogId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId };

            return this.createDataServiceRequestForOperation('GetAttributeValues', false, Entities.AttributeValueClass, 'true', oDataOperationParameters);
        }
        
        public getMediaLocations(channelId: number, catalogId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId };

            return this.createDataServiceRequestForOperation('GetMediaLocations', false, Entities.MediaLocationClass, 'true', oDataOperationParameters);
        }
        
        public getMediaBlobs(channelId: number, catalogId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId };

            return this.createDataServiceRequestForOperation('GetMediaBlobs', false, Entities.MediaBlobClass, 'true', oDataOperationParameters);
        }
        
        public getDefaultComponents(channelId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId };

            return this.createDataServiceRequestForOperation('GetDefaultComponents', false, Entities.ProductComponentClass, 'true', oDataOperationParameters);
        }
        
        public getSlotComponents(channelId: number, slotId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, slotId: slotId };

            return this.createDataServiceRequestForOperation('GetSlotComponents', false, Entities.ProductComponentClass, 'true', oDataOperationParameters);
        }
        
        public getAllRelationTypes(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetAllRelationTypes', false, Entities.ProductRelationTypeClass, 'true', oDataOperationParameters);
        }
        
        public getRelationTypes(channelId: number, catalogId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId };

            return this.createDataServiceRequestForOperation('GetRelationTypes', false, Entities.ProductRelationTypeClass, 'true', oDataOperationParameters);
        }
        
        public getRelatedProducts(channelId: number, catalogId: number, relationTypeId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, catalogId: catalogId, relationTypeId: relationTypeId };

            return this.createDataServiceRequestForOperation('GetRelatedProducts', false, Entities.ProductSearchResultClass, 'true', oDataOperationParameters);
        }
        
        public getUnitsOfMeasure(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetUnitsOfMeasure', false, Entities.UnitOfMeasureClass, 'true', oDataOperationParameters);
        }
        
        public getApplicableWarranties(catalogId: number, warrantableProductIds: number[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { catalogId: catalogId, warrantableProductIds: warrantableProductIds };

            return this.createDataServiceRequestForOperation('GetApplicableWarranties', true, Entities.ProductWarrantiesMappingClass, 'true', oDataOperationParameters);
        }
        
        public getPrice(customerAccountNumber: string, unitOfMeasureSymbol: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { customerAccountNumber: customerAccountNumber, unitOfMeasureSymbol: unitOfMeasureSymbol };

            return this.createDataServiceRequestForOperation('GetPrice', false, Entities.ProductPriceClass, 'false', oDataOperationParameters);
        }
        
        public calculateProductPrice(customerAccountNumber: string, unitOfMeasureSymbol: string, loyaltyCardId: string, affiliationLoyaltyTiers: Entities.AffiliationLoyaltyTier[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { customerAccountNumber: customerAccountNumber, unitOfMeasureSymbol: unitOfMeasureSymbol, loyaltyCardId: loyaltyCardId, affiliationLoyaltyTiers: affiliationLoyaltyTiers };

            return this.createDataServiceRequestForOperation('CalculateProductPrice', true, Entities.ProductPriceClass, 'false', oDataOperationParameters);
        }
        
        public getEstimatedProductWarehouseAvailability(productWarehouses: Entities.ProductWarehouse[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productWarehouses: productWarehouses };

            return this.createDataServiceRequestForOperation('GetEstimatedProductWarehouseAvailability', true, Entities.ProductWarehouseInventoryInformationClass, 'false', oDataOperationParameters);
        }
        
        public getEstimatedAvailability(searchCriteria: Entities.InventoryAvailabilitySearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('GetEstimatedAvailability', true, Entities.ProductWarehouseInventoryInformationClass, 'false', oDataOperationParameters);
        }
        
    }
    
    export class CatalogsDataServiceQuery extends DataServiceQuery<Entities.ProductCatalog> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getCatalogs(channelId: number, activeOnly: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { channelId: channelId, activeOnly: activeOnly };

            return this.createDataServiceRequestForOperation('GetCatalogs', true, Entities.ProductCatalogClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class CommerceListsDataServiceQuery extends DataServiceQuery<Entities.CommerceList> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getByCustomer(customerId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { customerId: customerId };

            return this.createDataServiceRequestForOperation('GetByCustomer', true, Entities.CommerceListClass, 'true', oDataOperationParameters);
        }
        
        public addLines(commerceListLines: Entities.CommerceListLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { commerceListLines: commerceListLines };

            return this.createDataServiceRequestForOperation('AddLines', true, Entities.CommerceListClass, 'false', oDataOperationParameters);
        }
        
        public updateLines(commerceListLines: Entities.CommerceListLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { commerceListLines: commerceListLines };

            return this.createDataServiceRequestForOperation('UpdateLines', true, Entities.CommerceListClass, 'false', oDataOperationParameters);
        }
        
        public removeLines(commerceListLines: Entities.CommerceListLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { commerceListLines: commerceListLines };

            return this.createDataServiceRequestForOperation('RemoveLines', true, Entities.CommerceListClass, 'false', oDataOperationParameters);
        }
        
        public moveLines(commerceListLines: Entities.CommerceListLine[], destinationId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { commerceListLines: commerceListLines, destinationId: destinationId };

            return this.createDataServiceRequestForOperation('MoveLines', true, Entities.CommerceListClass, 'false', oDataOperationParameters);
        }
        
        public copyLines(commerceListLines: Entities.CommerceListLine[], destinationId: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { commerceListLines: commerceListLines, destinationId: destinationId };

            return this.createDataServiceRequestForOperation('CopyLines', true, Entities.CommerceListClass, 'false', oDataOperationParameters);
        }
        
        public addContributors(commerceListContributors: Entities.CommerceListContributor[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { commerceListContributors: commerceListContributors };

            return this.createDataServiceRequestForOperation('AddContributors', true, Entities.CommerceListClass, 'false', oDataOperationParameters);
        }
        
        public removeContributors(commerceListContributors: Entities.CommerceListContributor[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { commerceListContributors: commerceListContributors };

            return this.createDataServiceRequestForOperation('RemoveContributors', true, Entities.CommerceListClass, 'false', oDataOperationParameters);
        }
        
        public createInvitations(commerceListInvitations: Entities.CommerceListInvitation[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { commerceListInvitations: commerceListInvitations };

            return this.createDataServiceRequestForOperation('CreateInvitations', true, Entities.CommerceListClass, 'false', oDataOperationParameters);
        }
        
        public acceptInvitation(invitationToken: string, customerId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { invitationToken: invitationToken, customerId: customerId };

            return this.createDataServiceRequestForOperation('AcceptInvitation', true, '', '', oDataOperationParameters);
        }
        
    }
    
    export class ProductListsDataServiceQuery extends DataServiceQuery<Entities.ProductList> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public search(searchCriteria: Entities.ProductListSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('Search', true, Entities.ProductListClass, 'true', oDataOperationParameters);
        }
        
        public getProductListLines(searchText: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchText: searchText };

            return this.createDataServiceRequestForOperation('GetProductListLines', true, Entities.ProductListLineClass, 'true', oDataOperationParameters);
        }
        
        public addProductListLines(productListLines: Entities.ProductListLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productListLines: productListLines };

            return this.createDataServiceRequestForOperation('AddProductListLines', true, Entities.ProductListLineClass, 'true', oDataOperationParameters);
        }
        
        public updateProductListLines(productListLines: Entities.ProductListLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productListLines: productListLines };

            return this.createDataServiceRequestForOperation('UpdateProductListLines', true, Entities.ProductListLineClass, 'true', oDataOperationParameters);
        }
        
        public removeProductListLines(productListLines: Entities.ProductListLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { productListLines: productListLines };

            return this.createDataServiceRequestForOperation('RemoveProductListLines', true, '', '', oDataOperationParameters);
        }
        
        public copyCartToProductList(cartId: string, isRewrite: boolean, isQuantityAggregate: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { cartId: cartId, isRewrite: isRewrite, isQuantityAggregate: isQuantityAggregate };

            return this.createDataServiceRequestForOperation('CopyCartToProductList', true, Entities.ProductListClass, 'false', oDataOperationParameters);
        }
        
    }
    
    export class RecommendationsDataServiceQuery extends DataServiceQuery<Entities.Recommendation> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getElements(recommendationCriteria: Entities.RecommendationCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { recommendationCriteria: recommendationCriteria };

            return this.createDataServiceRequestForOperation('GetElements', true, Entities.RecommendedElementClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class TransferOrdersDataServiceQuery extends DataServiceQuery<Entities.TransferOrder> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public commit(skipNotValidLines: boolean): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { skipNotValidLines: skipNotValidLines };

            return this.createDataServiceRequestForOperation('Commit', true, '', '', oDataOperationParameters);
        }
        
        public getTransferOrderLines(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetTransferOrderLines', true, Entities.TransferOrderLineClass, 'true', oDataOperationParameters);
        }
        
        public createTransferOrderLines(transferOrderLines: Entities.TransferOrderLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transferOrderLines: transferOrderLines };

            return this.createDataServiceRequestForOperation('CreateTransferOrderLines', true, Entities.TransferOrderLineClass, 'true', oDataOperationParameters);
        }
        
        public updateTransferOrderLines(transferOrderLines: Entities.TransferOrderLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transferOrderLines: transferOrderLines };

            return this.createDataServiceRequestForOperation('UpdateTransferOrderLines', true, Entities.TransferOrderLineClass, 'true', oDataOperationParameters);
        }
        
        public getTransferOrderComments(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetTransferOrderComments', true, Entities.CommentClass, 'true', oDataOperationParameters);
        }
        
        public addTransferOrderComment(AuthorStaffId: string, CommentText: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { AuthorStaffId: AuthorStaffId, CommentText: CommentText };

            return this.createDataServiceRequestForOperation('AddTransferOrderComment', true, Entities.CommentClass, 'false', oDataOperationParameters);
        }
        
        public deleteTransferOrderLines(transferOrderLines: Entities.TransferOrderLine[]): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { transferOrderLines: transferOrderLines };

            return this.createDataServiceRequestForOperation('DeleteTransferOrderLines', true, Entities.TransferOrderLineClass, 'true', oDataOperationParameters);
        }
        
        public getTransferOrderJournals(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetTransferOrderJournals', true, Entities.TransferOrderJournalClass, 'true', oDataOperationParameters);
        }
        
        public getTransferPackingSlip(voucherId: string, receiptRetrievalCriteria: Entities.ReceiptRetrievalCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { voucherId: voucherId, receiptRetrievalCriteria: receiptRetrievalCriteria };

            return this.createDataServiceRequestForOperation('GetTransferPackingSlip', true, Entities.ReceiptClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class PurchaseOrdersDataServiceQuery extends DataServiceQuery<Entities.PurchaseOrder> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public commit(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('Commit', true, '', '', oDataOperationParameters);
        }
        
    }
    
    export class PickingListsDataServiceQuery extends DataServiceQuery<Entities.PickingList> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public commit(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('Commit', true, '', '', oDataOperationParameters);
        }
        
    }
    
    export class WarehousesDataServiceQuery extends DataServiceQuery<Entities.Warehouse> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public searchWarehouseLocationsAsync(searchCriteria: Entities.WarehouseLocationSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('SearchWarehouseLocationsAsync', true, Entities.WarehouseLocationClass, 'true', oDataOperationParameters);
        }
        
        public getWarehouseById(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetWarehouseById', false, Entities.WarehouseClass, 'false', oDataOperationParameters);
        }
        
        public searchWarehouses(searchText: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchText: searchText };

            return this.createDataServiceRequestForOperation('SearchWarehouses', false, Entities.WarehouseClass, 'true', oDataOperationParameters);
        }
        
        public getLocations(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetLocations', false, Entities.WarehouseLocationClass, 'true', oDataOperationParameters);
        }
        
        public searchLocations(searchText: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchText: searchText };

            return this.createDataServiceRequestForOperation('SearchLocations', false, Entities.WarehouseLocationClass, 'true', oDataOperationParameters);
        }
        
        public getAvailableFulfillmentLocations(deliveryModeTypeFilter: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { deliveryModeTypeFilter: deliveryModeTypeFilter };

            return this.createDataServiceRequestForOperation('GetAvailableFulfillmentLocations', false, Entities.WarehouseClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class ApplicableOperationsDataServiceQuery extends DataServiceQuery<Entities.SalesOrderContextualOperationsMap> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getOrders(orderSearchCriteria: Entities.OrderSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { orderSearchCriteria: orderSearchCriteria };

            return this.createDataServiceRequestForOperation('GetOrders', true, Entities.SalesOrderContextualOperationsMapClass, 'true', oDataOperationParameters);
        }
        
        public getFulfillmentLines(fulfillmentLineSearchCriteria: Entities.FulfillmentLineSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { fulfillmentLineSearchCriteria: fulfillmentLineSearchCriteria };

            return this.createDataServiceRequestForOperation('GetFulfillmentLines', true, Entities.FulfillmentLineContextualOperationsMapClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class InventoryInboundOutboundDocumentsDataServiceQuery extends DataServiceQuery<Entities.InventoryInboundOutboundDocument> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public updateStatus(documentStatus: number, documentVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentStatus: documentStatus, documentVersion: documentVersion };

            return this.createDataServiceRequestForOperation('UpdateStatus', true, Entities.InventoryInboundOutboundDocumentClass, 'false', oDataOperationParameters);
        }
        
        public updateLinesByCriteria(filterCriteria: Entities.InventoryDocumentLineFilterCriteria, updateLinesAction: Entities.InventoryDocumentUpdateLinesAction, returnUpdatedLinesPolicy: Entities.InventoryDocumentLineOperationResultSettings): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { filterCriteria: filterCriteria, updateLinesAction: updateLinesAction, returnUpdatedLinesPolicy: returnUpdatedLinesPolicy };

            return this.createDataServiceRequestForOperation('UpdateLinesByCriteria', true, Entities.InventoryInboundOutboundDocumentUpdateLinesByCriteriaResultClass, 'false', oDataOperationParameters);
        }
        
        public updateLine(documentLine: Entities.InventoryInboundOutboundDocumentLine): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentLine: documentLine };

            return this.createDataServiceRequestForOperation('UpdateLine', true, Entities.InventoryInboundOutboundDocumentLineClass, 'false', oDataOperationParameters);
        }
        
        public updateWorkingTerminal(documentVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentVersion: documentVersion };

            return this.createDataServiceRequestForOperation('UpdateWorkingTerminal', true, Entities.InventoryInboundOutboundDocumentClass, 'false', oDataOperationParameters);
        }
        
        public updateNote(documentNote: string, documentVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentNote: documentNote, documentVersion: documentVersion };

            return this.createDataServiceRequestForOperation('UpdateNote', true, Entities.InventoryInboundOutboundDocumentClass, 'false', oDataOperationParameters);
        }
        
        public updateReceiptId(documentReceiptId: string, documentVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentReceiptId: documentReceiptId, documentVersion: documentVersion };

            return this.createDataServiceRequestForOperation('UpdateReceiptId', true, Entities.InventoryInboundOutboundDocumentClass, 'false', oDataOperationParameters);
        }
        
        public commit(documentVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentVersion: documentVersion };

            return this.createDataServiceRequestForOperation('Commit', true, Entities.InventoryInboundOutboundDocumentClass, 'false', oDataOperationParameters);
        }
        
        public refreshOperationStatus(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('RefreshOperationStatus', true, Entities.InventoryInboundOutboundDocumentClass, 'false', oDataOperationParameters);
        }
        
        public start(sourceDocumentId: string, sourceDocumentType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { sourceDocumentId: sourceDocumentId, sourceDocumentType: sourceDocumentType };

            return this.createDataServiceRequestForOperation('Start', true, Entities.InventoryInboundOutboundDocumentClass, 'false', oDataOperationParameters);
        }
        
        public addLine(documentLine: Entities.InventoryInboundOutboundDocumentLine): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentLine: documentLine };

            return this.createDataServiceRequestForOperation('AddLine', true, Entities.InventoryInboundOutboundDocumentLineClass, 'false', oDataOperationParameters);
        }
        
        public deleteLine(documentLineId: string, documentLineVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentLineId: documentLineId, documentLineVersion: documentLineVersion };

            return this.createDataServiceRequestForOperation('DeleteLine', true, '', '', oDataOperationParameters);
        }
        
        public searchSerialNumberLines(searchCriteria: Entities.InventoryDocumentSerialNumberLineSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('SearchSerialNumberLines', true, Entities.InventoryDocumentSerialNumberLineClass, 'true', oDataOperationParameters);
        }
        
        public validate(documentVersion: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentVersion: documentVersion };

            return this.createDataServiceRequestForOperation('Validate', true, Entities.InventoryDocumentValidationResultSummaryClass, 'false', oDataOperationParameters);
        }
        
        public searchValidationResultLines(searchCriteria: Entities.InventoryDocumentValidationResultSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('SearchValidationResultLines', true, Entities.InventoryDocumentValidationResultLineClass, 'true', oDataOperationParameters);
        }
        
        public syncSourceDocument(sourceDocumentId: string, sourceDocumentType: number): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { sourceDocumentId: sourceDocumentId, sourceDocumentType: sourceDocumentType };

            return this.createDataServiceRequestForOperation('SyncSourceDocument', true, '', '', oDataOperationParameters);
        }
        
        public searchInboundDocuments(searchCriteria: Entities.InventoryDocumentSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('SearchInboundDocuments', true, Entities.InventoryInboundOutboundDocumentClass, 'true', oDataOperationParameters);
        }
        
        public searchOutboundDocuments(searchCriteria: Entities.InventoryDocumentSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('SearchOutboundDocuments', true, Entities.InventoryInboundOutboundDocumentClass, 'true', oDataOperationParameters);
        }
        
        public searchLines(searchCriteria: Entities.InventoryDocumentLineSearchCriteria): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { searchCriteria: searchCriteria };

            return this.createDataServiceRequestForOperation('SearchLines', true, Entities.InventoryInboundOutboundDocumentLineClass, 'true', oDataOperationParameters);
        }
        
        public resetSerialNumberLine(resetSerialNumberLineAction: Entities.InventoryDocumentSerialNumberLineResetAction): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { resetSerialNumberLineAction: resetSerialNumberLineAction };

            return this.createDataServiceRequestForOperation('ResetSerialNumberLine', true, Entities.InventoryDocumentSerialNumberLineClass, 'false', oDataOperationParameters);
        }
        
        public updateSerialNumberLine(updateSerialNumberLineAction: Entities.InventoryDocumentSerialNumberLineUpdateAction): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { updateSerialNumberLineAction: updateSerialNumberLineAction };

            return this.createDataServiceRequestForOperation('UpdateSerialNumberLine', true, Entities.InventoryDocumentSerialNumberLineClass, 'false', oDataOperationParameters);
        }
        
        public getLinesSummary(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetLinesSummary', false, Entities.InventoryInboundOutboundDocumentLinesSummaryClass, 'false', oDataOperationParameters);
        }
        
        public getSerialNumberLinesSummary(documentLineId: string): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { documentLineId: documentLineId };

            return this.createDataServiceRequestForOperation('GetSerialNumberLinesSummary', false, Entities.InventoryDocumentSerialNumberLinesSummaryClass, 'false', oDataOperationParameters);
        }
        
    }
    
    export class BusinessPartnersDataServiceQuery extends DataServiceQuery<Entities.BusinessPartner> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public createProspect(businessPartnerProspect: Entities.BusinessPartnerProspect): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = { businessPartnerProspect: businessPartnerProspect };

            return this.createDataServiceRequestForOperation('CreateProspect', true, Entities.BusinessPartnerProspectClass, 'false', oDataOperationParameters);
        }
        
        public getCurrent(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetCurrent', false, Entities.BusinessPartnerClass, 'false', oDataOperationParameters);
        }
        
        public getUsers(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetUsers', false, Entities.BusinessPartnerUserClass, 'true', oDataOperationParameters);
        }
        
    }
    
    export class SuspendedCartsDataServiceQuery extends DataServiceQuery<Entities.SuspendedCart> {

        constructor(dataServiceRequestFactory: IDataServiceRequestFactory, entitySet: string, entityType: string, returnType?: any, key?: any) {
            super(dataServiceRequestFactory, entitySet, entityType, returnType, key);
        }

        
        public getAllSuspendedCarts(): IDataServiceRequest {
            var oDataOperationParameters = new ODataOperationParameters();
            oDataOperationParameters.parameters = {  };

            return this.createDataServiceRequestForOperation('GetAllSuspendedCarts', true, Entities.SuspendedCartClass, 'true', oDataOperationParameters);
        }
        
    }
    

}
