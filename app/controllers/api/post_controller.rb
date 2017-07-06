class Api::PostController < ApplicationController

  def index
    render json: Post.all
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
    if @post.update(post_params)
      render json: current_user.post, notice: "Post Updated"
    else
      render json: {errors: post.errors.full_messages }, status: :bad_request
    end
  end

  private
    def set_post
      @post = current_user.posts.find(params[:id])
    end

    def post_params
      # { post: { name: 'JavaScript' } }
      params.require(:post).permit(:name)
    end
end
