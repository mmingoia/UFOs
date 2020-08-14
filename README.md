# UFOs

UTDA Module 11

## Challenge Writeup

The purpose of this challenge was to create a website that can display UFO sightings from a provided data source in a table.  In addition to showing all of the data in the table, filters for 5 of the columns were added in order to view the sightings by Date, City, State, County and shape.  The filters can be used individually, or as any combination.

The basic webpage was created using HTML, with some bootstrap components.  After the basic webpage was created JavaScript was used to populate the table and create the filters.  In order to filter the data, first the filter parameters were saved into a JavaScrip object.  Then a "for" loop was used to loop through the object and "if" statements were used to filter the data depending on the keys and values of the object.

There are multiple improvements that could be added to the website.  The first would be the ability to use a data range rather than a specific data for sightings.  A second would be to use a drop down menu to select the city, state or country rather than needing to type the city, state or country.
