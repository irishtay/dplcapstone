class Api::PhotosController < ApplicationController
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
    # TODO: should go to Cloudinary and delete the photo
    current_user.bio.update(image_url: '')
    render json: current_user.bio
  end
end
