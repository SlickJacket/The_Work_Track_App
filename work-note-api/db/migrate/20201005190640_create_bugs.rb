class CreateBugs < ActiveRecord::Migration[6.0]
  def change
    create_table :bugs do |t|
      t.string :title
      t.string :description
      t.string :priority
      t.string :bug_status
      t.belongs_to :bug_book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
