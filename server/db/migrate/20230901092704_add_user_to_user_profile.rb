class AddUserToUserProfile < ActiveRecord::Migration[7.0]
  def change
    add_reference :user_profiles, :user, type: :uuid, foreign_key: true 
  end
end
