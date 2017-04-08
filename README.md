# Save URl

(Update April 2017) Non web extension addons will not be supported starting with Firefox 57. However, the web extension api does not allow an addon to write to file without creating an external application that will listen for calls from the addon. Because of this, the addon will stop working from Firefox 57.

Adds a widget to the addon bar to save the current url to `C:\Users\Owner\Desktop\urls.txt`.
`urls.txt` must exist prior to saving urls
