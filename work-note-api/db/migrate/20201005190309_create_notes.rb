class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :content
      t.belongs_to :note_book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
