class AddTrashToBugs < ActiveRecord::Migration[6.0]
  def change
    add_column :bugs, :trash, :bool
  end
end
