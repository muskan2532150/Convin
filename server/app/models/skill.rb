class Skill < ApplicationRecord
    validates :name, presence: true

    has_many :project_skills
    has_many :projects, through: :project_skills
end
