class Comment < ApplicationRecord
    validates :content, presence: true

    belong_to :project
end
