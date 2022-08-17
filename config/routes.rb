Rails.application.routes.draw do
  root to: "pages#index"
  get :index, to: "pages#index"
  get :about, to: "pages#about"
  get :fintrac, to: "pages#fintrac"
  get :waveaccounting, to: "pages#waveaccounting"
  get :skillmaster, to: "pages#skillmaster"
  get :wordguru, to: "pages#wordguru"
	get :comingsoon, to: "pages#comingsoon"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
