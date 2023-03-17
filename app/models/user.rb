class User < ApplicationRecord
  has_many :jokes, -> { includes :rating }
end