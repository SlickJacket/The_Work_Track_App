class CreateBugBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :bug_books do |t|
      t.string :title
      t.belongs_to :project_folder, null: false, foreign_key: true

      t.timestamps
    end
  end
end
