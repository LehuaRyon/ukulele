class Song < ApplicationRecord
  belongs_to :genre
  # validates :title, :artist, :image, :chords, :genre_id, presence: true
end
