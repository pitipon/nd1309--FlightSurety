
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0xfD07A47BEeEEc7dDBdC9fF3Bee4d4Ef68749fC27",
        "0x55962ee3DcED65E20785594A8F250dE09D61D9C0",
        "0x5d6580D7259a460AFD9ff00B49b4C3AbD99F01B3",
        "0x07c73975865bFBC9b85eAB306628F359952269f6",
        "0x0F86496fEa3fe627C37eadB0B5baACB54C37eAc2",
        "0x139a0a04D6d92B47f61b1d4485B65534a3D375D3",
        "0x1fcBA2eaD095E0aFdDB62e9b797d0632C245d942",
        "0xc8E7b8c845D2e01E028fcdfDC05ADc9C2BAf15d9",
        "0x7b47B1e0dFaD46d0371D5074Aa6C3056EFcb142c"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new();
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};