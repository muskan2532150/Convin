class User < ApplicationRecord
    validates :name, presence: true, length:{maximum: 50}
    validates :password, presence: true, length:{maximum: 10}
    validates :email, presence: true

    has_one :user_profile, dependent: :destroy
    has_many :posts
end
