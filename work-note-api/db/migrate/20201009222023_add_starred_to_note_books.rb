class AddStarredToNoteBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :note_books, :starred, :bool
  end
end
