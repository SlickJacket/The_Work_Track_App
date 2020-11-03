Rails.application.routes.draw do
  resources :bug_comments
  resources :cards
  resources :users
  resources :project_folders
  resources :note_books
  resources :notes
  resources :bug_books
  resources :bugs
  post '/projects', to: 'project_folders#create'
  get '/projects', to: 'project_folders#index'
  post '/login', to: 'auth#login'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
end
