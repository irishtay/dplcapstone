class Api::PhotosController < ApplicationController
  # TODO: BIO has many photos if you wanted your bios to be associated with photos
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
    # photo = Photo.create!(url: cloud_photo['url'])
    current_user.bio.image_url = cloud_photo['url']
    current_user.bio.save
    #update bio image url
    # send back the bio to actions
    render json: current_user.bio
  end

  def destroy
    # LATER: use the cloudinary gem to delete the photo
    Photo.find(params[:id]).destroy
  end
end
