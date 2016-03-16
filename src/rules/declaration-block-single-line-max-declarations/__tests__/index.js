/* eslint-disable comma-dangle,array-bracket-spacing */
import testRule from "../../../testUtils/stylelint-test-rule-tape"
import rule, { ruleName, messages } from ".."

testRule(rule, {
  ruleName,
  config: [1],

  accept: [{
    code: "a { color: pink; }",
  }, {
    code: "a,\nb { color: pink; }",
  }, {
    code: "a { color: pink; }\n",
  }, {
    code: "a {\n color: pink; top: 3px; }",
  }, {
    code: "a { color: pink;\n top: 3px; }",
  }, {
    code: "@media screen {\na { color: pink; }}",
  }, {
    code: "a { color: pink; }\r\n",
  }, {
    code: "a {\r\n color: pink; top: 3px; }",
  }, {
    code: "a { color: pink;\r\n top: 3px; }",
  }],

  reject: [{
    code: "a { color: pink; top: 3px; }",
    description: "single-line rule with 2 declarations",
    message: messages.expected(1),
    line: 1,
    column: 3,
  }, {
    code: "a,\nb\n{ color: pink; top: 3px; }",
    description: "rule-line rule with single-line delclaration block with 2 declarations",
    message: messages.expected(1),
    line: 3,
    column: 1,
  }, {
    code: "@media screen {\na { color: pink; top: 3px; }}",
    description: "single-line rule with 2 declarations within nested multi-line",
    message: messages.expected(1),
    line: 2,
    column: 3,
  }],
})

testRule(rule, {
  ruleName,
  config: [2],

  accept: [{
    code: "a { color: pink; }",
  }, {
    code: "a { color: pink; top: 1px; }",
  }],

  reject: [{
    code: "a { color: pink; top: 3px; right: 2px; }",
    description: "single-line rule with 3 declarations",
    message: messages.expected(2),
    line: 1,
    column: 3,
  }],
})