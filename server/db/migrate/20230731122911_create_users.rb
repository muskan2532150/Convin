class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :name
      t.string :profile_pic
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
