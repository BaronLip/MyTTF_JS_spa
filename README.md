# README

**OVERVIEW:**
This project is a learning tool for combining JavaScript frontend and a Rails backend. The current example of this app is intended to be a feature within a larger app. This is a view into one Player and does not start from the very beginning with creating a player. The Player is seeded. 

**SPECIFICATIONS:**
- Rails 5.2.3.
- PostgreSQL database.
    1. $ bundle install
    2. $ rails db:create
    3. $ rails db:migrate
    4. $ rails db:seed


**BACKEND FEATURES:**
- Routes are namespaced under :api.
- Matches routes are nested under Players.
- Player has_many Matches.
- Match belongs_to a Player.
- Player model is configured to include matches object using as_json.


**FRONTEND FEATURES:**
- Utilized Bootstrap classes.
- Pre-coded HTML structure.
- Separated functionality into api, player and match classes.
- Fetch for player info, 
- Functions:
    1. New
    2. Edit
    3. Delete
    4. Highlight

**INSTRUCTIONS:**
1. Download directory.
2. Navigate into MyTTF_rails_backend via terminal.
    - ```$ rails server```
3. Navigate to MyTTF_js_frontend via terminal.
    - open index.html in your browser.
4. Have fun!