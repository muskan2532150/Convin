class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects, id: :uuid do |t|
      t.string :name
      t.string :url
      t.string :des
      t.string :img

      t.timestamps
    end
  end
end
