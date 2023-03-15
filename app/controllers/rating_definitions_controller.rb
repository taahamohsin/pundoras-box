class RatingDefinitionsController < ApplicationController
  def index
    render json: RatingDefinition.all
  end
end