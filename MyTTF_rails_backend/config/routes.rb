# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do  
    namespace :api do
        resources :players do 
            resources :matches
        end
    end
end
