class Api::MessagesController < ApplicationController
  def all_messages
    post = Post.find
    render json: post.messages.all
  end

  def create
    post = Post.find(params(:post_id))
    messages = current_user.messages.new(messages_params)
    messages.post_id = post.id
    if message.save
      MessageBus.publish "/chat_channel/#{:post_id}", { comment: messages.comment }
    else
      render json: { error: 'Error creating message' }, status: :bad_request
    end
  end

  private
    def chat_message_params
      # { chat_message: { email: 'jake@test.com', body: 'test' } }
      params.require(:messages).permit(:comment)
    end
end
