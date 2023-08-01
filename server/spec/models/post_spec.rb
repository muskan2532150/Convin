require 'rails_helper'

RSpec.describe Post, type: :model do
  before(:each) do
    @first_post = Post.new(content: 'mike benson',image: 'profile.png')
  end

  context 'Post model validations' do
    it 'is valid with valid attributes' do
      expect(@first_post).to be_valid
    end

    it 'is not valid without a content' do
      @first_post.content = nil
      expect(@first_post).to_not be_valid
    end
  end
end
