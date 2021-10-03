# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.destroy_all
Song.destroy_all

alternative = Genre.create(name: "Alternative")
blues = Genre.create(name: "Blues")
comedy = Genre.create(name: "Comedy")
country = Genre.create(name: "Country")
disco = Genre.create(name: "Disco")
electronic = Genre.create(name: "Electronic")
folk = Genre.create(name: "Folk")
hiphop = Genre.create(name: "Hip Hop")
indie = Genre.create(name: "Indie")
jazz = Genre.create(name: "Jazz")
latin = Genre.create(name: "Latin")
metal = Genre.create(name: "Metal")
new_age = Genre.create(name: "New Age")
pop = Genre.create(name: "Pop")
reggae = Genre.create(name: "Reggae")
religious = Genre.create(name: "Religious")
rnb = Genre.create(name: "R&B")
rock = Genre.create(name: "Rock")
soundtrack = Genre.create(name: "Soundtrack")
world = Genre.create(name: "World")

Song.create(title: "New Light", artist: "John Mayer", image: "https://upload.wikimedia.org/wikipedia/en/d/d1/JohnMayerNewLight.jpg", chords: "https://tabs.ultimate-guitar.com/tab/john-mayer/new-light-chords-2383061", genre_id: rock.id)
Song.create(title: "Goodie Bag", artist: "Still Woozy", image: "https://m.media-amazon.com/images/I/81Q9b+cFbvL._SS500_.jpg", chords: "https://tabs.ultimate-guitar.com/tab/still-woozy/goodie-bag-chords-2403187", genre_id: indie.id)
Song.create(title: "Anyone", artist: "Justin Bieber", image: "https://static.wikia.nocookie.net/justin-bieber/images/0/08/Anyone.jpg/revision/latest/scale-to-width-down/2000?cb=20201231173712", chords: "https://tabs.ultimate-guitar.com/tab/justin-bieber/anyone-chords-3494039", genre_id: pop.id)
Song.create(title: "California King Bed", artist: "Rihanna", image: "https://images-na.ssl-images-amazon.com/images/I/71iMVBsItRL._SL1400_.jpg", chords: "https://tabs.ultimate-guitar.com/tab/rihanna/california-king-bed-chords-1004189", genre_id: rnb.id)
Song.create(title: "Three Little Birds", artist: "Bob Marley", image: "https://img.discogs.com/wTi0tZ6TSdypLKLUyJPCc1SauGg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5271613-1389233396-6661.jpeg.jpg", chords: "https://tabs.ultimate-guitar.com/tab/bob-marley/three-little-birds-chords-166605", genre_id: reggae.id)