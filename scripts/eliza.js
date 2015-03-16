// Description:
//   Hubot script for the famous Robotic Rogerian Therapist (ELIZA)
//
// Commands:
//   hubot eliza - Begin session with the Robotic Rogerian Therapist
//   hubot bye eliza - End session
//
//
// Author:
//   Manuel Ohlendorf <m.ohlendorf@gmail.com>

var ElizaBot = require('../src/elizabot');

var eliza;
var justStarted;
module.exports = function (robot) {

    // start the eliza session
    robot.respond(/eliza$/i, function (msg) {
        eliza = new ElizaBot();
        msg.reply(eliza.getInitial());
        justStarted = true;
    });

    // end the eliza session
    robot.respond(/bye eliza$/i, function (msg) {
        if (eliza) {
            msg.reply(eliza.getFinal());
            eliza.reset();
            eliza = undefined;
        } else {
            msg.reply("Sorry, but there is no running ELIZA session.");
        }
    });

    // intercept EVERY message and parse it with eliza
    robot.respond(/(.+)$/i, function (msg) {
        // we have to eliza - ignore
        if (!eliza || justStarted) {
            justStarted = false;
            return;
        }
        var txt = msg.match[1];
        msg.reply(eliza.transform(txt));
    });
};