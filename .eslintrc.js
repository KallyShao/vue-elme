// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
     // @fixable 一个缩进必须用四个空格替代
    'indent': [
        'error',
        4,
        {
            SwitchCase: 1,
            flatTernaryExpressions: true
        }
    ],
    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
            mode: 'strict',
        }
    ],
    // @fixable 关键字前后必须有空格
    'keyword-spacing': [
        'error',
        {
            before: true,
            after: true
        }
    ],
    // @off else 代码块可能前面需要有一行注释
    'brace-style': 'off',
    // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
    'object-curly-spacing': [
        'error',
        'always',
        {
            arraysInObjects: true,
            objectsInObjects: false
        }
    ],
    // @fixable 结尾必须有分号
    'semi': [
        'error',
        'always',
        {
            omitLastInOneLineBlock: true
        }
    ],
    // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    'semi-spacing': [
        'error',
        {
            before: false,
            after: true
        }
    ],
    // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {，关闭此条规则
    'space-before-blocks': 'off',
    // @fixable function 的小括号之前必须要有空格
    'space-before-function-paren': [
        'error',
        {
            anonymous: 'ignore',
            named: 'never',
            asyncArrow: 'always'
        }
    ],
    // @fixable 小括号内的首尾禁止有空格
    'space-in-parens': [
        'error',
        'never'
    ],
    // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
    'space-infix-ops': 'error',
    // @fixable 注释的斜线或 * 后必须有空格
    'spaced-comment': [
        'error',
        'always',
        {
            block: {
                exceptions: [
                    '*'
                ],
                balanced: true
            }
        }
    ],
    // @fixable case 的冒号前禁止有空格，冒号后必须有空格
    'switch-colon-spacing': [
        'error',
        {
            after: true,
            before: false
        }
    ],
    // 变量名必须是 camelcase 风格的
    // @off 很多 api 或文件名都不是 camelcase
    'camelcase': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止混用空格和缩进
    'no-mixed-spaces-and-tabs': 'off',
    // 禁止使用 tabs
    'no-tabs': 'off'
  }
}
