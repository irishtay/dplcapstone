Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    get 'bio', to: 'bio#show'
    put 'bio', to: 'bio#update'
    # resources :bio, only: [:show, :update]
    resources :languages, except: :show
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
