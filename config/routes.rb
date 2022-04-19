Rails.application.routes.draw do
  get 'posts', to: 'posts#index'
  # resources 'posts', only: :index
end
