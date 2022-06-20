export const REGEXES: [string, "WORD" | "CRLF"][] = [
    ['.', "WORD"],
    ['\r\n|\r|\n', "CRLF"]
]

export const SECTIONS: string[] = ["000", "100", "111", "115", "119", "120", "130", "140", "500", "511", "513", "515", "519", "530", "580", "900", "913"]

export const LENGTHLIST: (string | number[])[] = [
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
]

export const KEYS: any = {
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