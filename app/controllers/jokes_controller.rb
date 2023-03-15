class JokesController < ApplicationController
  def index
    render json: Joke.all
  end
end