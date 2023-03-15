class RatingDefinition < ApplicationRecord
  belongs_to :rating, optional: true
end