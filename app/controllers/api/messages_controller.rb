class Api::MessagesController < ApplicationController
  before_action :set_post

  def index
    render json: @posts.messages.all
  end

  def create
    message = current_user.messages.new(message_params)
    if message.save
      render json: message
    else
      render json: {errors: message.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    @message.destroy
  end

  def update
    if @message.update(message_params)
      render json: current_user.message, notice: "Message Updated"
    else
      render json: {errors: message.errors.full_messages }, status: :bad_request
    end
  end

  private
    def set_post
      @message = Message.find(params[:messages_id])
    end

  def message_params
      # { post: { name: 'JavaScript' } }
      params.require(:message).permit(:comment, :post_id)
    end


end
