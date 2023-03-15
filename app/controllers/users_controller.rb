class UsersController < ApplicationController
  def index
    render json: User.all, each_serializer: UserSerializer
  end
end