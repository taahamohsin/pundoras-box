require 'pry'

class UsersController < ApplicationController
  def index
    render json: User.all, each_serializer: UserSerializer
  end

  def jokes
    user = User.includes(jokes: :rating).find(params[:id])

    serialized_user = ActiveModel::SerializableResource.new(user).as_json
    serialized_user[:jokes].each_with_index do |joke, index|
      serialized_rating = ActiveModel::SerializableResource.new(joke[:rating]).as_json
      serialized_rating[:ratingDefinition] = joke[:rating].rating_definition.as_json
      serialized_user[:jokes][index][:rating] = serialized_rating
    end

    render json: serialized_user.to_json
  end
end