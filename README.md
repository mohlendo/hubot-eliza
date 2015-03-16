# hubot-eliza

A hubot extension for the [Robotic Rogerian Therapist, ELIZA](http://en.wikipedia.org/wiki/ELIZA).

## Installation

Add **hubot-eliza** to your `package.json` file:

```json
"dependencies": {
  "hubot": ">= 2.5.1",
  "hubot-scripts": ">= 2.4.2",
  "hubot-eliza": "*"
}
```

OR run `npm install --save hubot-eliza`

Add **hubot-eliza** to your `external-scripts.json`:

```json
["hubot-eliza"]
```

Run `npm install`

## Commands

* `hubot eliza` - starts a new session with eliza. From now on, eliza takes all the input from hubot
* `hubot bye eliza` - ends a session. You can now interact with hubot again.

## License

This project is based on and adapted from code found [here](http://www.masswerk.at/elizabot/). This is its license (or something like it):

	elizabot.js v.1.1 - ELIZA JS library (N.Landsteiner 2005)
	Eliza is a mock Rogerian psychotherapist.
	Original program by Joseph Weizenbaum in MAD-SLIP for "Project MAC" at MIT.
	cf: Weizenbaum, Joseph "ELIZA - A Computer Program For the Study of Natural Language
	  Communication Between Man and Machine"
	  in: Communications of the ACM; Volume 9 , Issue 1 (January 1966): p 36-45.
	JavaScript implementation by Norbert Landsteiner 2005; <http://www.masserk.at>

In the source code, any files without that header, any code above that disclaimer, or anything else I wrote, I release under the [MIT](http://en.wikipedia.org/wiki/MIT_license) license.