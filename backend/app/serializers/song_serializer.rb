class SongSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :title, :artist, :image, :chords, :genre
end
