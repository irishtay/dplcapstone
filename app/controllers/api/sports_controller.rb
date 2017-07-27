class Api::SportsController < ApplicationController
  before_action :set_sport, only: [:show, :update, :destroy]

  def index
    render json: Sport.all.order(name: :asc)
  end

  def show
    render json: @sport
  end

  def create
    sport = Sport.create(sport_params)
    if sport.save
      render json: sport
    else
      render json: { errors: sport.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @sport.update(sport_params)
      render json: @sport
    else
      render json: { errors: @sport.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @sport.destroy
  end

  private
    def set_sport
      @sport = Sport.find(params[:id])
    end

    def sport_params
      params.require(:sport).permit(
        :name, :image
      )
    end

end
