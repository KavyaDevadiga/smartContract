const path = require('path')
const fs = require('fs');
const solc = require('solc');
const fsExtra = require('fs-extra')

const inboxPath = path.resolve(__dirname, 'constract', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');

var input = {
    language: 'Solidity',
    sources: {
      'inbox.sol': {
        content: source
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
  compilesFiles = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'inbox.sol'
    ].Inbox
  console.log(compilesFiles)

  module.exports = compilesFiles
  
  