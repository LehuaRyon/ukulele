class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :image
      t.string :chords
      t.belongs_to :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
