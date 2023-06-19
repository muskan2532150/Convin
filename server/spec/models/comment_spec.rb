require 'rails_helper'

RSpec.describe Comment, type: :model do
  before(:each) do
    @post = Post.new(content: 'mike benson',image: 'profile.png')
    @first_comment = Comment.new(content: 'mikbensondcndjncvk',post: @post)
  end

  context 'Model validations' do
    it 'is valid with valid attributes' do
      expect(@first_comment).to be_valid
    end

    it 'is not valid without a content' do
      @first_comment.content = nil
      expect(@first_comment).to_not be_valid
    end
  end
end
