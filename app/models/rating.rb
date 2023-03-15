class Rating < ApplicationRecord
  belongs_to :joke
  has_one :rating_definition
end