Rails.application.routes.draw do
  resources :messages
  get '/message', to: 'root#index'
  root 'root#index'

end