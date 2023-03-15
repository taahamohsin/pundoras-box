class RatingSerializer < ActiveModel::Serializer
  attributes :id, :title, :description

  has_one :rating_definition
end
