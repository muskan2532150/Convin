class ProjectsController < ApplicationController
    attr_reader :project_params,:project_find
    before_action :project_find, only: [:show,:update,:destroy]

    def index
        @project = Project.all
        render json: @project
    end

    def show
        render json: @project
    end

    def create
        @project = Project.new(project_params)
        if @project.save
            render json: {message: "Record created successfully", status: :ok }
        else
            render json: {error: @project.errors.full_message}
        end
    end

    def destroy
        if @project.destroy
            render json: {message: "Record destroy successfully", status: :ok }
        else
            render json: {error: @project.errors.full_message}
        end 
    end

    def update
        if @project.update(project_params)
            render json: {message: "Record updated successfully", status: :ok }
        else
            render json: {error: @project.errors.full_message}
        end
    end

    private

    def project_find
        @project = Project.find(params[:id])
    end

    def project_params
        params.require(:project).permit(:name,:url,:des,:img)
    end
end
