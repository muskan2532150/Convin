class ProjectSkill < ApplicationRecord
    belongs_to :Project
    belongs_to :skill
end
