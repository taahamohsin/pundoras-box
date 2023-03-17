class Joke < ApplicationRecord
  belongs_to :user
  has_one :rating
end