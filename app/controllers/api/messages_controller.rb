class Api::MessagesController < ApplicationController
  # before_action :set_post

  def index
    post = Post.find(params[:post_id])
    render json: post.messages.all
  end

  def create
    post = Post.find(params[:post_id])
    message = current_user.message.new(message_params)
    message.post_id = post.id
    if message.save
      MessageBus.publish "/chat_channel/#{:message.post_id}", { comment: messages.comment }
    else
      render json: { error: 'Error creating message' }, status: :bad_request
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
    # def set_post
    #   @message = Message.find(params[:messages_id])
    # end

  def message_params
      # { post: { name: 'JavaScript' } }
      params.require(:message).permit(:comment, :post_id)
  end


end
