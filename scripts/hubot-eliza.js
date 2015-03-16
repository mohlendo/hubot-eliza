// Description:
//   Hubot script for the famous Robotic Rogerian Therapist (ELIZA)
//
// Dependencies:
//   "node-eliza": "latest"
//
// Configuration:
//
// Commands:
//   hubot eliza - Begin session with the Robotic Rogerian Therapist
//   hubot bye eliza - End session
//
//
// Author:
//   Manuel Ohlendorf <m.ohlendorf@gmail.com>

var ElizaBot = require('../src/elizabot');

module.exports = function (robot) {

    var eliza;

    function startSession(msg) {
        eliza = new ElizaBot();
        msg.reply(eliza.getInitial());
    }

    function endSession(msg) {
        if (eliza) {
            msg.reply(eliza.getFinal());
        } else {
            msg.reply("Sorry, but there is no running ELIZA session.");
        }
    }

    robot.respond(/eliza$/i, function (msg) {
        startSession(msg);
    });

    robot.respond(/by eliza$/i, function (msg) {
        endSession(msg);
    });
}