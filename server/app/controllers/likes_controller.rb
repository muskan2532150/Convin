class LikesController < ApplicationController
    attr_reader :like_params,:like_find
    before_action :like_find, only: [:destroy]
    
    def index
        @like = Like.all
        render json: @like
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render json: {message: "Record created successfully", status: :ok }
        else
            render json: {error: @like.errors.full_message}
        end
    end

    def destroy
        if @like.destroy
            render json: {message: "Record destroy successfully", status: :ok }
        else
            render json: {error: @like.errors.full_message}
        end 
    end

    private

    def like_find
        @like = Like.find(params[:id])
    end

    def like_params
        params.require(:like).permit()
    end
end
