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

// in memory store for all eliza sessions
var elizas = {};

module.exports = function (robot) {

    // Finds the room for most adaptors
    function findRoom(msg) {
        var room = msg.envelope.room;
        if (room == undefined) {
            room = msg.envelope.user.reply_to;
        }
        return room;
    }

    function findEliza(msg) {
        var room = findRoom(msg);
        return elizas[room];
    }

    function saveEliza(msg, eliza) {
        var room = findRoom(msg);
        elizas[room] = eliza;
    }

    // start the eliza session
    robot.respond(/eliza$/i, function (msg) {
        var eliza = new ElizaBot();
        eliza.justStarted = true;
        saveEliza(msg, eliza);
        msg.reply(eliza.getInitial());
    });

    // end the eliza session
    robot.respond(/bye eliza$/i, function (msg) {
        var eliza = findEliza(msg);
        if (eliza) {
            msg.reply(eliza.getFinal());
            eliza.reset();
            saveEliza(msg, undefined);
        } else {
            msg.reply("Sorry, but there is no running ELIZA session.");
        }
    });

    // intercept EVERY message and parse it with eliza
    robot.respond(/(.+)$/i, function (msg) {
        var eliza = findEliza(msg);

        // we have no eliza - ignore
        if (!eliza) {
            return;
        }

        // ignore the first message
        if (eliza.justStarted) {
            eliza.justStarted = false;
            return;
        }

        // now handle the message
        var txt = msg.match[1];
        msg.reply(eliza.transform(txt));
    });
};