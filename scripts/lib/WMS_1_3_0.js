var WMS_1_3_0_Module_Factory = function () {
  var WMS_1_3_0 = {
    n: 'WMS_1_3_0',
    dens: 'http:\/\/www.opengis.net\/wms',
    deps: ['XLink_1_0'],
    tis: [{
        ln: 'Request',
        tn: null,
        ps: [{
            n: 'getCapabilities',
            en: 'GetCapabilities',
            ti: '.OperationType'
          }, {
            n: 'getMap',
            en: 'GetMap',
            ti: '.OperationType'
          }, {
            n: 'getFeatureInfo',
            en: 'GetFeatureInfo',
            ti: '.OperationType'
          }, {
            n: 'extendedOperation',
            col: true,
            en: '_ExtendedOperation',
            ti: '.OperationType'
          }]
      }, {
        ln: 'LogoURL',
        tn: null,
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'EXGeographicBoundingBox',
        tn: null,
        ps: [{
            n: 'westBoundLongitude',
            ti: 'Double'
          }, {
            n: 'eastBoundLongitude',
            ti: 'Double'
          }, {
            n: 'southBoundLatitude',
            ti: 'Double'
          }, {
            n: 'northBoundLatitude',
            ti: 'Double'
          }]
      }, {
        ln: 'Layer',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'keywordList',
            en: 'KeywordList',
            ti: '.KeywordList'
          }, {
            n: 'crs',
            col: true,
            en: 'CRS'
          }, {
            n: 'exGeographicBoundingBox',
            en: 'EX_GeographicBoundingBox',
            ti: '.EXGeographicBoundingBox'
          }, {
            n: 'boundingBox',
            col: true,
            en: 'BoundingBox',
            ti: '.BoundingBox'
          }, {
            n: 'dimension',
            col: true,
            en: 'Dimension',
            ti: '.Dimension'
          }, {
            n: 'attribution',
            en: 'Attribution',
            ti: '.Attribution'
          }, {
            n: 'authorityURL',
            col: true,
            en: 'AuthorityURL',
            ti: '.AuthorityURL'
          }, {
            n: 'identifier',
            col: true,
            en: 'Identifier',
            ti: '.Identifier'
          }, {
            n: 'metadataURL',
            col: true,
            en: 'MetadataURL',
            ti: '.MetadataURL'
          }, {
            n: 'dataURL',
            col: true,
            en: 'DataURL',
            ti: '.DataURL'
          }, {
            n: 'featureListURL',
            col: true,
            en: 'FeatureListURL',
            ti: '.FeatureListURL'
          }, {
            n: 'style',
            col: true,
            en: 'Style',
            ti: '.Style'
          }, {
            n: 'minScaleDenominator',
            en: 'MinScaleDenominator',
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: 'MaxScaleDenominator',
            ti: 'Double'
          }, {
            n: 'layer',
            col: true,
            en: 'Layer',
            ti: '.Layer'
          }, {
            n: 'queryable',
            ti: 'Boolean',
            an: {
              lp: 'queryable'
            },
            t: 'a'
          }, {
            n: 'cascaded',
            ti: 'Integer',
            an: {
              lp: 'cascaded'
            },
            t: 'a'
          }, {
            n: 'opaque',
            ti: 'Boolean',
            an: {
              lp: 'opaque'
            },
            t: 'a'
          }, {
            n: 'noSubsets',
            ti: 'Boolean',
            an: {
              lp: 'noSubsets'
            },
            t: 'a'
          }, {
            n: 'fixedWidth',
            ti: 'Integer',
            an: {
              lp: 'fixedWidth'
            },
            t: 'a'
          }, {
            n: 'fixedHeight',
            ti: 'Integer',
            an: {
              lp: 'fixedHeight'
            },
            t: 'a'
          }]
      }, {
        ln: 'AuthorityURL',
        tn: null,
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'BoundingBox',
        tn: null,
        ps: [{
            n: 'crs',
            an: {
              lp: 'CRS'
            },
            t: 'a'
          }, {
            n: 'minx',
            ti: 'Double',
            an: {
              lp: 'minx'
            },
            t: 'a'
          }, {
            n: 'miny',
            ti: 'Double',
            an: {
              lp: 'miny'
            },
            t: 'a'
          }, {
            n: 'maxx',
            ti: 'Double',
            an: {
              lp: 'maxx'
            },
            t: 'a'
          }, {
            n: 'maxy',
            ti: 'Double',
            an: {
              lp: 'maxy'
            },
            t: 'a'
          }, {
            n: 'resx',
            ti: 'Double',
            an: {
              lp: 'resx'
            },
            t: 'a'
          }, {
            n: 'resy',
            ti: 'Double',
            an: {
              lp: 'resy'
            },
            t: 'a'
          }]
      }, {
        ln: 'DataURL',
        tn: null,
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'Capability',
        tn: null,
        ps: [{
            n: 'request',
            en: 'Request',
            ti: '.Request'
          }, {
            n: 'exception',
            en: 'Exception',
            ti: '.Exception'
          }, {
            n: 'extendedCapabilities',
            col: true,
            en: '_ExtendedCapabilities',
            ti: 'AnyType'
          }, {
            n: 'layer',
            en: 'Layer',
            ti: '.Layer'
          }]
      }, {
        ln: 'StyleSheetURL',
        tn: null,
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'LegendURL',
        tn: null,
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'width',
            ti: 'Integer',
            an: {
              lp: 'width'
            },
            t: 'a'
          }, {
            n: 'height',
            ti: 'Integer',
            an: {
              lp: 'height'
            },
            t: 'a'
          }]
      }, {
        ln: 'Get',
        tn: null,
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'OnlineResource',
        tn: null,
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'MetadataURL',
        tn: null,
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'Keyword',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'vocabulary',
            an: {
              lp: 'vocabulary'
            },
            t: 'a'
          }]
      }, {
        ln: 'WMSCapabilities',
        tn: null,
        ps: [{
            n: 'service',
            en: 'Service',
            ti: '.Service'
          }, {
            n: 'capability',
            en: 'Capability',
            ti: '.Capability'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'updateSequence',
            an: {
              lp: 'updateSequence'
            },
            t: 'a'
          }]
      }, {
        ln: 'ContactAddress',
        tn: null,
        ps: [{
            n: 'addressType',
            en: 'AddressType'
          }, {
            n: 'address',
            en: 'Address'
          }, {
            n: 'city',
            en: 'City'
          }, {
            n: 'stateOrProvince',
            en: 'StateOrProvince'
          }, {
            n: 'postCode',
            en: 'PostCode'
          }, {
            n: 'country',
            en: 'Country'
          }]
      }, {
        ln: 'KeywordList',
        tn: null,
        ps: [{
            n: 'keyword',
            col: true,
            en: 'Keyword',
            ti: '.Keyword'
          }]
      }, {
        ln: 'OperationType',
        ps: [{
            n: 'format',
            col: true,
            en: 'Format'
          }, {
            n: 'dcpType',
            col: true,
            en: 'DCPType',
            ti: '.DCPType'
          }]
      }, {
        ln: 'Service',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'keywordList',
            en: 'KeywordList',
            ti: '.KeywordList'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'contactInformation',
            en: 'ContactInformation',
            ti: '.ContactInformation'
          }, {
            n: 'fees',
            en: 'Fees'
          }, {
            n: 'accessConstraints',
            en: 'AccessConstraints'
          }, {
            n: 'layerLimit',
            en: 'LayerLimit',
            ti: 'Integer'
          }, {
            n: 'maxWidth',
            en: 'MaxWidth',
            ti: 'Integer'
          }, {
            n: 'maxHeight',
            en: 'MaxHeight',
            ti: 'Integer'
          }]
      }, {
        ln: 'Attribution',
        tn: null,
        ps: [{
            n: 'title',
            en: 'Title'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }, {
            n: 'logoURL',
            en: 'LogoURL',
            ti: '.LogoURL'
          }]
      }, {
        ln: 'Exception',
        tn: null,
        ps: [{
            n: 'format',
            col: true,
            en: 'Format'
          }]
      }, {
        ln: 'ContactPersonPrimary',
        tn: null,
        ps: [{
            n: 'contactPerson',
            en: 'ContactPerson'
          }, {
            n: 'contactOrganization',
            en: 'ContactOrganization'
          }]
      }, {
        ln: 'DCPType',
        tn: null,
        ps: [{
            n: 'http',
            en: 'HTTP',
            ti: '.HTTP'
          }]
      }, {
        ln: 'ContactInformation',
        tn: null,
        ps: [{
            n: 'contactPersonPrimary',
            en: 'ContactPersonPrimary',
            ti: '.ContactPersonPrimary'
          }, {
            n: 'contactPosition',
            en: 'ContactPosition'
          }, {
            n: 'contactAddress',
            en: 'ContactAddress',
            ti: '.ContactAddress'
          }, {
            n: 'contactVoiceTelephone',
            en: 'ContactVoiceTelephone'
          }, {
            n: 'contactFacsimileTelephone',
            en: 'ContactFacsimileTelephone'
          }, {
            n: 'contactElectronicMailAddress',
            en: 'ContactElectronicMailAddress'
          }]
      }, {
        ln: 'Dimension',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }, {
            n: 'units',
            an: {
              lp: 'units'
            },
            t: 'a'
          }, {
            n: 'unitSymbol',
            an: {
              lp: 'unitSymbol'
            },
            t: 'a'
          }, {
            n: '_default',
            an: {
              lp: 'default'
            },
            t: 'a'
          }, {
            n: 'multipleValues',
            ti: 'Boolean',
            an: {
              lp: 'multipleValues'
            },
            t: 'a'
          }, {
            n: 'nearestValue',
            ti: 'Boolean',
            an: {
              lp: 'nearestValue'
            },
            t: 'a'
          }, {
            n: 'current',
            ti: 'Boolean',
            an: {
              lp: 'current'
            },
            t: 'a'
          }]
      }, {
        ln: 'Identifier',
        tn: null,
        ps: [{
            n: 'value',
            t: 'v'
          }, {
            n: 'authority',
            an: {
              lp: 'authority'
            },
            t: 'a'
          }]
      }, {
        ln: 'StyleURL',
        tn: null,
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'Post',
        tn: null,
        ps: [{
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'Style',
        tn: null,
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }, {
            n: 'legendURL',
            col: true,
            en: 'LegendURL',
            ti: '.LegendURL'
          }, {
            n: 'styleSheetURL',
            en: 'StyleSheetURL',
            ti: '.StyleSheetURL'
          }, {
            n: 'styleURL',
            en: 'StyleURL',
            ti: '.StyleURL'
          }]
      }, {
        ln: 'FeatureListURL',
        tn: null,
        ps: [{
            n: 'format',
            en: 'Format'
          }, {
            n: 'onlineResource',
            en: 'OnlineResource',
            ti: '.OnlineResource'
          }]
      }, {
        ln: 'HTTP',
        tn: null,
        ps: [{
            n: 'get',
            en: 'Get',
            ti: '.Get'
          }, {
            n: 'post',
            en: 'Post',
            ti: '.Post'
          }]
      }],
    eis: [{
        en: 'Format'
      }, {
        en: 'Request',
        ti: '.Request'
      }, {
        en: 'EX_GeographicBoundingBox',
        ti: '.EXGeographicBoundingBox'
      }, {
        en: 'GetFeatureInfo',
        ti: '.OperationType'
      }, {
        en: 'AccessConstraints'
      }, {
        en: 'ContactPerson'
      }, {
        en: 'KeywordList',
        ti: '.KeywordList'
      }, {
        en: 'DataURL',
        ti: '.DataURL'
      }, {
        en: 'WMS_Capabilities',
        ti: '.WMSCapabilities'
      }, {
        en: 'StateOrProvince'
      }, {
        en: 'PostCode'
      }, {
        en: 'Title'
      }, {
        en: 'Address'
      }, {
        en: 'ContactOrganization'
      }, {
        en: 'Layer',
        ti: '.Layer'
      }, {
        en: 'Identifier',
        ti: '.Identifier'
      }, {
        en: 'LegendURL',
        ti: '.LegendURL'
      }, {
        en: 'MaxWidth',
        ti: 'Integer'
      }, {
        en: '_ExtendedOperation',
        ti: '.OperationType'
      }, {
        en: 'BoundingBox',
        ti: '.BoundingBox'
      }, {
        en: 'AddressType'
      }, {
        en: 'MetadataURL',
        ti: '.MetadataURL'
      }, {
        en: 'MinScaleDenominator',
        ti: 'Double'
      }, {
        en: 'Capability',
        ti: '.Capability'
      }, {
        en: 'Post',
        ti: '.Post'
      }, {
        en: 'StyleURL',
        ti: '.StyleURL'
      }, {
        en: 'ContactFacsimileTelephone'
      }, {
        en: 'ContactPersonPrimary',
        ti: '.ContactPersonPrimary'
      }, {
        en: 'ContactElectronicMailAddress'
      }, {
        en: 'OnlineResource',
        ti: '.OnlineResource'
      }, {
        en: 'Country'
      }, {
        en: 'City'
      }, {
        en: 'Style',
        ti: '.Style'
      }, {
        en: 'Exception',
        ti: '.Exception'
      }, {
        en: 'ContactPosition'
      }, {
        en: 'LogoURL',
        ti: '.LogoURL'
      }, {
        en: 'HTTP',
        ti: '.HTTP'
      }, {
        en: 'Dimension',
        ti: '.Dimension'
      }, {
        en: 'Keyword',
        ti: '.Keyword'
      }, {
        en: 'ContactVoiceTelephone'
      }, {
        en: 'Service',
        ti: '.Service'
      }, {
        en: 'MaxScaleDenominator',
        ti: 'Double'
      }, {
        en: 'ContactAddress',
        ti: '.ContactAddress'
      }, {
        en: 'StyleSheetURL',
        ti: '.StyleSheetURL'
      }, {
        en: 'Get',
        ti: '.Get'
      }, {
        en: 'LayerLimit',
        ti: 'Integer'
      }, {
        en: 'Attribution',
        ti: '.Attribution'
      }, {
        en: 'GetMap',
        ti: '.OperationType'
      }, {
        en: 'AuthorityURL',
        ti: '.AuthorityURL'
      }, {
        en: 'CRS'
      }, {
        en: 'DCPType',
        ti: '.DCPType'
      }, {
        en: 'ContactInformation',
        ti: '.ContactInformation'
      }, {
        en: 'GetCapabilities',
        ti: '.OperationType'
      }, {
        en: 'MaxHeight',
        ti: 'Integer'
      }, {
        en: 'Fees'
      }, {
        en: 'Name'
      }, {
        en: 'FeatureListURL',
        ti: '.FeatureListURL'
      }, {
        en: 'Abstract'
      }, {
        en: '_ExtendedCapabilities',
        ti: 'AnyType'
      }]
  };
  return {
    WMS_1_3_0: WMS_1_3_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], WMS_1_3_0_Module_Factory);
}
else {
  var WMS_1_3_0_Module = WMS_1_3_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.WMS_1_3_0 = WMS_1_3_0_Module.WMS_1_3_0;
  }
  else {
    var WMS_1_3_0 = WMS_1_3_0_Module.WMS_1_3_0;
  }
}