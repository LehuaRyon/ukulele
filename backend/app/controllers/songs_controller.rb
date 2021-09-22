class SongsController < ApplicationController
  # before_action :set_song, only: [:show, :update, :destroy]

  def index
    songs = Song.all
    render json: songs
  end

  def show
    song = Song.find(params[:id])
    render json: song
  end

  def create
    song = Song.new(song_params)
    if song.save
      render json: song, status: :created, location: song
    else
      render json: song.errors, status: :unprocessable_entity
    end
  end

  def update
    song = Song.find(params[:id])
    if song.update(song_params)
      render json: song
    else
      render json: song.errors, status: :unprocessable_entity
    end
  end

  def destroy
    song = Song.find(params[:id])
    song.destroy
  end

  private
  
    # def set_song
    #   song = Song.find(params[:id])
    # end

    def song_params
      params.require(:song).permit(:title, :artist, :image, :chords, :genre_id)
    end
end
