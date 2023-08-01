class Project < ApplicationRecord
    validates :name, presence: true
    validates :des, presence: true, length: {maximum: 70}
    validates :url, presence: true
end
