Coderetreat-dev-env.js
======================

> Coderetreat development enviroment for JavaScript

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide

## About Coderetreat

Coderetreat is a day-long, intensive practice event, focusing on the fundamentals of software development and design. By providing developers the opportunity to take part in focused practice away from the pressures of 'getting things done', the coderetreat format has proven itself to be a highly effective means of skill improvement [more...](http://coderetreat.org/about)

## Installation

```
$> npm install
```

## Usage

This setup assumes usage of pure JavaScript for development, and Jasmine as a testing framework.

#### server

Starts simple http server as well as watches source files for changes and reruns tests & refreshes page if any.
All You need to do is to code!

```
$> grunt server
```

#### reset

Coderetreat rules require you to start every session with "tabula rasa". This task resets project files to initial state

```
$> grunt reset
```


---
Created by Michal Pasierbski
