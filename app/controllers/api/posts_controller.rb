class Api::PostsController < ApplicationController
  before_action :set_post, only: [:destroy, :update]

  def index
    render json: Post.all
  end

  def sport_posts
    sport = Sport.find(params[:sport_id])
    render json: sport.posts.all
  end

  def user_posts
    render json: current_user.posts
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: {errors: post.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    @post.destroy
  end

  def update
    binding.pry
    if @post.update(post_params)
      render json: @post, notice: "Post Updated"
    else
      render json: {errors: post.errors.full_messages }, status: :bad_request
    end
  end

  private
    def set_post
      @post = current_user.posts.find(params[:id])
    end

    def post_params
      params.require(:post).permit(
        :title, :post_body, :state,
        :sport_id, :zip, :street_address, :city
      )
    end
end
