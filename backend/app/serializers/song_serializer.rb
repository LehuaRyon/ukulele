class SongSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :title, :artist, :image, :chords, :genre
  belongs_to :genre, except: [:created_at, :updated_at]
end
