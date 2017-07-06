Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    get 'bio', to: 'bio#show'
    put 'bio', to: 'bio#update'
    get 'sports/index'
    # resources :bio, only: [:show, :update]
    resources :user_sports, only: [:index, :destroy, :create]
    get 'user_post', to: 'posts#user_posts'
    resources :posts do
      resources :messages
    end
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
