class Post < ApplicationRecord
    validates :content, presence: true

    has_many :likes, dependent: :destroy
    has_many :comments, dependent: :destroy
end
