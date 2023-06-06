class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles, id: :uuid do |t|
      t.string :headline
      t.string :summary
      t.string :education

      t.timestamps
    end
  end
end
