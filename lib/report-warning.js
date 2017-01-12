'use strict'

var chalk = require('chalk')

var warningCount = 0
module.exports = function (fileData, warning) {
  warningCount++

  console.log()
  console.log(chalk.yellow(warningCount + '. ' + warning.reason))
  console.log(chalk.blue('  第 ' + fileData.lineNum + ' 行：' + fileData.file))
  if (warning.tips) {
    console.log(chalk.cyan.dim('  ' + warning.tips))
  }
  console.log(chalk.cyan.dim('  新用法示例：' + chalk.underline(warning.demo)))
  if (warning.notice) {
    console.log(chalk.red('  注意：' + warning.notice));
  }
}