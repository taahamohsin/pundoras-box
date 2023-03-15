# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_15_003600) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "jokes", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "user_id"
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.uuid "rating_id"
    t.index ["rating_id"], name: "index_jokes_on_rating_id"
    t.index ["user_id"], name: "index_jokes_on_user_id"
  end

  create_table "rating_definitions", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "value"
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ratings", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "rating_definition_id"
    t.uuid "joke_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["joke_id"], name: "index_ratings_on_joke_id"
    t.index ["rating_definition_id"], name: "index_ratings_on_rating_definition_id"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.integer "score", null: false, default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "jokes", "ratings"
  add_foreign_key "jokes", "users"
  add_foreign_key "ratings", "jokes"
  add_foreign_key "ratings", "rating_definitions"
end
