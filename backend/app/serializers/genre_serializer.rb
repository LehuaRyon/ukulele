class GenreSerializer < ActiveModel::Serializer
  # using inhertiance instead of,
  # include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :songs
end
