class Post < ApplicationRecord
  belongs_to :user
  has_many :messages
  before_save :find_coords


  def find_coords
    address = "#{self.street_address}, #{self.city}, #{self.state}, #{self.zip}"
    coords = Geocoder.coordinates(address)
    self.lat = coords.first
    self.long = coords.last
  end

end
