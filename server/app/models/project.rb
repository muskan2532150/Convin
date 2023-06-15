class Project < ApplicationRecord
    validates :name, presence: true
    validates :des, presence: true, length: {maximum: 70}
    validates :url, presence: true

    has_many :project_skills
    has_many :skills, through: :project_skills
end
