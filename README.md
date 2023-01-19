## Brewdog API Project

# Description
I undertook this project as part of a coding course after completing a module focusing on interacting with APIs within React. 

The page displays a range of beers that can be filtered according to search terms and/or radio buttons. The project allowed me to practice different ways of manipulating data from an API and presenting it in different ways. For example, some of the beers did not have images so I 'cleaned' the data before using it, in doing so adding in a placeholder image to accompany the beer information. 

I was also able to implement newly gained knowledge on how to fetch different types of data from an API by dynamically changing the API address. One element of this I found challenging was increasing the amount of beers that were displayed on the page from the initial maximum of 80. I got around this by looping over the fetch thereby calling it multiple times to display all the data together. 

Producing this project allowed me to encounter and work out solutions to new problems such as this.

# Usage Instructions
* All of the beers will be displayed on the page by default.
* Use the search bar to type in the name of a beer. Only exact name matches will be found (but the search is not case sensitive).
* To display a beer with a high ABV, one of the classic range or a low acidity, select the appropriate radio button under the search bar. 
* If there is content in the search bar as well as a filter selection, it will search for beers matching the search term that also match the filter. 


# Project component tree
![component tree](src/images/component-tree.png)

# How it looks
![testing](src/images/project-screenshot.png)

# Credits
Beer background image provided by 'upklyak' via Freepik
Data from the Brewdog 'Punk API' https://punkapi.com/

