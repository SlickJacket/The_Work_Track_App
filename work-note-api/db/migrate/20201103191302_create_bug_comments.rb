class CreateBugComments < ActiveRecord::Migration[6.0]
  def change
    create_table :bug_comments do |t|
      t.string :description
      t.belongs_to :bug, null: false, foreign_key: true

      t.timestamps
    end
  end
end
