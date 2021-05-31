# signalk-top3ais

One-file tool that presents the top 3 closest, moving AIS targets. Intended as a quick lookup for whom to hail when a vessel comes near.

Usage
- When installed as an NPM package within SignalK, install the package and restart the server. The Package will show up under Webapps.
- For standalone usage, in the file index.html, adjust the variable mySignalkURL to reflect the IP of your SignalK server. The default is right for a typical Openplotter installation.
```
//
// Configure your signalk url:port below, like openplotter.myboat.local:3000 or 10.10.10.1:3000
//
var mySignalkURL = "10.10.10.1:3000"

```

![example](example.png)
