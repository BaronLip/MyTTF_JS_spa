class Api::MatchesController < ApplicationController

    def index
        matches = Match.all

        render json: matches, status: 200
    end

    def show
        match = Match.find_by(:id => params[:id])
        
        render json: match, status: 200
    end

    def create
        match = Match.create(match_params)
        
        render json: match, status: 200
    end

    def destroy
        match = Match.find_by(:id => params[:id])
        match.destroy

        render json: {matchId: match.id}
    end

    private

    def match_params
        params.require(:match).permit(:notes, :title, :player_id, :date)
    end

end
