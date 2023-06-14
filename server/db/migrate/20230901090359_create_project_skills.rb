class CreateProjectSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :project_skills, id: :uuid do |t|
      t.references :project, type: :uuid, foreign_key:true
      t.references :skill,type: :uuid, foreign_key:true

      t.timestamps
    end
  end
end
