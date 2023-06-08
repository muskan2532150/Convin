class PostsController < ApplicationController
    attr_reader :post_params,:post_find
    before_action :post_find, only: [:show,:update,:destroy]
    def index
        @post = Post.all
        render json: @post
    end

    def show
        render json: @post
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render json: {message: "Record created successfully", status: :ok }
        else
            render json: {error: @post.errors.full_message}
        end
    end

    def destroy
        if @post.destroy
            render json: {message: "Record destroy successfully", status: :ok }
        else
            render json: {error: @post.errors.full_message}
        end 
    end

    def update
        if @post.update(post_params)
            render json: {message: "Record updated successfully", status: :ok }
        else
            render json: {error: @post.errors.full_message}
        end
    end

    private

    def post_find
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:content,:image)
    end
end
