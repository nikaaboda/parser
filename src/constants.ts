export const STRATEDI: any = {
    ORDER: {
        REGEXES: [
            ['.', "WORD"],
            ['\r\n|\r|\n', "CRLF"]
        ],
    
        SECTIONS: ["000", "100", "111", "115", "119", "120", "130", "140", "500", "511", "513", "515", "519", "530", "580", "900", "913"],
    
        LENGTHLIST:  [
            "000", [3, 35, 35, 8, 4, 14, 14, 14, 1, 5, 467],
            "100", [3, 14, 6, 3, 3, 2, 6, 3, 3, 35, 8, 3, 1, 35, 1, 474],
            "111", [3, 35, 8, 35, 35, 35, 8, 35, 8, 8, 35, 8, 35, 8, 35, 35, 234],
            "115", [3, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 481],
            "119", [3, 3, 13, 35, 35, 35, 35, 35, 35, 9, 35, 3, 35, 35, 35, 35, 35, 20, 20, 20, 89],
            "120", [3, 3, 5, 3, 8, 8, 3, 3, 35, 3, 3, 35, 35, 3, 35, 17, 35, 363],
            "130", [3, 3, 350, 244],
            "140", [3, 5, 8, 18, 18, 18, 18, 3, 8, 501],
            "500", [3, 6, 3, 13, 35, 35, 35, 35, 35, 35, 35, 15, 15, 3, 5, 15, 15, 15, 15, 15, 9, 3, 18, 18, 18, 7, 7, 1, 15, 15, 3, 10, 1, 3, 1, 14, 74 ],
            "511", [3, 35, 8, 35, 35, 35, 8, 35, 8, 8, 35, 8, 35, 8, 35, 35, 8, 35, 8, 35, 8, 6, 6, 128],
            "513", [3, 3, 3, 3, 5, 8, 18, 15, 15, 18, 35, 474],
            "515", [3, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 4, 4, 4, 3, 3, 491],
            "519", [3, 3, 13, 35, 35, 35, 35, 35, 35, 9, 35, 3, 35, 35, 35, 35, 35, 20, 20, 20, 89],
            "530", [3, 3, 350, 244],
            "580", [3, 6, 8, 35, 15, 3, 8, 4, 13, 15, 15, 3, 15, 3, 35, 3, 35, 3, 3, 15, 360],
            "900", [3, 18, 18, 561],
            "913", [3, 3, 3, 3, 5, 8, 18, 15, 15, 18, 35, 474]
        ],
    
        KEYS: {
            "000": ["type", "senderId", "recieverId", "date", "time", "dataExchangeReference", "referenceNumber", "applicationReference", "testIndicator", "fileInterfaceVersionNumber", "filler"],
            "100": ["type", "messageReference", "messageType", "messageTypeVersion", "messageTypeRelease", "managingOrganization", "responsibleOrganization", "transactionType", "transactionFunction", "documentNumber", "documentDate", "responseType", "pickupIndicator", "documenName", "deliveryIndicator", "filler"],
            "111": ["type", "offerNumber", "offerDate", "campaignNumber", "priceListNumber", "customerOrderNumber", "customerOrcerDate", "internalOrderNumber", "internalOrderDate", "deliveryDate", "deliveryReceiptNumber", "deliveryReceiptDate", "invoiceListNumber", "invoiceListDate", "agreementNumber", "bankAccountNumber", "filler" ],
            "115": ["type", "expectedDeliveryDate", "earliestDeliveryDate", "latestDeliveryDate", "promisedDeliveryDate", "scheduledDeliveryDate", "shippingDate", "pickUpDate", "cancellationDate", "expectedDeliveryWeek", "earliestDeliveryWeek", "latestDeliveryWeek", "promisedDeliveryWeek", "expectedDeliveryTime", "earliestDeliveryTime", "latestDeliveryTime", "promisedDeliveryTime", "scheduledDeliveryTime", "shippingTime", "pickUpTime", "filler" ],
            "119": ["type", "partnerType", "partnerILN", "partnerName1", "partnerName2", "partnerName3", "partnerStreet1", "partnerStreet2", "partnerStreet3", "postalCode", "city", "country", "partnerId", "byPartnerAssignedId", "affiliateVatId", "partnerDepartment", "taxNumber", "contactPartner", "phone", "fax", "filler" ],
            "120": ["type", "currencry", "vatRate", "paymentTerm", "valueDate", "dueDate", "deliveryTerms", "valueDays", "free", "conditionLockIndicator", "taxExemptIndicator", "deliveryCondition", "transportType", "transportPaymentMethod", "paymentTerms", "consignmentNumber", "trailerNumber", "filler"],
            "130": ["type", "textMapping", "text", "filler"],
            "140": ["type", "vatRate", "percentDiscount", "discountAmount", "freightAmount", "packagingCostContribution", "insuranceCostContribution", "discountDays", "discountDate", "filler" ],
            "500": ["type", "positionNumber", "activationType", "EAN", "supplierItemNumber", "clientItemNumber", "productGroup", "itemDescription1", "itemDescription2", "itemSize", "itemColor", "orderQuantity", "amountWithoutCalculation", "currencyCode", "itemVatRate", "netUnitPrice", "grossUnitPrice", "unitSellingPrice", "unitPromotionPrice", "unitCatalogPrice", "priceBasis", "measureUnit", "netValue", "grossValue", "discountSum", "packageType", "packagesCount", "displayIndicator", "deliveredQuantity", "promotionVariantNumber", "taxExemptIndicator", "miscellaneousIndicator", "subsequentDeliveryIndicator", "discrepancyReason", "KZMHD", "billingUnitEAN", "filler" ],
            "511": ["type", "offerNumber", "offerDate", "campaignNumber", "priceListNumber", "customerOrderNumber", "customerOrcerDate", "internalOrderNumber", "internalOrderDate", "deliveryDate", "deliveryReceiptNumber", "deliveryReceiptDate", "invoiceListNumber", "invoiceListDate", "agreementNumber", "bankAccountNumber", "performancePeriod", "referenceNumber", "referenceDate", "returnNumber", "returnDate", "orderItemNumber", "deliveryReceiptItemNumber", "filler"],
            "513": ["type", "discountIndicator", "codedDiscountType", "calculationSequenceDisplay", "discountVatRate", "discountPercent", "discountAmount", "quantityDiscount", "discountPerUnit", "discountBasis", "textDiscountType", "filler" ],
            "515": ["type", "expectedDeliveryDate", "earliestDeliveryDate", "latestDeliveryDate", "promisedDeliveryDate", "scheduledDeliveryDate", "shippingDate", "pickUpDate", "cancellationDate", "expectedDeliveryWeek", "earliestDeliveryWeek", "latestDeliveryWeek", "promisedDeliveryWeek", "expectedDeliveryTime", "earliestDeliveryTime", "latestDeliveryTime", "minRemainingTimeForShipping", "timeUnit", "filler" ],
            "519": ["type", "partnerType", "partnerILN", "partnerName1", "partnerName2", "partnerName3", "partnerStreet1", "partnerStreet2", "partnerStreet3", "postalCode", "city", "country", "partnerId", "byPartnerAssignedId", "affiliateVatId", "partnerDepartment", "taxNumber", "contactPartner", "phone", "fax", "filler"],
            "530": ["type", "textMapping", "text", "filler" ],
            "580": ["type", "positionNumber", "bestBeforeDate", "batchNumber", "deliveryQuantity", "deliveryQuantityMeasureUnit", "expectedDeliveryDate", "expectedDeliveryTime", "deliveryPlaceILN", "servingsNumber", "portionsSize", "portionSizeMeasureUnit", "positionTotalWeight", "totalWeightMeasureUnit", "customerReference", "customerReferenceIndicator", "supplierReference", "supplierReferenceIndicator", "optionOrderIndicator", "reservedQuantity", "filler" ],
            "900": ["type", "receiptTotalAmount", "receiptVatAmount", "filler"],
            "913": ["type", "discountIndicator", "codedDiscountType", "calculationSequenceDisplay", "discountVatRate", "discountProzent", "discountAmount", "discountQuantity", "discountPerUnit", "discountBasis", "textDiscountType", "filler"] 
        }
    },

    INVOICE: {
        REGEXES: [
            ['.', "WORD"],
            ['\r\n|\r|\n', "CRLF"]
        ],

        SECTIONS:  ["000", "100", "111", "115", "119", "120", "121", "130", "140", "150", "500", 
                    "511", "513", "519", "530", "601", "900", "901", "913", "990", "991"],

        KEYS: {
            "000": ["type", "senderId", "recieverId", "date", "time", "dataExchangeReference", "referenceNumber", "applicationReference", "testIndicator", "fileInterfaceVersionNumber",  "filler"], 
            "100": ["type", "messageReference", "messageType", "messageTypeVersion", "messageTypeRelease", "managingOrganization", "responsibleOrganization", "transactionType", "transactionFunction", "documentNumber", "documentDate", "responseType", "pickupIndicator", "documenName", "deliveryIndicator", "serviceProviderIndicator", "invoiceCorrectionIndactor", "filler"],    
            "111": ["type", "offerNumber", "offerDate", "campaignNumber", "priceListNumber", "customerOrderNumber", "customerOrcerDate", "internalOrderNumber", "internalOrderDate", "deliveryDate", "deliveryReceiptNumber", "deliveryReceiptDate", "invoiceListNumber", "invoiceListDate", "agreementNumber", "bankAccountNumber", "performancePeriodUntil", "referenceNumber", "referenceDate", "returnsNumber", "returnsDate", "notUsed", "notUsed", "codeReference1", "reference1", "reference1Date", "codeReference2", "reference2", "reference2Date", "codeReference3", "reference3", "reference3Date", "filler"],
            "115": ["type", "expectedDeliveryDate", "earliestDeliveryDate", "latestDeliveryDate", "promisedDeliveryDate", "scheduledDeliveryDate", "shippingDate", "pickUpDate", "cancellationDate", "expectedDeliveryWeek", "earliestDeliveryWeek", "latestDeliveryWeek", "promisedDeliveryWeek", "expectedDeliveryTime", "earliestDeliveryTime", "latestDeliveryTime", "promisedDeliveryTime", "scheduledDeliveryTime", "shippingTime", "pickUpTime", "filler"], 
            "119": ["type", "partnerType", "partnerILN", "partnerName1", "partnerName2", "partnerName3", "partnerStreet1", "partnerStreet2", "partnerStreet3", "postalCode", "city", "country", "partnerId", "byPartnerAssignedId", "affiliateVatId", "partnerDepartment", "taxNumber", "contactPartner", "phone", "fax", "referenceNumberIndicator", "referenceNumber", "filler"],
            "120": ["type", "currencry", "vatRate", "paymentTerm", "valueDate", "dueDate", "deliveryTerms", "valueDays", "free", "conditionLockIndicator", "taxExemptIndicator", "deliveryCondition", "transportType", "transportPaymentMethod", "paymentTerms", "consignmentNumber", "trailerNumber", "filler"],
            "121": ["type", "partnerType", "bankAccountNumber", "bankAccountOwner", "bankCode", "BIC", "bankName", "countryCode", "IBAN", "stock", "stockCurrency", "companyRegisterCourt", "companyRegisterNumber", "legalForm", "headquarters", "bankBranchLocation", "filler"],
            "130": ["type", "textMapping", "text", "filler"],
            "140": ["type", "vatRate", "percentDiscount", "discountAmount", "freightAmount", "packagingCostContribution", "insuranceCostContribution", "discountDays", "discountDate", "percentDiscount2", "discountDate2", "percentDiscount3", "discountDate3", "discountDays2", "discountDays3", "filler"],
            "150": ["type", "code1", "value1", "date1", "time1", "code2", "value2", "date2", "time2", "code3", "value3", "date3", "time3", "code4", "value4", "date4", "time4", "code5", "value5", "date5", "time5", "code6", "value6", "date6", "time6", "code7", "value7", "date7", "time7", "code8", "value8", "date8", "time8", "code9", "value9", "date9", "time9", "code10", "value10", "date10", "time10", "filler"],
            "500": ["type", "positionNumber", "activationType", "GTIN", "supplierItemNumber", "clientItemNumber", "productGroup", "itemDescription1", "itemDescription2", "itemSize", "itemColor", "calculatedQuantity", "amountWithoutCalculation", "currencyCode", "itemVatRate", "netUnitPrice", "grossUnitPrice", "unitSellingPrice", "unitPromotionPrice", "unitCatalogPrice", "priceBasis", "measureUnit", "netValue", "grossValue", "discountSum", "packageType", "packagesCount", "displayIndicator", "deliveredQuantity", "promotionVariantNumber", "taxExemptIndicator", "miscellaneousIndicator", "subsequentDeliveryIndicator", "discrepancyReason", "itemAmountVAT", "billingUnitEAN", "conditionLockIndicator", "referenceNumberIndicator", "referenceNumber", "originCountry", "filler"],
            "511": ["type", "offerNumber", "offerDate", "campaignNumber", "priceListNumber", "customerOrderNumber", "customerOrcerDate", "internalOrderNumber", "internalOrderDate", "deliveryDate", "deliveryReceiptNumber", "deliveryReceiptDate", "invoiceListNumber", "invoiceListDate", "agreementNumber", "bankAccountNumber", "performancePeriod", "referenceNumber", "referenceDate", "returnNumber", "returnDate", "orderItemNumber", "deliveryReceiptItemNumber", "codeReference1", "reference1", "reference1Date", "codeReference2", "reference2", "reference2Date", "codeReference3", "reference3", "reference3Date", "filler"],
            "513": ["type", "discountIndicator", "codedDiscountType", "calculationSequenceDisplay", "discountVatRate", "discountPercent", "discountAmount", "quantityDiscount", "discountPerUnit", "discountBasis", "textDiscountType", "discountAmountVat", "filler"],
            "519": ["type", "partnerType", "partnerILN", "partnerName1", "partnerName2", "partnerName3", "partnerStreet1", "partnerStreet2", "partnerStreet3", "postalCode", "city", "country", "partnerId", "byPartnerAssignedId", "affiliateVatId", "partnerDepartment", "taxNumber", "contactPartner", "phone", "fax", "referenceNumberIndicator", "referenceNumber", "filler"],
            "530": ["type", "textMapping", "text", "filler"],
            "601": ["type", "subItemNumber", "GTIN", "consumerUnitsNumber", "consumerUnitDesignation", "supplierItemNumber", "EAN", "filler"],
            "900": ["type", "finalInvoiceAmount", "receiptTotalAmountVAT", "totalNetValue", "totalTaxableAmount", "totalDiscountableAmount", "totalDiscounts", "totalAdditionalCosts", "filler"],
            "901": ["type", "totalAmount", "vatAmount", "netValue", "taxableAmount", "discountableAmount", "discountsAmount", "VATRate", "miscellaneousIndicator", "filler"],
            "913": ["type", "discountIndicator", "codedDiscountType", "calculationSequenceDisplay", "discountVatRate", "discountProzent", "discountAmount", "discountQuantity", "discountPerUnit", "discountBasis", "textDiscountType", "discountAmountVAT", "filler"],
            "990": ["type", "invoiceListType", "invoiceListNumber", "invoiceListDate", "agreementNumber", "RLCreatorGLN", "customerInternalSupplierNumber", "RLReceiverGLN", "payeeGLN", "payerGLN", "currencyCode", "valueDate", "dueDate", "invoiceListFinalAmount", "RLTotalAmountVAT", "RLtotalNetValue", "RLtotalTaxableAmount", "RLtotalDiscountableAmount", "RLtotalDiscounts", "VATRate", "billingPeriodStartDate", "billingPeriodEndDate", "filler"],
            "991": ["type", "totalAmount", "VATamount", "netValue", "taxableAmount", "discountableAmount", "totalDiscounts", "VATRate", "miscellaneousIndicator", "filler"]
        },

        LENGTHLIST: [
            "000", [3, 35, 35, 8, 4, 14, 14, 14, 1, 5, 467],
            "100", [3, 14, 6, 3, 3, 2, 6, 3, 3, 35, 8, 3, 1, 35, 1, 3, 3, 468],
            "111", [3, 35, 8, 35, 35, 35, 8, 35, 8, 8, 35, 8, 35, 8, 35, 35, 8, 35, 8, 35, 8, 6, 6, 3, 25, 8, 3, 25, 8, 3, 25, 8, 20],
            "115", [3, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 481],
            "119", [3, 3, 13, 35, 35, 35, 35, 35, 35, 9, 35, 3, 35, 35, 35, 35, 35, 20, 20, 20, 3, 35, 51],
            "120", [3, 3, 5, 3, 8, 8, 3, 3, 35, 3, 3, 35, 35, 3, 35, 17, 35, 363],
            "121", [3, 3, 35, 35, 17, 11, 70, 3, 35, 12, 3, 35, 35, 35, 35, 35, 198],
            "130", [3, 3, 350, 244],
            "140", [3, 5, 8, 18, 18, 18, 18, 3, 8, 8, 8, 8, 8, 3, 3,  501],
            "150", [3, 5, 35, 8, 4, 5, 35, 8, 4, 5, 35, 8, 4, 5, 35, 8, 4, 5, 35, 8, 4, 5, 35, 8, 4, 5, 35, 8, 4, 5, 35, 8, 4, 5, 35, 8, 4, 5, 35, 8, 4, 77],
            "500", [3, 6, 3, 13, 35, 35, 35, 35, 35, 35, 35, 15, 15, 3, 5, 15, 15, 15, 15, 15, 9, 3, 18, 18, 18, 7, 7, 1, 15, 15, 3, 10, 1, 3, 18, 14, 1, 3, 35, 3, 15 ],
            "511", [3, 35, 8, 35, 35, 35, 8, 35, 8, 8, 35, 8, 35, 8, 35, 35, 8, 35, 8, 35, 8, 6, 6, 3, 25, 8, 3, 25, 8, 3, 25, 8, 20],
            "513", [3, 3, 3, 3, 5, 8, 18, 15, 15, 18, 35, 15, 459],
            "519", [3, 3, 13, 35, 35, 35, 35, 35, 35, 9, 35, 3, 35, 35, 35, 35, 35, 20, 20, 20, 3, 35, 51],
            "530", [3, 3, 350, 244],
            "601", [3, 6, 13, 15, 35, 35, 14, 479],
            "900", [3, 18, 18, 18, 18, 18, 18, 18, 453],
            "901", [3, 18, 18, 18, 18, 18, 18, 5, 10, 474],
            "913", [3, 3, 3, 3, 5, 8, 18, 15, 15, 18, 35, 15, 474],
            "990", [3, 3, 35, 8, 35, 13, 35, 13, 13, 13, 3, 8, 8, 18, 18, 18, 18, 18, 18, 5, 8, 8, 281],
            "991", [3, 18, 18, 18, 18, 18, 18, 5, 10, 474],
        ]
    },

    DEASDV: {
        REGEXES: [
            ['.', "WORD"],
            ['\r\n|\r|\n', "CRLF"]
        ],

        SECTIONS: ["000", "100", "111", "115", "119", "120", "130", "400", "410", "415", "420", "500", "502", "511", "515", "519", "580", "601"],
            
        LENGTHLIST:  [
            "000", [3, 35, 35, 8, 4, 14, 14, 14, 1, 5, 467],
            "100", [3, 14, 6, 3, 3, 2, 6, 3, 3, 35, 8, 3, 1, 35, 1, 474],
            "111", [3, 35, 8, 35, 35, 35, 8, 35, 8, 8, 35, 8, 35, 8, 35, 269],
            "115", [3, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 4, 4, 4, 4, 4, 4, 4, 481],
            "119", [3, 3, 13, 35, 35, 35, 35, 35, 35, 9, 35, 3, 35, 35, 35, 35, 35, 20, 20, 20, 89],
            "120", [3, 3, 5, 3, 8, 8, 3, 3, 35, 3, 3, 35, 35, 3, 35, 17, 35, 363],
            "130", [3, 3, 350, 244],
            "400", [3, 6, 8, 17, 8, 17, 3, 18, 35, 8, 18, 35, 8, 416],
            "410", [3, 17, 35, 8, 3, 8, 18, 3, 13, 3, 489],
            "415", [3, 17, 35, 8, 3, 18, 3, 513],
            "420", [3, 17, 35, 22, 18, 3, 502],
            "500", [3, 6, 3, 13, 35, 35, 35, 35, 35, 35, 35, 15, 15, 3, 5, 15, 15, 15, 15, 15, 9, 3, 18, 18, 18, 7, 7, 1, 15, 15, 3, 10, 1, 3, 1, 14, 74 ],
            "502", [3, 10, 3, 10, 3, 10, 3, 10, 3, 10, 3, 532],
            "511", [3, 35, 8, 35, 35, 35, 8, 35, 8, 8, 35, 8, 35, 8, 35, 35, 8, 35, 8, 35, 8, 6, 6, 128],
            "515", [3, 8, 8, 8, 8, 8, 8, 8, 8, 6, 6, 6, 6, 4, 4, 4, 3, 3, 491],
            "519", [3, 3, 13, 35, 35, 35, 35, 35, 35, 9, 35, 3, 35, 35, 35, 35, 35, 20, 20, 20, 89],
            "580", [3, 6, 8, 35, 15, 3, 8, 4, 13, 15, 15, 3, 15, 3, 35, 3, 35, 3, 35, 343],
            "601", [3, 6, 13, 15, 35, 35, 493]
        ],
    
        KEYS: {
            "000": ["type", "senderId", "recieverId", "date", "time", "dataExchangeReference", "referenceNumber", "applicationReference", "testIndicator", "fileInterfaceVersionNumber", "filler"],
            "100": ["type", "messageReference", "messageType", "messageTypeVersion", "messageTypeRelease", "managingOrganization", "responsibleOrganization", "transactionType", "transactionFunction", "documentNumber", "documentDate", "responseType", "pickupIndicator", "documenName", "deliveryIndicator", "filler"],
            "111": ["type", "offerNumber", "offerDate", "campaignNumber", "priceListNumber", "customerOrderNumber", "customerOrcerDate", "internalOrderNumber", "internalOrderDate", "deliveryDate", "deliveryReceiptNumber", "deliveryReceiptDate", "invoiceListNumber", "invoiceListDate", "agreementNumber", "filler" ],
            "115": ["type", "expectedDeliveryDate", "earliestDeliveryDate", "latestDeliveryDate", "promisedDeliveryDate", "scheduledDeliveryDate", "shippingDate", "pickUpDate", "cancellationDate", "expectedDeliveryWeek", "earliestDeliveryWeek", "latestDeliveryWeek", "promisedDeliveryWeek", "expectedDeliveryTime", "earliestDeliveryTime", "latestDeliveryTime", "promisedDeliveryTime", "scheduledDeliveryTime", "shippingTime", "pickUpTime", "filler" ],
            "119": ["type", "partnerType", "partnerILN", "partnerName1", "partnerName2", "partnerName3", "partnerStreet1", "partnerStreet2", "partnerStreet3", "postalCode", "city", "country", "partnerId", "byPartnerAssignedId", "affiliateVatId", "partnerDepartment", "taxNumber", "contactPartner", "phone", "fax", "filler" ],
            "120": ["type", "currencry", "vatRate", "paymentTerm", "valueDate", "dueDate", "deliveryTerms", "valueDays", "free", "conditionLockIndicator", "taxExemptIndicator", "deliveryCondition", "transportType", "transportPaymentMethod", "paymentTerms", "consignmentNumber", "trailerNumber", "filler"],
            "130": ["type", "textMapping", "text", "filler"],
            "400": ["type", "positionNumber", "perShipmentPalletCount", "perShipmentPalletPackagingType", "perShipmentPackagingCount", "perShipmentColliKartonPackagingType", "packagingConditions", "shipmentTotalTons", "NVE", "pitchesCounts", "shipmentTotalNetKgs", "shipmentLoadReferenceNumber", "shipmentLoadReferenceDate", "filler"],
            "410": ["type", "palletType", "palletNVE", "perPalletColliKartonPackagingCount", "palletPackagingType", "perPalletLayerCount", "palletGrossWeight", "grossWeightMeasureUnit", "loadCarrierEAN", "rentalOrExchangeIndicator", "filler"],
            "415": ["type", "palletType", "layerNVE", "perLayerColliKardonPackagingCount", "perLayerColliKardonPackagingType", "layerBruttoWeight", "bruttoWeightMeasuringUnit", "filler"],
            "420": ["type", "onPalletPackaginType", "packagingNVE", "packagingNumber", "packagingBruttoWeight", "bruttoWeightMeasuringUnit", "filler"],
            "500": ["type", "positionNumber", "activationType", "EAN", "supplierItemNumber", "clientItemNumber", "productGroup", "itemDescription1", "itemDescription2", "itemSize", "itemColor", "orderQuantity", "amountWithoutCalculation", "currencyCode", "itemVatRate", "netUnitPrice", "grossUnitPrice", "unitSellingPrice", "unitPromotionPrice", "unitCatalogPrice", "priceBasis", "measureUnit", "netValue", "grossValue", "discountSum", "packageType", "packagesCount", "displayIndicator", "deliveredQuantity", "promotionVariantNumber", "taxExemptIndicator", "miscellaneousIndicator", "subsequentDeliveryIndicator", "discrepancyReason", "KZMHD", "billingUnitEAN", "filler" ],
            "502": ["type", "itemLengthDepth", "lengthDepthMeasuringUnit", "itemWidth", "widthMeasuringUnit", "itemHeight", "heightMeasuringUnit", "itemGrossWeight", "grossWeightMeasuringUnit", "itemNetWeight", "netWeightMeasuringUnit", "filler"],
            "511": ["type", "offerNumber", "offerDate", "campaignNumber", "priceListNumber", "customerOrderNumber", "customerOrcerDate", "internalOrderNumber", "internalOrderDate", "deliveryDate", "deliveryReceiptNumber", "deliveryReceiptDate", "invoiceListNumber", "invoiceListDate", "agreementNumber", "bankAccountNumber", "performancePeriod", "referenceNumber", "referenceDate", "returnNumber", "returnDate", "orderItemNumber", "deliveryReceiptItemNumber", "filler"],
            "515": ["type", "expectedDeliveryDate", "earliestDeliveryDate", "latestDeliveryDate", "promisedDeliveryDate", "scheduledDeliveryDate", "shippingDate", "pickUpDate", "cancellationDate", "expectedDeliveryWeek", "earliestDeliveryWeek", "latestDeliveryWeek", "promisedDeliveryWeek", "expectedDeliveryTime", "earliestDeliveryTime", "latestDeliveryTime", "minRemainingTimeForShipping", "timeUnit", "filler" ],
            "519": ["type", "partnerType", "partnerILN", "partnerName1", "partnerName2", "partnerName3", "partnerStreet1", "partnerStreet2", "partnerStreet3", "postalCode", "city", "country", "partnerId", "byPartnerAssignedId", "affiliateVatId", "partnerDepartment", "taxNumber", "contactPartner", "phone", "fax", "filler"],
            "580": ["type", "positionNumber", "bestBeforeDate", "batchNumber", "deliveryQuantity", "deliveryQuantityMeasureUnit", "expectedDeliveryDate", "expectedDeliveryTime", "deliveryPlaceILN", "servingsNumber", "portionsSize", "portionSizeMeasureUnit", "positionTotalWeight", "totalWeightMeasureUnit", "customerReference", "customerReferenceIndicator", "supplierReference", "supplierReferenceIndicator", "productVariants", "filler" ],
            "601": ["type", "subItemNumber", "GTIN", "consumerUnitsNumber", "consumerUnitDesignation", "supplierItemNumber", "filler"]
        }
    }
    
}

export const TOKENTYPES = ["WORD", "CRLF"];
export const FILETYPES = ["ORDER", "INVOICE", "DEASDV"];