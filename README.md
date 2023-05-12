# Trainee Test

This test for trainees. This test could be solved with pure javascript, html and css. Or use javascript framework like vue, react if you want.

## 1. Make a responsive layout

First assignment is to create a responsive html layout.

The layout should use the whole space of the window [example: width: 100% and height: 100%]

The layout should contain:

1. Header
    - width: 100%
    - height: 100px;
2. Main
    - width: 100%
    - height: Take the rest of the space
3. Footer
    - width: 100%
    - height: 100px;

### menu

The header is going to have a menu containing of the links

- home
- about
- contact

The menu link will have be different on mobile and desktop. Desktop is over 1024px and mobile is under 1024 px. The menu should behave like the description below.

#### Desktop (over 1024px)

- The links will be listet horizontally. 
- The links will allways be visible on desktop.

#### Mobile/tablet (under 1024)

- Links should be set to hidden when on mobile
- A button that has the text menu should show hide the links
- The links should be vertical on mobile


## 2. Create a expandable list of persons

This task is to create a list of persons that have a hidden nelement inside it with the persons hobbies that is only shown when click of a button.

In the main sections make a list that loop the persons list in persons.js file and list out the values under in a list item. 

- name
- age
- button with name 'show hobbies'

The list should also contain the hobbies of the users in a div that is hidden by default and when someone click on one of the button show hobbies then show that persons hobbies with the values.

- hobbies.name
- hobbies.type

## 3. Make a search input that serch the persons object and show person data

Create a search input that takes a name and search the persons.js object and if you find a person with that name show that persons values on the page. If not show the text. 'User not found with ' and then put in name that was searched for.