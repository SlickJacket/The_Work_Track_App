class AddTrashToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :trash, :bool
  end
end
