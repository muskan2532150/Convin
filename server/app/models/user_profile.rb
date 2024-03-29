class UserProfile < ApplicationRecord
    validates :headline, length:{maximum: 80}
    validates :summary, length:{maximum: 300}

    belongs_to :user
end
