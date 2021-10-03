class SongSerializer < ActiveModel::Serializer
  attributes :title, :artist, :image, :chords, :genre, :id
  belongs_to :genre, except: [:created_at, :updated_at]
end
