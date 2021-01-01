import type { AST_NODE_TYPES } from '../../ast-node-types';
import type { BaseNode } from '../../base/BaseNode';
import type { TSTypeParameterInstantiation } from '../../special/TSTypeParameterInstantiation/spec';
import type { Expression } from '../../unions/Expression';
import type { LeftHandSideExpression } from '../../unions/LeftHandSideExpression';

export interface CallExpression extends BaseNode {
  type: AST_NODE_TYPES.CallExpression;
  callee: LeftHandSideExpression;
  arguments: Expression[];
  typeParameters?: TSTypeParameterInstantiation;
  optional: boolean;
}
