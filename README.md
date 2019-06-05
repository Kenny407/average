# Average
> Average is an experiment in masking our browsing activity online.

There are already a variety of tools on the web to block third-party cookies and scripts, and upgrade your connection to HTTPS. However, it is also possible to [fingerprint](https://en.wikipedia.org/wiki/Device_fingerprint) a user, by collecting information from/about their device and using that as a means to identify them. 

The end-goal of this project is to build a browser extension across all browsers that will be able to "fuzz" your fingerprint, making you seem like the average user to whoever is trying to build your fingerprint. 

## Tests performed thus far:
* Loading scripts on new tab (Seemed to update values, but only temporarily)
* Loading scripts on new navigation (Same result)
* Injecting content_scripts directly into the page (Same result)

I'm beginning to think that it won't be possible to do this via a browser extension. I'm also concerned that a simple XHR will grab the same data via headers anyway.

### Sources & Inspiration
* INDES and Privatics teams at [Inria](https://extensions.inrialpes.fr/)
* [Am I Unique?](https://amiunique.org/about)
* [Panopticlick](https://panopticlick.eff.org/)