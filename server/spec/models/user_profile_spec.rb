require 'rails_helper'

RSpec.describe UserProfile, type: :model do
  before(:each) do
    @first_user = User.new(name: 'mike benson', email: 'mike@benson', password: 'password', profile_pic: 'profile.png')
    @first_userprofile = UserProfile.new(headline: 'headline1', summary: 'egxdmikebenson', education: 'school1',user:@first_user)
  end

  context 'UserProfile model validations' do
    it 'is valid with valid attributes' do
      expect(@first_userprofile).to be_valid
    end

    it 'is not valid for headline length greater than 80' do
      @first_userprofile.headline = 'fgjhhdgjv fgesj hghghhhffhcgfcgghfhgfhgfjjjhhjdg vfyd gjcgsxxdg h sggsx gd cvkfhcjv xdjxhfhgghfhghgfgjfjf'
      expect(@first_userprofile).to_not be_valid
    end
  end
end