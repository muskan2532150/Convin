class UsersController < ApplicationController
    attr_reader :user_params,:user_find
    before_action :user_find, only: [:show,:update,:destroy]
    def index
        @user = User.all
        render json: @user
    end

    def show
        render json: @user
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render json: {message: "Record created successfully", status: :ok }
        else
            render json: {error: @user.errors.full_message}
        end
    end

    def destroy
        if @user.destroy
            render json: {message: "Record destroy successfully", status: :ok }
        else
            render json: {error: @user.errors.full_message}
        end 
    end

    def update
        if @user.update(user_params)
            render json: {message: "Record updated successfully", status: :ok }
        else
            render json: {error: @user.errors.full_message}
        end
    end

    private

    def user_find
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:name,:email,:password)
    end
end
