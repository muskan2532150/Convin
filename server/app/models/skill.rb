class Skill < ApplicationRecord
    validates :name, presence: true

    has_many_belongs_to_many :projects
end
