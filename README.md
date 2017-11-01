# JS Quine

# Introduction
A Quine is a program that outputs its own source code.  Named after a concept by [Douglas Hofstader](https://en.wikipedia.org/wiki/Douglas_Hofstadter), Quines are a demonstration of [Turing Completeness](https://en.wikipedia.org/wiki/Turing_completeness).

Javascript being a Turing Complete language, it's possible to write a Quine in JS, but obviously the whole thing is a bit of a challenge in any language, because it's difficult to think around the problem - each change definitively changes the output and the source at once.

# The Aproaches used:

## `quine.js`
`quine.js` simply reads it's own source code and echoes it out.  It's kinda cheating, but it actually works, so in a sense it's not.

I'm not counting it as in the spirit of a Quine though, so:

## `quine2.js`
Uses an IIFE style implication to echo out an implicitly converted function to the console.