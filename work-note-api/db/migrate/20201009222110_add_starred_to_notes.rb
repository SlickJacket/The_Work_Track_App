class AddStarredToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :starred, :bool
  end
end
