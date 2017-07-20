class Api::PhotosController < ApplicationController
  def index
    render json: Photo.all
  end

  def create
    auth = {
      cloud_name: ENV['CLOUD_NAME'],
      api_key: ENV['API_KEY'],
      api_secret: ENV['API_SECRET']
    }

    photo_name = params.keys.first
    photo = params[photo_name]

    cloud_photo = Cloudinary::Uploader.upload(photo, auth)
    photo = Photo.create!(url: cloud_photo['url'])
    #update bio image url
    # send back the bio to actions
    render json: photo
  end
end
