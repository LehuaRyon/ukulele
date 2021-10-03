class GenresController < ApplicationController

  def index
    genres = Genre.includes(:songs)
    render json: genres
  end

end
