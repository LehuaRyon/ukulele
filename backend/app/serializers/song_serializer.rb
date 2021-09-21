class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :artist, :image, :chords, :genre
end
