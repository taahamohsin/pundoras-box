class Rating < ApplicationRecord
  belongs_to :joke
  belongs_to :rating_definition
end