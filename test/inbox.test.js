const assert = require('assert');
const Web3 = require('web3');
const ganache = require('ganache-cli');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.constract(JSON.parse(interface))
        .deploy({ data : bytecode, arguments : ['Hi there!']})
        .send({ from : accounts[0], gas: '1000000'})
});

describe('Inbox', () => {
    it('deploys a constract', () => { 
        console.log(inbox);
    });
});