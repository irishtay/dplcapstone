class Api::MessagesController < ApplicationController
  before_action :set_post

  def index
    render json: @posts.messages.all
  end

  def create
  end

  def destroy
  end

  def update
  end

  private
    def set_post
      @post = Post.find(params[:posts_id])
    end


end
