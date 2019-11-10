# README

##OVERVIEW:##
This project is a learning tool for combining Javascript frontend and a Rails backend. The current example of this app is intended to be a feature within a larger app. This is a view into one Player and does not start from the very beginning with creating a player. The Player is seeded. 

##SPECIFICATIONS:##
- Rails 5.2.3.
- PostgreSQL database.
    1. $ bundle install
    2. $ rails db:create
    3. $ rails db:migrate
    4. $ rails db:seed


##BACKEND FEATURES:##
- Routes are namespaced under :api.
- Matches routes are nested under Players.
- Player has_many Matches.
- Match belongs_to a Player.
- Player model is configured to include matches object using as_json.


##FRONTEND FEATURES:##
- Utilized Bootstrap classes.
- Pre-coded HTML structure.
- Separated functionality into api, player and match classes.
- Fetch for player info, new match and delete match.
- Highlight function.
<!-- This README would normally document whatever steps are necessary to get the
application up and running. -->

<!-- Things you may want to cover: -->

<!-- * Ruby version -->

<!-- * System dependencies -->

<!-- * Configuration -->

<!-- * Database creation -->

<!-- * Database initialization -->

<!-- * Services (job queues, cache servers, search engines, etc.)

* Deployment instructions -->