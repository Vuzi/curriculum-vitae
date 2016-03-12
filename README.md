# curriculum-vitae
My curriculum vitae !

## PDF Version
Building the PDF version requires [phantomjs](http://phantomjs.org/), which will use a webkit engine to render the content of the HTML version of the C.V. using the provided script :
```
phantomjs cvtopdf.js file:///path/to/the/cv.html pdf/cv.pdf
```

## Print
The page can also directly printed, and should render great (at least on webkit based browsers) :

## Note
To be opened locally, you'll need to disable cross origin request (because https and file are mixed), for example on Chrome :

```
chrome --user-data-dir="./working-dir" --disable-web-security
```
