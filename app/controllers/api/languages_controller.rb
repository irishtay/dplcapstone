class Api::LanguagesController < ApplicationController
  before_action :set_language, only: [:update, :destroy]

  def index
    paginate json: current_user.languages
  end

  def create
    language = current_user.languages.new(language_params)
    if language.save
      render json: language
    else
      render json: { errors: language.errors.full_messages }, status: :bad_request
    end
  end

  def update
    if @language.update(language_params)
      render json: @language
    else
      render json: { errors: @language.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    @language.destroy
  end

  private
    def set_language
      @language = current_user.languages.find(params[:id])
    end

    def language_params
      # { language: { name: 'JavaScript' } }
      params.require(:language).permit(:name)
    end
end
