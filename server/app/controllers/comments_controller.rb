class CommentsController < ApplicationController
    attr_reader :comment_params,:comment_find
    before_action :comment_find, only: [:show,:update,:destroy]
    def index
        @comment = Comment.all
        render json: @comment
    end

    def show
        render json: @comment
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render json: {message: "Record created successfully", status: :ok }
        else
            render json: {error: @comment.errors.full_message}
        end
    end

    def destroy
        if @comment.destroy
            render json: {message: "Record destroy successfully", status: :ok }
        else
            render json: {error: @comment.errors.full_message}
        end 
    end

    def update
        if @comment.update(comment_params)
            render json: {message: "Record updated successfully", status: :ok }
        else
            render json: {error: @comment.errors.full_message}
        end
    end

    private

    def comment_find
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.require(:comment).permit(:content)
    end
end
