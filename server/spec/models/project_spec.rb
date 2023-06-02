require 'rails_helper'

RSpec.describe Project, type: :model do
  before(:each) do
    @first_project = Project.new(name: 'Project1', des: "first_project", url:"gft.com",img:"hjkhjj.png")
  end

  context 'Project model validations' do
    it 'is valid with valid attributes' do
      expect(@first_project).to be_valid
    end

    it 'is not valid without a name' do
      @first_project.name = nil
      expect(@first_project).to_not be_valid
    end

    it 'is not valid without a des' do
      @first_project.des = nil
      expect(@first_project).to_not be_valid
    end

    it 'is not valid without a url' do
      @first_project.url = nil
      expect(@first_project).to_not be_valid
    end
  end
end
