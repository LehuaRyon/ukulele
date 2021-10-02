# Ukulele Song Lineup
A song to-learn list application built with a Ruby on Rails API backend and a Javascript frontend.

## Description
This app was built for the [Flatiron School](https://flatironschool.com/) Javascript project and is meant to let a users keep track of all the songs he or she would like to learn on the ukulele or keep track of all the songs he or she already knows and has a place to refer back to for chords.  A user can add as many songs as he or she would like and/or edit any song's information at any given time. A user can add and/or delete as many songs on his or her list.  Each song is categorized by the genre it belongs to.   

## Local Installation
To install and run the app on your local machine:
1. Click the green Clone or download button above and click the copy to clipboard button
2. From your terminal, run `git clone [paste the link from step 1]`
3. Then run `cd ukulele/backend` to navigate to the ukulele Rails API directory
4. Run `bundle install` to install the necessary gems and dependencies
5. Run `rake db:migrate` to perform the database migrations
6. Run `rake db:seed` to fill the database with 5 random songs to see a preview of how songs are displayed (you can delete them later) OR start from scratch with no songs existing in the database till you create them once the app is running!  
7. Run `rails s` to access and use the Rails API
8. Open a new terminal, run `cd ukulele/frontend` to navigate to the frontend directory
9. Run `open index.html` view the app in your browser!

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/LehuaRyon/ukulele. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/LehuaRyon/ukulele/blob/main/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://github.com/LehuaRyon/ukulele/blob/main/LICENSE).

## Code of Conduct

Everyone interacting in the Ukulele's project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/LehuaRyon/ukulele/blob/main/CODE_OF_CONDUCT.md).