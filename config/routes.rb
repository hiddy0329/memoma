Rails.application.routes.draw do
  root to: 'posts#index'
  get 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
  # resources 'posts', only: :index
end
