var SLD_1_1_0_Module_Factory = function () {
  var SLD_1_1_0 = {
    n: 'SLD_1_1_0',
    dens: 'http:\/\/www.opengis.net\/sld',
    deps: ['Filter_1_1_0', 'SE_1_1_0', 'GML_3_1_1', 'WMS_1_3_0', 'OWS_1_0_0'],
    tis: [{
        ln: 'OutputType.Size',
        tn: null,
        ps: [{
            n: 'width',
            rq: true,
            en: 'Width',
            ti: 'Integer'
          }, {
            n: 'height',
            rq: true,
            en: 'Height',
            ti: 'Integer'
          }]
      }, {
        ln: 'LayerFeatureConstraints',
        tn: null,
        ps: [{
            n: 'featureTypeConstraint',
            rq: true,
            col: true,
            en: 'FeatureTypeConstraint',
            ti: '.FeatureTypeConstraint'
          }]
      }, {
        ln: 'LayerCoverageConstraints',
        tn: null,
        ps: [{
            n: 'coverageConstraint',
            rq: true,
            col: true,
            en: 'CoverageConstraint',
            ti: '.CoverageConstraint'
          }]
      }, {
        ln: 'RemoteOWS',
        tn: null,
        ps: [{
            n: 'service',
            rq: true,
            en: 'Service'
          }, {
            n: 'onlineResource',
            rq: true,
            en: {
              lp: 'OnlineResource',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.OnlineResourceType'
          }]
      }, {
        ln: 'LayerDescriptionType',
        ps: [{
            n: 'owsType',
            rq: true
          }, {
            n: 'onlineResource',
            rq: true,
            en: {
              lp: 'OnlineResource',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.OnlineResourceType'
          }, {
            n: 'typeName',
            rq: true,
            col: true,
            en: 'TypeName',
            ti: '.TypeNameType'
          }]
      }, {
        ln: 'UserStyle',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }, {
            n: 'isDefault',
            en: 'IsDefault',
            ti: 'Boolean'
          }, {
            n: 'featureTypeStyleOrCoverageStyleOrOnlineResource',
            rq: true,
            col: true,
            etis: [{
                en: {
                  lp: 'FeatureTypeStyle',
                  ns: 'http:\/\/www.opengis.net\/se'
                },
                ti: 'SE_1_1_0.FeatureTypeStyleType'
              }, {
                en: {
                  lp: 'CoverageStyle',
                  ns: 'http:\/\/www.opengis.net\/se'
                },
                ti: 'SE_1_1_0.CoverageStyleType'
              }, {
                en: {
                  lp: 'OnlineResource',
                  ns: 'http:\/\/www.opengis.net\/se'
                },
                ti: 'SE_1_1_0.OnlineResourceType'
              }],
            t: 'es'
          }]
      }, {
        ln: 'GetMapType',
        ps: [{
            n: 'styledLayerDescriptor',
            rq: true,
            en: 'StyledLayerDescriptor',
            ti: '.StyledLayerDescriptor'
          }, {
            n: 'crs',
            rq: true,
            en: 'CRS'
          }, {
            n: 'boundingBox',
            rq: true,
            en: 'BoundingBox',
            ti: 'OWS_1_0_0.BoundingBoxType'
          }, {
            n: 'output',
            rq: true,
            en: 'Output',
            ti: '.OutputType'
          }, {
            n: 'exceptions',
            en: 'Exceptions'
          }, {
            n: 'time',
            en: 'Time',
            ti: 'Calendar'
          }, {
            n: 'elevation',
            en: 'Elevation',
            ti: '.ElevationType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'TypeNameType',
        ps: [{
            n: 'featureTypeName',
            rq: true,
            en: {
              lp: 'FeatureTypeName',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'QName'
          }, {
            n: 'coverageName',
            rq: true,
            en: {
              lp: 'CoverageName',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }]
      }, {
        ln: 'DescribeLayerResponseType',
        ps: [{
            n: 'version',
            rq: true,
            en: 'Version'
          }, {
            n: 'layerDescription',
            rq: true,
            col: true,
            en: 'LayerDescription',
            ti: '.LayerDescriptionType'
          }]
      }, {
        ln: 'Extent',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'value',
            rq: true,
            en: 'Value'
          }]
      }, {
        ln: 'UserDefinedSymbolization',
        tn: null,
        ps: [{
            n: 'supportSLD',
            ti: 'Boolean',
            an: {
              lp: 'SupportSLD'
            },
            t: 'a'
          }, {
            n: 'userLayer',
            ti: 'Boolean',
            an: {
              lp: 'UserLayer'
            },
            t: 'a'
          }, {
            n: 'userStyle',
            ti: 'Boolean',
            an: {
              lp: 'UserStyle'
            },
            t: 'a'
          }, {
            n: 'remoteWFS',
            ti: 'Boolean',
            an: {
              lp: 'RemoteWFS'
            },
            t: 'a'
          }, {
            n: 'inlineFeature',
            ti: 'Boolean',
            an: {
              lp: 'InlineFeature'
            },
            t: 'a'
          }, {
            n: 'remoteWCS',
            ti: 'Boolean',
            an: {
              lp: 'RemoteWCS'
            },
            t: 'a'
          }]
      }, {
        ln: 'CoverageConstraint',
        tn: null,
        ps: [{
            n: 'coverageName',
            rq: true,
            en: {
              lp: 'CoverageName',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'coverageExtent',
            en: 'CoverageExtent',
            ti: '.CoverageExtent'
          }]
      }, {
        ln: 'StyledLayerDescriptor',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }, {
            n: 'useSLDLibrary',
            mno: 0,
            col: true,
            en: 'UseSLDLibrary',
            ti: '.UseSLDLibrary'
          }, {
            n: 'namedLayerOrUserLayer',
            mno: 0,
            col: true,
            etis: [{
                en: 'NamedLayer',
                ti: '.NamedLayer'
              }, {
                en: 'UserLayer',
                ti: '.UserLayer'
              }],
            t: 'es'
          }, {
            n: 'version',
            rq: true,
            ti: 'SE_1_1_0.VersionType',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'UserLayer',
        tn: null,
        ps: [{
            n: 'name',
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }, {
            n: 'remoteOWS',
            rq: true,
            en: 'RemoteOWS',
            ti: '.RemoteOWS'
          }, {
            n: 'inlineFeature',
            rq: true,
            en: 'InlineFeature',
            ti: '.InlineFeature'
          }, {
            n: 'layerFeatureConstraints',
            rq: true,
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'layerCoverageConstraints',
            rq: true,
            en: 'LayerCoverageConstraints',
            ti: '.LayerCoverageConstraints'
          }, {
            n: 'userStyle',
            rq: true,
            col: true,
            en: 'UserStyle',
            ti: '.UserStyle'
          }]
      }, {
        ln: 'CoverageExtent',
        tn: null,
        ps: [{
            n: 'rangeAxis',
            mno: 0,
            col: true,
            en: 'RangeAxis',
            ti: '.RangeAxis'
          }, {
            n: 'timePeriod',
            en: 'TimePeriod'
          }]
      }, {
        ln: 'UseSLDLibrary',
        tn: null,
        ps: [{
            n: 'onlineResource',
            rq: true,
            en: {
              lp: 'OnlineResource',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.OnlineResourceType'
          }]
      }, {
        ln: 'RangeAxis',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'value',
            rq: true,
            en: 'Value'
          }]
      }, {
        ln: 'ElevationType',
        ps: [{
            n: 'value',
            rq: true,
            col: true,
            en: 'Value',
            ti: 'Double'
          }, {
            n: 'interval',
            rq: true,
            en: 'Interval',
            ti: '.IntervalType'
          }]
      }, {
        ln: 'OutputType',
        ps: [{
            n: 'size',
            rq: true,
            en: 'Size',
            ti: '.OutputType.Size'
          }, {
            n: 'format',
            rq: true,
            en: {
              lp: 'Format',
              ns: 'http:\/\/www.opengis.net\/wms'
            }
          }, {
            n: 'transparent',
            en: 'Transparent',
            ti: 'Boolean'
          }, {
            n: 'bGcolor',
            en: 'BGcolor'
          }]
      }, {
        ln: 'NamedLayer',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }, {
            n: 'layerFeatureConstraints',
            en: 'LayerFeatureConstraints',
            ti: '.LayerFeatureConstraints'
          }, {
            n: 'namedStyleOrUserStyle',
            mno: 0,
            col: true,
            etis: [{
                en: 'NamedStyle',
                ti: '.NamedStyle'
              }, {
                en: 'UserStyle',
                ti: '.UserStyle'
              }],
            t: 'es'
          }]
      }, {
        ln: 'FeatureTypeConstraint',
        tn: null,
        ps: [{
            n: 'featureTypeName',
            en: {
              lp: 'FeatureTypeName',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'QName'
          }, {
            n: 'filter',
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterType'
          }, {
            n: 'extent',
            mno: 0,
            col: true,
            en: 'Extent',
            ti: '.Extent'
          }]
      }, {
        ln: 'NamedStyle',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            en: {
              lp: 'Name',
              ns: 'http:\/\/www.opengis.net\/se'
            }
          }, {
            n: 'description',
            en: {
              lp: 'Description',
              ns: 'http:\/\/www.opengis.net\/se'
            },
            ti: 'SE_1_1_0.DescriptionType'
          }]
      }, {
        ln: 'InlineFeature',
        tn: null,
        ps: [{
            n: 'featureCollection',
            rq: true,
            col: true,
            en: {
              lp: 'FeatureCollection',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            ti: 'GML_3_1_1.FeatureCollectionType'
          }]
      }, {
        ln: 'IntervalType',
        ps: [{
            n: 'min',
            rq: true,
            en: 'Min',
            ti: 'Double'
          }, {
            n: 'max',
            rq: true,
            en: 'Max',
            ti: 'Double'
          }]
      }, {
        t: 'enum',
        ln: 'ExceptionsType',
        vs: ['XML', 'INIMAGE', 'BLANK']
      }, {
        t: 'enum',
        ln: 'OwsTypeType',
        vs: ['wfs', 'wcs']
      }],
    eis: [{
        en: 'UserStyle',
        ti: '.UserStyle'
      }, {
        en: 'CoverageExtent',
        ti: '.CoverageExtent'
      }, {
        en: 'InlineFeature',
        ti: '.InlineFeature'
      }, {
        en: 'Extent',
        ti: '.Extent'
      }, {
        en: 'Service'
      }, {
        en: 'RemoteOWS',
        ti: '.RemoteOWS'
      }, {
        en: 'UseSLDLibrary',
        ti: '.UseSLDLibrary'
      }, {
        en: 'LayerCoverageConstraints',
        ti: '.LayerCoverageConstraints'
      }, {
        en: 'UserDefinedSymbolization',
        ti: '.UserDefinedSymbolization',
        sh: {
          lp: '_ExtendedCapabilities',
          ns: 'http:\/\/www.opengis.net\/wms'
        }
      }, {
        en: 'IsDefault',
        ti: 'Boolean'
      }, {
        en: 'GetLegendGraphic',
        ti: 'WMS_1_3_0.OperationType',
        sh: {
          lp: '_ExtendedOperation',
          ns: 'http:\/\/www.opengis.net\/wms'
        }
      }, {
        en: 'UserLayer',
        ti: '.UserLayer'
      }, {
        en: 'DescribeLayerResponse',
        ti: '.DescribeLayerResponseType'
      }, {
        en: 'GetMap',
        ti: '.GetMapType'
      }, {
        en: 'TimePeriod'
      }, {
        en: 'RangeAxis',
        ti: '.RangeAxis'
      }, {
        en: 'NamedLayer',
        ti: '.NamedLayer'
      }, {
        en: 'FeatureTypeConstraint',
        ti: '.FeatureTypeConstraint'
      }, {
        en: 'LayerFeatureConstraints',
        ti: '.LayerFeatureConstraints'
      }, {
        en: 'NamedStyle',
        ti: '.NamedStyle'
      }, {
        en: 'DescribeLayer',
        ti: 'WMS_1_3_0.OperationType',
        sh: {
          lp: '_ExtendedOperation',
          ns: 'http:\/\/www.opengis.net\/wms'
        }
      }, {
        en: 'StyledLayerDescriptor',
        ti: '.StyledLayerDescriptor'
      }, {
        en: 'Value'
      }, {
        en: 'CoverageConstraint',
        ti: '.CoverageConstraint'
      }]
  };
  return {
    SLD_1_1_0: SLD_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SLD_1_1_0_Module_Factory);
}
else {
  var SLD_1_1_0_Module = SLD_1_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SLD_1_1_0 = SLD_1_1_0_Module.SLD_1_1_0;
  }
  else {
    var SLD_1_1_0 = SLD_1_1_0_Module.SLD_1_1_0;
  }
}