Rails.application.routes.draw do
  resources :messages
  get '/messages', to: 'root#index'
  root 'root#index'
end
