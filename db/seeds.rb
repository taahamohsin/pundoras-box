# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user_one = User.create!(first_name: "Hope", score: 1)
user_two = User.create!(first_name: "Taaha")
user_three = User.create!(first_name: "Billy")

first_rating = RatingDefinition.create!(value: 1, title: "Ughhhh", description: "This joke/pun made me groan")
second_rating = RatingDefinition.create!(value: 2, title: "Why? Just... why?", description: "This joke/pun made me question my life choices")
third_rating = RatingDefinition.create!(value: 3, title: "Oh my f***ing God", description: "This joke/pun made my soul leave my body")

joke = Joke.create!(user_id: user_one.id, title: "What do you call a dentist who doesn't like tea?", description: "Denis")
rating = Rating.create!(rating_definition_id: first_rating.id, joke_id: joke.id)
joke.rating_id = rating.id
joke.save!