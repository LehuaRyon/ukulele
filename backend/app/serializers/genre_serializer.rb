class GenreSerializer < ActiveModel::Serializer
  # using inhertiance instead of,
  # include FastJsonapi::ObjectSerializer
  attributes :name, :id
  has_many :songs

  # instance of the Serializer & object is current object trying to be serialized
  def songs
    self.object.songs.map do |s|
      {
        id: s.id,
        title: s.title,
        artist: s.artist,
        image: s.image,
        chords: s.chords
      }
    end
  end
end
