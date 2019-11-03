class Api::PlayersController < ApplicationController
    
    def index
        players = Player.all

        render json: players, status: 200
    end

    def show
        player = Player.find_by(:id => params[:id])
    
        render json: player, status: 200
    end

    def create
        player = Player.create(player_params)

        render json: player, status: 200
    end

    def destroy
        player = Player.find_by(:id => params[:id])
        player.destroy

        render json: {playerId: player.id}
    end

    private

    def player_params
        params.require(:player).permit(:body)
    end

end
