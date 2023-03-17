class RatingSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :rating_definition

  def ratingDefinition
    ActiveModel::SerializableResource.new(object.rating_definition).as_json
  end
end
