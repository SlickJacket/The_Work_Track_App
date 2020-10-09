class AddTrashToNoteBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :note_books, :trash, :bool
  end
end
