# ["baseball", "basketball", "football", "golf", "quidditch", "rockclimbing", "soccer", "tennis" ].each do |name|
#  Sport.create!(name: name)
# end
#
# ["http://res.cloudinary.com/dxvd6262z/image/upload/v1499533016/BaseballCard_xnqnrj.png",
#   "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533023/BasketBallCard_k0ctzv.png",
#   "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533110/FootballCard_yxvsqf.png",
#   "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533097/GolfCard_cbfal8.png",
#   "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533066/QuiddichCard_hjtlqc.png",
#   "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533081/RockClimbingCard_otga6x.png",
#   "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533102/SoccerCard2_rtlpwn.png",
#   "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533114/TennisCard_vm9cwy.png" ].each do |image|
#  Sport.create!(image: image)
# end

sports = ["Baseball", "Basketball", "Football", "Golf", "Quidditch", "Rockclimbing", "Soccer", "Tennis" ]

sports_image = [
  "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533016/BaseballCard_xnqnrj.png",
  "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533023/BasketBallCard_k0ctzv.png",
  "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533110/FootballCard_yxvsqf.png",
  "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533097/GolfCard_cbfal8.png",
  "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533066/QuiddichCard_hjtlqc.png",
  "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533081/RockClimbingCard_otga6x.png",
  "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533102/SoccerCard2_rtlpwn.png",
  "http://res.cloudinary.com/dxvd6262z/image/upload/v1499533114/TennisCard_vm9cwy.png"
]

sports.each_with_index do |sport, i|
  Sport.create(name: sport, image: sports_image[i])
end

puts "#{Sport.count} sports seeded"
