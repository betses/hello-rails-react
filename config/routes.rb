Rails.application.routes.draw do
  get 'messages/index'
  resources :messages
  get '/message', to: 'root#index'
  root 'root#index'

end