require 'rails_helper'

RSpec.describe Skill, type: :model do
  before(:each) do
    @first_skill = Skill.new(name: 'HTML')
  end

  context 'Skill model validations' do
    it 'is valid with valid attributes' do
      expect(@first_skill).to be_valid
    end

    it 'is not valid without a name' do
      @first_skill.name = nil
      expect(@first_skill).to_not be_valid
    end
  end
end
