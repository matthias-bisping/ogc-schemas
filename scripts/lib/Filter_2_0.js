var Filter_2_0_Module_Factory = function () {
  var Filter_2_0 = {
    n: 'Filter_2_0',
    dens: 'http:\/\/www.opengis.net\/fes\/2.0',
    deps: ['OWS_1_1_0'],
    tis: [{
        ln: 'AvailableFunctionsType',
        ps: [{
            n: 'function',
            rq: true,
            col: true,
            en: 'Function',
            ti: '.AvailableFunctionType'
          }]
      }, {
        ln: 'FilterCapabilities',
        tn: null,
        ps: [{
            n: 'conformance',
            rq: true,
            en: 'Conformance',
            ti: '.ConformanceType'
          }, {
            n: 'idCapabilities',
            en: 'Id_Capabilities',
            ti: '.IdCapabilitiesType'
          }, {
            n: 'scalarCapabilities',
            en: 'Scalar_Capabilities',
            ti: '.ScalarCapabilitiesType'
          }, {
            n: 'spatialCapabilities',
            en: 'Spatial_Capabilities',
            ti: '.SpatialCapabilitiesType'
          }, {
            n: 'temporalCapabilities',
            en: 'Temporal_Capabilities',
            ti: '.TemporalCapabilitiesType'
          }, {
            n: 'functions',
            en: 'Functions',
            ti: '.AvailableFunctionsType'
          }, {
            n: 'extendedCapabilities',
            en: 'Extended_Capabilities',
            ti: '.ExtendedCapabilitiesType'
          }]
      }, {
        ln: 'ComparisonOperatorsType',
        ps: [{
            n: 'comparisonOperator',
            rq: true,
            col: true,
            en: 'ComparisonOperator',
            ti: '.ComparisonOperatorType'
          }]
      }, {
        ln: 'GeometryOperandsType',
        ps: [{
            n: 'geometryOperand',
            rq: true,
            col: true,
            en: 'GeometryOperand',
            ti: '.GeometryOperandsType.GeometryOperand'
          }]
      }, {
        ln: 'LogicOpsType'
      }, {
        ln: 'AbstractIdType'
      }, {
        ln: 'FunctionType',
        ps: [{
            n: 'expression',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExtensionOperatorType',
        ps: [{
            n: 'name',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalOperatorsType',
        ps: [{
            n: 'temporalOperator',
            rq: true,
            col: true,
            en: 'TemporalOperator',
            ti: '.TemporalOperatorType'
          }]
      }, {
        ln: 'BBOXType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'expressionOrAny',
            rq: true,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            en: 'expression',
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'UpperBoundaryType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'BinaryComparisonOpType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'matchCase',
            ti: 'Boolean',
            an: {
              lp: 'matchCase'
            },
            t: 'a'
          }, {
            n: 'matchAction',
            an: {
              lp: 'matchAction'
            },
            t: 'a'
          }]
      }, {
        ln: 'AvailableFunctionType',
        ps: [{
            n: 'metadata',
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'returns',
            rq: true,
            en: 'Returns',
            ti: 'QName'
          }, {
            n: 'arguments',
            en: 'Arguments',
            ti: '.ArgumentsType'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'PropertyIsLikeType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mno: 2,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'wildCard',
            rq: true,
            an: {
              lp: 'wildCard'
            },
            t: 'a'
          }, {
            n: 'singleChar',
            rq: true,
            an: {
              lp: 'singleChar'
            },
            t: 'a'
          }, {
            n: 'escapeChar',
            rq: true,
            an: {
              lp: 'escapeChar'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalOperandsType.TemporalOperand',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'IdCapabilitiesType',
        tn: 'Id_CapabilitiesType',
        ps: [{
            n: 'resourceIdentifier',
            rq: true,
            col: true,
            en: 'ResourceIdentifier',
            ti: '.ResourceIdentifierType'
          }]
      }, {
        ln: 'TemporalOperatorType',
        ps: [{
            n: 'temporalOperands',
            en: 'TemporalOperands',
            ti: '.TemporalOperandsType'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'ExtendedCapabilitiesType',
        tn: 'Extended_CapabilitiesType',
        ps: [{
            n: 'additionalOperators',
            en: 'AdditionalOperators',
            ti: '.AdditionalOperatorsType'
          }]
      }, {
        ln: 'ComparisonOperatorType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeometryOperandsType.GeometryOperand',
        tn: null,
        ps: [{
            n: 'name',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'SpatialOperatorsType',
        ps: [{
            n: 'spatialOperator',
            rq: true,
            col: true,
            en: 'SpatialOperator',
            ti: '.SpatialOperatorType'
          }]
      }, {
        ln: 'MeasureType',
        ps: [{
            n: 'value',
            ti: 'Double',
            t: 'v'
          }, {
            n: 'uom',
            rq: true,
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'ArgumentsType',
        ps: [{
            n: 'argument',
            rq: true,
            col: true,
            en: 'Argument',
            ti: '.ArgumentType'
          }]
      }, {
        ln: 'AbstractAdhocQueryExpressionType',
        bti: '.AbstractQueryExpressionType',
        ps: [{
            n: 'abstractProjectionClause',
            mno: 0,
            col: true,
            en: 'AbstractProjectionClause',
            ti: 'AnyType'
          }, {
            n: 'abstractSelectionClause',
            mx: false,
            dom: false,
            en: 'AbstractSelectionClause',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'abstractSortingClause',
            mx: false,
            dom: false,
            en: 'AbstractSortingClause',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'typeNames',
            rq: true,
            ti: {
              t: 'l'
            },
            an: {
              lp: 'typeNames'
            },
            t: 'a'
          }, {
            n: 'aliases',
            ti: {
              t: 'l'
            },
            an: {
              lp: 'aliases'
            },
            t: 'a'
          }]
      }, {
        ln: 'LogicalOperators',
        tn: null
      }, {
        ln: 'ResourceIdType',
        bti: '.AbstractIdType',
        ps: [{
            n: 'rid',
            rq: true,
            an: {
              lp: 'rid'
            },
            t: 'a'
          }, {
            n: 'previousRid',
            an: {
              lp: 'previousRid'
            },
            t: 'a'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'startDate',
            ti: 'Calendar',
            an: {
              lp: 'startDate'
            },
            t: 'a'
          }, {
            n: 'endDate',
            ti: 'Calendar',
            an: {
              lp: 'endDate'
            },
            t: 'a'
          }]
      }, {
        ln: 'PropertyIsBetweenType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'lowerBoundary',
            rq: true,
            en: 'LowerBoundary',
            ti: '.LowerBoundaryType'
          }, {
            n: 'upperBoundary',
            rq: true,
            en: 'UpperBoundary',
            ti: '.UpperBoundaryType'
          }]
      }, {
        ln: 'BinaryTemporalOpType',
        bti: '.TemporalOpsType',
        ps: [{
            n: 'expressionOrAny',
            rq: true,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            en: 'expression',
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'SortByType',
        ps: [{
            n: 'sortProperty',
            rq: true,
            col: true,
            en: 'SortProperty',
            ti: '.SortPropertyType'
          }]
      }, {
        ln: 'AbstractProjectionClauseType'
      }, {
        ln: 'LowerBoundaryType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'ExtensionOpsType'
      }, {
        ln: 'AbstractSelectionClauseType'
      }, {
        ln: 'SortPropertyType',
        ps: [{
            n: 'valueReference',
            rq: true,
            en: 'ValueReference'
          }, {
            n: 'sortOrder',
            en: 'SortOrder'
          }]
      }, {
        ln: 'ArgumentType',
        ps: [{
            n: 'metadata',
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'type',
            rq: true,
            en: 'Type',
            ti: 'QName'
          }, {
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'DistanceBufferType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'expressionOrAny',
            rq: true,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            en: 'expression',
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'distance',
            rq: true,
            en: 'Distance',
            ti: '.MeasureType'
          }]
      }, {
        ln: 'ComparisonOpsType'
      }, {
        ln: 'FilterType',
        bti: '.AbstractSelectionClauseType',
        ps: [{
            n: 'comparisonOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'spatialOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'temporalOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.TemporalOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'extensionOps',
            rq: true,
            ti: '.ExtensionOpsType'
          }, {
            n: 'function',
            rq: true,
            en: 'Function',
            ti: '.FunctionType'
          }, {
            n: 'id',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: '_Id',
            ti: '.AbstractIdType',
            t: 'er'
          }]
      }, {
        ln: 'ScalarCapabilitiesType',
        tn: 'Scalar_CapabilitiesType',
        ps: [{
            n: 'logicalOperators',
            en: 'LogicalOperators',
            ti: '.LogicalOperators'
          }, {
            n: 'comparisonOperators',
            en: 'ComparisonOperators',
            ti: '.ComparisonOperatorsType'
          }]
      }, {
        ln: 'AbstractSortingClauseType'
      }, {
        ln: 'LiteralType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }, {
            n: 'type',
            ti: 'QName',
            an: {
              lp: 'type'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'ops',
            rq: true,
            mno: 2,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'spatialOps',
                ti: '.SpatialOpsType'
              }, {
                en: 'temporalOps',
                ti: '.TemporalOpsType'
              }, {
                en: 'Function',
                ti: '.FunctionType'
              }, {
                en: 'logicOps',
                ti: '.LogicOpsType'
              }, {
                en: 'extensionOps',
                ti: '.ExtensionOpsType'
              }, {
                en: '_Id',
                ti: '.AbstractIdType'
              }, {
                en: 'comparisonOps',
                ti: '.ComparisonOpsType'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'SpatialCapabilitiesType',
        tn: 'Spatial_CapabilitiesType',
        ps: [{
            n: 'geometryOperands',
            rq: true,
            en: 'GeometryOperands',
            ti: '.GeometryOperandsType'
          }, {
            n: 'spatialOperators',
            rq: true,
            en: 'SpatialOperators',
            ti: '.SpatialOperatorsType'
          }]
      }, {
        ln: 'AbstractQueryExpressionType',
        ps: [{
            n: 'handle',
            an: {
              lp: 'handle'
            },
            t: 'a'
          }]
      }, {
        ln: 'ConformanceType',
        ps: [{
            n: 'constraint',
            rq: true,
            col: true,
            en: 'Constraint',
            ti: 'OWS_1_1_0.DomainType'
          }]
      }, {
        ln: 'SpatialOpsType'
      }, {
        ln: 'ResourceIdentifierType',
        ps: [{
            n: 'metadata',
            en: {
              lp: 'Metadata',
              ns: 'http:\/\/www.opengis.net\/ows\/1.1'
            },
            ti: 'OWS_1_1_0.MetadataType'
          }, {
            n: 'name',
            rq: true,
            ti: 'QName',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalOpsType'
      }, {
        ln: 'TemporalOperandsType',
        ps: [{
            n: 'temporalOperand',
            rq: true,
            col: true,
            en: 'TemporalOperand',
            ti: '.TemporalOperandsType.TemporalOperand'
          }]
      }, {
        ln: 'SpatialOperatorType',
        ps: [{
            n: 'geometryOperands',
            en: 'GeometryOperands',
            ti: '.GeometryOperandsType'
          }, {
            n: 'name',
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'TemporalCapabilitiesType',
        tn: 'Temporal_CapabilitiesType',
        ps: [{
            n: 'temporalOperands',
            rq: true,
            en: 'TemporalOperands',
            ti: '.TemporalOperandsType'
          }, {
            n: 'temporalOperators',
            rq: true,
            en: 'TemporalOperators',
            ti: '.TemporalOperatorsType'
          }]
      }, {
        ln: 'UnaryLogicOpType',
        bti: '.LogicOpsType',
        ps: [{
            n: 'comparisonOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.ComparisonOpsType',
            t: 'er'
          }, {
            n: 'spatialOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.SpatialOpsType',
            t: 'er'
          }, {
            n: 'temporalOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.TemporalOpsType',
            t: 'er'
          }, {
            n: 'logicOps',
            rq: true,
            mx: false,
            dom: false,
            ti: '.LogicOpsType',
            t: 'er'
          }, {
            n: 'extensionOps',
            rq: true,
            ti: '.ExtensionOpsType'
          }, {
            n: 'function',
            rq: true,
            en: 'Function',
            ti: '.FunctionType'
          }, {
            n: 'id',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: '_Id',
            ti: '.AbstractIdType',
            t: 'er'
          }]
      }, {
        ln: 'PropertyIsNullType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        ln: 'AdditionalOperatorsType',
        ps: [{
            n: 'operator',
            mno: 0,
            col: true,
            en: 'Operator',
            ti: '.ExtensionOperatorType'
          }]
      }, {
        ln: 'PropertyIsNilType',
        bti: '.ComparisonOpsType',
        ps: [{
            n: 'expression',
            rq: true,
            mx: false,
            dom: false,
            ti: 'AnyType',
            t: 'er'
          }, {
            n: 'nilReason',
            an: {
              lp: 'nilReason'
            },
            t: 'a'
          }]
      }, {
        ln: 'BinarySpatialOpType',
        bti: '.SpatialOpsType',
        ps: [{
            n: 'expressionOrAny',
            rq: true,
            mxo: 2,
            col: true,
            mx: false,
            dom: false,
            en: 'expression',
            ti: 'AnyType',
            t: 'er'
          }]
      }, {
        t: 'enum',
        ln: 'SortOrderType',
        vs: ['DESC', 'ASC']
      }, {
        t: 'enum',
        ln: 'MatchActionType',
        vs: ['All', 'Any', 'One']
      }, {
        t: 'enum',
        ln: 'VersionActionTokens',
        vs: ['FIRST', 'LAST', 'PREVIOUS', 'NEXT', 'ALL']
      }],
    eis: [{
        en: 'After',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsGreaterThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'PropertyIsNil',
        ti: '.PropertyIsNilType',
        sh: 'comparisonOps'
      }, {
        en: 'Within',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'logicOps',
        ti: '.LogicOpsType'
      }, {
        en: 'AbstractProjectionClause',
        ti: 'AnyType'
      }, {
        en: 'Filter',
        ti: '.FilterType',
        sh: 'AbstractSelectionClause'
      }, {
        en: 'MetBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: '_Id',
        ti: '.AbstractIdType'
      }, {
        en: 'PropertyIsNull',
        ti: '.PropertyIsNullType',
        sh: 'comparisonOps'
      }, {
        en: 'comparisonOps',
        ti: '.ComparisonOpsType'
      }, {
        en: 'PropertyIsGreaterThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'TEquals',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Intersects',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'During',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Filter_Capabilities',
        ti: '.FilterCapabilities'
      }, {
        en: 'Touches',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Before',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'expression',
        ti: 'AnyType'
      }, {
        en: 'TOverlaps',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsBetween',
        ti: '.PropertyIsBetweenType',
        sh: 'comparisonOps'
      }, {
        en: 'temporalOps',
        ti: '.TemporalOpsType'
      }, {
        en: 'Or',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'PropertyIsLike',
        ti: '.PropertyIsLikeType',
        sh: 'comparisonOps'
      }, {
        en: 'Equals',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Meets',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'AbstractAdhocQueryExpression',
        ti: '.AbstractAdhocQueryExpressionType',
        sh: 'AbstractQueryExpression'
      }, {
        en: 'Beyond',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'SortBy',
        ti: '.SortByType',
        sh: 'AbstractSortingClause'
      }, {
        en: 'Literal',
        ti: '.LiteralType',
        sh: 'expression'
      }, {
        en: 'ResourceId',
        ti: '.ResourceIdType',
        sh: '_Id'
      }, {
        en: 'OverlappedBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'AbstractSortingClause',
        ti: 'AnyType'
      }, {
        en: 'AnyInteracts',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'LogicalOperators',
        ti: '.LogicalOperators'
      }, {
        en: 'Begins',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'extensionOps',
        ti: '.ExtensionOpsType'
      }, {
        en: 'AbstractSelectionClause',
        ti: 'AnyType'
      }, {
        en: 'AbstractQueryExpression',
        ti: '.AbstractQueryExpressionType'
      }, {
        en: 'Crosses',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'BegunBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'spatialOps',
        ti: '.SpatialOpsType'
      }, {
        en: 'TContains',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Ends',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'Contains',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'Disjoint',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }, {
        en: 'EndedBy',
        ti: '.BinaryTemporalOpType',
        sh: 'temporalOps'
      }, {
        en: 'PropertyIsLessThanOrEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Not',
        ti: '.UnaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'DWithin',
        ti: '.DistanceBufferType',
        sh: 'spatialOps'
      }, {
        en: 'And',
        ti: '.BinaryLogicOpType',
        sh: 'logicOps'
      }, {
        en: 'PropertyIsNotEqualTo',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Function',
        ti: '.FunctionType',
        sh: 'expression'
      }, {
        en: 'ValueReference',
        sh: 'expression'
      }, {
        en: 'BBOX',
        ti: '.BBOXType',
        sh: 'spatialOps'
      }, {
        en: 'PropertyIsLessThan',
        ti: '.BinaryComparisonOpType',
        sh: 'comparisonOps'
      }, {
        en: 'Overlaps',
        ti: '.BinarySpatialOpType',
        sh: 'spatialOps'
      }]
  };
  return {
    Filter_2_0: Filter_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Filter_2_0_Module_Factory);
}
else {
  var Filter_2_0_Module = Filter_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Filter_2_0 = Filter_2_0_Module.Filter_2_0;
  }
  else {
    var Filter_2_0 = Filter_2_0_Module.Filter_2_0;
  }
}