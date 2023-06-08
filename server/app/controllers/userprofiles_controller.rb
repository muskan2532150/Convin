class UserprofilesController < ApplicationController
    attr_reader :userprofile_params,:userprofile_find
    before_action :userprofile_find, only: [:show,:update,:destroy]

    def index
        @profile = UserProfile.all
        render json: @profile
    end

    def show
        render json: @profile
    end

    def create
        @profile = UserProfile.new(userprofile_params)
        if @profile.save
            render json: {message: "Record created successfully", status: :ok }
        else
            render json: {error: @profile.errors.full_message}
        end
    end

    def destroy
        if @profile.destroy
            render json: {message: "Record destroy successfully", status: :ok }
        else
            render json: {error: @profile.errors.full_message}
        end 
    end

    def update
        if @profile.update(userprofile_params)
            render json: {message: "Record updated successfully", status: :ok }
        else
            render json: {error: @profile.errors.full_message}
        end
    end

    private

    def userprofile_find
        @profile = UserProfile.find(params[:id])
    end

    def userprofile_params
        params.require(:userprofile).permit(:headline,:summary,:education)
    end
end
