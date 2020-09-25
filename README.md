# javascript-challenge
Homework 11

This is a web page for searching a sample of UFO sighting data by date, city, state, country, and/or UFO shape. Also included, but not searchable, are the sighting duration and observer's notes. The duration formats were too variable to deal with, and if there is a straightforward way to search the description texts I haven't found it yet.

There are four files: 

-- data.js contains the data array, as supplied.

-- app.js contains the data-handling javascript code. First the entire dataset is read into a table and displayed, then search functions are introduced. Date, city, state, and country search terms are entered by the user; hopefully the sample text in the boxes will clue them in as to required formats (there are fancier possibilities, not included). The shape filter is set up as a set of check boxes in alphabetical order, all selected by default - didn't seem likely that a user would be able to guess all of those. Considered a dropdown box, but that would only allow one choice, and also couldn't figure out how to include an "All" option. That seems to be a popular question on the forums.

-- index.html has the html to set up the data table and search area, didn't change much but a little wording, and the added checkboxes. 

-- style.css has the page styling (fonts, colors, padding, animations, etc). Didn't change much but a little Easter egg.

I guess you know how to use these :).
