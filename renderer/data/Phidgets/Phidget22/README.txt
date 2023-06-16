                        Phidget22 JavaScript Library

Overview
========

 We provide compiled and minified JS. Source maps are availabe for the un-minified
 versions. Several releases are provided, depending on usage.

 The full library supports both USB and Network connection to Phidgets

	phidget22(.min).js

 The net library supports Network connection to Phidgets via the Phidget Network Server

	phidget22.net(.min).js

 The usb library support USB connection to Phidgets via WebUSB in the browser

	phidget22.usb(.min).js

 We also provide ES6 module releases and TypeScript definitions

	phidget22(.usb|net).esm(.min).js
	phidget22(.usb|net)(.esm).d.ts

Requirements
============

 The Network Connection requires that the Phidget Network Server is running

	https://www.phidgets.com/docs/Phidget_Network_Server

 The USB Connection requires both a Browser which supports WebUSB and a Phidget 
 which supports WebUSB.

Usage
=====

 UMD import

 	<script src="phidget22.min.js"></script>

 ES6 module import

 	<script type="module">
 		import * as phidget22 from './phidget22.esm.min.js';
 	</script>

 You can also load the library directly from UNPKG (https://unpkg.com/)

 	<script src="https://unpkg.com/phidget22@^3.10/browser/phidget22.min.js"></script>

Resources
=========

 The latest version of this release
 	https://www.phidgets.com/downloads/phidget22/libraries/any/Phidget22JavaScript.zip

 Node.js NPM
 	https://www.npmjs.com/package/phidget22

 Phidgets JavaScript Language Page
 	https://www.phidgets.com/docs/Language_-_JavaScript

 API Reference
 	https://www.phidgets.com/?view=api&lang=JavaScript

 Code Samples
 	https://www.phidgets.com/?view=code_samples&lang=JavaScript&os=Browser