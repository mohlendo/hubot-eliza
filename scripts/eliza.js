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
module.exports = function (robot) {

    robot.respond(/eliza$/i, function (msg) {
        eliza = new ElizaBot();
        msg.reply(eliza.getInitial());
    });

    robot.respond(/bye eliza$/i, function (msg) {
        if (eliza) {
            msg.reply(eliza.getFinal());
        } else {
            msg.reply("Sorry, but there is no running ELIZA session.");
        }
    });

    robot.respont(/eliza (w+)$/, function (msg) {
        var txt = msg.match[1];
        msg.reply(eliza.transform(txt));
    })
};