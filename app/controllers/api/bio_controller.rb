class Api::BioController < ApplicationController
  before_action :set_bio

  def show
    render json: @bio
  end

  def update
    if @bio.update(bio_params)
      render json: @bio
    else
      render json: { errors: @bio.errors }, status: :unprocessable_entity
    end
  end

  private
    def set_bio
      @bio = current_user.bio
    end

    def bio_params
      # { bio: { body: 'hello' } }
      params.require(:bio).permit(:name, :age, :zip, :gender)
    end
end
