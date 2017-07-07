class Api::LocationController < ApplicationController
  def show
    # GET /api/location - { address: 'DevPoint Labs' }
    render json: Geocoder.coordinates(params[:address])
  end
end
