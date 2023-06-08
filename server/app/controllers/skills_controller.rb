class SkillsController < ApplicationController
    attr_reader :skill_params,:skill_find
    before_action :skill_find, only: [:show,:update,:destroy]
    def index
        @skill = Skill.all
        render json: @skill
    end

    def show
        render json: @skill
    end

    def create
        @skill = Skill.new(skill_params)
        if @skill.save
            render json: {message: "Record created successfully", status: :ok }
        else
            render json: {error: @skill.errors.full_message}
        end
    end

    def destroy
        if @skill.destroy
            render json: {message: "Record destroy successfully", status: :ok }
        else
            render json: {error: @skill.errors.full_message}
        end 
    end

    def update
        if @skill.update(skill_params)
            render json: {message: "Record updated successfully", status: :ok }
        else
            render json: {error: @skill.errors.full_message}
        end
    end

    private

    def skill_find
        @skill = Skill.find(params[:id])
    end

    def skill_params
        params.require(:skill).permit(:name)
    end

end
