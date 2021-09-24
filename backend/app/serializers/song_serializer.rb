class SongSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  attributes :title, :artist, :image, :chords, :genre, :id
  belongs_to :genre, except: [:created_at, :updated_at]
end
