class JokeSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating

  has_one :rating, serializer: RatingSerializer
  belongs_to :user
end
