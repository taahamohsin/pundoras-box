Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "application#index"
  resources :jokes
  resources :users
  resources :ratings
  resources :rating_definitions, path: 'rating-definitions'
end
