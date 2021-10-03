class GenreSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_many :songs

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
