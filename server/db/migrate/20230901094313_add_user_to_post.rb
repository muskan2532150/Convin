class AddUserToPost < ActiveRecord::Migration[7.0]
  def change
    add_reference :posts, :user, type: :uuid, foreign_key: true 
  end
end
