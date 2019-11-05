# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

players = Player.create([
    {
    username: "Baron",
    age: 39,
    gender: "male",
    hand: "right",
    style: "all around attacker",
    blade: "Yasaka Galaxya Carbon",
    red_rubber: "Rakza 7",
    black_rubber: "Rakza 7",
    email: "baron@baron.com",
    rating: 1700,
    wins: 0,
    losses: 0
    },
    {username: "Ryan"},
    {username: "Scott"},
    {username: "Pavlo"},
    {username: "Dave"},
])