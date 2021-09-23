class GenresController < ApplicationController
  # before_action :set_genre, only: [:show, :update, :destroy]

  def index
    # genres = Genre.all
    # preload the songs, to go into it once, instead of going again in db
    genres = Genre.includes(:songs)
    render json: genres
  end

  def show
    genre = Genre.find(params[:id])
    render json: genre
  end

  def create
    genre = Genre.new(genre_params)
    if genre.save
      render json: genre, status: :created, location: genre
    else
      render json: genre.errors, status: :unprocessable_entity
    end
  end

  def update
    genre = Genre.find(params[:id])
    if genre.update(genre_params)
      render json: genre
    else
      render json: genre.errors, status: :unprocessable_entity
    end
  end

  def destroy
    genre = Genre.find(params[:id])
    genre.destroy
  end

  private

    # def set_genre
    #   genre = Genre.find(params[:id])
    # end

    def genre_params
      params.require(:genre).permit(:name)
    end
end
